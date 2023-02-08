import { IProfile } from '../models/profile.model';
import { BackendProfileMock } from './mocks/backend.mock';
import { FrontendProfileMock } from './mocks/frontend.mock';
import { GamedevProfileMock } from './mocks/gamedev.mock';
import { MentorshipProfileMock } from './mocks/mentorship.mock';
import { SREProfileMock } from './mocks/sre.mock';

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
