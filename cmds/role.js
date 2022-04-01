module.exports = {
  category: 'Moderation',
  description: 'Gives role to user!',
  
  permissions: ['ADMINISTRATOR'],
  
  slash: 'both',
  testOnly: false,
  guildOnly: false,
  
  options: [{
    name: 'user',
    description: 'user',
    required: true,
    type: 'USER'
  }],
  
  callback: ({}) => {
    
  }
}