import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import TelegramBot from "node-telegram-bot-api"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class BotService implements OnModuleInit {
  constructor(private readonly config: ConfigService) {}

  async onModuleInit() {
    await this.botMessage();
  }

  async botMessage() {
    const webApp = this.config.get('SITE_API');
    const bot = new TelegramBot(this.config.get('BOT_API_TOKEN'), {
      polling: true,
    });

    bot.on('message', async (msg) => {
      const chatId = msg.chat.id;

      await bot.sendMessage(chatId, `Open web app`, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Open web app', web_app: { url: webApp } }],
          ],
        },
      });
    });
  }
}
