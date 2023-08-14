const TelegramApi = require("node-telegram-bot-api")
require("dotenv").config()

const bot = new TelegramApi(process.env.API_KEY, {polling: true})

bot.on("message", async message => {
    try {
        if (message.text === "/start") {
            await bot.sendSticker(message.chat.id, "CAACAgIAAxkBAAEKBQdk2jUgttQWa5diXxbtk_0JMaCAWwACEwwAAuLLQEgKFkvFN8GyMjAE")
            await bot.sendMessage(message.chat.id, `🇺🇸 Hello, ${message.chat.first_name}! Send me the /id command to get your Telegram ID\n\n🇺🇦 Вітаю, ${message.chat.first_name}! Надішліть мені команду /id, щоб отримати ваш ідентифікатор у телеграмі`)
    
        } else if (message.text === "/id") {
            await bot.sendSticker(message.chat.id, "CAACAgIAAxkBAAEKBQ9k2jfbS1iVGcefgQPN9OhQcizJVQACtg8AAmvTQEhGlrVX_UMWpDAE")
            await bot.sendMessage(message.chat.id, `🇺🇸 Your telegram id is: \`${message.chat.id}\`\n\n🇺🇦 Ваш ідентифікатор у телеграмі: \`${message.chat.id}\``, {
                parse_mode: "MarkdownV2"
            })
    
        } else {
            await bot.sendSticker(message.chat.id, "CAACAgIAAxkBAAEKBQNk2jRJG66N9KINXB7e7UMUNuIeDgACeQwAAqGuQEjW9dENyNgsjDAE")
            await bot.sendMessage(message.chat.id, "🇺🇸 Unknown command, the list of all commands is in the menu list\n\n🇺🇦 Невідома команда, перелік всіх команд знаходиться в списку меню")
        }

    } catch (ex) {
        await bot.sendSticker(message.chat.id, "CAACAgIAAxkBAAEKBRFk2jjZi3gP8NNEjmdiF_-C6oaedAACug0AAgz9QEhKk5C589UebTAE")
        await bot.sendMessage(message.chat.id, "🇺🇸 There was an error, please try again\n\n🇺🇦 Виникла помилка, будь ласка, спробуйте ще раз")
    }
})