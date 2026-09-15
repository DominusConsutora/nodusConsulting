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
    title: "Master Plan Portuario: La Diferencia Entre Predecir y Planificar",
    excerpt: "Los puertos que siguen siendo competitivos no son los que adivinan el futuro, sino los que construyen estrategias resilientes capaces de adaptarse.",
    author: "Diego Salom",
    date: "2026-09-15",
    heroImage: "/images/blog/master-plan-portuario-decision.webp",
    tags: ["Planificación", "Infraestructura", "Estrategia"],
    body: [],
    sections: [
      {
        heading: "La diferencia fundamental",
        paragraphs: [
          "Hace veinte años, nadie predijo exactamente cómo sería la logística global hoy. Las disrupciones vinieron de lugares inesperados: el comercio electrónico transformó los volúmenes; el cambio climático redibujó rutas marítimas; la tecnología hizo obsoleta infraestructura que parecía futura.",
          "Sin embargo, los puertos que prosperaron no fueron los que adivinaron estas tendencias. Fueron los que construyeron estrategias resilientes: planes no como profecías, sino como marcos vivos capaces de adaptarse.",
          "Esta es la diferencia fundamental entre un Port Master Plan que envejece en un archivo y uno que sigue siendo relevante después de una década.",
        ],
      },
      {
        heading: "El error de predecir en lugar de planificar",
        paragraphs: [
          "Imaginemos un puerto que hace quince años encargó un costoso análisis para su Master Plan. Consultores internacionales, datos históricos, modelos econométricos sofisticados. El resultado fue hermoso: un documento de 200 páginas que proyectaba con precisión cuántos contenedores cruzarían sus muelles en 2040, dónde habría congestión, cuál sería la mezcla exacta de cargas.",
          "Todo estaba bien pensado. Todo fue equivocado.",
          "Hoy ese puerto enfrenta una realidad completamente distinta. El comercio se regionalizó más de lo esperado. La automatización llegó más rápido. El cambio climático aceleró sus impactos. Las regulaciones sobre sostenibilidad fueron más exigentes. El plan quedó obsoleto no porque haya sido mal elaborado, sino porque fue predictivo en lugar de adaptativo.",
          "Este patrón se repite en puertos alrededor del mundo. Inversiones de cientos de millones basadas en escenarios que nunca ocurrieron. Infraestructura que no se usa como se imaginó. Capacidades que resultaron insuficientes o innecesarias.",
          "El problema no está en la calidad del análisis. Está en la filosofía misma. Un Master Plan pensado como predicción es, por definición, un fracaso esperando ocurrir. Porque el futuro no se predice. Se construye.",
        ],
      },
      {
        heading: "Qué debería ser realmente un Master Plan",
        paragraphs: [
          "Un buen Master Plan portuario no es un documento profético. Es un sistema inteligente de toma de decisiones que permite al puerto navegar múltiples futuros posibles sin quedar obsoleto en ninguno.",
          "Esto significa que el plan debe hacer cuatro cosas fundamentales.",
          "Primero, debe definir principios de flexibilidad. No toda la infraestructura de un puerto es igual. Algunos muelles pueden ser modulares, permitiendo adaptarse a diferentes tipos de carga o automatización. Otros son estructurales: los accesos, los dragados, los diques, la geometría básica del puerto. Un buen plan distingue claramente qué es flexible y qué es estructural, permitiendo invertir en lo riguroso de manera inteligente y dejar margen para lo que puede cambiar.",
          "Segundo, debe establecer umbrales de acción. No esperar a tener certeza completa para decidir. En su lugar, el plan define: si el indicador X alcanza el valor Y, entonces ejecutamos la estrategia Z. Es como tener una brújula en lugar de un mapa detallado. Sabes hacia dónde apuntar sin necesidad de predecir cada obstáculo del camino.",
          "Tercero, debe contemplar escenarios múltiples. No un futuro, sino varios futuros plausibles y cómo el puerto respondería a cada uno. Esto no es especulación. Es la aceptación honesta de que el futuro es incierto, pero que puedes construir una estrategia que funcione en múltiples contextos.",
          "Y cuarto, debe permitir revisión viva. No reescribir todo el plan cada cinco años, sino actualizarlo progresivamente a medida que la realidad te enseña qué funcionó y qué no.",
        ],
      },
      {
        heading: "Los escenarios que todo puerto debe contemplar",
        paragraphs: [
          "Cuando un puerto se sienta a pensar en su futuro, no puede hacerlo en silencio. Debe pensar en múltiples dimensiones que interactúan entre sí. Algunos de estos escenarios son predecibles en su incertidumbre.",
          "El escenario de demanda es el más obvio. ¿Cuánta carga cruzará el puerto? Pero esta pregunta tiene varias respuestas. Existe un escenario de crecimiento acelerado, donde el comercio global se expande, los mercados emergentes abren nuevas rutas y las tecnologías crean cadenas de valor que hoy no existen. Existe el escenario de estancamiento, donde una recesión global, la regionalización del comercio o el reshoring de manufacturas reduce drásticamente los volúmenes. Y existe el escenario de transformación, donde la cantidad total de carga permanece similar pero su composición cambia radicalmente: menos contenedores, más granos; menos autos, más energía renovable; menos manufactura, más logística inversa.",
          "Un puerto debe preguntarse honestamente: ¿Cómo mantengo rentabilidad en todos estos escenarios? Porque uno de ellos ocurrirá. No sabes cuál, pero uno ocurrirá.",
          "La infraestructura y el suelo son donde la decisión cobra peso real. Tu puerto tiene un territorio finito. Decidir qué construir ahí es decidir qué no puedes construir después. Aquí el plan debe contemplar si conviene crecer hacia arriba, mediante densificación vertical, o hacia afuera, mediante expansión; cuánto suelo retener como opción; y cómo construir de forma que la infraestructura sea resistente a eventos extremos cada vez más frecuentes.",
          "La tecnología es un campo minado de incertidumbre. La automatización de puertos es inevitable, pero su velocidad es completamente incierta. Un buen Master Plan no intenta responder esto con certeza. Define cómo el puerto será capaz de adoptar tecnología a medida que emerja, sin quedar atrapado en inversiones que resultaron inútiles.",
          "El cambio climático es quizás el escenario más concreto y menos predecible. Sabemos que ocurrirá. No sabemos exactamente cómo. La respuesta es planificar para la resiliencia: infraestructura que puede absorber variabilidad, no infraestructura que apuesta a una única trayectoria climática.",
          "Los accesos y la conectividad son frecuentemente olvidados en los planes maestros. Un puerto es tan bueno como sus conexiones con el interior. Un buen plan reconoce qué puede influir y qué no, dónde puede invertir el puerto mismo para mejorar accesibilidad y dónde debe estar preparado para adaptarse a decisiones de terceros.",
          "Y finalmente están los nuevos negocios. El puerto del futuro no es solo una terminal de contenedores. Es un ecosistema: zonas de valor agregado, clústeres de innovación, espacios para manufactura circular e infraestructura de energía renovable. Un buen Master Plan deja suelo y capacidad operativa para que esas oportunidades ocurran cuando aparezcan.",
        ],
      },
      {
        heading: "Cómo funciona la planificación adaptativa en la realidad",
        paragraphs: [
          "En los primeros tres años, el puerto invierte en infraestructura crítica que soporta todos los escenarios posibles. Esto incluye los dragados necesarios, los diques que sostendrán el puerto bajo cualquier circunstancia y los accesos básicos. También significa instalar sistemas de monitoreo y datos sofisticados, capaces de mostrar en tiempo real cómo cambian los volúmenes de carga, la composición de las cargas, las tendencias tecnológicas, el impacto climático y la presión regulatoria.",
          "En los años cuatro a siete ocurre la verdadera adaptación. El puerto monitorea constantemente las señales del mundo y, basándose en ellas, cambia sus prioridades de inversión. Si el escenario apunta a automatización acelerada, invierte en sistemas sofisticados. Si el comercio se está regionalizando, enfatiza la conectividad local. Si el cambio climático es más severo de lo anticipado, acelera las inversiones en resiliencia.",
          "Lo crítico es que la infraestructura modular construida en los años iniciales permite este giro sin perder lo invertido. No estás demoliendo y reconstruyendo. Estás adaptando.",
          "En los años ocho a quince, el puerto consolida lo que funcionó y continúa ajustando. El plan se actualiza constantemente con datos de realidad. El puerto probablemente será entre un treinta y un cuarenta por ciento diferente de lo imaginado originalmente, pero seguirá siendo competitivo porque fue diseñado desde el inicio para adaptarse.",
          "Finalmente, en los años dieciséis a veinte, el puerto se detiene a reflexionar. ¿Cuáles de las decisiones tomadas fueron correctas? ¿Cuáles fueron equivocadas y por qué? Esta inteligencia se convierte en el norte de un nuevo ciclo planificador para los próximos veinte años.",
        ],
      },
      {
        heading: "Por qué esto importa económicamente",
        paragraphs: [
          "Este enfoque no es solo filosóficamente más honesto. Es económicamente superior.",
          "Un puerto que planifica adaptativamente toma decisiones más rápidamente. No está esperando tener certeza completa: opera dentro de márgenes de incertidumbre aceptables, usando umbrales de acción que gatillan decisiones en tiempo real. Esto significa que se mueve más rápido que la competencia, captura oportunidades antes y responde a amenazas con mayor rapidez.",
          "Un puerto así tiene menor riesgo de obsolescencia. No es un edificio terminado en 2045 que resultó irrelevante. Es un organismo vivo que evoluciona con su contexto, algo especialmente valioso considerando que los puertos tienen vidas útiles de medio siglo o más.",
          "Además, este enfoque genera confianza con gobiernos, empresas usuarias, inversores y comunidades. Todos entienden mejor un plan basado en escenarios múltiples que uno que pretende ver el futuro con certeza.",
          "Y finalmente, es mucho más eficiente con el capital. No sobre-invierte en infraestructura pensada para un único futuro menos probable que otros. El capital fluye a iniciativas que funcionan bajo múltiples escenarios, no a apuestas únicas.",
        ],
      },
      {
        heading: "La lección de los puertos que envejecieron",
        paragraphs: [
          "La historia portuaria está llena de ejemplos de puertos que invirtieron miles de millones en infraestructura basada en proyecciones radicalmente incorrectas. No fue mala ingeniería. Los ingenieros hicieron bien su trabajo. Fue mala filosofía de planificación.",
          "Algunos asumieron que el comercio seguiría creciendo linealmente, sin considerar que el comercio es cíclico. Otros subestimaron la velocidad de la automatización y se encontraron con inversiones obsoletas antes de terminar de amortizarlas. Otros no anticiparon que las regulaciones ambientales serían tan exigentes y terminaron con activos que no cumplían los nuevos estándares.",
          "El común denominador en todos estos casos fueron los planes rígidos: documentos bonitos, pero no sistemas vivos.",
        ],
      },
      {
        heading: "Conclusión: prepararse sin pretender ver",
        paragraphs: [
          "Un buen Port Master Plan a veinte años no es un oráculo. No intenta predecir exactamente qué traerá el futuro. Es un sistema inteligente de adaptación.",
          "Define principios que perduran. Contempla escenarios que pueden ocurrir. Establece umbrales que gatillan acciones. Instala sistemas que aprenden de la realidad y se actualiza constantemente en función de lo que el mundo enseña.",
          "No intenta ver el futuro. Se prepara para él, para cualquiera de los múltiples futuros posibles.",
          "La diferencia entre un puerto que envejece en un archivo y uno que sigue siendo relevante, rentable y competitivo después de veinte años es exactamente esta: la capacidad de planificar sin pretender adivinar.",
          "En un mundo donde la única certeza es que el futuro será diferente de lo que imaginamos, esa es la única estrategia que realmente funciona.",
        ],
      },
    ],
  },
  {
    slug: "concesiones-portuarias-riesgos",
    category: "Gobernanza",
    title: "Concesiones Portuarias: El Dilema de Alinear Inversión, Eficiencia y Servicio",
    excerpt: "Una buena concesión no es un contrato perfecto: es un sistema de alineación de incentivos donde el Estado protege el interés público, el operador puede prosperar y los usuarios reciben un puerto que funciona.",
    author: "Diego Salom",
    date: "2026-09-08",
    heroImage: "/images/blog/concesiones-portuarias-riesgos.webp",
    tags: ["Concesiones", "PPP", "Regulación"],
    body: [],
    sections: [
      {
        heading: "La concesión como sistema de alineación",
        paragraphs: [
          "Existe una paradoja en todo contrato de concesión portuaria: cuanto más específico intentes ser para proteger el interés público, menos incentivos tienes para que el privado invierta realmente.",
          "Especifica exactamente qué debe construir el operador y conseguirás exactamente eso: ni más, ni menos. Especifica muy poco y pierdes control sobre un activo estratégico. El contrato perfecto, aquel que es lo suficientemente claro para ser ejecutable pero lo suficientemente flexible para permitir innovación, es esquivo.",
          "Y sin embargo, existen puertos que lo han logrado. No porque tengan contratos perfectos, sino porque tienen contratos inteligentes: diseñados reconociendo que el futuro es incierto, que los incentivos importan más que las cláusulas y que una buena alineación económica resuelve más conflictos que una redacción legal impecable.",
          "Esta es la verdadera naturaleza de una buena concesión: no es un documento legal hermético. Es un sistema de alineación de incentivos donde el Estado protege su interés público, el operador puede prosperar y los usuarios terminan con un puerto que realmente funciona.",
        ],
      },
      {
        heading: "Lo que realmente debe exigir el Estado",
        paragraphs: [
          "Muchos Estados cometen un error fundamental: confunden especificidad con protección.",
          "Un contrato de concesión portuaria típicamente especifica inversiones: el operador debe realizar dragados a cierta profundidad, construir muelles e instalar grúas dentro de un plazo. Parece prudente. En realidad, es exactamente la forma de asegurar que el operador haga lo mínimo.",
          "Lo que el Estado realmente debería exigir es capacidad y desempeño, no activos específicos. La pregunta correcta no es qué debe construir el operador, sino qué capacidad debe tener el puerto al final de la concesión. No es qué grúas debe comprar, sino cuál debe ser el tiempo promedio de operación por contenedor.",
          "Cuando exiges activos específicos, el operador compra exactamente eso. Cuando exiges capacidad y desempeño, el operador debe pensar en cómo alcanzarlo. Quizás no necesita la grúa más cara, sino una más inteligente. Quizás la inversión crítica está en sistemas de datos, no en acero.",
          "El Estado debe exigir indicadores de desempeño medibles: tiempo de permanencia en puerto, eficiencia operacional, throughput por muelle y disponibilidad de infraestructura. Esto protege el interés público de forma más robusta que una lista de activos, porque obliga al operador a innovar dentro del marco.",
          "También debe exigir un puerto transferible al final de la concesión. No un puerto agotado, sino uno que el siguiente operador pueda operar de inmediato. Esto significa exigir mantenimiento preventivo, no correctivo. No es una cláusula técnica: es una protección económica del Estado.",
          "Y debe exigir información: acceso continuo a datos operacionales, financieros y de mantenimiento. No por desconfianza, sino porque el Estado no puede tomar decisiones inteligentes sin información y porque la transparencia reduce conflictos.",
        ],
      },
      {
        heading: "Los riesgos que debe asumir el privado, y cuáles no",
        paragraphs: [
          "Aquí es donde muchas concesiones fallan. El Estado intenta transferir todos los riesgos al privado, o ninguno. Ambos extremos son económicamente perversos.",
          "Si el Estado transfiere todos los riesgos, hace que la concesión sea demasiado costosa de financiar. Los bancos exigen tasas de interés altísimas para proyectos donde el privado asume todo el riesgo. Esto aumenta los costos operacionales, que terminan siendo trasladados a tarifas más altas. Los usuarios pagan más por un puerto que funciona peor.",
          "Si el Estado asume todos los riesgos, pierde incentivos para que el operador sea eficiente. La pregunta correcta es: quién está mejor posicionado para gestionar cada riesgo.",
          "El operador está bien posicionado para gestionar riesgos operacionales: reducir costos, mejorar eficiencia y adoptar tecnología. Debería asumir esos riesgos. Si lo hace bien, gana dinero. Si lo hace mal, lo paga.",
          "El operador también debería asumir riesgos de demanda hasta cierto punto, para incentivarlo a buscar clientes activamente. Pero no todos los riesgos de demanda: si ocurre una crisis global que reduce el comercio un 40%, el operador no puede hacer nada. Allí el riesgo debe ser compartido.",
          "El Estado está mejor posicionado para gestionar riesgos regulatorios y macroeconómicos: cambios de legislación, devaluación y cambios políticos. No tienen relación directa con la operación del puerto.",
          "Una concesión bien diseñada es una división clara de riesgos, no una transferencia total. Esto permite que sea financiable y que el operador tenga incentivos fuertes para desempeñarse bien.",
        ],
      },
      {
        heading: "Cómo definir inversiones que sean reales, no solo papel",
        paragraphs: [
          "La mayoría de los contratos de concesión especifican inversiones así: el operador invertirá una suma determinada durante los primeros años. El resultado es que el operador invierte exactamente esa suma, quizás mal gastada o en activos que no generan valor, pero cumple la cláusula.",
          "Esto es un error de diseño. Los contratos deberían diferenciar entre inversión obligatoria e inversión discrecional.",
          "La inversión obligatoria son los proyectos que el Estado entiende como críticos para la operación futura: dragados a cierta profundidad o rehabilitación de muelles existentes. El operador debe hacerlos, sin opción. Estos proyectos están predefinidos y su realización es condición para mantener la concesión.",
          "La inversión discrecional es donde ocurre la verdadera innovación. El operador identifica oportunidades: un nuevo tipo de terminal, sistemas de automatización o conectividad mejorada. El contrato debería permitirlo, con ciertos límites. El operador que invierte en iniciativas exitosas debería ganar dinero extra.",
          "Pero en un horizonte de 25 años el contexto cambia. Lo que pareció crítico hace una década quizás ya no lo sea. La solución es vincular inversiones obligatorias a umbrales de demanda: si la demanda alcanza cierto nivel, el operador realiza la inversión correspondiente. Si tarda más en llegar, la inversión se retrasa; si llega antes, se acelera.",
        ],
      },
      {
        heading: "Cómo evitar que el contrato se congele en el tiempo",
        paragraphs: [
          "Este es probablemente el problema más grave de las concesiones actuales. Los contratos se escriben para un futuro que nunca ocurre y luego se congelan durante décadas.",
          "Un contrato que no permite ajustes se vuelve disfuncional. El operador queda obligado a seguir reglas que ya no tienen sentido y el Estado no puede responder a los cambios. Ambos pierden.",
          "La solución es construir contratos vivos, con puntos de revisión predefinidos. Cada cinco años podría haber una revisión menor: ajuste de tarifas según inflación, revisión de indicadores de desempeño e identificación de nuevas inversiones necesarias. No es una renegociación total, sino un ajuste de calibración.",
          "Cada diez años podría haber una revisión mayor: evaluación profunda del desempeño, revisión de estrategia y posible redefinición de inversiones obligatorias según lo que el mercado mostró que era importante.",
          "El contrato debe definir exactamente cómo se revisa, quién decide, qué se puede cambiar y qué no. El plazo de la concesión y los derechos de propiedad sobre activos principales probablemente no deberían cambiar. Las tarifas, las inversiones futuras y los indicadores de desempeño sí.",
        ],
      },
      {
        heading: "Vincular tarifas a niveles de servicio",
        paragraphs: [
          "En muchos puertos la tarifa se define en el contrato y permanece desconectada del servicio que realmente se proporciona. El usuario paga la tarifa completa aunque el puerto sea ineficiente y el operador cobra la tarifa completa aunque el servicio sea pobre.",
          "Un contrato inteligente vincula explícitamente tarifas a desempeño. La estructura típica es una tarifa base, más o menos un factor de ajuste basado en indicadores de desempeño.",
          "Por ejemplo: la tarifa base es X. Si el tiempo promedio de operación por contenedor es menor a cierto umbral, el operador puede cobrar un adicional. Si es mayor a otro umbral, paga una penalización.",
          "Esto crea incentivos reales. El operador mejora su operación porque eso se traduce en ingresos mayores. El usuario obtiene mejor servicio porque paga menos si el servicio es malo. El Estado consigue un puerto que funciona bien porque es financieramente conveniente que funcione bien.",
          "La clave es que los indicadores sean medibles objetivamente: no que el puerto deba ser eficiente, sino que el tiempo promedio de operación deba ser inferior a un valor concreto.",
        ],
      },
      {
        heading: "Qué indicadores deberían estar en el contrato",
        paragraphs: [
          "No todos los indicadores importan igual. Un buen contrato selecciona los que reflejan lo que realmente importa.",
          "Los indicadores de eficiencia operacional, como tiempo de permanencia promedio, movimientos por hora y disponibilidad de infraestructura crítica, muestran si el operador optimiza realmente la operación.",
          "Los indicadores de confiabilidad protegen contra operadores negligentes: porcentaje de tiempo disponible para operar e incidencia de eventos no programados que cierren el puerto.",
          "Los indicadores de seguridad, como incidentes, cumplimiento de estándares y capacitación del personal, no se negocian.",
          "Los indicadores de sostenibilidad, como emisiones, consumo de agua y gestión de residuos, son cada vez más importantes y suelen estar ausentes de contratos antiguos.",
          "Los indicadores de inversión verifican que el operador realmente esté invirtiendo, no solo declarando que lo hace. Los indicadores de calidad de servicio conectan el contrato con lo que los usuarios experimentan.",
          "Lo que no debería estar es una lista exhaustiva de activos específicos. Ese es el viejo error de confundir especificidad con protección.",
        ],
      },
      {
        heading: "Proteger el interés público sin desalentar la inversión",
        paragraphs: [
          "El dilema real es cómo convencer a un operador privado de invertir decenas de millones si el contrato puede cambiar.",
          "La respuesta está en la claridad y la predictibilidad, no en la rigidez. El contrato debe dejar claro qué puede cambiar, qué no y cómo se ajustará si el contexto cambia. No debe ser discrecional, sino predeterminado.",
          "Esto genera confianza. El operador sabe que sus inversiones serán reconocidas, que si cumple el desempeño será recompensado y que si el contexto cambia habrá un proceso justo para ajustarse.",
          "También ayuda el financiamiento estructurado. Si el operador puede refinanciar su deuda antes de que el contrato sea revisado, reduce su riesgo. Las garantías del Estado para ciertos riesgos macroeconómicos vuelven más atractiva la concesión.",
          "El Estado también debe reconocer que un operador lucrativo es mejor que uno en crisis financiera. Un operador que gana dinero invierte más, opera mejor y paga mayores tarifas al Estado. Proteger el interés público a veces significa permitir que el privado sea rentable.",
        ],
      },
      {
        heading: "El contrato como herramienta de alineación",
        paragraphs: [
          "Un contrato de concesión portuaria no es solamente un documento legal. Es una herramienta de alineación de incentivos.",
          "El objetivo no es tener cláusulas perfectas que prevean todo. Es tener cláusulas que hagan que el operador quiera hacer lo que el Estado quiere que haga, y que ambos ganen en el proceso.",
          "Esto requiere pensar económicamente, no solo legalmente. Al operador lo motivan las ganancias; al Estado, el servicio público y el financiamiento; a los usuarios, la eficiencia y un precio justo.",
          "Un contrato inteligente alinea estos incentivos: hace que la eficiencia se traduzca en ganancias, que el buen servicio sea reconocido y que las inversiones sean recompensadas. También protege el interés público mediante indicadores, revisiones periódicas y claridad sobre lo que puede cambiar.",
          "No es un documento perfectamente predecible. Es un contrato que funciona incluso cuando la realidad se desvía de lo esperado, porque reconoce que la realidad siempre se desvía.",
        ],
      },
      {
        heading: "Conclusión: del contrato rígido al contrato inteligente",
        paragraphs: [
          "La era de las mega-concesiones portuarias con contratos extensos que intentan prever cada contingencia está terminando. Esos contratos generan litigios, renegociaciones constantes y puertos que no funcionan.",
          "El futuro son concesiones diseñadas como sistemas de alineación de incentivos: con claridad sobre qué es obligatorio y qué es flexible, indicadores de desempeño que realmente importan, revisiones predefinidas y una distribución de riesgos justa para ambas partes.",
          "Esto no es un contrato perfecto. Pero es un contrato que funciona: permite inversión real, incentiva eficiencia, protege el interés público y resulta atractivo para el privado.",
          "En un mundo donde la única certeza es que el futuro será diferente a lo que imaginamos, esa es exactamente la estructura que necesitan las concesiones portuarias.",
        ],
      },
    ],
  },
  {
    slug: "puerto-invisible-mala-operacion",
    category: "Operación",
    title: "El Puerto Invisible: Cuánto Valor Puede Perder una Terminal por Una Mala Operación",
    excerpt: "Una terminal moderna puede ser completamente no competitiva cuando la operación no logra convertir su infraestructura en velocidad, confiabilidad y capacidad real.",
    author: "Diego Salom",
    date: "2026-08-28",
    heroImage: "/images/blog/puerto-invisible-mala-operacion.webp",
    tags: ["Operación", "Terminales", "Productividad"],
    body: [],
    sections: [
      {
        heading: "El valor no está en los activos. Está en cómo se usan.",
        paragraphs: [
          "Una terminal portuaria moderna con grúas de última generación, muelles recientemente rehabilitados y sistemas de información sofisticados puede ser completamente no competitiva.",
          "Suena absurdo. Pero es la realidad en decenas de puertos alrededor del mundo.",
          "El problema no está en la infraestructura. Está en lo invisible: en cómo esa infraestructura es operada. En las esperas que los barcos sufren antes de atracar. En los tiempos de permanencia que se estiran innecesariamente. En la mala planificación que genera congestión cuando podría haber fluidez. En equipos costosos que están subutilizados, procesos administrativos que ralentizan todo y falta de coordinación entre áreas.",
          "Un puerto con buena operación pero infraestructura vieja puede ser más competitivo que un puerto con infraestructura nueva pero operación mediocre. Los operadores de barcos y las empresas logísticas pagan por velocidad y confiabilidad, no por la antigüedad de las grúas.",
        ],
      },
      {
        heading: "Lo que los números no dicen",
        paragraphs: [
          "Cuando una terminal presenta sus indicadores de desempeño, generalmente reporta cifras que lucen bien: movimientos promedio por hora, número de barcos atendidos por mes e ingresos totales. Pero estas cifras pueden ocultar ineficiencias profundas.",
          "Un puerto puede reportar 30 movimientos por hora y parecer productivo. Pero si esos movimientos son inconsistentes, con algunas horas en 50 y otras apenas en 10, está generando congestión, demoras e insatisfacción. Los promedios esconden volatilidad operacional.",
          "Un puerto puede recibir 150 barcos al mes y parecer saturado. Pero si esos barcos permanecen un promedio de 72 horas cuando el estándar global es 36, está perdiendo capacidad. Con la misma infraestructura podría recibir 250 barcos si redujera los tiempos de permanencia.",
          "Un puerto puede reportar ingresos crecientes y parecer exitoso. Pero si esos ingresos provienen de aumentar tarifas mientras los volúmenes bajan, está comprando rentabilidad de corto plazo a costa de competitividad.",
          "Los números que se publican rara vez revelan dónde está realmente el problema.",
        ],
      },
      {
        heading: "Las fuentes de pérdida de valor invisibles",
        paragraphs: [
          "Las esperas antes de atracar son una de las pérdidas más costosas. Un barco que llega a un puerto es un activo que genera costos por hora: combustible, tripulación y financiamiento de la carga. Una espera sistemática puede hacer que los armadores dejen de operar en ese puerto.",
          "Muchas terminales naturalizan la congestión. Pero la pregunta correcta es cuánto de esa congestión es estructural y cuánto se debe a mala planificación. En muchos casos los barcos llegan sin suficiente anticipación, la terminal no planifica la secuencia óptima y los muelles no están preparados.",
          "También se estiran los tiempos de permanencia. Equipos fuera de posición, mantenimiento pendiente, procesos administrativos con múltiples aprobaciones, coordinación pobre entre grúas, almacenes y transporte interno, o trabajadores esperando instrucciones pueden convertir una operación de 30 horas en una de 50.",
          "La mala planificación genera congestión cuando la terminal opera reactivamente. Los almacenes se saturan, los equipos buscan permanentemente dónde ir y los operadores no conocen la prioridad. Una terminal bien planificada anticipa los barcos, programa el almacenamiento, reserva ventanas de mantenimiento y coordina a los proveedores internos.",
          "La diferencia entre una terminal reactiva y una planificada puede representar entre 40% y 50% en los tiempos de permanencia, sin modificar un milímetro de infraestructura.",
          "La baja utilización de equipos es otra pérdida invisible. Una grúa de última generación disponible solo el 60% del tiempo destruye valor por falta de trabajo planificado, repuestos, operadores, carga lista o coordinación entre muelles.",
          "Los procesos administrativos también pueden ralentizar todo. Inspección aduanera, documentos, liberación del almacén, autorización de grúa y confirmación de espacio son necesarios, pero pueden diseñarse en serie o en paralelo. La diferencia puede ser de horas.",
          "Finalmente, la falta de coordinación entre áreas lleva a que cada equipo optimice localmente mientras el sistema funciona mal. El almacenamiento, el transporte interno y las operaciones deben aceptar ciertos ajustes locales para optimizar el flujo global.",
        ],
      },
      {
        heading: "Cómo un diagnóstico operacional revela el verdadero problema",
        paragraphs: [
          "Un diagnóstico operacional serio no es un cuestionario. Es una investigación profunda que requiere observar la terminal en operación, ver dónde ocurren las esperas, documentar la fricción, entrevistar operadores y revisar datos con detalle.",
          "Un buen diagnóstico encuentra que los números reportados esconden realidades diferentes: que una terminal con 30 movimientos por hora tiene una volatilidad de más o menos 30%, que las esperas supuestamente ocasionales ocurren en 40% de los barcos, o que procesos de dos horas tardan seis.",
          "También mapea las causas. No es suficiente saber que hay esperas: hay que entender si se deben a falta de capacidad, coordinación con aduanas, mala planificación o equipos constantemente en mantenimiento.",
          "Las causas determinan las soluciones. Si falta capacidad, hay que invertir en infraestructura. Si falta coordinación, hay que rediseñar procesos. Si la planificación es débil, hay que mejorar sistemas de información y procesos de programación. Son soluciones completamente diferentes.",
        ],
      },
      {
        heading: "Los quick wins: dónde están los millones escondidos",
        paragraphs: [
          "En casi todos los diagnósticos operacionales serios aparecen oportunidades que no requieren una inversión significativa.",
          "Los procesos administrativos pueden rediseñarse para eliminar la mitad de los tiempos de espera. Esto requiere cambios de procesos, no infraestructura, y puede implementarse en semanas. El impacto puede traducirse en 20% o 30% más barcos atendidos sin obras adicionales.",
          "La coordinación entre áreas puede mejorar redefiniendo métricas e incentivos. Medir el flujo de carga optimizado en lugar de únicamente minimizar movimientos internos genera decisiones diferentes y mejores resultados.",
          "La planificación diaria puede pasar de reactiva a anticipada usando información que ya existe. Planificar con cinco días de anticipación puede hacer desaparecer la congestión sin sumar equipamiento.",
          "Los equipos pueden estar subutilizados por falta de mantenimiento preventivo. Una inversión pequeña en planificación elimina emergencias que interrumpen la operación y puede llevar la utilización de 60% a más de 80%.",
          "Estos son los quick wins: mejoras operacionales que no requieren mega-inversiones, pero generan un valor equivalente.",
        ],
      },
      {
        heading: "El costo real de no hacer nada",
        paragraphs: [
          "Mientras una terminal no aborda estos problemas operacionales, está pagando un costo real, aunque permanezca invisible.",
          "Cada barco que tarda 50 horas en lugar de 30 es un barco menos que puede hacer ese mes. Si una terminal atiende 100 barcos mensuales y cada uno suma 20 horas extra, son 2.000 horas de permanencia desperdiciadas: capacidad para 16 a 20 barcos adicionales.",
          "Si cada barco adicional genera 20.000 dólares de ingresos, son entre 300.000 y 400.000 dólares mensuales que quedan sobre la mesa, o entre 3,6 y 4,8 millones de dólares anuales en una terminal pequeña o mediana.",
          "Y eso solo considera esperas y permanencia. No incluye el costo de equipos subutilizados, procesos ineficientes o congestión por mala coordinación. El valor invisible deja de ser invisible cuando se mide.",
        ],
      },
      {
        heading: "Por qué las terminales no hacen diagnósticos operacionales",
        paragraphs: [
          "Si el potencial es tan alto, ¿por qué no todas las terminales hacen estos diagnósticos? Primero, porque requiere admitir que existe un problema. Muchas organizaciones prefieren creer que los números reportados son correctos.",
          "Segundo, porque el diagnóstico suele requerir una mirada externa, sin los prejuicios de siempre lo hemos hecho así. Pero traer consultores externos puede generar resistencia interna.",
          "Tercero, porque algunos problemas requieren cambios organizacionales que generan fricción. Cambiar métricas de desempeño significa que algunos equipos que parecían eficientes de repente no lo son.",
          "Pero la competencia no espera. Mientras una terminal evita hacer un diagnóstico, otra puede estar usando uno similar para capturar la demanda que se está perdiendo.",
        ],
      },
      {
        heading: "Conclusión: el valor que no aparece en el balance",
        paragraphs: [
          "Una terminal con infraestructura vieja pero bien operada puede ser un negocio sano. Una terminal con infraestructura moderna pero mal operada puede ser un activo que destruye valor.",
          "El error estratégico más común es asumir que la inversión en infraestructura automáticamente genera competitividad. No es así. La inversión genera potencial. La operación genera realidad.",
          "Un diagnóstico operacional no es un lujo. Es uno de los ejercicios más económicos que puede hacer una terminal: cuesta relativamente poco e identifica oportunidades de mejora que pueden generar más valor que la infraestructura considerada.",
          "La pregunta no es si hay que invertir en nueva infraestructura. La pregunta es si estamos operando la infraestructura actual al máximo potencial.",
          "En la mayoría de los casos, la respuesta es no. Y ahí están los millones escondidos.",
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
  return Math.max(1, Math.ceil(wordCount / 190));
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
