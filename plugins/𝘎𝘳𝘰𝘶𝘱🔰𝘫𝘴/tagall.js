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
if (!νℓcнαт.isGroup) {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _It's a group command!_`
);
}
if (!isAdmin) {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _This is an Admin only Command!_`
);
}
if (!isBotAdmin) {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Bot not Admin!_`
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await νℓкуяє.profilePictureUrl(νℓcнαт.sender, "image");;
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "https://i.postimg.cc/TPLYb38J/image.png";
}
if (νℓкуяє.args) {
return await νℓкуяє.sendMessage(
νℓcнαт.chat,
{
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: `┌╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║Ῠ │║Ῠ  *🕊️Name:* ${νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║Ῠ  *🎭ChatId:* ${νℓcнαт.chat.split("@")[0]}
╰╚═══════⋑

┌╔══Ῠ 
│║Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║Ῠ 🕛𝐓𝐢𝐦𝐞:  ${νℓкуяє.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
╰╚═══════⋑

📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: ${νℓкуяє.args.join(" ")}`,
mentions: await νℓкуяє.participants.map((a) => a.id),
},
{ quoted: νℓcнαт }
);
} else {
return await νℓкуяє.sendMessage(
νℓcнαт.chat,
{
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: `┌╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║Ῠ │║Ῠ  *🕊️Name:* ${νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║Ῠ  *🎭ChatId:* ${νℓcнαт.chat.split("@")[0]}
╰╚═══════⋑


┌╔══Ῠ 
│║Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║Ῠ 🕛𝐓𝐢𝐦𝐞:  ${νℓкуяє.moment
.tz("Asia/Kolkata")
.format("DD/MM HH:mm:ss")}
╰╚═══════⋑

📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: Attention Everyone`,
mentions: await νℓкуяє.participants.map((a) => a.id),
},
{ quoted: νℓcнαт }
);
}
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
