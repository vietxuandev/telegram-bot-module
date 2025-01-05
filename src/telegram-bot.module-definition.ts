import { ConfigurableModuleBuilder } from "@nestjs/common";

import { TelegramBotModuleOptions } from "./interfaces";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<TelegramBotModuleOptions>({
    moduleName: "TelegramBot",
  })
    .setExtras(
      {
        isGlobal: true,
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      })
    )
    .setClassMethodName("forRoot")
    .build();
