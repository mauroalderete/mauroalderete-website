export interface IProfile {
  type: ProfileType;

  title: string;
  headline: string;
  icon: string;
  resume: string;

  rol: string;
  features: string;
  softSkills: string;
  hardSkills: string;
  projects: string;
  blog: string;
}

export enum ProfileType {
  Frontend = 'FRONTEND',
  Backend = 'BACKEND',
  Gamedev = 'GAMEDEV',
  SRE = 'SRE',
  Mentorship = 'MENTORSHIP',
}
