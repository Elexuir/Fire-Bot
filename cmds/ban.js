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
      return interaction.reply({
        content: 'The was not user found.',
        ephemeral: true
      })
    }
    
    if(!target.bannable) {
      return interaction.reply({
        content: 'The user that was entered cannot be banned.',
        ephemeral: true
      })
    }
    
    args.shift()
    const reason = args.join(' ')
    
    target.ban({ reason, days: 7 })
    
    return interaction.reply({
      custom: true,
      content: `<@${target.id}> was Banned.`,
      ephemeral: true
    })
  }
}
