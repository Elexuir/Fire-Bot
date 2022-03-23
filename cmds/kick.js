module.exports = {
  category: 'moderation',
  description: 'When run it will kick the tagged user.',
  
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
    
    if(!target.kickable) {
      return 'The user that was entered cannot be kicked.'
    }
    
    args.shift()
    const reason = args.join(' ')
    
    target.kick(reason)
    
    return `<@${target.id}> was Kicked.`
  }
}
