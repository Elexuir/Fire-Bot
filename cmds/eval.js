module.exports = {
  category: 'help',
  descript: 'Eval Command.',
  
  expectedArgs: '<code>',
  minArgs: 1,
  maxArgs: 1,
  syntaxError: 'Eval Operation Failed',
  
  callback: ({ text }) => {
    const Eval = eval(text)
    
    return {
      custom: true,
      content: `Eval Returned: \`${Eval}\``,
      ephemeral: true
    }
  }
}