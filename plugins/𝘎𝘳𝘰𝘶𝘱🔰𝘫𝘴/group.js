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
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await νℓкуяє.profilePictureUrl(νℓcнαт.sender, "image");
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "https://i.postimg.cc/TPLYb38J/image.png";
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
if (νℓкуяє.args[0] === "open") {
await νℓкуяє
.groupSettingUpdate(νℓcнαт.chat, "not_announcement")
.then(
async (res) =>
await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`> *Group have been Opened by: ${νℓкуяє.pushname}*`,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞
)
)
.catch((error) =>
νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> ${jsonformat(error)}`
)
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (νℓкуяє.args[0] === "close") {
await νℓкуяє
.groupSettingUpdate(νℓcнαт.chat, "announcement")
.then(
async (res) =>
await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`> *Group have been Closed by: ${νℓкуяє.pushname}*`,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞
)
)
.catch((error) =>
νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> ${jsonformat(error)}`
)
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (νℓкуяє.args[0] === "antilink") {
if (
νℓкуяє.args[1] === "ON" ||
νℓкуяє.args[1] === "on" ||
νℓкуяє.args[1] === "On"
) {
return await νℓкуяє.LinkList.findOne(
{
serverID: νℓcнαт.chat,
},
async (error, server) => {
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
if (!server) {
let newServer = new νℓкуяє.LinkList({
serverID: νℓcнαт.chat,
value: "ON",
});
await newServer.save();
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`> *🔗Antilink:* _✅Has been turned ON_`,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞
);
} else {
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`> *🔗Antilink:* _✅Was already turned ON_`,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞
);
}
}
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (
νℓкуяє.args[1] === "OFF" ||
νℓкуяє.args[1] === "off" ||
νℓкуяє.args[1] === "Off"
) {
return await νℓкуяє.LinkList.findOne(
{
serverID: νℓcнαт.chat,
},
async (error, server) => {
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
if (!server) {
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`> *🔗Antilink:* _❌Has been turned OFF_`,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞
);
} else {
await server.delete();
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`> *🔗Antilink:* _❌was not turned OFF_`,
𝕯𝖎𝖘𝖕𝖑𝖆𝖞
);
}
}
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} close/open
> _${νℓкуяє.prefix}${pfname} antilink on/off`
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} close/open
> _${νℓкуяє.prefix}${pfname} antilink on/off`
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
