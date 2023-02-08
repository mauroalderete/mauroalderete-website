export enum ProfileType {
  Frontend = 'FRONTEND',
  Backend = 'BACKEND',
  Gamedev = 'GAMEDEV',
  SRE = 'SRE',
  Mentorship = 'MENTORSHIP',
}

export interface IProfile {
  type: ProfileType;

  title: string;
  headline: string;
  icon: string;
  resume: string;

  rol: string;
  features: string;
  softSkills: Array<ISoftSkill>;
  hardSkills: string;
  projects: string;
  blog: string;
}

export interface ISoftSkill {
  guid: number;
  title: string;
  letter: string;
  paragraph: Array<string>;
}
