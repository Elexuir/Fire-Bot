module.exports = {
  name: 'help',
  category: 'help',
  description: 'Help Menu',
  
  slash: 'both',
  testOnly: false,
  
  callback: () => {
    return '1. \`/reply <message>\` - Sends a message\n2. \`/kick <user> <reason>/\` - Kicks the tagged user.\n3. \`/ban <user> <reason>\` - Bans the tagged user.\n4. \`/eval <code>\` - Returns the evaluated code.'
  }
}