const Discord = require("discord.js");
const bot = discord.Client();

bot.on("message", message => {
  const prefix = "$";
  const cmd = msg.content.split(" ")[0];
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);

  
  
  if(cmd === `$prefix`help)
  message.delete(5000)
    const iEmbed = new Discord.RichEmbed()
    
    .setTitle("Bot Commands")
    .setThumbnail(message.author.displayAvatarURL)
    .setColor("#36393e")
    .addField("Staff Commands", "`$create`, `mute`, `unmute`, `ban`, `unban`, `role`")
    .addField("Members Commands:", "`$userinfo`, `$invite`, `$serverinfo`, `$avatar`, `$ping`")
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL);
    
    message.author.send(iEmbed).then(message1 => {
      message.react("✅")
    }).catch(Error => {
      message.react("❌")
    });
}

 if(cmd === `$prefix`invite)
message.delete(5000)
const iEmbed = new Discord.RichEmbed()

  .setTitle("Invite link")
  .setThumbnail(message.author.displayAvatarURL)
  .setColor("#36393e")
  .addField("Server:", "https://discord.gg/GDc5TKZ")
  .addField("Bot:", "https://discordapp.com/api/oauth2/authorize?client_id=676016694229205022&permissions=0&scope=bot")
  .setTimestamp()
  .setFooter(message.author.tag, message.author.displayAvatarURL);

  message.author.send(iEmbed).then(message1 => {
    message.react("✅")
  }).catch(Error => {
    message.react("❌")
  });
}

 if(cmd === `$prefix`ban)
const b1Embed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("You don't have permission.");

const bbEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("I Can't banned him.");

const bbbEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("ID/Mention member.");

const bbbbEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("Please type the reason.");

message.delete(0)
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(b1Embed);
        if(!message.guild.members.get(bot.user.id).hasPermission("BAN_MEMBERS")) return message.channel.send(bEmbed);
        let bUser = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
        const breason = message.content.split(" ").slice(2).join(" ")
        if(!bUser) return message.channel.send(bbbEmbed);
        if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send(bbEmbed);
        if(!breason) return message.channel.send(bbbbEmbed);
        message.guild.member(bUser).ban(breason);
        
        let bEmbed = new Discord.RichEmbed()
        .setDescription("**[Ban]**\n User: " + bUser.user.tag + "\n User ID: " + bUser.user.id + "\n Reason: " + (breason))
        .setColor("#36393e")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    
        let bLog = message.guild.channels.find(`name`, "ban-log");
    
        bLog.send(bEmbed)

        const b2Embed = new Discord.RichEmbed()
        .setAuthor("Done.", "https://images-ext-2.discordapp.net/external/gdYOQqQUT559qfi_1oBSiQ8rDppFBE55eswcIwf32NE/https/images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%253Fv%253D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
        .setDescription("**" + (bUser.user.tag) + "**" + " was banned from the server.")
        .setColor("#36393e")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL);

    message.channel.send(b2Embed).then(message => message.delete(15000));

}

 if(cmd === `$prefix`unban)
const bEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("You don't have permission.");

const bbEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("I couldn't find any ban in this server.");

const bbbEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("Please type user ID.");

const bbbbEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("User ID must be a number.");

const bbbbbEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("I couldn't find ban with this ID.");

    message.delete(0);
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(bEmbed).then(message => message.delete(3000));
    if(!args[0]) return message.channel.send(bbbEmbed).then(message => message.delete(3000));
        message.guild.fetchBans().then(bans => {
            if(bans.size == 0) return message.channel.send(bbEmbed).then(message => message.delete(3000));
            if(isNaN(args[0])) return message.channel.send(bbbbEmbed).then(message => message.delete(3000));
            if(!bans.find(user => user.id == args[0])) return message.channel.send(bbbbbEmbed).then(message => message.delete(3000));
            message.guild.unban(args[0], `By ${message.author.username}`).then(user => {

                const bbbbbbEmbed = new Discord.RichEmbed()
                 .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
                 .setColor("#36393e")
                 .setDescription("Successfully Unbanned **" + message.user.username + "**");

                return message.channel.send(bbbbbbEmbed).then(message => message.delete(5000));
            });
        });
}

 if(cmd === `$prefix`kick)
const k1Embed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("You don't have permission.");

const kkEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("I Can't kicked him.");

const kkkEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("ID/Mention member.");

const kkkkEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("Please type the reason.");

        message.delete(0)
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(k1Embed);
        if(!message.guild.members.get(bot.user.id).hasPermission("KICK_MEMBERS")) return message.channel.send(kEmbed).then(message => message.delete(5000));
        let kUser = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
        const kreason = message.content.split(" ").slice(2).join(" ")
        if(!kUser) return message.channel.send(kkkEmbed).then(message => message.delete(5000));
        if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send(kkEmbed).then(message => message.delete(5000));
        if(!kreason) return message.channel.send(kkkkEmbed).then(message => message.delete(5000));
        message.guild.member(kUser).ban(kreason);
        
        let kEmbed = new Discord.RichEmbed()
        .setDescription("**[Kick]**\n User: " + kUser.user.tag + "\n User ID: " + kUser.user.id + "\n Reason: " + (kreason))
        .setColor("#36393e")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    
        let kLog = message.guild.channels.find(`name`, "kick-log");
    
        kLog.send(kEmbed)

        const k2Embed = new Discord.RichEmbed()
        .setAuthor("Done.", "https://images-ext-2.discordapp.net/external/gdYOQqQUT559qfi_1oBSiQ8rDppFBE55eswcIwf32NE/https/images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%253Fv%253D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
        .setDescription("**" + (kUser.user.tag) + "**" + " was kicked from the server.")
        .setColor("#36393e")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL);

    message.channel.send(k2Embed).then(message => message.delete(15000));
}

 if(cmd === `$prefix`mute)
const mEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("You don't have permission.");

const mmEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("I don't have permission.");

const mmmEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("ID/Mention member.");

const mmmmEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("This member already muted.");



    message.delete(0)
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(mEmbed);
    if(!message.guild.members.get(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(mmEmbed);
    const user = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
    if(!user) return message.channel.send(mmmEmbed);
    if(user.roles.has("676455294078812160")) return message.channel.send(mmmmEmbed);
    user.addRole("676455294078812160");

    const Embed = new Discord.RichEmbed()
        .setAuthor("Done.", "https://images-ext-2.discordapp.net/external/gdYOQqQUT559qfi_1oBSiQ8rDppFBE55eswcIwf32NE/https/images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%253Fv%253D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
        .setDescription("**" + (user.user.tag) + "**" + " was muted.")
        .setColor("#36393e")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL);

    message.channel.send(Embed);
}

 if(cmd === `$prefix`unmute)
const mEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("You don't have permission.");

const mmEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("I don't have permission.");

const mmmEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("ID/Mention member.");

const mmmmEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("This member isn't muted.");


    message.delete(0)
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(mEmbed);
    if(!message.guild.members.get(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(mmEmbed);
    const user = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
    if(!user) return message.channel.send(mmmEmbed);
    if(!user.roles.has("676455294078812160")) return message.channel.send(mmmmEmbed);
    user.removeRole("676455294078812160");

    const Embed = new Discord.RichEmbed()
    .setAuthor("Done.", "https://images-ext-2.discordapp.net/external/gdYOQqQUT559qfi_1oBSiQ8rDppFBE55eswcIwf32NE/https/images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%253Fv%253D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
    .setDescription("**" + (user.user.tag) + "**" + " was unmuted.")
    .setColor("#36393e")
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL);

    message.channel.send(Embed);
}

 if(cmd === `$prefix`ping)
    message.delete(0)
    const pEmbed = new Discord.RichEmbed()
    .setDescription("Pinging...");
  
    message.channel.send(pEmbed).then(message1 => {
      const p2Embed = new Discord.RichEmbed()
      .setDescription(`Pong! ${message1.createdTimestamp - message.createdTimestamp}ms.`);
      message1.edit(p2Embed).then(message => message.delete(5000));
    });
}

 if(cmd === `$prefix`serverinfo)
message.delete(0)

    message.channel.send("Soon!, sorry for that.")
    const sEmbed = new Discord.RichEmbed()
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .setColor("#36393e")
    .addField("Server ID", message.guild.id, true)
    .addField("Owner", message.guild.owner, true)
    .addField("Owner ID", message.guild.ownerID, true)
    .addField("Server Region", message.guild.region.replace(message.guild.region.split("")[0], message.guild.region.split("")[0].toUpperCase()), true)
    .addField("Server Channel(s)", message.guild.channels.size + " Channels - " + message.guild.channels.filter(c=>c.type==="text").size+" Text - " + message.guild.channels.filter(c=>c.type==="voice").size+" Voice", true)
    .addField("Server Members", message.guild.memberCount + " Member(s)", true)
    .addField("Server Created", msg.guild.createdAt, true)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL);
  
    message.channel.send(sEmbed);
}

 if(cmd === `$prefix`role)
message.delete(0)

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("you don't have permission.");
    if(!message.guild.members.get(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("i don't have permission.");
    const rUser = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
    const rRole = message.guild.roles.get(message.content.split(" ")[2]) || message.guild.roles.find(r => r.name.toLowerCase() === message.content.split(" ")[2]) || message.guild.roles.find(r => r.name.toLowerCase().includes(message.content.toLowerCase().split(" ")[2]));
    if(!rUser) return message.channel.send("ID/Mention member.");
    if(!rRole) return message.channel.send("Spectify a role.");

    if(!message.guild.members.get(rUser.id).roles.has(rRole.id)){
        message.guild.members.get(rUser.id).addRole(rRole.id);
        const drEmbed = new Discord.RichEmbed()
        .setAuthor("Done", "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
        .setDescription("Successfully added [" + (rRole) + "] to [" + (rUser) + "]")
        .setColor("#36393e")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL);

        message.channel.send(drEmbed).then(message => message.delete(5000));
    } else if(message.guild.members.get(rUser.id).roles.has(rRole.id)){
        message.guild.members.get(rUser.id).removeRole(rRole.id);
        const drEmbed = new Discord.RichEmbed()
        .setAuthor("Done", "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
        .setDescription("Successfully removed [" + (rRole) + "] from [" + (rUser) + "]")
        .setColor("#36393e")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    
        message.channel.send(drEmbed).then(message => message.delete(5000));
    }

}

 if(cmd === `$prefix`create)
const bEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("You don't have permission.");

const bbEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("I don't have permission.");

const bbbEmbed = new Discord.RichEmbed()
.setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
.setColor("#36393e")
.setDescription("Please type the channel name.");

    message.delete(0)
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(bEmbed);
    if(!message.guild.members.get("676016694229205022").hasPermission("MANAGE_CHANNELS")) return message.channel.send(bbEmbed);
    const cName = message.content.split(" ").slice(1).join(" ");
    let type = "voice";
    if(cName.startsWith("#")) type = "text";
    if(!cName) return message.channel.send(bbbEmbed);
    message.guild.createChannel(cName, type).then(channel => message.channel.send(`Successfully created ${type === "voice" ? `[${channel.name}]` : channel}.`));
    const bbbbEmbed = new Discord.RichEmbed()
    .setAuthor("Done", "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
    .setColor("#36393e")
}

 if(cmd === `$prefix`clear)
message.delete(0)
  const ccEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("You don't have permission.");

  const cEmbed = new Discord.RichEmbed()
  .setAuthor("Error", "https://images-ext-2.discordapp.net/external/vpm4rttvJrTszAFZUBjWrUFPy1CNFx4WeFgYmazKXfs/%3Fv%3D1/https/cdn.discordapp.com/emojis/573856650625286184.gif")
  .setColor("#36393e")
  .setDescription("You must type a correct number.");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(ccEmbed).then(message => message.delete(3000));
  if(!message.guild.members.get(bot.user.id).hasPermission("MANAGE_MESSAGES")) return message.channel.send("i don't have permission.");
  const args = message.content.split(" ")[1];
  if(isNaN(args)) return message.channel.send(cEmbed).then(message => message.delete(3000));


  message.channel.bulkDelete(args).then(messages => {

    const cEmbed = new Discord.RichEmbed()
    .setAuthor("Done", "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
    .setDescription("Deleted (" + messages.size + ") Message(s).")
    .setColor("#36393e")
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL);
  

    message.channel.send(cEmbed).then(message => message.delete(3000));
  })
}

 if(cmd === `$prefix`avatar)
const aUser = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
    message.delete(0)
    const Embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "'s Avatar", "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
    .setImage(message.author.displayAvatarURL)
    .setColor("#36393e")
    .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL);
    if(!aUser) return message.channel.send(Embed).then(message => message.delete(10000));

    const aEmbed = new Discord.RichEmbed()
    .setAuthor(aUser.user.username + "'s Avatar", "https://images-ext-2.discordapp.net/external/qZqmfbFGs1UWqmOXggpOG8aM7TguT6rERqk3119FRIc/%3Fv%3D1/https/cdn.discordapp.com/emojis/547902692652220428.gif")
    .setImage(aUser.user.displayAvatarURL)
    .setColor("#36393e")
    .setFooter("Requested by " + message.author.tag, message.author.displayAvatarURL);
    if(aUser) return message.channel.send(aEmbed).then(message => message.delete(15000));
}






bot..login(process.env.BOT_TOKEN);
