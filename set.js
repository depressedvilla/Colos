
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGLkJSERHjCB4QWlQW7E39gGhgFIosKoAccJ/38DunpnY2Z3t5amoy8lzMk/mN4ALRKENW6B9AyVBdcBgt2RtCYEG9CqOIQF9EAUsABpYGXWbJbVUPJ9kr7emVJbEVU4z31pu8tVQ5KTD2fCS5IjVJ3Dvg7I6Zij8DeCmmUknAxbF4ZZwVnoRhmnKl4lo00DosfliZVSckl0iP2uewL1DDBBBODHLFOaQBJkNWzdA5HP0XywnwebBex1a8fSKRP95tbdqVXH3dl6Hxq3nHtTVc+N4Ofc5+ttylLNzXA2auqn89TIxF0fmcc6mrm4VOvLUjApxt1VvM+mNPkUJhtE8gpgh1n467/YkN3f2NtafzcpZ5ma2G3DlokeHSf1KJhl3eQ6uN1OeHGfnzxEfyOu1K0TLxhxae0n24ybYWKv1rkyN0t9iJV3nWHbGjscnPxN3yYdXzv8n73vz2IrCtnqWz7QmdouTaYoXsPVvnjVpBuMWxrlRrM2JP/8cfX9a9o6rSj6X5eLgnvSFjtN6VNdKLdDFMVez5jQK63UdG94P+gGryO9YcrvzNNrPAneON94WDZOJNSiInxTTdU+W9EMeXch4HTnccle8KsEpTtPj9OZirNvXZKQmgpr1TqKkX/Tr8WB4Keutd5Pk6aHoDNt5BDT+3gcEJogyEjBU4MfeqA+CqN7AkED2yC4Qt3HPDB0XudsV2ly3E3k/jxSFjc92GLWxfx3IduNPHSk5P4E+KEkRQkphNEOUFaRdQUqDBFKg/fEoVKeZwLxgcIEioAFBlEYcrygjThlyX+mXJg0YDcryC4YM9EFMinwFgcZIBfvg8ULkTdOUJ6YhGJIsWUNryBkqr6vqeKRIxljtJOZvUbcoh5QFeQk0XhmKoiQponL/sw8wvLI3/3SqRb4PYkQoe8FVmRVB9GGuj8MgDIsKs02LQ6NbQAK0n7YhYwgntJNW4YCEKaqh0ekAWhxkFH5PNCQw+tDyPjyMIurqz0/nHOevHNBx74B+TY4m/JoeHHS3wQTVCEPQB9njGS+MOIGXRFWUh4oqasLXbv/+nXCHH0EWoIwCDRguQtSdm6Yz26WqN52OzWRsJGPwQ+CHYd8csRFsuR6Qyru9DJbTquKm9sHcxl5Vy8vX8zGZbsjOc+2Qmz0c8XcQoIFXx8kvaXPNKrksd/7LzFqrt7l/60lCES0r1FyGxSX1G+/YjLbLGJ9exFTUL7JUiUvlRGm+OC3H8c6kbhGd6dKWrFDUvacuWgRrFMKfg51O3GbGNy43KHgiVdAKp14r1n6AD00riwg7ojFJjetENd1RbIrS1k8Pw/0hm8fPh+MeW/tgbQxt3BPD5cmik9NsL3y00qOVs/cRit5djh6/MYKPifReov8s5RvxznHcvf8TxvuM+5c5ob8wVJGBrJxXvNteCWE6ynVT5Jakh4TXqaSfL/zLpMWOPgT3zvplFrC4IDnQAM2PAegDUlSdf+c4Ln4TyRjP58b4TXYWUDb+0RP/1Gb82y2XFOUsoCnQAM5F/dj5ux2X5YYF7KPDwLj73IEN7n8BECYaiAQIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
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
