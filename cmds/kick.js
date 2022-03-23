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
      return {
        custom: true,
        content: 'The was not user found.',
        ephemeral: true
      }
    }
    
    if(!target.kickable) {
      return {
        custom: true,
        content: 'The user that was entered cannot be kicked.',
        ephemeral: true
      }
    }
    
    args.shift()
    const reason = args.join(' ')
    
    target.kick(reason)
    
    message.author.send(`You have Kicked <@${target.id}>`)
    
    return {
      cusom: true,
      content: `<@${target.id}> was Kicked.`,
      ephemeral: true
    }
  }
}
