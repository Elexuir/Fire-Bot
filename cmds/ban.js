module.exports = {
  category: 'moderation',
  description: 'When run it will ban the tagged user.',
  
  permissions: ['ADMINISTRATOR'],
  
  slash: 'both',
  testOnly: false,
  
  guildOnly: true,
  
  minArgs: 2,
  expectedArgs: '<user> <reason>',
  expectedArgsTypes: ['USER', 'STRING'],
  
  callback: ({ message, interaction, args }) => {
    const target = message ? message.mentions.members?.first() : interaction.options.getMember('user')
    
    if(!target) {
      return 'The was not user found.'
    }
    
    if(!target.bannable) {
      return 'The user that was entered cannot be banned.'
    }
    
    args.shift()
    const reason = args.join(' ')
    
    target.ban({ reason, days: 7 })
    
    message.author.send(`<@${target.id}>`)
    
    return `<@${target.id}> was Banned.`
  }
}
