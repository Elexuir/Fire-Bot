module.exports = {
  category: 'Moderation',
  description: 'Verify a member to give them access to command channels.',
  
  slash: 'both',
  testOnly: false,
  guildOnly: false,
  permissions: ['ADMINISTRATOR'],
  
  options: [{
    name: 'user',
    description: 'user',
    required: true,
    type: 'MEMBER'
  }],
  
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