import { AkairoClient } from 'discord-akairo';
import config from './config';

class MyClient extends AkairoClient {
  constructor() {
    super(
      {
        ownerID: config.ownerID,
      },
      {
        disableMentions: 'everyone',
      }
    );
  }
}

const client = new MyClient();
client.login(config.token);
