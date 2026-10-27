export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  intro: string;
  approach: string;
  deliverables: string[];
  outcomes: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "master-plans-portuarios",
    number: "01",
    title: "Master plans portuarios",
    shortDescription: "Visión, escenarios de demanda y hojas de ruta para orientar la evolución de cada puerto.",
    intro: "Diseñamos planes maestros que conectan la estrategia portuaria con el territorio, la infraestructura disponible y las oportunidades reales de crecimiento.",
    approach: "Partimos de una lectura integral del sistema: cargas, accesos, actores, restricciones ambientales y capacidad institucional. A partir de esa base, construimos escenarios comparables y una secuencia de decisiones que pueda sostenerse en el tiempo.",
    deliverables: ["Diagnóstico estratégico y territorial", "Proyección de demanda y escenarios de crecimiento", "Alternativas de infraestructura y operación", "Hoja de ruta priorizada con etapas e indicadores"],
    outcomes: [
      { title: "Una dirección compartida", text: "El puerto cuenta con una visión clara para alinear autoridades, operadores y comunidad logística." },
      { title: "Inversiones con criterio", text: "Las prioridades de infraestructura se ordenan según impacto, factibilidad y horizonte de demanda." },
    ],
  },
  {
    slug: "concesiones-ppp-y-licitaciones",
    number: "02",
    title: "Concesiones, PPP y licitaciones",
    shortDescription: "Estructuración de modelos de gestión y contratos para proyectos portuarios viables y transparentes.",
    intro: "Acompañamos a autoridades y organizaciones en el diseño de procesos de concesión, asociaciones público-privadas y licitaciones vinculadas a infraestructura portuaria.",
    approach: "Integramos análisis institucional, económico, operativo y contractual para definir qué modelo de gestión responde mejor a los objetivos públicos y a las condiciones del mercado regional.",
    deliverables: ["Evaluación de modelos de gestión y alternativas contractuales", "Análisis de riesgos y responsabilidades", "Estructuración económica y matriz de ingresos", "Bases técnicas y acompañamiento del proceso licitatorio"],
    outcomes: [
      { title: "Reglas previsibles", text: "Los contratos ordenan responsabilidades, incentivos y mecanismos de control desde el inicio." },
      { title: "Proyectos bancables", text: "La estructuración mejora la calidad de las propuestas y reduce incertidumbres para inversores y autoridades." },
    ],
  },
  {
    slug: "gobernanza-y-tarifas",
    number: "03",
    title: "Gobernanza y tarifas",
    shortDescription: "Reglas, roles y esquemas tarifarios para ordenar el sistema y mejorar su sostenibilidad.",
    intro: "Ayudamos a construir marcos de gobernanza que hagan más claras las decisiones, coordinen intereses y fortalezcan la capacidad de gestión portuaria.",
    approach: "Analizamos competencias, flujos de decisión, costos y relaciones entre los actores del sistema. Luego diseñamos alternativas que combinen eficiencia operativa, sostenibilidad financiera y objetivos de política pública.",
    deliverables: ["Mapa institucional y análisis de roles", "Diseño de mecanismos de coordinación", "Modelos de costos y esquemas tarifarios", "Recomendaciones para regulación y control"],
    outcomes: [
      { title: "Decisiones mejor coordinadas", text: "Cada actor entiende su responsabilidad y los espacios donde debe construirse consenso." },
      { title: "Tarifas defendibles", text: "Los esquemas se apoyan en costos, servicio y objetivos explícitos, no en fórmulas aisladas." },
    ],
  },
  {
    slug: "optimizacion-operativa-de-terminales",
    number: "04",
    title: "Optimización operativa de terminales",
    shortDescription: "Diagnóstico de productividad, capacidad y procesos para mejorar resultados medibles.",
    intro: "Convertimos la observación de la operación cotidiana en decisiones concretas sobre capacidad, productividad y uso de recursos.",
    approach: "Trabajamos junto con los equipos de la terminal para entender el flujo completo de la operación, identificar cuellos de botella y separar los problemas de diseño de aquellos que requieren gestión o inversión.",
    deliverables: ["Diagnóstico de procesos y niveles de servicio", "Análisis de capacidad, productividad y utilización", "Identificación de cuellos de botella", "Plan de mejora con métricas y responsables"],
    outcomes: [
      { title: "Más previsibilidad", text: "La operación se organiza alrededor de indicadores que permiten anticipar desvíos y tomar decisiones." },
      { title: "Mejor uso de activos", text: "Las mejoras priorizan el rendimiento de la infraestructura existente antes de sumar complejidad." },
    ],
  },
  {
    slug: "transformacion-digital-y-pcs",
    number: "05",
    title: "Transformación digital y PCS",
    shortDescription: "Arquitecturas digitales para integrar actores, simplificar trámites y hacer circular mejor los datos.",
    intro: "Diseñamos estrategias digitales que responden a problemas concretos del ecosistema portuario y no a la incorporación aislada de tecnología.",
    approach: "Mapeamos procesos, información y responsabilidades entre autoridades, terminales, transportistas y organismos de control. Con esa visión, definimos una evolución gradual hacia sistemas interoperables y una comunidad portuaria más coordinada.",
    deliverables: ["Mapa de procesos y necesidades de información", "Modelo conceptual de PCS e interoperabilidad", "Roadmap tecnológico y de gobernanza de datos", "Recomendaciones de implementación y adopción"],
    outcomes: [
      { title: "Menos fricción", text: "La integración de información reduce duplicaciones, tiempos de espera y tareas manuales." },
      { title: "Datos para decidir", text: "Los equipos obtienen una base común para monitorear operaciones y anticipar problemas." },
    ],
  },
  {
    slug: "sostenibilidad-y-green-ports",
    number: "06",
    title: "Sostenibilidad y green ports",
    shortDescription: "Eficiencia, transición energética y gestión ambiental adaptadas a cada realidad portuaria.",
    intro: "Acompañamos la transición hacia puertos más eficientes y resilientes, con objetivos ambientales conectados con la operación y la inversión.",
    approach: "Evaluamos consumos, emisiones, riesgos climáticos, infraestructura y capacidades de gestión para construir una agenda ambiental viable, con prioridades que puedan medirse y financiarse.",
    deliverables: ["Línea de base ambiental y energética", "Identificación de riesgos y oportunidades de descarbonización", "Plan de eficiencia y transición energética", "Indicadores, metas y esquema de seguimiento"],
    outcomes: [
      { title: "Acciones priorizadas", text: "La agenda ambiental se traduce en proyectos concretos y compatibles con la operación." },
      { title: "Resiliencia a largo plazo", text: "El puerto incorpora criterios ambientales y climáticos a sus decisiones de infraestructura." },
    ],
  },
  {
    slug: "regulacion-y-politicas-publicas",
    number: "07",
    title: "Regulación y políticas públicas",
    shortDescription: "Análisis normativo y diseño de políticas para acompañar el desarrollo portuario regional.",
    intro: "Traducimos los desafíos del sistema portuario en marcos regulatorios y políticas públicas que puedan aplicarse, evaluarse y actualizarse.",
    approach: "Combinamos revisión normativa, análisis institucional, evidencia comparada y diálogo con los actores involucrados para formular recomendaciones ajustadas al contexto argentino y latinoamericano.",
    deliverables: ["Diagnóstico regulatorio y matriz de competencias", "Análisis comparado de experiencias regionales", "Propuestas normativas y de política pública", "Plan de implementación y evaluación"],
    outcomes: [
      { title: "Regulación con propósito", text: "Las reglas se diseñan para resolver problemas concretos y mejorar la calidad del servicio." },
      { title: "Cambios aplicables", text: "Las recomendaciones contemplan capacidades institucionales, transición y mecanismos de seguimiento." },
    ],
  },
  {
    slug: "capacitacion-y-talento-portuario",
    number: "08",
    title: "Capacitación y talento portuario",
    shortDescription: "Formación aplicada para sostener nuevas capacidades dentro de las organizaciones.",
    intro: "Diseñamos programas de capacitación que conectan conocimiento técnico, desafíos de gestión y experiencia de los equipos que hacen funcionar el puerto.",
    approach: "Identificamos brechas de capacidades y construimos recorridos formativos con casos del propio sistema portuario. El objetivo es que el aprendizaje se convierta en mejores decisiones y prácticas cotidianas.",
    deliverables: ["Diagnóstico de capacidades y necesidades formativas", "Diseño de contenidos y recorridos de aprendizaje", "Talleres para equipos directivos y técnicos", "Evaluación de resultados y transferencia interna"],
    outcomes: [
      { title: "Equipos más autónomos", text: "El conocimiento queda instalado en la organización y no depende exclusivamente de consultores externos." },
      { title: "Aprendizaje conectado", text: "La formación trabaja sobre situaciones reales y acompaña los cambios que el puerto necesita implementar." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}
