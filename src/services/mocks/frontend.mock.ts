import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';
import { frontendIcon } from '../../assets/icons';
import { mdiArmFlexOutline, mdiCalendarCheckOutline, mdiPaletteOutline } from '@mdi/js';

export class FrontendProfileMock implements IProfile {
  type: ProfileType;
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
    this.title = 'Frontend';
    this.icon = frontendIcon;
    this.resume = '/profile/frontend/resumes/mauro-alderete-frontend.pdf';
    this.resume = '/profile/gamedev/resumes/mauro-alderete-gamedev.pdf';

    this.headline = 'Experiencias fluidaz, dinámicas y atrapantes';

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
      title: 'Colaboración',
      icon: mdiArmFlexOutline,
      paragraph: [
        'Siempre estoy dispuesto a colaborar con clientes, product manager y el equipo de diseño para alcanzar los objetivos que nos planteamos.',
        'Suelo aportar muchas opciones en las mesas de debate junto con un análisis de sus fortalezas y debilidades técnicas.',
      ],
    });

    this.softSkills.push({
      guid: 2,
      title: 'Creatividad',
      icon: mdiPaletteOutline,
      paragraph: [
        'Objetivos, recursos, contextos y estrategias hacen que cada proyecto planteé desafios únicos. Gracias a mi experiencia puedo explorar los problemas con creatividad y promover ideas fuera de la caja.',
      ],
    });

    this.softSkills.push({
      guid: 3,
      title: 'Planificación',
      icon: mdiCalendarCheckOutline,
      paragraph: [
        'El desarrollo en front puede ser un gran desafio, sin una planificación consensuada puede terminar en un gran caos rápidamente.',
        'Para evitar esto suelo planear todas mis soluciones. Busco concensos en los equipos de trabajo y escucho las propuestas y puntos de vistas de mis compañeros de equipo.',
        'Con todo la información brindada puedo proponer rutas de desarrollo y metodologías para cada etapa de los proyectos.',
      ],
    });

    this.hardSkills = new Array<IHardSkill>();
    this.hardSkills.push({ label: 'Javascript' });
    this.hardSkills.push({ label: 'HTML5' });
    this.hardSkills.push({ label: 'CSS3' });
    this.hardSkills.push({ label: 'LitElement' });
    this.hardSkills.push({ label: 'Typescript' });
    this.hardSkills.push({ label: 'Angular' });
    this.hardSkills.push({ label: 'NodeJS' });
    this.hardSkills.push({ label: 'Winforms' });
    this.hardSkills.push({ label: 'Xamarin' });
    this.hardSkills.push({ label: 'Git' });
    this.hardSkills.push({ label: 'Github' });
    this.hardSkills.push({ label: 'Gitlab' });
    this.hardSkills.push({ label: 'NPM' });
    this.hardSkills.push({ label: 'Docker' });
    this.hardSkills.push({ label: 'Responsive Design' });
    this.hardSkills.push({ label: 'PWA' });
    this.hardSkills.push({ label: 'Web Apps' });
    this.hardSkills.push({ label: 'Apps Híbridas' });
    this.hardSkills.push({ label: 'ElectronJS' });
    this.hardSkills.push({ label: 'Ionic' });
    this.hardSkills.push({ label: 'Bootstrap' });
    this.hardSkills.push({ label: 'JQuery' });
    this.hardSkills.push({ label: 'Ajax' });
    this.hardSkills.push({ label: 'Material Design' });
    this.hardSkills.push({ label: 'Aprendiendo ReactJS' });
    this.hardSkills.push({ label: 'Aprendiendo VueJS' });
    this.hardSkills.push({ label: 'WebComponents' });
    this.hardSkills.push({ label: 'Apps Android' });
    this.hardSkills.push({ label: 'Apps Handheld' });

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
