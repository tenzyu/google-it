import { CommandInteraction } from 'discord.js'

export default {
  data: {
    name: 'g',
    description: '検索する',
    options: [{
      type: 'STRING',
      name: 'word',
      description: '検索する単語',
      required: true
    }]
  },
  async execute (interaction: CommandInteraction) {
    const word = interaction.options.getString('word') as string
    const fixedWord = word.replace(/\s/g, '+')
    const url = `https://google.com/search?q=${fixedWord}`
    await interaction.reply(url)
  }
}
