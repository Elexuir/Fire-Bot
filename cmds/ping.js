module.exports = {
  name: 'ping',
  description: 'Says Pong!',
  
  slash: 'both',
  testOnly: true,
  
  callback: () => {
   return {
     content: 'Pong!'
   } 
  }
}