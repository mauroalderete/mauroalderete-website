import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';
import { frontendIcon } from '../../assets/icons';
import { mdiDraw, mdiShareVariantOutline, mdiTimerOutline } from '@mdi/js';

export class FrontendProfileMock implements IProfile {
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
    this.type = ProfileType.Frontend;
    this.maintain = false;
    this.title = 'Frontend';
    this.icon = frontendIcon;
    this.resume = '/profile/frontend/resumes/mauro-alderete-frontend.pdf';

    this.headline = 'Experiencias fluidaz, dinámicas y atrapantes';

    this.rol = new Array<string>();
    this.rol.push(
      `Creativo, innovador y con iniciativa. Suelo trabajar en
      equipos aportando puntos de vista alternativos y realizando un análisis
      estratégico sobre las implementaciones técnicas. Siempre estoy
      esforzándome en generar un valor agregado para el cliente.`,
      `Trabajo con muchos stacks tecnológicos que involucran: JavaScript,
      TypeScript, HTML5, CSS3, WebComponents, Angular, LitElement y más.`,
      `Llevé adelante numerosos proyectos que abarcan desde webs, webapps
      y desarrollos mobile nativos, hasta diseños de interfaces para
      videojuegos. Espero continuar sumando desafíos, aprender y compartir lo
      aprendido durante el proceso.`
    );

    this.features = 'alguna feature';
    this.softSkills = new Array<ISoftSkill>();

    this.softSkills.push(
      {
        guid: 1,
        title: 'Colaboración',
        icon: mdiShareVariantOutline,
        paragraph: [
          `Suelo trabajar con equipos multidisciplinares, colaborando con los clientes, el product manager y los diseñadores para alcanzar los objetivos que nos planteamos.`,
          `Me gusta compartir muchas opciones en la mesa de debate, junto con un análisis de sus fortalezas y debilidades técnicas.
          Me esfuerzo por encontrar soluciones prácticas y eficaces a los problemas técnicos que se presentan.`,
          `Estoy comprometido a hacer todo lo que esté a mi alcance para mejorar la productividad y calidad de los productos que entregamos al cliente.`,
        ],
      },
      {
        guid: 2,
        title: 'Creatividad',
        icon: mdiDraw,
        paragraph: [
          'Resuelvo los desafíos únicos de cada proyecto con creatividad.',
          'Puedo evaluar los objetivos, recursos, contextos y estrategias para explorar los problemas creativamente y promover soluciones innovadoras.',
          'Esto se debe a mi amplia experiencia resolviendo dificultades, lo que me permite pensar fuera de la caja y encontrar nuevas perspectivas.',
        ],
      },
      {
        guid: 3,
        title: 'Gestión de proyectos',
        icon: mdiTimerOutline,
        paragraph: [
          `Colaboro con los equipos para maximizar el uso de los recursos, para que logremos trabajar de forma más eficiente y mejorar la productividad.`,
          `Me esfuerzo por lograr planificaciones eficientes que, permitan completar a tiempo y dentro del presupuesto cada una de las tareas involucradas en los proyectos.`,
          `Mi experiencia me ha demostrado que una planificación y organización eficaz ayudan a reducir el estrés,
          lo que a su vez contribuye a una mejor calidad del producto, mejores resultados y mayor satisfacción de los equipos de trabajo.`,
        ],
      }
    );

    this.hardSkills = new Array<IHardSkill>();
    this.hardSkills.push({ label: 'HTML5' });
    this.hardSkills.push({ label: 'CSS3' });
    this.hardSkills.push({ label: 'Javascript' });
    this.hardSkills.push({ label: 'Typescript' });
    this.hardSkills.push({ label: 'Node.js' });
    this.hardSkills.push({ label: 'Angular' });
    this.hardSkills.push({ label: 'LitElement' });
    this.hardSkills.push({ label: 'WebComponents' });
    this.hardSkills.push({ label: 'Electron' });
    this.hardSkills.push({ label: 'Ionic' });
    this.hardSkills.push({ label: 'Cordova' });
    this.hardSkills.push({ label: 'Capacitor' });
    this.hardSkills.push({ label: 'Bootstrap' });
    this.hardSkills.push({ label: 'JQuery' });
    this.hardSkills.push({ label: 'Ajax' });
    this.hardSkills.push({ label: 'Microsoft Winforms' });
    this.hardSkills.push({ label: 'Microsoft Xamarin' });

    this.hardSkills.push({ label: 'Git' });
    this.hardSkills.push({ label: 'Github' });
    this.hardSkills.push({ label: 'Gitlab' });
    this.hardSkills.push({ label: 'NPM' });
    this.hardSkills.push({ label: 'Docker' });

    this.hardSkills.push({ label: 'Responsive Design' });
    this.hardSkills.push({ label: 'Progressive Web App' });
    this.hardSkills.push({ label: 'WebApps' });
    this.hardSkills.push({ label: 'Apps Híbridas' });
    this.hardSkills.push({ label: 'Material Design' });
    this.hardSkills.push({ label: 'Apps Android' });
    this.hardSkills.push({ label: 'Apps Handheld' });

    this.hardSkills.push({ label: 'API RESTfull' });
    this.hardSkills.push({ label: 'JWT' });
    this.hardSkills.push({ label: 'SOLID' });
    this.hardSkills.push({ label: 'Dependency injection Pattern' });
    this.hardSkills.push({ label: 'Factory Pattern' });
    this.hardSkills.push({ label: 'Strategy Pattern' });
    this.hardSkills.push({ label: 'Singleton Pattern' });
    this.hardSkills.push({ label: 'Sub-Pub Pattern' });
    this.hardSkills.push({ label: 'Store Pattern' });
    this.hardSkills.push({ label: 'Promese Pattern' });
    this.hardSkills.push({ label: 'Observer Pattern' });
    this.hardSkills.push({ label: 'Hexagonal Pattern' });

    this.hardSkills.push({ label: 'Aprendiendo ReactJS' });
    this.hardSkills.push({ label: 'Aprendiendo VueJS' });

    this.projects = new Array<IProject>();
    this.projects.push(
      {
        title: 'Website Personal',
        media: '/profile/frontend/media/mauroalderete.png',
        paragraph: [
          'Diseñe este sitio web inspirado en el mundo de los videojuegos.',
          '😎 Nació como una propuesta para organizar mis proyectos personales y darlos a conocer a la comunidad tech.',
          'Utilizo Typescript, WebComponents y LitElement. Node y NPM forman parte del entorno de desarrollo. Al utilizar Github  para versionar el portafolio puedo implementar los Github Actions que construí y compartí con la comunidad.',
        ],
      },
      {
        title: 'Website Rayquen',
        media: '/profile/frontend/media/rayquen.png',
        paragraph: [
          'Rayquen es una iniciativa educativa que surgió hace algunos años para brindar un espacio de aprendizaje y desarrollo personal en el marco de las nuevas tecnologías.',
          'Diseñé el sitio web como una Landing Page que permite a los visitantes conocer los cursos ofrecidos con gran cantidad de detalles. Explorar las propuestas y registrarse en las clases.',
          'Fue diseñado sin frameworks, únicamente con JavaScript, CSS y HTML. Una serie de scripts en php gestionan algunas operaciones de backend.',
          '👇 Te invito a dar una vuelta por rayquen.com, estoy seguro de que encontrarás algo que te llame la atención.',
        ],
        target: 'https://rayquen.com',
      },
      {
        title: 'alMercadito',
        media: '/profile/backend/media/almercadito.png',
        paragraph: [
          `Es un sistema para el registro y trazabilidad de ingresos y egresos de un almacén. Incluye facturación, stock y listas de precios.`,
          `Elaboré el frontend con Google AppSheet, 😱 una solución No Code, que se integra con los servicios de google para el almacenamiento de datos y brinda asistencia automática con una Inteligencia Arficial.`,
          `😏 Elegí una solución No Code para permitirle a los clientes empezar a registrar sus operaciones lo antes posible`,
          `La experiencia fue gratificante. Pude abordar muchos aspectos UX/UI que había estudiado hasta el momento y obtener feedbacks muy rápidos`,
          `También, elaboré el backend del sistema. Si tenés curiosidad sobre como lo hice, visita mi perfil de backend en la sección de proyectos para ver más detalles.`,
        ],
      }
    );
    this.blog = '';
  }
}
