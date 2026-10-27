"use client";

import Script from "next/script";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import styles from "./privacyControls.module.css";

const consentStorageKey = "nodus-cookie-consent-v1";
const consentLifetimeMs = 180 * 24 * 60 * 60 * 1000;
const configuredTagManagerId = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const tagManagerId =
  configuredTagManagerId && /^GTM-[A-Z0-9]+$/.test(configuredTagManagerId)
    ? configuredTagManagerId
    : undefined;
const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

interface ConsentChoice {
  necessary: true;
  analytics: boolean;
  updatedAt: number;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function isConsentChoice(value: unknown): value is ConsentChoice {
  if (typeof value !== "object" || value === null) return false;
  const choice = value as Partial<ConsentChoice>;
  return (
    choice.necessary === true &&
    typeof choice.analytics === "boolean" &&
    typeof choice.updatedAt === "number" &&
    choice.updatedAt <= Date.now() &&
    Date.now() - choice.updatedAt < consentLifetimeMs
  );
}

function readStoredChoice() {
  if (typeof window === "undefined") {
    return { choice: null, storageError: false, expired: false };
  }

  let storedConsent: string | null;
  try {
    storedConsent = localStorage.getItem(consentStorageKey);
  } catch {
    return { choice: null, storageError: true, expired: false };
  }

  if (!storedConsent) return { choice: null, storageError: false, expired: false };

  let parsedConsent: unknown;
  try {
    parsedConsent = JSON.parse(storedConsent);
  } catch {
    return { choice: null, storageError: false, expired: true };
  }

  if (isConsentChoice(parsedConsent)) {
    return { choice: parsedConsent, storageError: false, expired: false };
  }

  return { choice: null, storageError: false, expired: true };
}

function clearGoogleAnalyticsCookies() {
  const host = window.location.hostname;
  const rootDomain = host.split(".").slice(-2).join(".");
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim().split("=")[0]);

  for (const name of cookies) {
    if (!/^_(ga|gid|gat|gac)(_|$)/.test(name)) continue;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    if (rootDomain !== host) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${rootDomain}; SameSite=Lax`;
    }
  }
}

export default function PrivacyControls() {
  const [initialChoice] = useState(readStoredChoice);
  const [consent, setConsent] = useState<ConsentChoice | null>(initialChoice.choice);
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(initialChoice.choice?.analytics ?? false);
  const [storageError, setStorageError] = useState(initialChoice.storageError);
  const [tagError, setTagError] = useState(false);
  const [tagRequested, setTagRequested] = useState(false);
  const tagRequestedRef = useRef(false);
  const tagConsentInitialized = useRef(false);

  useEffect(() => {
    if (!initialChoice.expired) return;

    try {
      localStorage.removeItem(consentStorageKey);
    } catch {
      const timer = window.setTimeout(() => setStorageError(true), 0);
      return () => window.clearTimeout(timer);
    }
  }, [initialChoice.expired]);

  useEffect(() => {
    const openSettings = () => setSettingsOpen(true);
    window.addEventListener("hashchange", openSettings);
    if (window.location.hash === "#preferencias") openSettings();
    return () => {
      window.removeEventListener("hashchange", openSettings);
    };
  }, []);

  useEffect(() => {
    if (!hydrated || !tagManagerId) return;

    window.dataLayer = window.dataLayer ?? [];
    window.gtag =
      window.gtag ??
      ((...args: unknown[]) => {
        window.dataLayer.push(args);
      });

    if (!tagConsentInitialized.current) {
      window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      tagConsentInitialized.current = true;
    }

    if (consent?.analytics) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      if (!tagRequestedRef.current) {
        window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
        tagRequestedRef.current = true;
        setTagRequested(true);
        setTagError(false);
      }
    } else if (tagRequestedRef.current) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      clearGoogleAnalyticsCookies();
    }
  }, [consent?.analytics, hydrated]);

  const saveChoice = useCallback((allowAnalytics: boolean) => {
    const choice: ConsentChoice = {
      necessary: true,
      analytics: allowAnalytics,
      updatedAt: Date.now(),
    };

    try {
      localStorage.setItem(consentStorageKey, JSON.stringify(choice));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }

    setConsent(choice);
    setAnalyticsEnabled(allowAnalytics);
    setSettingsOpen(false);
  }, []);

  return (
    <>
      {tagRequested && tagManagerId && (
        <Script
          id="nodus-google-tag-manager"
          src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(tagManagerId)}`}
          strategy="afterInteractive"
          onError={() => setTagError(true)}
        />
      )}

      <div className={styles.controls}>
        {hydrated && consent === null && (
          <section className={styles.banner} aria-labelledby="cookie-title">
            <h2 id="cookie-title">Tu privacidad importa</h2>
            <p>
              Al guardar tu elección, usamos almacenamiento esencial para recordarla. La analítica opcional
              de Google solo se activa con tu permiso. Podés aceptar, rechazar o configurar.
            </p>
            <div className={styles.policyLinks}>
              <Link href="/privacidad">Privacidad</Link>
              <Link href="/cookies">Política de cookies</Link>
            </div>
            {settingsOpen && (
              <div className={styles.settings}>
                <p><strong>Esenciales</strong> — necesarias para recordar y aplicar tu elección. Siempre activas.</p>
                <label className={styles.toggle}>
                  <input
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    type="checkbox"
                  />
                  <span><strong>Analítica</strong> — Google Analytics 4 mediante Google Tag Manager, solo si se configura y das permiso.</span>
                </label>
              </div>
            )}
            <div className={styles.actions}>
              {settingsOpen ? (
                <button className={styles.secondaryButton} onClick={() => saveChoice(analyticsEnabled)} type="button">Guardar selección</button>
              ) : (
                <button className={styles.textButton} onClick={() => setSettingsOpen(true)} type="button">Configurar</button>
              )}
              <button className={styles.secondaryButton} onClick={() => saveChoice(false)} type="button">Rechazar opcionales</button>
              <button className={styles.primaryButton} onClick={() => saveChoice(true)} type="button">Aceptar analítica</button>
            </div>
          </section>
        )}
        {hydrated && consent !== null && settingsOpen && (
          <section className={styles.banner} aria-labelledby="settings-title">
            <h2 id="settings-title">Preferencias de cookies</h2>
            <p>Podés cambiar o retirar tu consentimiento cuando quieras desde este acceso.</p>
            <div className={styles.settings}>
              <p><strong>Esenciales</strong> — necesarias para recordar y aplicar tu elección. Siempre activas.</p>
              <label className={styles.toggle}>
                <input
                  checked={analyticsEnabled}
                  onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                  type="checkbox"
                />
                <span><strong>Analítica</strong> — Google Analytics 4 mediante Google Tag Manager, solo si se configura y das permiso.</span>
              </label>
            </div>
            <div className={styles.actions}>
              <button className={styles.secondaryButton} onClick={() => saveChoice(analyticsEnabled)} type="button">Guardar selección</button>
              <button className={styles.secondaryButton} onClick={() => saveChoice(false)} type="button">Rechazar opcionales</button>
            </div>
          </section>
        )}
        {hydrated && (storageError || tagError || (configuredTagManagerId && !tagManagerId)) && (
          <p className={styles.error} role="status">
            {storageError && "No pudimos guardar tu preferencia en este navegador; solo se aplicará durante esta sesión. "}
            {tagError && "No se pudo cargar Google Tag Manager. "}
            {configuredTagManagerId && !tagManagerId && "El ID de Google Tag Manager no es válido; la analítica permanece desactivada."}
          </p>
        )}
        <button
          className={styles.manageButton}
          onClick={() => setSettingsOpen((open) => !open)}
          type="button"
        >
          Configurar privacidad
        </button>
        <nav className={styles.globalLinks} aria-label="Políticas del sitio">
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
        </nav>
      </div>
    </>
  );
}
