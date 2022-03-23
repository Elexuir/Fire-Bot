module.exports = {
  name: 'ping',
  description: 'Says Pong!',
  category: 'help',
  
  slash: 'both',
  testOnly: false,
  
  callback: () => {
   return 'Pong!'
  }
}