import { mentorshipIcon } from '../../assets/icons';
import { IHardSkill, IProfile, IProject, ISoftSkill, ProfileType } from '../../models/profile.model';

export class MentorshipProfileMock implements IProfile {
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
    this.type = ProfileType.Mentorship;
    this.maintain = true;
    this.title = 'Mentorship';
    this.icon = mentorshipIcon;
    this.resume = '/profile/mentorship/resumes/mauro-alderete-mentorship.pdf';

    this.headline = 'Estimulando el desarrollo de las nuevas habilidades para lograr nuevas oportunidades';
    this.rol = new Array<string>();
    this.features = 'alguna feature';
    this.softSkills = new Array<ISoftSkill>();

    this.softSkills.push({
      guid: 1,
      title: '',
      icon: '',
      paragraph: [''],
    });
    this.hardSkills = new Array<IHardSkill>();
    this.projects = new Array<IProject>();
    this.blog = 'Minimax en el tateti';
  }
}
