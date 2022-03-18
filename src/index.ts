import { discordBotToken } from './constant'
import { MyBot } from './lib/discordBot'

const googleIt = new MyBot({ intents: 32767 })

;(async () => {
  await googleIt.loadCommand()
  await googleIt.login(discordBotToken)

  if (googleIt.user === null) {
    console.log('Login failed')
    process.exit(1)
  }

  console.log(`Logged in as ${googleIt.user.tag}`)
})().catch(console.error)

export const client = googleIt
