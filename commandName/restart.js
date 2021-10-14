module.exports = {
	name: 'restart',
  aliases: ['down', 'off'],
	description: 'Restart to Bot',
	execute(message, args) {
    if (message.author.id === '463668671513100309','311096882841518080') {
      const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
        message.channel.send('Перезагрузка...');
        process.exit();
    }
  },
};