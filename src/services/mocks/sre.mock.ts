import { sreIcon } from '../../assets/icons';
import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';

export class SREProfileMock implements IProfile {
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
    this.type = ProfileType.SRE;
    this.title = 'SRE/DEVOPS';
    this.icon = sreIcon;
    this.resume = '/profile/sre/resumes/mauro-alderete-sre.pdf';

    this.headline = 'Apasionado del desarrollo de videojuegos y sus desafíos.';
    this.rol = new Array<string>();
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
