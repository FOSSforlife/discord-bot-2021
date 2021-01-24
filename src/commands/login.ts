import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { MyClient } from '../index';

interface LoginCommandArgs {
  lastFmUsername: string;
}

class LoginCommand extends Command {
  constructor() {
    super('login', {
      aliases: ['login'],
      args: [
        {
          id: 'lastFmUsername',
        },
      ],
    });
  }

  async exec(message: Message, { lastFmUsername }: LoginCommandArgs) {
    const db = (message.author.client as MyClient).db;
    await db.user
      .upsert({
        where: { discordId: Number(message.author.id) },
        create: { discordId: Number(message.author.id), lastFmUsername },
        update: { discordId: Number(message.author.id), lastFmUsername },
      })
      .then(() => {
        message.reply(
          `your Last.fm username is now set to **${lastFmUsername}**!`
        );
      });
  }
}

module.exports = LoginCommand;
