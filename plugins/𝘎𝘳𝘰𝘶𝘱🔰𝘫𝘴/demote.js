("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// 𝐕𝐥𝐤𝐲𝐫𝐞 :: 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ⧭ We won't be responsible for any kind of ban due to this bot.
// ⧭ Vlkyre was made for fun purpose and to make group management easier.
// ⧭ It's your concern if you spam and gets your account banned.
// ⧭ Also, Forks won't be entertained.
// ⧭ If you fork this repo and edit plugins, it's your concern for further updates.
// ⧭ Forking Repo is fine. But if you edit something we will not provide any help. In short, Fork At Your Own Risk.
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
if (νℓкуяє.args[0] && νℓкуяє.args[0].startsWith("@")) {
let mention = νℓкуяє.mentionByTag;
let users = (await mention[0]) || νℓcнαт.msg.contextInfo.participant;
if (!users) {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} @tag/reply_`
);
}
try {
await νℓкуяє.groupParticipantsUpdate(νℓcнαт.chat, [users], "demote");
} catch {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Check if the person already not an admin!_`
);
}
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await νℓкуяє.profilePictureUrl(users, "image");
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "https://i.postimg.cc/TPLYb38J/image.png";
}
await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`OOPs!! looks like someone demoted @${users.split("@")[0]}`,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (νℓкуяє.mentionByReply) {
let users =
νℓcнαт.mtype == "extendedTextMessage" &&
νℓcнαт.message.extendedTextMessage.contextInfo != null
? νℓcнαт.message.extendedTextMessage.contextInfo.participant || ""
: "";
if (!users) {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} @tag/reply_`
);
}
try {
await νℓкуяє.groupParticipantsUpdate(νℓcнαт.chat, [users], "demote");
} catch {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Check if the person already not an admin!_`
);
}
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await νℓкуяє.profilePictureUrl(users, "image");
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "https://i.postimg.cc/TPLYb38J/image.png";
}
await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`OOPs!! looks like someone demoted @${users.split("@")[0]}`,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} @tag/reply_`
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} catch (error) {
return кяуcαℓℓ(error);
}
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// 𝐕𝐥𝐤𝐲𝐫𝐞 :: 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ⧭ We won't be responsible for any kind of ban due to this bot.
// ⧭ Vlkyre was made for fun purpose and to make group management easier.
// ⧭ It's your concern if you spam and gets your account banned.
// ⧭ Also, Forks won't be entertained.
// ⧭ If you fork this repo and edit plugins, it's your concern for further updates.
// ⧭ Forking Repo is fine. But if you edit something we will not provide any help. In short, Fork At Your Own Risk.
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
