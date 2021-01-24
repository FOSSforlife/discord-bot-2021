import * as dotenv from 'dotenv';
dotenv.config();

export default {
  ownerID: process.env.BOT_OWNER_ID ?? '',
  token: process.env.DISCORD_API_TOKEN ?? '',
};
