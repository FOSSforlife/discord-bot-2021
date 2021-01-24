import {
  AkairoClient,
  CommandHandler,
  InhibitorHandler,
  ListenerHandler,
} from 'discord-akairo';
import config from './config';
import * as path from 'path';

class MyClient extends AkairoClient {
  commandHandler: CommandHandler;
  inhibitorHandler: InhibitorHandler;
  listenerHandler: ListenerHandler;

  constructor() {
    super(
      {
        ownerID: config.ownerID,
      },
      {
        disableMentions: 'everyone',
      }
    );

    this.commandHandler = new CommandHandler(this, {
      directory: path.join(__dirname, 'commands'),
      prefix: config.prefix,
    });
    this.commandHandler.loadAll();

    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: path.join(__dirname, 'inhibitors'),
    });
    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.inhibitorHandler.loadAll();

    this.listenerHandler = new ListenerHandler(this, {
      directory: path.join(__dirname, 'listeners'),
    });
    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.loadAll();
  }
}

const client = new MyClient();
client.login(config.token);
