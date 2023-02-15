export enum ProfileType {
  Frontend = 'FRONTEND',
  Backend = 'BACKEND',
  Gamedev = 'GAMEDEV',
  SRE = 'SRE',
  Mentorship = 'MENTORSHIP',
}

export interface IProfile {
  type: ProfileType;
  maintain: boolean;

  title: string;
  headline: string;
  icon: string;
  resume: string;

  rol: Array<string>;
  features: string;
  softSkills: Array<ISoftSkill>;
  hardSkills: Array<IHardSkill>;
  projects: Array<IProject>;
  blog: string;
}

export interface ISoftSkill {
  guid: number;
  title: string;
  icon: string;
  paragraph: Array<string>;
}

export interface IHardSkill {
  guid?: number;
  label: string;
  color?: string;
}

export interface IProject {
  guid?: number;
  title: string;
  paragraph: Array<string>;
  media?: string;
  target?: string;
}
