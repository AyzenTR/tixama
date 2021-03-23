const Discord = require('discord.js');
const client = new Discord.Client();
const isaret = require("./isaret.json");
const hedefimiz = require("./hedef.json");
const { Client, MessageEmbed } = require ('discord.js');

var prefix = isaret.prefix
var hedef = hedefimiz.hedef

client.on('ready', () => {
  console.log(`Botunuz sunucuya girdi ${client.user.tag}!`);
client.user.setActivity('Youtube AyzenTR abone olun agalar',{ type: 'PLAYING' })
.then(presence => console.log('Durum --> ${presence.activities[0].name} oldu ') )
.catch(console.error);
});

client.on("guildMemberAdd", member => {
  try {
    const Sayaç = member.guild;
    Sayaç.setName(`TIXAMA (${member.guild.memberCount}/${hedef})`);
    }
    catch (e) {
      console.log(e);
      }
      });

client.on('guildMemberAdd', member => {
  const giriscikis = member.guil.channels.cache.find(channel => channel.name === '📥・sayaç');
  giriscikis.send('Aramiza hos geldin, ${member}');
  });

  client.on('guildMemberRemove', member => {
    const giriscikis = member.guil.channels.cache.find(channel => channel.name === '📥・sayaç');
    giriscikis.send('${member} sunucudan ayrildi');
    });

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tixamaowo') {
    msg.channel.send('owo ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tixama help') {
    const kanal = new MessageEmbed()

.setTitle('Sa ben Ayzen in yaptigi bot um')
.setDescription('agalar botu deniyorum ama burasi dolucak')
.setAuthor('Tixama')
.setColor("BLACK")
.setThumbnail('https://cdn.discordapp.com/attachments/556250168706465793/804458281414033438/tixa.png')
.addField(':onaylandmavi:', 'da geliscek bot !');
msg.channel.send(kanal);
  }
});

client.on('ready', ()=>{
  client.channels.cache.get('815593375981633576').join()
  })

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.author.send('sanada selam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'tixama owo') {
    msg.channel.send('owo daily');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete()
    msg.channel.send('ne kufur ediyon oc');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ayzen adam') {
    msg.react('😎')
    msg.channel.send('ne demek');
  }
});

client.login('NzkwMjY4MjgwNjkwMTgwMTM3.X9-IsA.1Yrm8fRSoIff21tlwuQDbwL9EVU');
