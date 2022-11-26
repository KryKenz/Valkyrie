let axios = require("axios");
let BodyForm = require("form-data");
let { fromBuffer } = require("file-type");
let fetch = require("node-fetch");
let fs = require("fs");
let cheerio = require("cheerio");

function TelegraPh(Path) {
return new Promise(async (resolve, reject) => {
if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
try {
var form = new BodyForm();
form.append("file", fs.createReadStream(Path));
var data = await axios({
url: "https://telegra.ph/upload",
method: "POST",
headers: {
...form.getHeaders(),
},
data: form,
});
return resolve("https://telegra.ph" + data.data[0].src);
} catch (err) {
return reject(new Error(String(err)));
}
});
}

async function UploadFileUgu(input) {
return new Promise(async (resolve, reject) => {
var form = new BodyForm();
form.append("files[]", fs.createReadStream(input));
await axios({
url: "https://uguu.se/upload.php",
method: "POST",
headers: {
"User-Agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
...form.getHeaders(),
},
data: form,
})
.then((data) => {
resolve(data.data.files[0]);
})
.catch((err) => reject(err));
});
}

function webp2mp4File(path) {
return new Promise((resolve, reject) => {
var form = new BodyForm();
form.append("new-image-url", "");
form.append("new-image", fs.createReadStream(path));
axios({
method: "post",
url: "https://s6.ezgif.com/webp-to-mp4",
data: form,
headers: {
"Content-Type": `multipart/form-data; boundary=${form._boundary}`,
},
})
.then(({ data }) => {
var bodyFormThen = new BodyForm();
var $ = cheerio.load(data);
var file = $('input[name="file"]').attr("value");
bodyFormThen.append("file", file);
bodyFormThen.append("convert", "Convert WebP to MP4!");
axios({
method: "post",
url: "https://ezgif.com/webp-to-mp4/" + file,
data: bodyFormThen,
headers: {
"Content-Type": `multipart/form-data; boundary=${bodyFormThen._boundary}`,
},
})
.then(({ data }) => {
var $ = cheerio.load(data);
var result =
"https:" +
$("div#output > p.outfile > video > source").attr("src");
resolve({
status: true,
message: "Created By MRHRTZ",
result: result,
});
})
.catch(reject);
})
.catch(reject);
});
}

module.exports = { TelegraPh, UploadFileUgu, webp2mp4File };
