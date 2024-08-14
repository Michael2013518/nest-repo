import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: '你的GitHub应用ID',
      clientSecret: '你的GitHub应用密钥',
      callbackURL: 'http://localhost:3000/callback',
      scope: ['public_profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user?: any, info?: any) => void,
  ) {
    return profile;
    // const { id, displayName, photos } = profile;
    // const user = {
    //   provider: 'github',
    //   providerId: id,
    //   name: displayName,
    //   avatar: photos[0].value,
    // };
  }
}
