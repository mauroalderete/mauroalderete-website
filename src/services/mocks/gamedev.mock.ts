import { mdiDraw, mdiLightningBolt, mdiThemeLightDark } from '@mdi/js';
import { gamedevIcon } from '../../assets/icons';
import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';

export class GamedevProfileMock implements IProfile {
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
    this.type = ProfileType.Gamedev;
    this.maintain = false;
    this.title = 'Gamedev';
    this.icon = gamedevIcon;
    this.resume = '/profile/gamedev/resumes/mauro-alderete-gamedev.pdf';

    this.headline = 'Entusiasmo por los videojuegos, su desarrollo y sus desafios';

    this.rol = new Array<string>();
    this.rol.push(
      'Soy un profesional innovador y con iniciativa. Suelo liderar proyectos de investigación y de desarrollo con diferentes stacks tecnológicos y lenguajes: C++, C#, JavaScript, Python, Go.'
    );
    this.rol.push(
      'A lo largo de los años abordé múltiples proyectos, desde el desarrollo de videojuegos clásicos y la construcción de equipos de robots competitivos usando modelos de aprendizaje automático, hasta la difusión científica y el desarrollo de software a medida para fábricas, distribuidores y bancos entre otros.'
    );
    this.rol.push(
      'Apasionado del desarrollo de videojuegos y sus desafíos. Mis primeros pasos en la programación fueron construyendo videojuegos. Espero continuar haciéndolo formando parte de un grandioso equipo.'
    );

    this.features = 'alguna feature';
    this.softSkills = new Array<ISoftSkill>();

    this.softSkills.push({
      guid: 1,
      title: 'Creatividad',
      icon: mdiDraw,
      paragraph: [
        'Resuelvo los desafíos únicos de cada proyecto con creatividad.',
        'Puedo evaluar los objetivos, recursos, contextos y estrategias para explorar los problemas creativamente y promover soluciones innovadoras.',
        'Esto se debe a mi amplia experiencia resolviendo dificultades, lo que me permite pensar fuera de la caja y encontrar nuevas perspectivas.',
      ],
    });

    this.softSkills.push({
      guid: 2,
      title: 'Adaptación',
      icon: mdiThemeLightDark,
      paragraph: [
        'Durante mi carrera profesional, tuve la oportunidad de participar en múltiples proyectos y asumir diferentes roles.',
        'Esto me ayudo a desarrollar mi adaptabilidad, convirtiéndola en una de mis habilidades más importantes.',
        'Hoy en día soy capaz de enfrentar desafiós desde diferentes lugares, reconocer mis limitaciones y destacar tanto mis fortalezas como las de mis compañeros de equipo para llevar a cabo cualquier proyecto.',
      ],
    });

    this.softSkills.push({
      guid: 3,
      title: 'Innovación',
      icon: mdiLightningBolt,
      paragraph: [
        'Al reuinir mi experiencia en multiples áreas de IT, junto con las experiencias atravesadas por mis compañeros de equipo, logro converger las ideas y encontrar las mejoras formas de llavarlas adelante.',
        'Para lograrlo, utilizo un enfoque estrategico y diferentes métodos y tacticas para evaluar los beneficios y desafíos en cada paso.',
        'Esto me permite aprovehar al máximo la experiencia de cada miembro del equipo para encontrar, en las mejoras creativas, las soluciones más innovadoras.',
      ],
    });

    this.hardSkills = new Array<IHardSkill>();
    this.hardSkills.push({ label: 'Unity 3D' });
    this.hardSkills.push({ label: 'Godot Engine' });
    this.hardSkills.push({ label: 'Div2 Game Studio' });
    this.hardSkills.push({ label: 'PyGame' });

    this.hardSkills.push({ label: 'C++' });
    this.hardSkills.push({ label: 'C#' });
    this.hardSkills.push({ label: 'Python' });
    this.hardSkills.push({ label: 'Golang' });
    this.hardSkills.push({ label: 'LINQ' });
    this.hardSkills.push({ label: 'SQL' });

    this.hardSkills.push({ label: 'OpenGL' });
    this.hardSkills.push({ label: '.NET Framework' });
    this.hardSkills.push({ label: '.NET Core' });
    this.hardSkills.push({ label: 'Entity Framework' });
    this.hardSkills.push({ label: 'MSTest' });

    this.hardSkills.push({ label: 'Cloud Firestore' });
    this.hardSkills.push({ label: 'SQL Server' });
    this.hardSkills.push({ label: 'MySQL' });
    this.hardSkills.push({ label: 'PostgreSQL' });

    this.hardSkills.push({ label: 'Docker' });
    this.hardSkills.push({ label: 'Google Cloud Platform' });
    this.hardSkills.push({ label: 'Microsoft Azure' });
    this.hardSkills.push({ label: 'Linux' });

    this.hardSkills.push({ label: 'SOLID' });
    this.hardSkills.push({ label: 'API RESTfull' });
    this.hardSkills.push({ label: 'JWT' });
    this.hardSkills.push({ label: 'Dependency injection Pattern' });
    this.hardSkills.push({ label: 'Factory Pattern' });
    this.hardSkills.push({ label: 'Strategy Pattern' });
    this.hardSkills.push({ label: 'Singleton Pattern' });
    this.hardSkills.push({ label: 'Sub-Pub Pattern' });
    this.hardSkills.push({ label: 'Store Pattern' });
    this.hardSkills.push({ label: 'Promese Pattern' });
    this.hardSkills.push({ label: 'Observer Pattern' });
    this.hardSkills.push({ label: 'Hexagonal Pattern' });

    this.projects = new Array<IProject>();
    this.projects.push(
      {
        title: 'Website Personal',
        media: '/profile/frontend/media/mauroalderete.png',
        paragraph: [
          'Diseñe éste sitio web inspirado en el mundo de los videojuegos.',
          'Nació como una propuesta para organizar mis proyectos personales y darlos a conocer a la comunidad tech.',
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
          'Te invito a dar una vuelta por rayquen.com, estoy seguro que encontrarás algo que te llame la atención.',
        ],
        target: 'https://rayquen.com',
      },
      {
        title: 'Hirameki',
        media: '/profile/frontend/media/hirameki.png',
        paragraph: [
          'Es muy común encontrar entre las comunidades de escritores a muchos autores enfrentandose al página en blanco.',
          'Hirameki es una aplicación que surgió para resolver ese problema.',
          'Permite escribir y crear pequeñas sinopsis de historias que combinan elementos aleatorios.',
        ],
        target: 'https://rayquen.com',
      },
      {
        title: 'Website Personal',
        media: '/profile/frontend/media/mauroalderete.png',
        paragraph: [
          'Diseñe éste sitio web inspirado en el mundo de los videojuegos.',
          'Nació como una propuesta para organizar mis proyectos personales y darlos a conocer a la comunidad tech.',
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
          'Te invito a dar una vuelta por rayquen.com, estoy seguro que encontrarás algo que te llame la atención.',
        ],
        target: 'https://rayquen.com',
      },
      {
        title: 'Hirameki',
        media: '/profile/frontend/media/hirameki.png',
        paragraph: [
          'Es muy común encontrar entre las comunidades de escritores a muchos autores enfrentandose al página en blanco.',
          'Hirameki es una aplicación que surgió para resolver ese problema.',
          'Permite escribir y crear pequeñas sinopsis de historias que combinan elementos aleatorios.',
        ],
        target: 'https://rayquen.com',
      },
      {
        title: 'Website Personal',
        media: '/profile/frontend/media/mauroalderete.png',
        paragraph: [
          'Diseñe éste sitio web inspirado en el mundo de los videojuegos.',
          'Nació como una propuesta para organizar mis proyectos personales y darlos a conocer a la comunidad tech.',
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
          'Te invito a dar una vuelta por rayquen.com, estoy seguro que encontrarás algo que te llame la atención.',
        ],
        target: 'https://rayquen.com',
      },
      {
        title: 'Hirameki',
        media: '/profile/frontend/media/hirameki.png',
        paragraph: [
          'Es muy común encontrar entre las comunidades de escritores a muchos autores enfrentandose al página en blanco.',
          'Hirameki es una aplicación que surgió para resolver ese problema.',
          'Permite escribir y crear pequeñas sinopsis de historias que combinan elementos aleatorios.',
        ],
        target: 'https://rayquen.com',
      },
      {
        title: 'Website Personal',
        media: '/profile/frontend/media/mauroalderete.png',
        paragraph: [
          'Diseñe éste sitio web inspirado en el mundo de los videojuegos.',
          'Nació como una propuesta para organizar mis proyectos personales y darlos a conocer a la comunidad tech.',
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
          'Te invito a dar una vuelta por rayquen.com, estoy seguro que encontrarás algo que te llame la atención.',
        ],
        target: 'https://rayquen.com',
      },
      {
        title: 'Hirameki',
        media: '/profile/frontend/media/hirameki.png',
        paragraph: [
          'Es muy común encontrar entre las comunidades de escritores a muchos autores enfrentandose al página en blanco.',
          'Hirameki es una aplicación que surgió para resolver ese problema.',
          'Permite escribir y crear pequeñas sinopsis de historias que combinan elementos aleatorios.',
        ],
        target: 'https://rayquen.com',
      }
    );
    this.blog = 'Minimax en el tateti';
  }
}
