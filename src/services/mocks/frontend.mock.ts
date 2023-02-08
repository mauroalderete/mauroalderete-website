import { IProfile, ProfileType } from '../../models/profile.model';
import { frontendIcon } from '../../assets/frontend.icon';

export class FrontendProfileMock implements IProfile {
  type: ProfileType;
  title: string;
  icon: string;
  resume: string;

  headline: string;
  rol: string;
  features: string;
  softSkills: string;
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
    this.softSkills = 'Experiencia...';
    this.hardSkills = 'Unity C# C++';
    this.projects = 'Snake en pascal';
    this.blog = 'Minimax en el tateti';
  }
}
