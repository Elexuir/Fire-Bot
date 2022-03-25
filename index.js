const discord = require('discord.js');
const { Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const WOKCommands = require('wokcommands');
const path = require('path');


const client = new discord.Client({
	// These intents are recommended for the built in help menu
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_VOICE_STATES,
	],
});

client.on('ready', () => {
	new WOKCommands(client, {
		// The name of the local folder for your command files
		commandsDir: path.join(__dirname, 'cmds'),
		botOwners: ['912862728333451325', '837812033394180116'],
		// Leave all this the same
		disabledDefaultCommands: [
			// 'help',
			// 'command',
			 'language',
			//'prefix',
			// 'requiredrole',
			// 'channelonly'
		],
		// eslint-disable-next-line no-undef
		mongoUri: process.env.MONGO_URI,
		// eslint-disable-next-line no-undef
		featuresDir: path.join(__dirname, 'features'),

	})
		.setCategorySettings([
			{
				name: 'Miscellaneous',
				emoji: '💡'
			}, 
			{
				name: 'Moderation',
				emoji: '🔨'
			}, 

			// So do it like this for making one
			// { 
				// name: 'What you want to name it',
				// emoji: 'get a emoji from emojipedia',
			//}
		]);
});

client.on('guildMemberAdd', (member) => {
  if(member.guild.id == '912890409934524438') {
    member.roles.add('942628834631630859')
    client.channels.cache.get('956378725811879978').send('Welcome to, Fire Wolf Academy!')
  }
  
  if(member.guild.id == '956389530364162101') {
    member.roles.add('956953473058996315')
    client.channes.cache.get('956941811123888188').send('Welcome to the Bot Testing Server!')
  }
})

client.login(process.env.TOKEN)