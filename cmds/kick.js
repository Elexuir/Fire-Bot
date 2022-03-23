module.exports = {
  category: 'help',
  name: 'kick',
  description: 'Kicks a user.',
  
  slash: 'both',
  testOnly: false,
  
  permissions: ['ADMINISTRATOR'],
  guildOnly: true,
  
  minArgs: 2,
  expectedArgs: '<user> <reason>',
  expectedArgsTypes: ['USER', 'STRING'],
  callback: ({ message, interaction, args }) => {
    const target = message ? message.mentions.members?.first() : interaction.options.getMember('user')
    
    if(!target) {
      return 'The user you were trying to kick was not found.'
    }
    
    if(!target.kickable) {
      return 'The user is not kickable.'
    }
    
    args.shift()
    const reason = args.join(' ')
    
    target.kick(reason)
    
    message.author.send('You have successfully kicked a user.')
  }
}
