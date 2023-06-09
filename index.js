// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async message => {
	if (message.author.bot) {return false;}
	const content = message.content.toLowerCase();
	if (content === 'what time is it?') {
		message.reply('OMGG!! It\'s pogging time!');
	}
});

// Log in to Discord with your client's token
client.login(process.env.CLIENT_SECRET);