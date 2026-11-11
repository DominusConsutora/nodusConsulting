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
  {
    slug: "puerto-digital-puerto-inteligente",
    category: "Transformación digital",
    title: "Del puerto digital al puerto inteligente: qué significa realmente digitalizar una comunidad portuaria",
    excerpt:
      "Digitalizar un puerto no es incorporar tecnología: es decidir cómo se coordinan las personas, las instituciones y la información que hacen posible la operación.",
    author: "Diego Salom · Cofundador de NODUS",
    date: "2026-11-05",
    heroImage: "/images/blog/puerto-digital-puerto-inteligente.webp",
    tags: ["Transformación digital", "PCS", "Gobernanza"],
    body: [],
    sections: [
      {
        heading: "Una conversación que suele empezar por el lugar equivocado",
        paragraphs: [
          "Cuando se habla de modernizar un puerto, la conversación casi siempre arranca por la herramienta: qué sistema comprar, qué plataforma implementar, qué tecnología incorporar. Son preguntas comprensibles, pero llegan demasiado pronto.",
          "Un puerto no es una terminal ni un software. Es una comunidad de actores —autoridad portuaria, terminales, navieras, agentes, transportistas, despachantes, aduana y organismos de control— que dependen unos de otros para que una carga se mueva. Digitalizar esa comunidad significa, ante todo, cambiar la forma en que esos actores comparten información y toman decisiones. La tecnología es el medio. El resultado que importa es un sistema que funcione con menos fricción, más previsibilidad y reglas más claras.",
        ],
      },
      {
        heading: "Tres capas que se complementan, no se sustituyen",
        paragraphs: [
          "El ecosistema digital de un puerto suele describirse con siglas que a menudo se confunden. Conviene distinguirlas, porque cada una resuelve un problema distinto.",
          "El TOS (Terminal Operating System) es el sistema de gestión de la operación dentro de la terminal: planificación del buque y del patio, control de equipos, gestión de entregas y recepciones. Ordena lo que ocurre puertas adentro. Una terminal puede tener un TOS excelente y, aun así, depender de papeles, llamadas y planillas para coordinarse con quienes están afuera.",
          "El PCS (Port Community System) es la plataforma que conecta a la comunidad portuaria. Su función es el intercambio ordenado de información entre actores que de otro modo se comunican de forma bilateral y fragmentada: una misma información cargada una sola vez, disponible para quienes la necesitan, con estados y eventos visibles para todos. Es la infraestructura de coordinación del puerto.",
          "La ventanilla única conecta a la comunidad con el Estado. Permite que operadores y usuarios presenten la información requerida por los distintos organismos de control a través de un único punto de entrada, en lugar de repetir trámites ante cada uno. Su valor no es solo tecnológico: obliga a revisar, armonizar y simplificar procedimientos que durante años se superpusieron.",
          "Estas tres capas no compiten entre sí. Se complementan, y su valor aparece cuando están pensadas como parte de una misma arquitectura, con interfaces claras y datos que circulan sin reingresos manuales.",
        ],
      },
      {
        heading: "Trazabilidad: saber qué pasa, cuándo y con quién",
        paragraphs: [
          "La trazabilidad suele presentarse como una función de seguimiento de la carga. Es más que eso: es la capacidad de reconstruir, con información confiable, qué ocurrió en cada etapa de un proceso, quién intervino y cuánto tiempo tomó.",
          "Ese registro tiene un valor enorme. Permite identificar dónde se generan las demoras, comparar el desempeño de distintas etapas, dar previsibilidad a los usuarios y fundamentar decisiones con datos y no con percepciones. Un puerto que no puede medir sus procesos difícilmente pueda mejorarlos; uno que los mide con información compartida puede discutir sus problemas con evidencia.",
          "Pero la trazabilidad solo es útil si los datos son consistentes. Eso exige definiciones comunes, eventos estandarizados y acuerdos sobre quién registra qué y en qué momento.",
        ],
      },
      {
        heading: "La integración de actores es un desafío institucional",
        paragraphs: [
          "La parte más difícil de digitalizar una comunidad portuaria rara vez es técnica. Es lograr que actores con intereses, ritmos y capacidades diferentes acuerden cómo compartir información.",
          "Aparecen preguntas que ninguna plataforma responde por sí sola. ¿Quién lidera el proyecto y con qué legitimidad? ¿Quién es el propietario de los datos y quién puede acceder a ellos? ¿Cómo se protege la información comercial sensible? ¿Cómo se financia y sostiene el sistema en el tiempo? ¿Qué pasa con los actores con menor capacidad tecnológica? ¿Qué procesos se rediseñan, y cuáles simplemente se trasladan a una pantalla?",
          "Digitalizar un proceso ineficiente solo produce un proceso ineficiente más rápido. Por eso los proyectos más sólidos empiezan por entender y simplificar el flujo, y recién después lo traducen a un sistema.",
        ],
      },
      {
        heading: "Sin gobernanza, la tecnología no escala",
        paragraphs: [
          "Detrás de cada plataforma portuaria que funciona hay una decisión de gobernanza: un esquema claro de roles, un modelo de neutralidad, reglas de uso, criterios de acceso a la información y un mecanismo para resolver diferencias entre los participantes.",
          "Sin ese marco, los sistemas tienden a repetir la fragmentación que querían resolver: plataformas paralelas, datos duplicados, estándares incompatibles y adopción parcial. Con él, la tecnología se vuelve una infraestructura compartida y no un conjunto de soluciones aisladas.",
          "Por eso la transformación digital portuaria es, en el fondo, una agenda de gobernanza. Define quién coordina, bajo qué reglas y con qué incentivos; y recién entonces qué herramientas lo sostienen.",
        ],
      },
      {
        heading: "Medir para saber si funcionó",
        paragraphs: [
          "Una iniciativa digital se justifica por lo que cambia en la operación, no por lo que incorpora. Los indicadores deberían estar definidos desde el inicio: tiempos de permanencia de la carga, tiempos de trámite, tiempos de atención en accesos, previsibilidad de los procesos, costos para los usuarios, nivel de adopción por parte de los actores.",
          "Esa disciplina evita uno de los riesgos más frecuentes: proyectos que se evalúan por su grado de avance técnico y no por su efecto sobre la eficiencia del puerto.",
        ],
      },
      {
        heading: "De la digitalización a un puerto inteligente",
        paragraphs: [
          "Se suele decir que un puerto es «inteligente» por la cantidad de tecnología que utiliza. Nuestra mirada es otra. Un puerto inteligente es aquel que cuenta con información confiable, compartida y a tiempo, y que la usa para coordinar mejor, anticipar problemas y decidir con mayor criterio.",
          "La inteligencia no está en el dispositivo: está en la calidad de las decisiones que el sistema permite tomar. Y esas decisiones dependen de procesos bien diseñados, datos consistentes y actores que confían en compartirlos. La innovación tecnológica puede potenciar ese esquema, pero no lo reemplaza.",
        ],
      },
      {
        heading: "Cómo lo abordamos en NODUS",
        paragraphs: [
          "En NODUS entendemos la transformación digital portuaria como un proyecto de sistema, no de producto. Acompañamos a autoridades y operadores a partir de un diagnóstico de procesos y actores, para definir qué problemas se quiere resolver, qué arquitectura de TOS, PCS y ventanilla única tiene sentido para cada realidad, qué modelo de gobernanza la sostiene y cómo se implementa por etapas, con responsables, inversiones, plazos y riesgos.",
          "No hay una receta única. Cada puerto tiene su estructura institucional, su nivel de madurez y su comunidad. Lo que sí es común es el punto de partida: antes de elegir una tecnología, conviene preguntarse qué decisiones se necesita mejorar y quiénes deben participar para lograrlo.",
          "El puerto digital es una etapa necesaria. El puerto inteligente es lo que ocurre cuando esa información se transforma, de manera sostenida, en mejor coordinación, mayor eficiencia y servicios más confiables.",
        ],
      },
    ],
  },
  {
    slug: "capacitacion-retencion-talento-portuario",
    category: "Capacitación",
    title: "Las personas son la infraestructura que no figura en el balance: capacitar y retener talento en el sector portuario y logístico",
    excerpt:
      "Un puerto se mide en metros de muelle, grúas y calado. Pero lo que decide si esa infraestructura rinde o no son las personas que la planifican, la operan, la regulan y la coordinan todos los días.",
    author: "Diego Salom · Cofundador de NODUS",
    date: "2026-11-19",
    heroImage: "/images/blog/capacitacion-retencion-talento.webp",
    tags: ["Capacitación", "Recursos humanos", "Gobernanza"],
    body: [],
    sections: [
      {
        heading: "Una inversión que casi siempre llega tarde",
        paragraphs: [
          "Cuando un sistema portuario o logístico decide modernizarse, la conversación suele empezar por lo visible: la obra, el equipo, la plataforma. La capacitación aparece después, como un anexo del proyecto o como una respuesta a un problema que ya ocurrió.",
          "Es una secuencia comprensible, pero costosa. Una terminal puede incorporar el mejor sistema de gestión y seguir operando con fricción si quienes lo usan no entienden la lógica de los procesos que ese sistema representa. Una autoridad puede diseñar un excelente esquema de concesiones y no lograr que se cumpla si el equipo que lo administra no tiene las herramientas para medir, auditar y decidir. La tecnología y la normativa fijan el piso. Las capacidades de las personas determinan hasta dónde se llega.",
        ],
      },
      {
        heading: "Profesionalizar no es capacitar más: es capacitar mejor",
        paragraphs: [
          "Hablar de profesionalización es hablar de algo más exigente que sumar horas de cursos. Implica definir qué competencias necesita realmente cada función, evaluar dónde están las brechas y construir trayectorias que conecten la formación con el desempeño y con la carrera de cada persona.",
          "En el sector portuario y logístico esto tiene una particularidad: las decisiones cruzan disciplinas. Un planificador debe entender de operación; un operador, de regulación; un gerente comercial, de cadenas logísticas; un funcionario, de eficiencia y servicio al usuario. Los equipos que mejor funcionan no son los que acumulan especialistas aislados, sino los que desarrollan una mirada común sobre el sistema del que forman parte.",
          "Por eso la formación más valiosa rara vez es genérica. Es la que parte del diagnóstico de la organización, se apoya en casos reales de su entorno y apunta a cambiar la manera en que se toman decisiones, no solo a transmitir información.",
        ],
      },
      {
        heading: "El costo oculto de no retener",
        paragraphs: [
          "Capacitar sin retener es llenar un balde con un agujero. En un sector donde la experiencia se construye durante años, cada salida de una persona clave se lleva consigo conocimiento operativo, relaciones con los demás actores de la comunidad y criterio para resolver lo que ningún manual contempla.",
          "Ese costo casi nunca figura en una planilla, pero se siente: curvas de aprendizaje que se reinician, procesos que dependen de la memoria de una sola persona, decisiones que se demoran, equipos que pierden continuidad. Y suele agravarse en los momentos de cambio —una nueva concesión, un proceso de digitalización, una reestructuración—, justo cuando más se necesita estabilidad y conocimiento acumulado.",
        ],
      },
      {
        heading: "Por qué se va el talento",
        paragraphs: [
          "La retención suele asociarse únicamente con la remuneración. Es un factor importante, pero rara vez el único. Las personas con trayectoria y buen desempeño suelen irse cuando perciben que no hay un camino claro de crecimiento dentro de la organización; que su aprendizaje se estancó y la formación no acompaña los desafíos de su rol; que sus decisiones no tienen impacto o no son reconocidas; o que la organización no tiene un rumbo definido, o lo cambia sin explicarlo.",
          "Es decir: cuando no ven futuro profesional en el lugar donde están. La capacitación y la retención no son agendas separadas. Son dos caras de la misma pregunta: ¿qué le ofrece la organización a quien decide quedarse y crecer?",
        ],
      },
      {
        heading: "Capacitación y retención se refuerzan",
        paragraphs: [
          "Una organización que forma a su gente con criterio envía una señal: apuesta por su desarrollo. Y cuando esa formación está atada a trayectorias reales —más responsabilidad, nuevos roles, participación en decisiones—, el vínculo se fortalece. La formación deja de ser un beneficio y pasa a ser parte del proyecto compartido.",
          "El efecto también opera hacia adentro de los equipos. Cuando varias personas incorporan los mismos criterios y el mismo lenguaje técnico, mejora la coordinación, se reducen los malentendidos entre áreas y el conocimiento deja de depender de individuos para vivir en la organización.",
          "En comunidades portuarias, donde conviven autoridades, terminales, operadores y organismos de control, esa mirada compartida es un activo colectivo: facilita acuerdos, acelera la adopción de nuevos procesos y hace más previsible el servicio que recibe el usuario.",
        ],
      },
      {
        heading: "Qué conviene hacer: cuatro decisiones de fondo",
        paragraphs: [
          "Diagnosticar antes de formar. Identificar qué funciones son críticas, qué competencias hacen falta y dónde están las brechas. Sin ese punto de partida, la capacitación se vuelve un catálogo.",
          "Conectar formación con trayectoria. Cada programa debería responder a una pregunta concreta: ¿qué puede hacer esta persona después que no podía hacer antes, y qué camino se le abre en la organización?",
          "Cuidar el conocimiento crítico. Documentar procesos, armar espacios de transferencia entre generaciones y evitar que la operación dependa de una sola persona.",
          "Medir lo que cambia. Evaluar la capacitación por su efecto en el desempeño, la calidad del servicio y la permanencia de los equipos, y no por la cantidad de horas dictadas.",
        ],
      },
      {
        heading: "Una agenda de largo plazo",
        paragraphs: [
          "Los sistemas portuarios y logísticos operan en horizontes de décadas: concesiones, master plans, obras que condicionan el futuro de un frente de agua. Sería llamativo que el desarrollo de las personas que van a llevar adelante esas decisiones se pensara en horizontes de meses.",
          "Planificar la infraestructura sin planificar las capacidades para gestionarla es dejar la mitad del trabajo sin hacer. Un puerto competitivo no es solo el que invierte en obras y tecnología, sino el que invierte, con la misma seriedad, en quienes van a hacerlas funcionar.",
        ],
      },
      {
        heading: "Cómo lo abordamos en NODUS",
        paragraphs: [
          "En NODUS entendemos la capacitación como parte de la estrategia de un sistema portuario, no como una actividad accesoria. Acompañamos a autoridades y operadores a partir de un diagnóstico de capacidades y de la visión de la organización, para definir qué competencias son críticas, cómo se construyen programas de formación pertinentes al contexto de cada puerto y cómo se vincula ese desarrollo con la gobernanza, la planificación y la continuidad de los equipos.",
          "No hay un programa universal. Cada organización tiene su historia, su estructura y su comunidad. Lo que sí es común es el punto de partida: antes de elegir un curso, conviene preguntarse qué decisiones queremos que nuestra gente esté en condiciones de tomar dentro de cinco años.",
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
