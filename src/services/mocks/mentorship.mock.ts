import { mentorshipIcon } from '../../assets/icons';
import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';

export class MentorshipProfileMock implements IProfile {
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
    this.type = ProfileType.Mentorship;
    this.title = 'Mentorship';
    this.icon = mentorshipIcon;
    this.resume = '/profiles/mentorship/resumes/mauro-alderete-mentorship.pdf';

    this.headline = 'Apasionado del desarrollo de videojuegos y sus desafíos.';
    this.rol = `Soy un profesional innovador y con iniciativa. Suelo liderar proyectos de investigación y de desarrollo con diferentes stacks tecnológicos y lenguajes: C++, C#, JavaScript, Python, Go.
  
      A lo largo de los años abordé múltiples proyectos, desde el desarrollo de videojuegos clásicos y la construcción de equipos de robots competitivos usando modelos de aprendizaje automático, hasta la difusión científica y el desarrollo de software a medida para fábricas, distribuidores y bancos entre otros.
      
      Apasionado del desarrollo de videojuegos y sus desafíos. Mis primeros pasos en la programación fueron construyendo videojuegos. Espero continuar haciéndolo formando parte de un grandioso equipo.`;
    this.features = 'alguna feature';
    this.softSkills = new Array<ISoftSkill>();

    this.softSkills.push({
      guid: 1,
      title: '',
      letter: '',
      paragraph: [''],
    });
    this.hardSkills = new Array<IHardSkill>();
    this.projects = new Array<IProject>();
    this.blog = 'Minimax en el tateti';
  }
}
