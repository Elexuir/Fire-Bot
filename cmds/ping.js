module.exports = {
  name: 'ping',
  description: 'Says Pong!',
  
  slash: true,
  testOnly: false,
  
  callback: () => {
   return {
     content: 'Pong!'
   } 
  }
}