"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import messages from "../../messages/es.json";
import { contact } from "@/data/contact";
import styles from "./page.module.css";
import formStyles from "./ContactForm.module.css";

const copy = messages.ContactForm;
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() || "/contacto.php";
const configured = true;
type Status = "idle" | "sending" | "success" | "error" | "timeout" | "rateLimit" | "invalid";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const inFlight = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || !configured) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const params = new URLSearchParams({
      name: value("name"),
      organization: value("organization"),
      email: value("email"),
      phone: value("phone"),
      topic: value("topic"),
      message: value("message"),
      website: value("website"),
    });

    if (!form.reportValidity() || value("website") || !params.get("name") || !params.get("organization") ||
      !params.get("message") || !copy.topics.includes(params.get("topic") ?? "")) {
      setStatus("invalid");
      return;
    }

    inFlight.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
        signal: controller.signal,
      });
      if (!response.ok) {
        setStatus(response.status === 429 ? "rateLimit" : response.status === 400 || response.status === 422 ? "invalid" : "error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus(error instanceof Error && error.name === "AbortError" ? "timeout" : "error");
    } finally {
      clearTimeout(timeout);
      inFlight.current = false;
    }
  }

  const errorStatus = status === "error" || status === "timeout" || status === "rateLimit";

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <div className={styles.formHeading}><span>01</span><p>{copy.heading}</p></div>
      <fieldset className={formStyles.fields} disabled={status === "sending" || !configured}>
        <div className={styles.formRow}>
          <label>{copy.name}<input type="text" name="name" autoComplete="name" required maxLength={120} placeholder={copy.namePlaceholder} /></label>
          <label>{copy.organization}<input type="text" name="organization" autoComplete="organization" required maxLength={160} placeholder={copy.organizationPlaceholder} /></label>
        </div>
        <div className={styles.formRow}>
          <label>{copy.email}<input type="email" name="email" autoComplete="email" required maxLength={254} placeholder={copy.emailPlaceholder} /></label>
          <label>{copy.phone}<input type="tel" name="phone" autoComplete="tel" maxLength={50} placeholder={copy.phonePlaceholder} /></label>
        </div>
        <label>{copy.topic}<select name="topic" defaultValue="" required><option value="" disabled>{copy.topicPlaceholder}</option>{copy.topics.map((topic) => <option value={topic} key={topic}>{topic}</option>)}</select></label>
        <label>{copy.message}<textarea name="message" required maxLength={5000} placeholder={copy.messagePlaceholder} rows={4} /></label>
        <div className={formStyles.honeypot} aria-hidden="true"><label>{copy.website}<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>
      </fieldset>
      <p className={formStyles.privacy}>{copy.privacy} <Link href="/privacidad">{copy.privacyLink}</Link>.</p>
      <div className={styles.formFooter}>
        <p>{copy.footer}</p>
        <button className={formStyles.submit} type="submit" disabled={!configured || status === "sending"}>{status === "sending" ? copy.sending : copy.submit} <span aria-hidden="true">↗</span></button>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {!configured ? <p className={formStyles.feedback}>{copy.unavailable} <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p> :
          status === "success" ? <p className={formStyles.feedback}>{copy.success}</p> :
          status === "invalid" ? <p className={formStyles.feedback}>{copy.invalid}</p> :
          errorStatus ? <p className={formStyles.feedback}>{copy[status]} <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p> : null}
      </div>
    </form>
  );
}
