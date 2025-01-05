import { ConfigurableModuleBuilder } from "@nestjs/common";

import { TelegramModuleOptions } from "./interfaces";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<TelegramModuleOptions>({
    moduleName: "Telegram",
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
