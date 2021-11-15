let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083805279906]
│ • XL Axis [083161298704]
╰────

╭─「 Subrek • Follow 」
│ • https://youtube.com/channel/UCo-X2L6tomlBHAnM90EcT7w
│ •https://instagram.com/ismail_kurama
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
