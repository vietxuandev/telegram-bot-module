## Description

Telegram Bot utilities module for [NestJS](https://nestjs.com/) based on the [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) package.

## Installation

```bash
$ npm install --save telegram-bot-module
```

## Usage

### Basic Setup

Import `TelegramModule` into your application:

```typescript
import { TelegramModule } from 'telegram-bot-module';

@Module({
  imports: [
    TelegramModule.forRoot({
      isGlobal: true,
      token: process.env.TELEGRAM_BOT_TOKEN,
      polling: true,
      filepath: false,
    }),
  ],
  providers: [...],
})
export class AppModule {}
```

### Inject `TelegramService` to Send or Handle Messages

```typescript
import { Injectable } from "@nestjs/common";
import { TelegramService } from "telegram-bot-module";

@Injectable()
export class BotService {
  constructor(private readonly telegramService: TelegramService) {}

  async sendMessage(chatId: number, message: string): Promise<void> {
    await this.telegramService.sendMessage(chatId, message);
  }
}
```

### Handle Updates

Subscribe to Telegram updates in your application:

```typescript
import { Injectable, OnModuleInit } from "@nestjs/common";
import { TelegramService } from "telegram-bot-module";

@Injectable()
export class BotUpdateService implements OnModuleInit {
  constructor(private readonly telegramService: TelegramService) {}

  onModuleInit() {
    this.telegramService.on("message", (msg) => {
      console.log("New message received:", msg.text);
    });
  }
}
```

## Dynamic Token Handling

You can dynamically manage the Telegram bot token by using the `forRootAsync` method:

```typescript
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TelegramModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>("TELEGRAM_BOT_TOKEN"),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

## API Methods

This package provides wrappers for the most commonly used methods from `node-telegram-bot-api`:

#### `sendMessage(chatId: number | string, message: string, options?: TelegramBot.SendMessageOptions): Promise<TelegramBot.Message>`

Send a message to a chat.

#### `on(event: string, callback: (msg: TelegramBot.Message) => void): void`

Subscribe to Telegram bot updates, such as `message`, `callback_query`, etc.

#### `setWebhook(url: string): Promise<void>`

Set a webhook URL for your bot.

#### `getWebhookInfo(): Promise<TelegramBot.WebhookInfo>`

Retrieve information about the currently set webhook.

## Advanced Usage

If you want to use the full power of `node-telegram-bot-api`, you can access the underlying instance directly:

```typescript
import { TelegramService } from "telegram-bot-module";

@Injectable()
export class AdvancedBotService {
  constructor(private readonly telegramService: TelegramService) {}

  async customMethod() {
    const botInstance = this.telegramService.getBotInstance();
    // Call any method from node-telegram-bot-api
    await botInstance.setChatTitle(123456789, "New Chat Title");
  }
}
```

## Support

This package is open source and licensed under the MIT license. Contributions are welcome!

## Stay in touch

- Author - [Jayden Nguyen](https://github.com/vietxuandev)
- Repository - [GitHub](https://github.com/vietxuandev/telegram-bot-module)
- NPM Package - [NPM](https://www.npmjs.com/package/telegram-bot-module)

## License

This package is [MIT licensed](LICENSE).
