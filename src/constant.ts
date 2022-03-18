import { join } from 'path'

import { config } from 'dotenv'

config({ path: join(__dirname, '../.env') })

export const discordBotToken = process.env.DISCORD_BOT_TOKEN
