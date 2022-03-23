module.exports = {
  name: 'ping',
  description: 'Says Pong!',
  
  slash: 'both',
  testOnly: false,
  
  callback: () => {
   return {
     content: 'Pong!'
   } 
  }
}