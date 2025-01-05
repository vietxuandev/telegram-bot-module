import { Module } from "@nestjs/common";

import { ConfigurableModuleClass } from "./telegram-bot.module-definition";
import { TelegramBotService } from "./telegram-bot.service";

@Module({
  providers: [TelegramBotService],
  exports: [TelegramBotService],
})
export class TelegramBotModule extends ConfigurableModuleClass {}
