import type { ConstructorOptions } from "node-telegram-bot-api";

export interface TelegramModuleOptions extends ConstructorOptions {
  token: string;
}
