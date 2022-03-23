module.exports = {
  name: 'reply',
  category: 'Bot-Related',
  description: 'Reply\'s to a message.',
  
  options: [
    {
      name: 'message',
      description: 'The message you would like to send.',
      required: true,
      type: 'STRING'
    }
    ],
  
  expectedArgs: '<message>',
  
  minArgs: 0,
  maxArgs: -1,
  
  syntaxError: {
    'english': 'You should use `{PREFIX}`reply to use this command'
  },
  
  permissions: ['ADMINISTRATOR'],
  
  cooldown: '60s',
  
  hidden: false,
  ownerOnly: false,
  
  testOnly: false,
  guildOnly: false,
  
  slash: true,
  
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
