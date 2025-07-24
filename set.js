
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA71V246rNhT9F78mariEW6SRyi2BEJKQC7lUfTDEgBMwDDZJmCr/XpGZ6TlS29OpVJUns7H3Xmt7rc1vgJSYIg+1YPQbqGp8hQx1S9ZWCIyA0SQJqkEfnCCDYARUTxeUUCVmGfLqZWGvsmKzsIWkpzuhfCDZaioU3HFzjSb0BTz6oGqiHMc/SDg82/deHspZa04jbjAc89Zhs7tdZpP0fLSjMAjmdSAmkRjoL+DRZYS4xiS1qwwVqIa5h9olxPXX4LtzejuR3u4YWEY9KK9kV1Z+Utiho76aucbZk9fBeu4hR9S/Bt8NolW2eE0m5M5lcHw2b8JdN+nbXpZbRQk2dOZU4VQqlPHtHT7FKUEn94QIw6z9ct8n3ptul7QZuLu7adz3cGm6l6BU0LxaUjWlzTE5O0srgXz8NeByvIqoc0yL5bFdSOF8NR/uX2f3osliRx040V4mw7jY7ASbfg98WX9q5fJv+t4ugv3bLeTbbEe5MS+FuW1k5elQoFuJW28d7uAiWTnhYud/Df7mfGrQcJxFRrE5G+nlsm02aTbueUfBUJONm2dCdPQ95XV7+QYfsqb+objb+03kVgMlDXpFtvDi1subhWdcpOncYoo/SclZzw/44KWQSfRg5YLa229j48yRtirCSp0rlE6Uwl3vN0J4DngiGOnLk9EFte4JjPhHH9QoxZTVkOGSdDFF6gN4uq5RXCP27C7QtbFwe4u88Z3nVCw5pCDbe/NWmu4R7j3RWh69eLqLz0z3X0AfVHUZI0rRycGUlXXrI0phiigY/fK8qI5zjYqSoSk+gREQxKHC8ZKmyZIg/Ux/umWQUVhVPxHEQB8kdVn4CIxY3aA+eJ6QOEXSdEMbj3nBtg1eGHMiZ9oqJ4kWryliR7F4r7rBBaIMFhUY8YokqBI31PhH/z8ColuSovGqNFY0UxV1TRRVy1RsW7QE2dKH+v8GxBxbNm/pqi7JnKYMLUGyJcNUxpYx5HVds/8BiPj4tQ8IurN3R3U6EPk+SHBN2ZY0VV7C06fdPj/COC4bwtYtic1ugWow+i6MGMMkpR21hsA6zvAVmR0PMEpgTtEf0kM1On1y+RinZnnqHCGuuJl70DnQYe8S/bk5I/7P7SGw2w0sfMUEgT7In8d4SZBFbagpnKzKnDLif+7ijz8Ad/lPiEGc066fS4jp0rXtmaXLsT+Z6Haqm6kOvhH8tPC7R9aCJ18HdRO8bQezSdNwE+9gb5Kgucqz4yVKJ+s6DJZezDmXl79I0mlJ7zF133BDpAfbFgayj+0bFBqpDRd+6LvGSSVD7z4Nx7zic8K0unHijQXELw1nwWmRGnFL1VEOjUNWvZLX9jd8fvq9D07oimP0fTH7vm9oVrXVfaPiWwU3+Yx6xmqL2wMhcNf60TpLZhP3YruTzXDLotJ9S+ImrULV35PFgvOcXjFl7nmbzQ8R9FcGB43b+3B5Drf846eCP3yPn68JRs8Z/XFF/3iV78A7xXGP/nc5Pqb+30xOY8twUw9k5eLzy/Ze18zAhWGL3KzuYeE4GRqXV35rtWRuSODRSb/KIUvKugAjQIsIgj6oy6bTr0uS8geVTMN1jeCddg4p07954i9spmrvu5Z1WTmQZmAESCEaUafvVq+qNYPs02FA757l5gIevwOxMrnBFgkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "👁️‍🗨️", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by divine-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2347015996525", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐃𝐈𝐕𝐈𝐍𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐃𝐈𝐕𝐈𝐍𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐃𝐈𝐕𝐈𝐍𝐄", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "trur",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐃𝐈𝐕𝐈𝐍𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/m96ecn.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Divine bot is active 24/7",
CHAT_BOT: process.env.CHAT_BOT || "inbox", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
