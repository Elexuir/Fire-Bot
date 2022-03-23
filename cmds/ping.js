module.exports = {
  name: 'ping',
  description: 'Says Pong!',
  category: 'help',
  
  slash: 'both',
  testOnly: false,
  
  expectedArgs: '<user>',
  
  callback: () => {
    return '<@user>'
  }
}