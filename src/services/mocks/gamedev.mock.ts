import { gamedevIcon } from '../../assets/icons';
import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';

export class GamedevProfileMock implements IProfile {
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
    this.type = ProfileType.Gamedev;
    this.title = 'GameDev';
    this.icon = gamedevIcon;
    this.resume = '/profile/gamedev/resumes/mauro-alderete-gamedev.pdf';

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
