module.exports = {
  category: 'help',
  name: 'ban',
  description: 'Bans a user.',
  
  slash: 'both',
  testOnly: false,
  
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  
  expectedArgs: '<user> <reason>',
  expectedArgsTypes: ['USER', 'STRING'],
  callback: ({ message, interaction, args }) => {
    const target = message ? message.mentions.members?.first() : interaction.options.getMember('user')
    
    if(!target) {
      return 'The user you were trying to ban was not found.'
    }
    
    if(!target.bannable()) {
      return 'The user is not bannable.'
    }
    
    args.shift()
    const reason = args.join(' ')
    
    target.ban({ reason, days: 7 })
    
    message.author.send('You have successfully banned a user.')
    
    return `You have kicked the user: <@${target.id}>`
  }
}