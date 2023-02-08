import { IProfile, ISoftSkill, ProfileType } from '../../models/profile.model';
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
  hardSkills: string;
  projects: string;
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
        'Siempre estoy dispuesto a colaborar con clientes, product manager y el equipo de diseño para alcanzar los objetivos que nos planteamos. Suelo aportar muchas opciones en las mesas de debate, junto con las fortalezas y debilidades técnicas.',
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

    this.hardSkills = 'Unity C# C++';
    this.projects = 'Snake en pascal';
    this.blog = 'Minimax en el tateti';
  }
}
