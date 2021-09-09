let { Presence } = require('@adiwajshing/baileys')
exports.run = {
	usage: ['filter'],
	async: async (m, { conn, _func, args, isPrefix, command }) => {
		let setting = global.db.groups[m.chat]
		await conn.updatePresence(m.chat, Presence.composing)
		if (!args || !args[0]) return conn.send2ButtonLoc(m.chat, await _func.buffer(global.db.setting.cover), `*This command to turn off and turn on word filter.*`, global.db.setting.footer, 'ON', `${isPrefix + command} on`, 'OFF', `${isPrefix + command} off`, m)
		if (args[0] == 'on') {
			if (setting.nobadword) return m.reply(`*Word Filter already ON.*`)
			setting.nobadword = true
			m.reply(`*Word Filter successfully turned on.*`)
		} else if (args[0] == 'off') {
			if (!setting.nobadword) return m.reply(`*Word Filter already OFF.*`)
			setting.nobadword = false
			m.reply(`Word Filter successfully turned off.*`)
		}
	},
	admin: true,
	group: true,
	botAdmin: true
}