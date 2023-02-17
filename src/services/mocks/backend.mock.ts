import { mdiHeadDotsHorizontalOutline, mdiLightningBolt, mdiShareVariantOutline } from '@mdi/js';
import { backendIcon } from '../../assets/icons';
import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';

export class BackendProfileMock implements IProfile {
  type: ProfileType;
  maintain: boolean;
  title: string;
  icon: string;
  resume: string;

  headline: string;
  rol: Array<string>;
  features: string;
  softSkills: Array<ISoftSkill>;
  hardSkills: Array<IHardSkill>;
  projects: Array<IProject>;
  blog: string;

  constructor() {
    this.type = ProfileType.Backend;
    this.maintain = false;
    this.title = 'Backend';
    this.icon = backendIcon;
    this.resume = '/profile/backend/resumes/mauro-alderete-backend.pdf';

    this.headline = 'Fortalezco las experiencias digitales al construir las bases para un futuro mejor.';
    this.rol = new Array<string>();
    this.rol.push(
      `Soy un profesional innovador y con iniciativa. Me entusiasma estar al
tanto de las últimas tecnologías en arquitectura y encontrar nuevos
desafíos donde poder ser capaz de implementarlas.`,
      `Mi especialidad son los lenguajes C/C++/C#, pero también he
completado proyectos con varios stacks tecnológicos: Node.js,
JavaScript, TypeScript, Python, Conda, Golang, Bash, Java, base de
datos relacionales y documentales, cloud computing entre otros.`,
      `Diseñé diversas arquitecturas de microservicios, frameworks privados, y
algunos toolings que comparto públicamente con la comunidad.`
    );

    this.features = '';
    this.softSkills = new Array<ISoftSkill>();

    this.softSkills.push(
      {
        guid: 1,
        title: `Pensamiento crítico, lógico, reflexivo y flexible`,
        icon: mdiHeadDotsHorizontalOutline,
        paragraph: [
          `Trabajando en múltiples proyectos, he tenido la oportunidad de mejorar mis habilidades de pensamiento crítico, lógico, reflexivo y flexible, que son claves para abordar los desafíos que el desarrollo backend presenta.`,
          `Soy capaz de evaluar una situación desde diferentes perspectivas, examinar todos los puntos de vista y verificar las fuentes de información para llegar a conclusiones informadas, convincentes y eficaces.`,
          `Además, tengo la capacidad de adaptarme rápidamente a los cambios y encontrar soluciones creativas y eficaces a problemas complejos.`,
        ],
      },
      {
        guid: 2,
        title: 'Innovación',
        icon: mdiLightningBolt,
        paragraph: [
          'Al reunir mi experiencia en múltiples áreas de IT, junto con las experiencias atravesadas por mis compañeros de equipo, logro converger las ideas y encontrar las mejoras formas de llevarlas adelante.',
          'Para lograrlo, utilizo un enfoque estratégico y diferentes métodos y tácticas para evaluar los beneficios y desafíos en cada paso.',
          'Esto me permite aprovechar al máximo la experiencia de cada miembro del equipo para encontrar, en las mejoras creativas, las soluciones más innovadoras.',
        ],
      },
      {
        guid: 3,
        title: 'Colaboración',
        icon: mdiShareVariantOutline,
        paragraph: [
          `Suelo trabajar con equipos multidisciplinares, colaborando con los clientes, el product manager y los diseñadores para alcanzar los objetivos que nos planteamos.`,
          `Me gusta compartir muchas opciones en la mesa de debate, junto con un análisis de sus fortalezas y debilidades técnicas.
          Me esfuerzo por encontrar soluciones prácticas y eficaces a los problemas técnicos que se presentan.`,
          `Estoy comprometido a hacer todo lo que esté a mi alcance para mejorar la productividad y calidad de los productos que entregamos al cliente.`,
        ],
      }
    );

    this.hardSkills = new Array<IHardSkill>();
    this.hardSkills.push(
      { label: 'C++' },
      { label: 'C#' },
      { label: 'Python' },
      { label: 'Golang' },
      { label: 'PHP' },
      { label: 'LINQ' },
      { label: 'SQL' },
      { label: 'Bash Scripting' }
    );

    this.hardSkills.push(
      { label: '.NET Framework' },
      { label: '.NET Core' },
      { label: 'Entity Framework' },
      { label: 'Express.js' },
      { label: 'OpenGL' },
      { label: 'MSTest' },
      { label: 'Gotest' },
      { label: 'Jest' }
    );

    this.hardSkills.push(
      { label: 'Cloud Firestore' },
      { label: 'SQL Server' },
      { label: 'MySQL' },
      { label: 'PostgreSQL' },
      { label: 'CQRS' }
    );

    this.hardSkills.push({ label: 'Git' }, { label: 'Github' }, { label: 'Gitlab' }, { label: 'NPM' });

    this.hardSkills.push(
      { label: 'SSH' },
      { label: 'XML' },
      { label: 'JWT' },
      { label: 'WebServices' },
      { label: 'WebSockets' },
      { label: 'MQTT' }
    );

    this.hardSkills.push(
      { label: 'Microservicios' },
      { label: 'Docker' },
      { label: 'Google Cloud Platform' },
      { label: 'Microsoft Azure' },
      { label: 'Google Functions' },
      { label: 'Linux' },
      { label: 'Apache' },
      { label: 'NGINX' }
    );

    this.hardSkills.push(
      { label: 'SOLID' },
      { label: 'API RESTfull' },
      { label: 'JWT' },
      { label: 'Dependency injection Pattern' },
      { label: 'Factory Pattern' },
      { label: 'Strategy Pattern' },
      { label: 'Singleton Pattern' },
      { label: 'Sub-Pub Pattern' },
      { label: 'Store Pattern' },
      { label: 'Promese Pattern' },
      { label: 'Observer Pattern' },
      { label: 'Hexagonal Pattern' }
    );

    this.projects = new Array<IProject>(
      {
        title: 'GCode CLI',
        media: '/profile/backend/media/gcode-cli.png',
        paragraph: [
          `GCode CLI es una herramienta de línea de comandos que facilita
          la aplicación de operaciones masivas sobre archivos gcode de impresión 3D,
          como correcciones de sesgo, transformaciones o verificaciones de integridad.`,
          `😎 Construí este tooling para automatizar el proceso de mis impresiones 3D y realizar ajustes sobre los ficheros independientemente del Slicer que esté usando en ese momento.`,
          `Está escrito en Golang. Utiliza Cobra. Incluye pruebas unitarias y verificación de vulnerabilidades con CodeQL y otros servicios de terceros.`,
          `😊 Es OpenSource, así que siéntete libre de colaborar.`,
        ],
        target: `https://github.com/mauroalderete/gcode-cli`,
      },
      {
        title: 'GCode CORE',
        media: '/profile/backend/media/gcode-core.png',
        paragraph: [
          `Se trata de una biblioteca de Golang para modelar, manipular y editar comandos, bloques y archivos de código G.`,
          `Brinda un conjunto de interfaces y objetos para simplificar la manipulación de archivos gcode a un bajo nivel.`,
          `Fue construido servir como un motor de GCode CLI y automatizar el pre-procesamiento de archivos gcode antes de enviarlos a imprimir.`,
          `Esta biblioteca de Golang implementa un patrón de diseño innovador 
          para el tratamiento de los argumentos de constructores de estructuras,
          que permite aislar a los usuarios de los mecanismos internos sin perder características de escalabilidad y mantenibilidad.`,
          `🧐 Es un proyecto OpenSource, por lo que si sentís algo de curiosidad sobré lo que estoy hablando podes echarle una mirada. Cúentame que logras descubrir a través de mis redes.`,
        ],
        target: `https://github.com/mauroalderete/gcode-core`,
      },
      {
        title: 'PKGSite Local Live',
        media: '/profile/backend/media/pkgsite-local-live.png',
        paragraph: [
          `¿Alguna vez escribieron la documentación de su paquete Golang con errores, pero solo se dieron cuenta una vez que ya lo publicaron en los servidores? Pues, a mí me paso. Para evitar estos problemas y mejorar mi productividad nació PKGStie Local Live.`,
          `Se trata de un conjunto de servicios que brinda, desde un navegador, una vista previa de la documentación técnica de los paquetes Golang escritos en tu espacio de trabajo local.`,
          `Esto es extremadamente útil para verificar el resultado final de la documentación sin necesidad de andar desplegando nada en servidores. Simplemente, abrís tu código, lo editas, lo guardas y chequeas como se ve en tu navegador.`,
          `Básicamente funciona con un proxy reverso escrito en Golang, un servicio que gestiona un websocket, una instancia del servicio pkgsite y un watcher.`,
          `👇 Si querés saber más te invito a mirar el repositorio público, ya que este también es un proyecto OpenSource.`,
        ],
        target: `https://github.com/mauroalderete/pkgsite-local-live`,
      },
      {
        title: 'alMercadito',
        media: '/profile/backend/media/almercadito.png',
        paragraph: [
          `Es un sistema para el registro y trazabilidad de ingresos y egresos de un almacén. Incluye facturación, stock y listas de precios.`,
          `Elaboré el frontend con una solución No Code, lo que permitió que los clientes empezaran a operar rápidamente y me dio espacio para enfocarme en el backend.`,
          `Aborde el desarrollo del backend utilizando el enfoque DDD (Domain Driven Design) por medio de microservicios escritos en Golang que interactúan con una infraestructura CQRS.`,
          `De esta forma logro relacionar los datos de movimientos que la solución No Code vuelca en Google Spreadsheet con una base de datos PostgreSQL desplegada en Heroku para, posteriormente, explotarlos con consultas de métricas y realizar análisis estratégicos.`,
        ],
      },
      {
        title: 'ivy',
        media: '/profile/backend/media/ivy.png',
        paragraph: [
          `🤖 Ivy es un chatbot simple, sin memoria, escrito en Python utilizando la popular librería NLTK para el procesamiento del lenguaje natural.`,
          `Permite explorar un corpus predefinido y vincularlo a posibles respuestas preconfiguradas. En otras palabras, es un asistente que responde a preguntas frecuentes de los usuarios`,
          `Construí Ivy para que me asista con el dictado de mis clases de Robótica para niños. Las clases eran populares y en ocasiones debía enfocarme más en algunos alumnos que en otros.
          Ivy me permitió darles a los estudiantes una opcion más de aprendizaje al otorgarles una fuente de conocimiento especializada.`,
          `Hay una versión pública que podes encontrar en mis repositorios, sentite libre de participar como más te guste`,
        ],
        target: `https://github.com/mauroalderete/chatbot-research`,
      },
      {
        title: 'RSViewer 3D',
        media: '/profile/backend/media/rsviewer3d.png',
        paragraph: [
          `Es un sistema para el seguimiento, trazabilidad y visualización de robots
          multi-agentes que circulan un espacio confinado en tiempo real. Requirió
          la elaboración con primitivas para el renderizado 3D usando OpenGL y
          escrito en C++.`,
          `
          Permitía cargar objetos modelados por software de terceros (3D Studio
          Max) y aplicar texturas personalizadas. Incluía un sistema de detección
          de infracciones similar al VAR de hoy en día`,
        ],
      },
      {
        title: 'Robot Soccer',
        media: '/profile/backend/media/robot-soccer.png',
        paragraph: [
          `Trabaje en el desarrollo de varios equipos de robots que juegan al fútbol 🤖⚽ de manera completamente autónoma
          en un entorno altamente dinámico de información completa e imperfecta.`,
          `
          Usando heurísticas y algoritmos de aprendizaje automático, elaboré frameworks para la navegación y
          coordinación de entidades multi-agentes.`,
          `
          La solución requirió múltiples implementaciones. Un sistema de visión capaz de diferenciar los objetos en una
          cancha. Un servicio escrito en C++ que se encargaba de analizar y determinar las estrategias de los equipos, y
          el firmware de cada agente para controlar los movimientos hechos en C++ y assembler para microcontroladores`,
          `Los diseños se pusieron a prueba en diversas ediciones del Campeonato Argentino de Fútbol de Robots con los
          que logré puestos importantes: dos veces 1°🥇 puesto, una ves 2°🥈 y tres veces 3°🥉.`,
          `🥳🎉 En el año 2008 me quedé con el podio completo del campeonato el 1°, 2° y 3° puesto.`,
        ],
      },
      {
        title: 'I+D',
        media: '/profile/backend/media/lab.jpg',
        paragraph: [
          `
        Durante el 2005 al 2008 aproximadamente estuve a cargo del laboratorio de Robótica de la EEM N°7 "Roberto Arlt", en
Malvinas Argentinas. Como parte de un acuerdo de colaboración y
difusión, lideré las líneas de investigación y de desarrollo que cubrían:`,
          `◆ El diseño de sistemas multi-agentes para fútbol de robots físicos.`,
          `◆ La investigación y puesta a punto de un sistema de visión artificial
para la detección y seguimiento de objetos en un plano.`,
          `◆ Telemática`,
          `◆ El estudio de computación descentralizada para sistemas multiagentes.`,
        ],
      }
    );

    this.blog = '';
  }
}
