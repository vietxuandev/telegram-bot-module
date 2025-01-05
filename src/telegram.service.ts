import { Inject, Injectable } from "@nestjs/common";
import TelegramBot from "node-telegram-bot-api";

import { MODULE_OPTIONS_TOKEN } from "./telegram.module-definition";
import { TelegramModuleOptions } from "./interfaces";

@Injectable()
export class TelegramService extends TelegramBot {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly telegramModuleOptions: TelegramModuleOptions
  ) {
    const { token, ...options } = telegramModuleOptions;

    super(telegramModuleOptions.token, options);
  }
}
