module.exports = {
	name: 'trap-off',
	description: 'Restart to Bot',
	execute(message, args) {
const role = guild.roles.cache.find(role => role.name === 'role name');
const member = message.mentions.members.first();
member.roles.add(role);
},
};