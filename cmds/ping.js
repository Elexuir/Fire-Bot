module.exports = {
  name: 'ping',
  description: 'Says Pong!',
  category: 'Bot-Related',
  
  slash: 'both',
  testOnly: false,
  
  callback: () => {
   return 'Pong!'
  }
}