export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  heroImage: string;
  tags: string[];
  body: string[];
  sections?: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "master-plan-portuario-decision",
    category: "Planificación",
    title: "Master plans portuarios: planificar para decidir, no para adivinar",
    excerpt:
      "Los puertos toman decisiones que pueden condicionar su operación durante décadas, pero lo hacen en un entorno en el que la información cambia constantemente. Por eso, una proyección única no debería definir por sí sola las obras, las concesiones ni el destino de un frente de agua.",
    author: "Diego Salom · Cofundador de NODUS",
    date: "2026-10-01",
    heroImage: "/images/blog/master-plan-portuario-decision.webp",
    tags: ["Planificación", "Infraestructura", "Estrategia"],
    body: [],
    sections: [
      {
        heading: "Escenarios en lugar de apuestas",
        paragraphs: [
          "Un master plan robusto no debería partir de una única hipótesis sobre el futuro. Necesita trabajar con escenarios diferentes: crecimiento, estancamiento, cambios en la composición de las cargas y transformaciones en las cadenas logísticas. Un puerto puede mantener volúmenes similares y, sin embargo, cambiar radicalmente su actividad: más contenedores, mayor participación de graneles, nuevas cargas vinculadas con proyectos energéticos o cambios en los corredores que abastecen al hinterland.",
          "Cada escenario debería traducirse en preguntas concretas de gestión: qué infraestructura resulta necesaria en todos los casos, qué superficie conviene preservar como reserva estratégica, qué inversiones pueden ejecutarse por etapas, qué activos pueden adaptarse y qué decisiones deberían esperar hasta contar con evidencia suficiente.",
          "Trabajar con escenarios no significa postergar inversiones. Significa establecer una secuencia: primero, las que sostienen la conectividad, la seguridad, la resiliencia y la capacidad operativa; después, las expansiones cuya conveniencia pueda vincularse con una demanda que efectivamente se esté verificando.",
        ],
      },
      {
        heading: "Del documento al sistema de decisiones",
        paragraphs: [
          "Una debilidad frecuente de los master plans es que terminan como documentos de referencia, pero no como herramientas de gestión. La diferencia está en los umbrales. En lugar de fijar que una nueva posición de atraque se construya en determinado año, el plan puede definir qué condiciones activarían esa decisión: nivel de ocupación, aumento sostenido de la demanda, tiempos de espera, restricciones de capacidad o cambios en las cargas.",
          "El mismo criterio puede aplicarse a patios, accesos, equipamiento, áreas logísticas y conexiones intermodales. Los indicadores no necesitan ser numerosos: necesitan ayudar a decidir. Utilización de muelle, espera, permanencia de carga, disponibilidad de patio y confiabilidad de los accesos pueden señalar cuándo revisar una hipótesis o activar una inversión.",
          "Con esos gatillos definidos de antemano, la organización deja de reaccionar ante cada cambio y empieza a gestionar con reglas conocidas.",
        ],
      },
      {
        heading: "Revisar el plan sin empezar de cero",
        paragraphs: [
          "La incertidumbre no significa que un master plan deba modificarse permanentemente. Significa que debe existir una estructura de seguimiento para contrastar las hipótesis originales con lo que ocurre. Eso requiere una gobernanza definida: indicadores, responsables, frecuencia de revisión y criterios para modificar la cartera de inversiones.",
          "La visión de largo plazo debe mantenerse estable en aquello que difícilmente pueda improvisarse después: accesos, suelo estratégico, condiciones de navegación, áreas de expansión y adaptación frente a riesgos climáticos. Las decisiones más reversibles, en cambio, deberían conservar margen para modificar su secuencia, escala o tecnología.",
          "Un buen master plan no elimina la incertidumbre. La incorpora dentro del proceso de decisión.",
        ],
      },
      {
        heading: "El suelo portuario: una decisión difícil de revertir",
        paragraphs: [
          "En los puertos consolidados, el suelo disponible es uno de los recursos más escasos y difíciles de recuperar. Un depósito, un estacionamiento o una operación de bajo valor pueden ocupar durante años un espacio que después resulte necesario para ampliar, incorporar equipamiento o desarrollar una operación logística de mayor impacto económico.",
          "Por eso, el suelo portuario no debería analizarse solamente por su utilización actual. El master plan debe identificar qué áreas tienen valor estratégico, cuáles pueden relocalizarse, qué actividades son compatibles con una eventual expansión y qué superficies conviene preservar como reserva.",
          "Mantener un área disponible puede parecer ineficiente en el corto plazo. Ocuparla sin visión de largo plazo puede generar una restricción mucho más costosa cuando aparezca la necesidad de expansión. En planificación portuaria, algunas decisiones sobre el suelo son prácticamente irreversibles.",
        ],
      },
      {
        heading: "El límite del puerto muchas veces está afuera",
        paragraphs: [
          "Un muelle eficiente no puede compensar indefinidamente un acceso vial congestionado, una conexión ferroviaria incompleta o una interfaz urbana conflictiva. El puerto no funciona como una infraestructura aislada: es un nodo dentro de una red logística. Su desempeño depende de las conexiones con el hinterland, los corredores de transporte, las áreas logísticas, los procedimientos aduaneros y la coordinación entre múltiples actores.",
          "Por eso, un master plan portuario debería involucrar también a quienes no administran directamente el puerto: municipios, organismos viales, operadores ferroviarios, autoridades aduaneras, terminales, transportistas y desarrolladores logísticos. Donde el puerto no tiene capacidad de decisión directa, necesita capacidad de coordinación.",
          "El master plan puede convertir problemas de conectividad dispersos entre distintos organismos en una agenda común de proyectos, prioridades y responsabilidades. La planificación deja así de concentrarse dentro del perímetro portuario y considera el sistema logístico del que el puerto forma parte.",
        ],
      },
      {
        heading: "Resiliencia: pensar en la continuidad operativa",
        paragraphs: [
          "El cambio climático no debería quedar limitado a un capítulo ambiental. Puede afectar cotas de diseño, drenajes, accesos, continuidad operativa, mantenimiento, seguros y vida útil de los activos. La cuestión no es predecir cada evento futuro, sino identificar vulnerabilidades, establecer niveles de servicio aceptables durante contingencias y priorizar los componentes cuya interrupción pueda comprometer el sistema.",
          "La resiliencia no debería evaluarse solo como un costo adicional de construcción. También hay que analizarla en términos de continuidad operativa, pérdida de ingresos, costos de interrupción, mantenimiento y capacidad de sostener el servicio ante escenarios adversos. La pregunta deja de ser cuánto cuesta construir una infraestructura más resistente y pasa a ser cuánto puede costar no hacerlo.",
        ],
      },
      {
        heading: "De la visión a una cartera ejecutable",
        paragraphs: [
          "El master plan adquiere verdadero valor cuando se traduce en una cartera de proyectos. Cada iniciativa debería tener un propósito claro, un responsable, dependencias identificadas, una estimación de costos, posibles fuentes de financiamiento y una condición concreta que justifique su inicio.",
          "Esto permite distinguir proyectos habilitantes, proyectos asociados al crecimiento de la demanda y proyectos que pueden permanecer en reserva. También ordena la conversación con autoridades, directorios, operadores e inversores. No todos los proyectos deben ejecutarse al mismo tiempo ni todas las decisiones tienen el mismo grado de urgencia o irreversibilidad.",
          "Un master plan no debería ser una apuesta sobre cómo será el puerto dentro de veinte años. Debería ser un sistema que permita decidir qué hacer hoy, qué preservar para mañana y qué señales esperar antes de comprometer la siguiente inversión. El futuro del comercio no está bajo control del puerto; estar preparado para responder cuando se haga visible sí es su responsabilidad.",
        ],
      },
    ],
  },
  {
    slug: "competitividad-portuaria-sistema",
    category: "Operación",
    title: "¿Qué hace competitivo a un puerto? Mucho más que infraestructura",
    excerpt:
      "La competitividad portuaria no depende únicamente de cuánto puede crecer un puerto, sino de cómo funciona el sistema que lo conecta con sus usuarios, su territorio y las cadenas logísticas.",
    author: "Diego Salom · Cofundador de NODUS",
    date: "2026-10-08",
    heroImage: "/images/blog/puerto-invisible-mala-operacion.webp",
    tags: ["Operación", "Competitividad", "Logística"],
    body: [],
    sections: [
      {
        heading: "La infraestructura es una condición, no el resultado",
        paragraphs: [
          "Cuando se habla de competitividad portuaria, la conversación suele empezar por la infraestructura: nuevos muelles, mayor profundidad, grúas modernas o ampliaciones de terminales. Son capacidades importantes, pero por sí solas no garantizan un puerto más competitivo.",
          "Un puerto puede tener instalaciones adecuadas y, aun así, enfrentar demoras, costos elevados, conexiones terrestres ineficientes, reglas poco claras o dificultades para coordinar a quienes participan en la operación. La competitividad se define en la interacción de todos esos elementos: es, ante todo, un desafío de sistema.",
          "La infraestructura permite operar, recibir buques y mover carga. La pregunta estratégica es si esa capacidad se traduce en un servicio confiable, eficiente y valioso para quienes utilizan el puerto.",
          "Para responder, hace falta mirar más allá de los activos físicos: productividad de las operaciones, permanencia de la carga, costos para los usuarios, coordinación entre terminales, autoridades, transportistas y organismos públicos, y previsibilidad de reglas, tarifas y tiempos. La respuesta aparece al observar las conexiones y los cuellos de botella entre las partes del sistema.",
        ],
      },
      {
        heading: "Productividad y costos: el desempeño cotidiano",
        paragraphs: [
          "La productividad portuaria depende de cómo se organizan los procesos, se utilizan los equipos y se coordinan las operaciones. Una mejora en la capacidad instalada puede perder impacto si persisten demoras en los accesos, baja utilización de recursos o procedimientos que generan esperas.",
          "Esas fricciones repercuten en los costos y en la experiencia de los usuarios. Antes de concluir que se necesita más infraestructura, conviene entender cómo se aprovecha la existente, dónde se pierde tiempo y qué cambios operativos podrían mejorar el desempeño.",
          "Esto no significa que las inversiones sean innecesarias. Significa que deben responder a un diagnóstico: qué restricción resuelven, qué beneficios se esperan y cómo se integran con las demás capacidades del puerto.",
        ],
      },
      {
        heading: "Conectividad y hinterland: el puerto no termina en el muelle",
        paragraphs: [
          "La competitividad también se construye tierra adentro. La conexión con los centros de producción y consumo, la disponibilidad de transporte, la coordinación de los accesos y la fluidez de los intercambios determinan qué tan bien se integra el puerto con las cadenas logísticas.",
          "Un puerto eficiente en el muelle puede perder ventajas si la carga encuentra demoras o costos adicionales al entrar o salir. La planificación necesita considerar las necesidades del hinterland y su evolución: actividades productivas, flujos de carga y alternativas de conexión que condicionan la demanda actual y futura.",
        ],
      },
      {
        heading: "Gobernanza y tarifas: reglas que también generan competitividad",
        paragraphs: [
          "La forma en que se toman las decisiones incide directamente en el desempeño. Una gobernanza clara ayuda a coordinar responsabilidades, ordenar prioridades y dar previsibilidad a inversiones y operaciones. Cuando las funciones se superponen o las decisiones no se articulan, los costos de coordinación pueden trasladarse a todo el sistema.",
          "Las tarifas y los marcos regulatorios también forman parte de esa ecuación. Deben ser comprensibles, consistentes con los servicios prestados y compatibles con objetivos de eficiencia y desarrollo. Su diseño requiere considerar los incentivos que generan para operadores y usuarios, además de sus efectos sobre la sostenibilidad económica del puerto.",
        ],
      },
      {
        heading: "La confiabilidad convierte capacidad en valor",
        paragraphs: [
          "Para las cadenas logísticas, no alcanza con que un puerto pueda operar: importa que lo haga de manera previsible. La confiabilidad se expresa en la estabilidad de los tiempos, la continuidad del servicio, la transparencia de la información y la capacidad de responder ante cambios o interrupciones.",
          "Esa confianza no surge de una sola medida. Es el resultado de procesos bien diseñados, coordinación institucional, información útil y decisiones que se sostienen en el tiempo.",
        ],
      },
      {
        heading: "Pensar el sistema para poder implementarlo",
        paragraphs: [
          "Mejorar la competitividad requiere conectar diagnóstico y ejecución. Primero, comprender cómo funciona el puerto en su contexto: operaciones, costos, conexiones, reglas y prioridades. Después, identificar las oportunidades de mayor impacto, ordenar las decisiones y definir una hoja de ruta con etapas, responsables, inversiones y riesgos.",
          "Ese enfoque permite comparar alternativas con mayor claridad: optimizar procesos, ajustar mecanismos de coordinación, revisar marcos tarifarios, fortalecer conexiones o desarrollar infraestructura. Cada puerto necesita respuestas acordes con su realidad institucional y operativa; no existe una solución única que pueda trasladarse sin adaptación.",
          "En NODUS entendemos el desarrollo portuario desde esa mirada integral. Acompañamos a autoridades y operadores para transformar el análisis en decisiones aplicables, articulando oficio portuario, criterio local y orientación a la implementación.",
          "La pregunta no es solo cuánto puede crecer un puerto. También es cómo puede funcionar mejor, conectarse mejor y ofrecer un servicio más confiable. Ahí comienza una estrategia de competitividad portuaria.",
        ],
      },
    ],
  },
  {
    slug: "concesiones-portuarias-riesgos",
    category: "Regulación",
    title: "Concesiones portuarias: cómo diseñar contratos que alineen inversión, eficiencia y servicio",
    excerpt:
      "Una concesión no se mide por lo que se firma, sino por lo que ocurre en el muelle diez o veinte años después. Un buen contrato es, ante todo, un sistema de incentivos.",
    author: "Diego Salom · Cofundador de NODUS",
    date: "2026-10-22",
    heroImage: "/images/blog/concesiones-portuarias-riesgos.webp",
    tags: ["Concesiones", "Regulación", "Gestión portuaria"],
    body: [],
    sections: [
      {
        heading: "El contrato como sistema de incentivos",
        paragraphs: [
          "Una concesión portuaria suele presentarse como un instrumento legal. Para quien la diseña, también es un mecanismo económico: define quién invierte, quién asume cada riesgo, cómo se recupera el capital y qué recibe el usuario a cambio.",
          "Cuando está bien construido, los intereses del Estado, del concesionario y de los usuarios empujan en una dirección compatible. Cuando está mal diseñado, cada parte optimiza lo propio: el concesionario busca maximizar su retorno con la menor inversión posible, el Estado prioriza el canon y el usuario termina absorbiendo demoras y costos logísticos.",
          "La pregunta de fondo no es solamente qué cláusulas incluir, sino qué comportamiento va a premiar el contrato durante las próximas décadas.",
        ],
      },
      {
        heading: "Qué debería exigir el Estado",
        paragraphs: [
          "Un error frecuente es exigir demasiado de aquello que se mide fácilmente y demasiado poco de lo que realmente importa. Un canon alto o una inversión comprometida en un cronograma rígido son fáciles de verificar, pero no garantizan un puerto eficiente.",
          "La inversión debe tener propósito: importa no solo cuánto se invierte, sino en qué y cuándo. Las obligaciones funcionan mejor cuando se activan ante condiciones reales de demanda y ocupación, en vez de depender exclusivamente de fechas fijadas antes de conocer cómo evoluciona el mercado.",
          "El desempeño operativo debe medirse con pocos indicadores, bien definidos y auditables: productividad por posición de atraque, espera de buques, permanencia de la carga y tiempos de camiones en el acceso.",
          "El acceso abierto y la neutralidad importan para que la terminal atienda a los usuarios en condiciones transparentes. También hace falta una reversibilidad ordenada: al final del plazo, los activos, la información, los sistemas y los procesos deben permitir una transición sin interrumpir la operación.",
          "El contrato define qué debe lograrse; el concesionario decide cómo gestionarlo. Si el Estado interviene en la gestión cotidiana, también asume responsabilidad por sus resultados.",
        ],
      },
      {
        heading: "Qué riesgos asume el privado y cuáles no le corresponden",
        paragraphs: [
          "El principio es sencillo, aunque no siempre fácil de aplicar: cada riesgo debería recaer en quien mejor puede gestionarlo.",
          "El concesionario suele estar en mejores condiciones de gestionar el riesgo operativo —productividad, costos, mantenimiento, tecnología y comercialización— y el riesgo de construcción cuando controla el diseño y la ejecución. También es razonable que asuma parte del riesgo de demanda, porque conoce el mercado y puede influir sobre él.",
          "En cambio, hay riesgos que el privado no controla. Si se le trasladan por completo, pueden elevar el costo de las ofertas o reducir la competencia: cambios regulatorios, demoras en permisos o dragados a cargo del Estado, decisiones públicas sobre accesos viales y ferroviarios, o eventos de fuerza mayor.",
          "Trasladar todo el riesgo puede parecer una negociación conveniente, pero suele producir ofertas más caras, menos competidas o proyectos que se renegocian a los pocos años. Un reparto equilibrado no es una concesión al inversor: es una condición para que el proyecto sea financiable y sostenible.",
        ],
      },
      {
        heading: "Vincular tarifas con niveles de servicio",
        paragraphs: [
          "Una tarifa que no se relaciona con el servicio prestado desalinea los incentivos: el concesionario cobra lo mismo, funcione bien o mal. El contrato puede complementar el esquema tarifario con un techo sujeto al desempeño, incentivos por superar estándares y compensaciones transparentes al usuario cuando el servicio falla por causas atribuibles a la terminal.",
          "Para que estos mecanismos funcionen, los indicadores deben apoyarse en información verificable, depender razonablemente de la gestión del concesionario y ser pocos. Un contrato con decenas de indicadores resulta difícil de controlar; uno con cinco o seis criterios bien definidos puede supervisarse de manera efectiva.",
          "También importa la calibración. Estándares demasiado laxos no cambian el desempeño; otros demasiado exigentes generan conflictos permanentes. Conviene definirlos con referencias de terminales comparables y una trayectoria de mejora que reconozca la curva de aprendizaje.",
        ],
      },
      {
        heading: "Contratos que resistan el paso del tiempo",
        paragraphs: [
          "Ninguna proyección de demanda, tecnología o regulación se sostiene sin cambios durante tres décadas. Por eso, un contrato robusto necesita mecanismos de adaptación, además de una distribución clara de riesgos y buenos incentivos.",
          "Eso implica prever revisiones periódicas, umbrales que activen nuevas inversiones, criterios para reequilibrar la ecuación económica ante cambios de fondo y una gobernanza de seguimiento con responsables, información compartida y reglas claras para resolver diferencias.",
          "La renegociación no es necesariamente un fracaso del contrato. El problema es renegociar sin reglas, de manera improvisada y bajo presión. Un buen diseño convierte la adaptación en un proceso previsible, no en un conflicto.",
        ],
      },
      {
        heading: "El contrato que conviene diseñar",
        paragraphs: [
          "Una concesión exitosa no es la que maximiza el canon ni la que minimiza el riesgo del Estado. Es la que permite que el concesionario obtenga mejores resultados cuando el puerto funciona mejor, que el Estado preserve el interés público sin gestionar la operación y que el usuario reciba un servicio previsible y competitivo.",
          "El servicio portuario sostiene una parte esencial del sistema económico y logístico de un país. Por eso, el contrato debe cuidar el interés público y la continuidad del sistema productivo.",
          "No se trata de escribir un contrato más largo, sino de diseñar uno que reduzca la necesidad de discutir cada decisión. Un puerto no se concesiona para cumplir un contrato: se concesiona para que ese contrato contribuya a que funcione mejor.",
        ],
      },
    ],
  },
];

export const blogTopics = [
  "Todos",
  "Planificación",
  "Gobernanza",
  "Operación",
  "Transformación digital",
  "Sostenibilidad",
  "Regulación",
  "Capacitación",
];

export function getReadingMinutes(post: BlogPost) {
  const sectionText = post.sections?.flatMap((section) => [section.heading, ...section.paragraphs]).join(" ") ?? post.body.join(" ");
  const wordCount = `${post.title} ${post.excerpt} ${sectionText}`.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 150));
}

export function formatBlogDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;
}

export function getTitleParts(title: string) {
  const separatorIndex = title.indexOf(":");
  return separatorIndex === -1 ? { lead: title, remainder: "" } : { lead: title.slice(0, separatorIndex + 1), remainder: title.slice(separatorIndex + 1).trim() };
}

export function getSortedPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}
