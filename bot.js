const Discord = require("discord.js");
const bot = discord.Client();

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);

	bot.user.setActivity("Programming!", {type: "LISTENING"});

	//bot.user.setGame("Programming!");
});






bot.login(process.env.BOT_TOKEN);
