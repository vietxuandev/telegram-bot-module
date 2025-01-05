import type { ConstructorOptions } from "node-telegram-bot-api";

export interface TelegramBotModuleOptions extends ConstructorOptions {
  token: string;
}
