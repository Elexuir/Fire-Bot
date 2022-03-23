module.exports = {
  name: 'reply',
  category: 'Bot-Related',
  description: 'Reply\'s to a message.',
  
  expectedArgs: '<message>',
  
  minArgs: 0,
  maxArgs: -1,
  
  syntaxError: {
    'english': 'You should use `{PREFIX}`reply to use this command'
  },
  
  permissions: ['ADMINISTRATOR'],
  
  cooldown: '60s',
  globalCooldown: '3m',
  
  hidden: false,
  ownerOnly: false,
  
  testOnly: false,
  guildOnly: false,
  
  slash: false,
  
  options: [],
  
  error: ({
    error,
    command,
    message,
    info
  }) => {},
  
  callback: ({
    text,
  }) => { return `${text}`}
}
