import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';
import { frontendIcon } from '../../assets/icons';

export class FrontendProfileMock implements IProfile {
  type: ProfileType;
  title: string;
  icon: string;
  resume: string;

  headline: string;
  rol: string;
  features: string;
  softSkills: Array<ISoftSkill>;
  hardSkills: Array<IHardSkill>;
  projects: Array<IProject>;
  blog: string;

  constructor() {
    this.type = ProfileType.Frontend;
    this.title = 'Frontend';
    this.icon = frontendIcon;
    this.resume = '/profiles/frontend/resumes/mauro-alderete-frontend.pdf';

    this.headline = 'Interfaces dinámicas, fluidaz y atrapantes';
    this.rol = `Soy un profesional innovador y con iniciativa. Suelo liderar proyectos de investigación y de desarrollo con diferentes stacks tecnológicos y lenguajes: C++, C#, JavaScript, Python, Go.
  
      A lo largo de los años abordé múltiples proyectos, desde el desarrollo de videojuegos clásicos y la construcción de equipos de robots competitivos usando modelos de aprendizaje automático, hasta la difusión científica y el desarrollo de software a medida para fábricas, distribuidores y bancos entre otros.
      
      Apasionado del desarrollo de videojuegos y sus desafíos. Mis primeros pasos en la programación fueron construyendo videojuegos. Espero continuar haciéndolo formando parte de un grandioso equipo.`;
    this.features = 'alguna feature';
    this.softSkills = new Array<ISoftSkill>();

    this.softSkills.push({
      guid: 1,
      title: 'Colaboración',
      letter: 'C',
      paragraph: [
        'Siempre estoy dispuesto a colaborar con clientes, product manager y el equipo de diseño para alcanzar los objetivos que nos planteamos.',
        'Suelo aportar muchas opciones en las mesas de debate junto con un análisis de sus fortalezas y debilidades técnicas.',
      ],
    });

    this.softSkills.push({
      guid: 2,
      title: 'Creatividad',
      letter: 'C',
      paragraph: [
        'Cada proyecto es único y merece la pena resolverlos con creatividad. Estoy preparado para abordarlos con ideas fuera de la caja',
      ],
    });

    this.softSkills.push({
      guid: 3,
      title: 'Feedback',
      letter: 'F',
      paragraph: [
        'Me encanta recibir feedback de los clientes y usuarios. Es uno de los recursos más importantes con el que contamos para lograr grandiosos proyectos.',
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
        media: '/profiles/frontend/media/mauroalderete.png',
        paragraph: [
          'Diseñe este inspirado en el mundo de los videojuegos.',
          'Nació como una propuesta para organizar mis proyectos personales y darlos a conocer a la comunidad tech.',
          'Utilizo Typescript, WebComponents y LitElement. Node y NPM forman parte del entorno de desarrollo. Al utilizar Github como el repositorio principal puedo implementar los Github Actions que diseñe para mantener el versionado del proyecto.',
        ],
      },
      {
        title: 'Website Rayquen',
        media: '/profiles/frontend/media/rayquen.png',
        paragraph: [
          'Rayquen es una iniciativa educativa que surgió hace algunos años para brindar un espacio de aprendizaje y desarrollo personal en el marco de las nuevas tecnologías.',
          'Diseñe el sitio web como una Landing Page que permite a los visitantes conocer los cursos, explorar las propuestas y registrarse en las clases.',
          'Fue diseñado sin framework, unicamente con JavaScript y practicamente sin librerias internas. Una serie de scripts en php gestionan algunas operaciones de backend.',
          'Te invito a dar una vuelta por Rayquen, seguro que encontrarás algo interesante.',
        ],
        target: 'https://rayquen.com',
      }
    );
    this.blog = 'Minimax en el tateti';
  }
}
