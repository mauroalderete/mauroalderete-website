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
        title: 'Aqueron[Prelude]',
        media: '/profile/gamedev/media/gamedev-show-1.gif',
        paragraph: [
          'Aqueron[Prelude] es el título del videojuego en el que estoy trabajando actualmente.',
          'Consiste en una biblioteca de juegos casuales unidos por una narrativa común. El jugador deberá competir contra tres IA diferentes para conseguir fragmentos de narrativas y descubrir poco a poco la historia que se esconde detrás de la llegada de las criaturas.',
          'Se trata del primer videojuego que publicaré en las tiendas de Google. Está desarrollado con Unity 2021.3.16f1.',
          '🧐 Echale un vistazo a la intro completa y contame a través de mis redes que te pareció',
        ],
        target: '/profile/gamedev/media/gamedev-show-1.gif',
      },
      {
        title: 'Space Dragon',
        media: '/profile/gamedev/media/spacedragon.png',
        paragraph: [
          'Cuando me enteré de que existía un motor de videojuegos open source, multiplataforma, gratuito y creado por argentinos, no dude ni un minuto en probarlo.',
          'Realice varios experimentos con Godot Engine, minijuegos casuales con la única intención de probar las características del motor.',
          'Space Dragon es uno de los tantos minijuegos. Con este juego en particular quería poner aprueba la gestión de los eventos de teclado.',
          '🧐 Podes darle un vistazo en la demo.',
          'WARNING: Solo funciona con las flechas de un teclado. No es responsivo, así que si lo notas algo raro, tranquilo, 😅 es normal.',
        ],
        target: '/demo/spacedragon/Space Guy.html',
      },
      {
        title: 'Battle Tank',
        media: '/profile/gamedev/media/battletank.png',
        paragraph: [
          'Otro experimento realizado con Godot Engine y escrito en GDScript.',
          'En esta oportunidad quería probar que tan fácil o difícil podía ser replicar un juego simple utilizando Godot Engine.',
          'Elegí realizar un clon del popular Battle Tank porque posee aspectos ideales para reproducir de manera rápida: escenario estático, pocos objetos, colisiones sencillas y mecánicas claras. Además, es uno de mis juegos retro preferidos. 😁',
          '🧐 Dale un vistazo al boceto del juego y contame que tan parecido lo ves al original a través de mis redes sociales.',
          'WARNING: El juego no está optimizado, por lo que puede tardar un poco en cargar, 😅 es normal. Si ves que tarda mucho trata actualizando la página',
        ],
        target: '/demo/battletank/BattleTank.html',
      }
    );

    this.blog = '';
  }
}
