("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../../Core/craft");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
кяуcαℓℓ
) => {
try {
await νℓкуяє.Economy.findOne(
{
ID: νℓcнαт.sender,
},
async (error, userEco) => {
if (error) {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${error}`
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
if (!userEco) {
let newUser = new νℓкуяє.Economy({
ID: νℓcнαт.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser.save().catch((error) => {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${error}`
);
});
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
🧈Added To DB for Current command First Time!
◇ *Type:* _Just Bought A Zoo!_`,
"https://i.postimg.cc/TPLYb38J/image.png"
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
await νℓкуяє.Zoology.findOne(
{
ID: νℓcнαт.sender,
},
async (error, userZoo) => {
if (error) return Caught(ӄryӄnz, Vlkyre, error);
if (!userZoo) {
let newUser = new νℓкуяє.Zoology({
ID: νℓcнαт.sender,
zoodone: Date.now(),
zootimeout: 1800000,
});
await newUser.save().catch((error) => {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${error}`
);
});
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
🐓*Type:* _Nothing Found_`,
"https://i.postimg.cc/TPLYb38J/image.png"
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
let time = νℓкуяє.ms(
userZoo.zootimeout - (Date.now() - userZoo.zoodone)
);
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
"https://i.postimg.cc/TPLYb38J/image.png"
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
let zooID = Math.floor(Math.random() * 10) + 1;
let rarity;
if (zooID < 5) rarity = `small`;
else if (zooID < 8) rarity = `medium`;
else if (zooID < 9) rarity = `big`;
else if (zooID < 10) rarity = `large`;
else rarity = `legendary`;
let anim = νℓкуяє.animals[rarity];
let worth =
Math.floor(Math.random() * (anim.max - anim.min + 1)) +
anim.min;
userEco.money = userEco.money + worth;
userZoo.zoodone = Date.now();
userZoo.zootimeout = 1800000;
await userZoo.save().catch((error) => {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${error}`
);
});
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
🐆𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: _You Added ${anim.symbol} in your Zoo!_
💵𝗪𝗼𝗿𝘁𝗵: _People paid you *${worth}* to see._
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: _${rarity}_`,
"https://i.postimg.cc/TPLYb38J/image.png"
);
}
}
}
);
}
}
);

("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} catch (error) {
return кяуcαℓℓ(error);
}
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
