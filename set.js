
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID ||  "PRINCE-MD~H4sIAAAAAAAAA61U227iSBD9l34FDb6CQYo0vsWAIdgYA2a1D43ddhrfu9sEM+LfVybJTKSZnclK66d2X6rOqTp1voGixBTZqAWTb6Ai+AwZ6pasrRCYAK2JY0RAH0SQQTABvQV54efzInRixVO3A+Ls0XF+ruXoukTKTpA1fceE1fngLx/ArQ+q5pjh8DcBT7NsETwxI9pNnVoL4uglRlzVzjifD2hmtdwlMRr39Hg0zAdw6yJCTHCRmNUzyhGBmY1aB2LySfhqiBX/2OIjN5DV+nFx9NvHg6xq7p5j8caFmHlmMi6blH4OfiQrRjntGYNNYjSatvHR8mLuqtG6vsYz4vO6cxKWiw3uTekrfIqTAkWzCBUMs/bTdZdmyuWknLyltbIDOhq6yNBW23NY5JJ1orFweNxLWEILhSs/BxyZW2El5GavZ6ZaHuf7KWvXaqKm27W8CmMfXpgYlmLtpcFH4A5510r6X+pODUfe8XS+qWQqn+ZBKTvtOqBTZvSs3dxNsSePMvnpqgvp5+ArAhckiRo/Qeu07x0V0do2Sd2uBNuV9NXWDvUmVQKPH6z9H/Aha8jvUBZ8Fg7gtlWYHrB9HqAxt/Yrc+YkcYoVRC8n3OLmOvQHq7blh5o7XzDHCuxiKhV8iYxeEQbZqkat2Qz2FVSsXp2e3Ic7oxS1swhM+FsfEJRgyghkuCy6vTHXBzA6eygkiN2rC9Qjt5SNxxeBg9Z2LuGyLll0qK6eOHOyjNUXxaRqtFMrI3wAfVCRMkSUomiKKStJu0SUwgRRMPnr3qiOM0F5ydAcR2ACBFEacbw8Hg9lQf5Kv7w8Q0ZhVX0pEAN9EJMyXyIwYaRBfXB/MZRNSRZ0Th7JIq+ams5xoqnrosSpqmkqSkcxf826wTmiDOYVmPAjWZQEfjzkb/3/CchYlVR+aHCSwj2ODU42OE0SNMEQFcU09bHxByDS7e8+KNCFvQq5K7/I90GMCWV+0VRZCaN3lb8fwjAsm4J5bRHq3QIRMPmwjRjDRUI7ak0BSfiMz0jveIBJDDOKvnccERS9c3lzMb2MOiHKrqiY2joAHfYu0M/FmQg/l6eA3W1g4DMuEOiD7P6Ml4WhOJbGI26oDLnRRPja7d++A+7iR4hBnFEwAbpTY+rMTNPpvZyWrmWpZqLqiQp+EHyfnFdpeoI9PA9I4179wcJqGs6yA3MTu815uDikx8TyyNZ17JCbpg+/CAImAJepO6/iIj61UiOa3jHuNW0rTteCOSuRJzSrpWXaLhfZp91uA+N6X5V0w3k2GfiCM+aguNWPJbqangGX2wRenqaa9vLQZYvQGYfoY7LD1S2unj58tltTkyV9/GQ8aVrYSy624zGSl0UhpZANnkMlyPndyNyJj+Ql9+Sytab1wJZLUWVxOdfEs3zEC+cQ1vhZfZ3pu6dkb16O38YN339jjO7W+NaiP7byFXinOO7W/xDjzWz/xbA0n+GGDIajdMk77YUQpuFcM0VuQXpYOFiSlta8b7TFkyaDWyf9KoMsLkneeXJ+hKAPSNl0+p0VcfmbTLo2m2lvVpZBytQfM/GLMZPHr7ccUlZTSJ87b81F7djpu1WrymOQvU8YULvPal1w+wco4w3DjQgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "👁️‍🗨️", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by divine-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349017790750", // Only 1 owner Number Here, others Add to sudo numbers...
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
