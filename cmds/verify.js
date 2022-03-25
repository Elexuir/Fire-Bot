module.exports = {
  category: 'Moderation',
  description: 'Verify a member to give them access to command channels.',
  
  slash: 'both',
  testOnly: false,
  
  minArgs: 1,
  expectedArgs: '<user>',
  expectedArgsType: ['MEMBER'],
  
  callback: ({ interaction }) => {
    const target = interaction.options.getMember('user')
    
    if(interaction.guild.id != '956389530364162101') {
      return interaction.reply({
        content: 'You cannot use this command in this server.',
        ephemeral: true
      })
    }
    
    target.roles.add('956962605497466910')
    
    return interaction.reply({
      content: `<@${target.id}> has been Verified!`,
      ephemeral: true
    })
  }
}