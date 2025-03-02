import { Inject, Injectable } from "@nestjs/common";
import TelegramBot from "node-telegram-bot-api";

import { MODULE_OPTIONS_TOKEN } from "./telegram-bot.module-definition";
import { TelegramBotModuleOptions } from "./interfaces";

const thisIsConstant = "This is a constant";

@Injectable()
export class TelegramBotService extends TelegramBot {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly telegramBotModuleOptions: TelegramBotModuleOptions
  ) {
    const { token, ...options } = telegramBotModuleOptions;
    console.log(thisIsConstant);
    super(token, options);
  }
}
