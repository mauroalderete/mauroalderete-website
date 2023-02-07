import { IProfile } from '../models/profile.model';

export class ProfileService {
  public async GetProfileAsync(profile: string): Promise<IProfile> {
    return new Promise<IProfile>((resolve, reject) => {
      switch (profile) {
        case 'frontend':
          {
            resolve(new FrontendProfileMock());
          }
          break;
        case 'backend':
          {
            resolve(new BackendProfileMock());
          }
          break;
        case 'gamedev':
          {
            resolve(new GamedevProfileMock());
          }
          break;
        case 'sre':
          {
            resolve(new SREProfileMock());
          }
          break;
        case 'mentorship':
          {
            resolve(new MentorshipProfileMock());
          }
          break;
        default: {
          reject(new Error(`profile ${profile} not found`));
        }
      }
    });
  }

  public async GetProfilesAsync(): Promise<Array<IProfile>> {
    return new Promise<Array<IProfile>>((resolve) => {
      const profiles = new Array<IProfile>();

      profiles.push(new FrontendProfileMock());
      profiles.push(new BackendProfileMock());
      profiles.push(new GamedevProfileMock());
      profiles.push(new SREProfileMock());
      profiles.push(new MentorshipProfileMock());

      resolve(profiles);
    });
  }
}

class FrontendProfileMock implements IProfile {
  name: string;
  title: string;
  icon: string;
  colorCompose: string;
  resume: string;

  headline: string;
  rol: string;
  features: string;
  softSkills: string;
  hardSkills: string;
  projects: string;
  blog: string;

  constructor() {
    this.name = 'frontend';
    this.title = 'Frontend';
    this.icon = '/profiles/frontend/icons/frontend.svg';
    this.colorCompose = '0, 255, 0';
    this.resume = '/profiles/frontend/resumes/mauro-alderete-frontend.pdf';

    this.headline = 'Apasionado del desarrollo de videojuegos y sus desafíos.';
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

class BackendProfileMock implements IProfile {
  name: string;
  title: string;
  icon: string;
  colorCompose: string;
  resume: string;

  headline: string;
  rol: string;
  features: string;
  softSkills: string;
  hardSkills: string;
  projects: string;
  blog: string;

  constructor() {
    this.name = 'backend';
    this.title = 'Backend';
    this.icon = '/profiles/backend/icons/backend.svg';
    this.colorCompose = '0, 255, 0';
    this.resume = '/profiles/backend/resumes/mauro-alderete-backend.pdf';

    this.headline = 'Apasionado del desarrollo de videojuegos y sus desafíos.';
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

class GamedevProfileMock implements IProfile {
  name: string;
  title: string;
  icon: string;
  colorCompose: string;
  resume: string;

  headline: string;
  rol: string;
  features: string;
  softSkills: string;
  hardSkills: string;
  projects: string;
  blog: string;

  constructor() {
    this.name = 'gamedev';
    this.title = 'Game Developer';
    this.icon = '/profiles/gamedev/icons/gamedev.svg';
    this.colorCompose = '0, 255, 0';
    this.resume = '/profiles/gamedev/resumes/mauro-alderete-gamedev.pdf';

    this.headline = 'Apasionado del desarrollo de videojuegos y sus desafíos.';
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

class SREProfileMock implements IProfile {
  name: string;
  title: string;
  icon: string;
  colorCompose: string;
  resume: string;

  headline: string;
  rol: string;
  features: string;
  softSkills: string;
  hardSkills: string;
  projects: string;
  blog: string;

  constructor() {
    this.name = 'sre';
    this.title = 'SRE';
    this.icon = '/profiles/sre/icons/sre.svg';
    this.colorCompose = '0, 255, 0';
    this.resume = '/profiles/sre/resumes/mauro-alderete-sre.pdf';

    this.headline = 'Apasionado del desarrollo de videojuegos y sus desafíos.';
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

class MentorshipProfileMock implements IProfile {
  name: string;
  title: string;
  icon: string;
  colorCompose: string;
  resume: string;

  headline: string;
  rol: string;
  features: string;
  softSkills: string;
  hardSkills: string;
  projects: string;
  blog: string;

  constructor() {
    this.name = 'mentorship';
    this.title = 'Mentorship';
    this.icon = '/profiles/mentorship/icons/mentorship.svg';
    this.colorCompose = '0, 255, 0';
    this.resume = '/profiles/mentorship/resumes/mauro-alderete-mentorship.pdf';

    this.headline = 'Apasionado del desarrollo de videojuegos y sus desafíos.';
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
