const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`LeopardBot- Script By : DirecT`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DirecT ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
});



client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Leopard Host"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + "ping")) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
 });
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


  if (command === "say") {
  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }


});
  client.on('message', message => {
if(message.content.startsWith("#slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
var guilds = {};
var guilds = {};
client.on('message',async message => {
 var prefix2 = '#';//البرفكس
  if(message.content.startsWith(prefix2 + "بيع")) {

if(!message.channel.guild) return message.reply(' ');
  let submite = message.guild.channels.find(`name`, "test");
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send('📝 **| اكتب عنوان المود... ✏ **').then(msg => {
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 90000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      let boi;
      msg.edit('📜 **|  اكتب وصف للمود يمكنك ارفاق صورة... ✏ **').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ['time']
          })
          .then(collected => {
            collected.first().delete();
            boi = collected.first().content;
            let boi2;
            msg.edit('🤵 **| سعر المود... ✏ **').then(msg =>
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {
                collected.first().delete();
              boi2 = collected.first().content;
      msg.edit('🛡 **| [ هل انت متأكد من هذا؟ | [ نعم ] او [ لا**');
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
          msg.edit('🕊 **| Done ✅, تم بنجاح ارسال المود للبيع**');
          collected.first().delete();
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name} :arrow_down: ] Submite⬇**

[**عنوان المود**]: 
${thisMessage}

[**وصف المود**]: 
${boi}

[**سعر المود**]: 
${boi2}

[**تم الارسال بواسطة**]: 
${message.author}

`);

        }

      }

  )



    }
  )

  }

    )

  })

}
)
}
)
});
    
client.login(process.env.BOT_TOKEN);
