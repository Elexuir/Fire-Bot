module.exports = {
  name: 'help',
  category: 'help',
  description: 'Help Menu',
  
  slash: 'both',
  testOnly: false,
  
  callback: () => {
    return '1. \`/reply <message>\` - sends a message\n2. \`/ping\` - returns Pong!'
  }
}