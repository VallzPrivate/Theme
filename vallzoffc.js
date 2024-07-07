module.exports = async (vallzoffc, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await vallzoffc.decodeJid(vallzoffc.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${m.senderNumber}`
const isBot = botNumber.includes(m.senderNumber)
const groupMetadata = isGroup ? await vallzoffc.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { Vallz, LocalAuth, Buttons } = require('whatsapp-web.js');
const { Client } = require('ssh2');
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
const API_TOKEN = global.token_do;
const { jadibot, stopjadibot, listjadibot } = require('./all/jadibot')
let teksjpm = `\`\`\`MASUK MAS, 500 MEM BAGI BAGI SC NO ENC\`\`\`\n\nhttps://chat.whatsapp.com/IvpyNDpaLPCAxpKMCZ5rtG\nhttps://chat.whatsapp.com/FaTZlajI9MtKCwcZ2Fr0a2`;
if (!isOwner && isGroup) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmin) return m.reply(`_${teksjpm}_`)
let gclink = (`https://chat.whatsapp.com/`+await vallzoffc.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return vallzoffc.sendMessage(m.chat, {text: `${teksjpm}`})
if (isAdmin) return vallzoffc.sendMessage(m.chat, {text: `${teksjpm}`})
await vallzoffc.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
}) 
}
}
// fake quoted bug
const lep = {
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


if (global.owneroff && !isCmd) {
if (!isOwner) {
let teks = `VALLZOFFC
_MENYEDIAKAN ALL KEBUTUHAN HOSTING DI BAWAH INI_

*GC INFO VPS & PANEL:* https://chat.whatsapp.com/CiHx7QicE5zL484nxHNMQm
*TESTI?:* https://whatsapp.com/channel/0029VaZ3VR57DAWv357bM93H

*_VALLZ OFFC_* 
 *_💠MENYEDIAKAN KEBUTUHAN HOST💠 :_* 

▬▬▬▬▬▬ஜஜ▬▬▬▬▬
𝐋𝐈𝐒𝐓 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃 *VPS*
▬▬▬▬▬▬ஜஜ▬▬▬▬▬

●➣📮RAM 1GB Core 1 : 15.000
●➣📮RAM 2GB Core 2 : 25.000
●➣📮RAM 4GB Core 2 : 35.000
●➣📮RAM 8GB Core 4 : 50.000
●➣📮RAM 16GB Core 4 : 70.000
●➣📮RAM 16GB Core 6 : 85.000
●➣📮RAM 16GB Core 8 : 95.000
●➣📮RAM 32GB Core 8 : 160.000
▬▬▬▬▬▬ஜஜ▬▬▬▬▬
📮 𝙇𝙄𝙎𝙏 𝙋𝘼𝙉𝙀𝙇 𝙍𝙐𝙉 𝘽𝙊𝙏 📮
▬▬▬▬▬▬ஜஜ▬▬▬▬▬
●➣📮RAM 1GB CPU 30% 1k
●➣📮RAM 2GB CPU 50% 2K
●➣📮RAM 3GB CPU 70% 3k
●➣📮RAM 4GB CPU 90% 4K
●➣📮RAM 5GB CPU 100% 5K
●➣📮RAM 6GB CPU 120% 6k
●➣📮RAM 7GB CPU 140% 7K
●➣📮RAM 8GB CPU 160% 8K
▬▬▬▬▬▬ஜஜ▬▬▬▬▬
🔱 𝘽𝘼𝙍𝘼𝙉𝙂 𝙇𝘼𝙄𝙉𝙉𝙔𝘼 🔱
●➣ *PT PANEL* 
●➣ *OWNER PANEL* 
●➣ *OWNER RESELLER* 
●➣ *RESELLER PANEL WA/TELE* 
●➣ *ADMIN PANEL* 
●➣ *SCRIPT MD* 
●➣ *SCRIPT BUG* 
●➣ *SCRIPT PUSH KONTAK* 
●➣ *SCRIPT CAMPURAN* 
●➣ *SC CAMPURAN V1-V9* 
●➣ *EDIT SCRIPT* 
●➣ *RESELLER SUBDOMAIN* 
●➣ *RESELLER PANEL* 
●➣  *ALL SC TANYA AJA..* 
●➣ *VPS/RDP/DO* 
●➣ *RENAME SCRIPT* 
●➣ *SUNTIK ALL SOSMED* 
●➣  *DLL TANYA AJA* 
▬▬▬▬▬▬ஜஜ▬▬▬▬▬
💳 𝐏𝐀𝐘𝐌𝐄𝐍𝐓 💳
●➣ *DANA* 
●➣ *TRANSAKSI3 20+ FREE PANEL UNLI, SCRIPT,TINGGAL MILIH* 
▬▬▬▬▬▬ஜஜ▬▬▬▬▬

▶️ 𝗢𝗿𝗱𝗲𝗿? 𝗟𝗮𝗻𝗴𝘀𝘂𝗻𝗴 𝗣𝗺 𝗚𝘄 𝗔𝗷𝗮

*💠CONTACT*: wa.me/6285641225753

*⚜️ROOM VALLZOFFC*: 

*🪀GROUPS* https://chat.whatsapp.com/IvpyNDpaLPCAxpKMCZ5rtG PROMO*_

●➣📮PANEL UNLI 5K FREE SC PUSHKONTAK MINAT PM

●➣📮ADMIN PANEL 10K PERBULAN

*🔰MINAT ??* 
wa.me/6285641225753
💢GROUPS : https://chat.whatsapp.com/CiHx7QicE5zL484nxHNMQ`
return vallzoffc.sendMessage(from, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/94b1b26193f81bdce5535.jpg", title: "", 
"sourceUrl": `https://wa.me/6285641225753`,  previewType: "PHOTO"}}}, {quoted: m})
}}
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = (`Good Night`)
 }
 if(time2 < "19:00:00"){
var stime = (`Good Evening`)
 }
 if(time2 < "18:00:00"){
var stime = (`Good Evening`)
 }
 if(time2 < "15:00:00"){
var stime = (`Good Afternoon`)
 }
 if(time2 < "11:00:00"){
var stime = (`Good Morning`)
 }
 if(time2 < "05:00:00"){
var stime = (`Good Morning`)
}
const reply = m.reply;
function toRupiah(angka) {
  var angkaStr = angka.toString();
  var angkaTanpaKoma = angkaStr.split('.')[0];
  var angkaRev = angkaTanpaKoma.toString().split('').reverse().join('');
  var rupiah = '';
  for (var i = 0; i < angkaRev.length; i++) {
    if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + '.';
  }
  return '' + rupiah.split('', rupiah.length - 1).reverse().join('');
}
function pickrandoms() {
  var symbols = '0123456789';
  var symbolLength = symbols.length;
  var randomString = 'P';
  for (var i = 0; i < 2; i++) {
    randomString += symbols.charAt(Math.floor(Math.random() * symbolLength));
  }
  randomString += '';
  for (var j = 0; j < 4; j++) {
    randomString += symbols.charAt(Math.floor(Math.random() * symbolLength));
  }
  return randomString;
}

    
const nebal = (angka) => {
return Math.floor(angka)
}


var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (m.message) {
            
console.log(chalk.white.bgBlue.bold('VALLZOFFICIAL'), color(`[ PESAN BARU ]`, `${halalu}`), color(`DARI`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`PESAN :`, `${halala}`), color(`${body}`, `${halale}`))
}


const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Payment By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By VallzOffc`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const pler = JSON.parse(fs.readFileSync('./all/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false	

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=62881010907144:+62 881-0109-07144\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

switch (command) {
case 'allmenu': case 'menuall' : case 'menu':{
    let tekgh = `

      Halo, @${m.sender.split("@")[0]}⁩ 👋         

➤ Runtime: ${runtime(process.uptime())}


 ╔═══════════════
 ║     _ALL MENU_                 
 ╔═─────────────────═╗
  ⌬ .panelmenu
  ⌬ .vpsmenu
  ⌬ .installpanelmenu
  ⌬ .domain
  ⌬ .menu
  ⌬ .jpmpromosi
  ⌬ .jpmtesti
  ⌬ .bcgroup
  ⌬ .request
  ⌬ .jadibot 
  ⌬ .stopjadibot
  ⌬ listjadibot
  ⌬ .owner
  ⌬ .installwings
  ⌬ .configurewings
  ⌬ .uninstallpanel
  ⌬ .vpsmenu
  ⌬ .installtheme
  ⌬ .uninstalltheme
 ╚═─────────────────═╝

> ©VallzOffc

`;


    vallzoffc.sendMessage(m.chat, {
        text: tekgh,
        contextInfo: {
            isForwarded: false,
            mentionedJid: [m.sender]
        }
    }, { quoted: m });
}
break
case 'vpsmenu': {
    let tekgh = `

      Halo, @${m.sender.split("@")[0]}⁩ 👋         

➤ Runtime: ${runtime(process.uptime())}


 ╔═══════════════
 ║     _VPS MENU_                 
 ╔═─────────────────═╗
  ⌬ .vps1g1c
  ⌬ .vps2g1c
  ⌬ .vps4g4c
  ⌬ .vps8g4c
  ⌬ .vps16g4c
  ⌬ .vps16gb
  ⌬ .listdroplet
  ⌬ .cekdroplet
  ⌬ .rebuild
  ⌬ .cekakundo
 ╚═─────────────────═╝

> ©VallzOffc

`;


    vallzoffc.sendMessage(m.chat, {
        text: tekgh,
        contextInfo: {
            isForwarded: false,
            mentionedJid: [m.sender]
        }
    }, { quoted: m });
}

break
case 'installpanelmenu': {
    let tekgh = `


      Halo, @${m.sender.split("@")[0]}⁩ 👋         

➤ Runtime: ${runtime(process.uptime())}


 ═══════════════
 ║     _INSTALL PANEL MENU_                 
 ╔═─────────────────═╗
  ⌬ .installpanelv2
  ⌬ .uninstallpanel
  ⌬ .installtheme
  ⌬ .uninstalltheme
  ⌬ .installwings
  ⌬ .createnode
  ⌬ .startwings/configurewings
 ╚═─────────────────═╝

> ©VallzOffc

`;


    vallzoffc.sendMessage(m.chat, {
        text: tekgh,
        contextInfo: {
            isForwarded: false,
            mentionedJid: [m.sender]
        }
    }, { quoted: m });
}
break
case 'domain':{
    let tekgh = `

Halo, @${m.sender.split("@")[0]}⁩ 👋

✬ Runtime: ${runtime(process.uptime())}

_DOMAIN MENU_ 
⌬ .listdomain2
⌬ .delsubdomain2 (*Dellallsubdo*)
⌬ .subdomain (*Hostname,Ipvps*)

> ©VallzOffc

`;
m.reply(tekgh)
}
break
case "autopromooff": case "autopromosioff": {
if (!isOwner) return m.reply('Kamu siapa?')
global.owneroff = false
m.reply('Berhasil mematikan autorespon')
}
break
case 'uninstallpanel': {
    if (!isOwner) return m.reply('Maaf, hanya untuk VallzOffc');
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}uninstall-panel ipvps,password`);
    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl -s https://pterodactyl-installer.se)';

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    conn.on('ready', () => {
        m.reply('*PROSES UNINSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
                if (data.toString().includes('Input')) {
                    if (data.toString().includes('6')) {
                        stream.write('6\n');
                    } else if (data.toString().includes('y/n')) {
                        stream.write('y\n');
                    } else {
                        stream.write('\n');
                    }
                }
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    await new Promise(resolve => setTimeout(resolve, 20000));
    if (isSuccess) {
            m.reply('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
        }
   
    break;
}
        break
case 'listdomain2': {
    // Konfigurasi API Cloudflare
    const CLOUDFLARE_API_KEY = 'oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh'; // Ganti dengan API Key Anda
    const ZONE_ID = 'd4a6adffd3dd317753c4401e38cb7949'; // Ganti dengan Zone ID Anda

    const options = {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            Authorization: "Bearer " + CLOUDFLARE_API_KEY
        }
    };

    // Fungsi untuk mengambil DNS records dari Cloudflare
    const getDnsRecords = async () => {
        try {
            const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records`, options);
            const data = await response.json();
            if (data.success) {
                return data.result;
            } else {
                console.error('Error fetching DNS records:', data.errors);
                return [];
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return [];
        }
    }

    try {
        getDnsRecords().then(dnsRecords => {
            let total = dnsRecords.length;
            let mesej = `List Subdomain Cloudflare Anda: ${total}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
            if (dnsRecords.length === 0) {
                mesej += 'Tidak ada Subdomain yang tersedia.';
            } else {
                dnsRecords.forEach(record => {
                    mesej += `- IPVPS: ${record.content}\n- Subdomain: ${record.name}\n- TTL: ${record.ttl}\n- Created: ${record.created_on} MB\n- Type DNS: ${record.type}\n- Proxied: ${record.proxied}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
                });
            }
            vallzoffc.sendMessage(m.chat, { text: mesej });
        });
    } catch (err) {
        reply('Terjadi kesalahan saat mengambil data Subdomain: ' + err);
    }
    break;
}
break
case "delsubdo2": case "delsubdomain2": {
  if (!isOwner) return reply(msg.owner);

  const zonenya = 'd4a6adffd3dd317753c4401e38cb7949';
  const apinya = 'oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh'; // Ganti dengan API Key Anda
  
  const options = {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json',
      Authorization: "Bearer " + apinya
    }
  };

  // Fungsi untuk mengambil DNS records dari Cloudflare
  const getDnsRecords = async () => {
    try {
      const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, options);
      const data = await response.json();
      if (data.success) {
        return data.result;
      } else {
        console.error('Error fetching DNS records:', data.errors);
        return [];
      }
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }

  // Fungsi untuk menghapus DNS records berdasarkan ID
  const deleteDnsRecord = async (id) => {
    try {
      const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
        method: 'DELETE',
        headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json',
          Authorization: "Bearer " + apinya
        }
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Delete error:', error);
      return false;
    }
  }

  // Proses utama
  (async () => {
    const dnsRecords = await getDnsRecords();
    if (dnsRecords.length > 0) {
    
      for (const record of dnsRecords) {
        const id = record.id;
        const deleteSuccess = await deleteDnsRecord(id);
        if (deleteSuccess) {
          console.log(`Successfully deleted DNS record with ID: ${id}`);
        } else {
          console.log(`Failed to delete DNS record with ID: ${id}`);
        }
      }
    
    } else {
      console.log('Failed to fetch DNS records.');
    }
    reply(`Berhasil Menghapus Semua Subdomain`);
  })();
}

  break
case 'installpanel':{
if (!isOwner) return ('Maaf Hanya Untuk VallzOffc')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domain`)
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};
let password = generateRandomPassword()

const command = 'bash <(curl -s https://pterodactyl-installer.se)';

const conn = new Client();
let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
conn.on('ready', () => {
          m.reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
          if (data.toString().includes('Input')) {
            stream.write('2\n');
          }

          if (data.toString().includes('Input')) {
            stream.write('\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('Vallz007\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('vallzofc@gmail.com\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('vallzofc@gmail.com\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('vallzoffc\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('adm\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('adm\n');
          }
          if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
          }
          if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('yes\n');
          }
       
         if (data.toString().includes('Please read the Terms of Service')) {
                stream.write('A\n');
            }
          if (data.toString().includes('Input')) {
            stream.write('\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('1\n');
          }
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 600000));
if (isSuccess) {
            m.reply('`SUKSES INSTALL PANEL & WINGS DATA AKAN DI KIRIM BENTAR LAGI`');
        }
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [m.sender], 
            isForwarded: false, 
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363267533195844@newsletter',
              serverMessageId: -1
            },
            businessMessageForwardInfo: { businessOwnerJid: vallzoffc.decodeJid(vallzoffc.user.id) },
          }, 
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*DATA PANEL ANDA*\n\n*USERNAME:* vallzoffc\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: harus Install Wings Ketik .installwings\nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [ 
              {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"vallzoffc\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
},
  {
                "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Panel\",\"url\":\"https://${subdomain}\",\"merchant_url\":\"https://www.google.com\"}`
              }
              
            ]
          })
        })
      }
    }
  }, {})

  await vallzoffc.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
  }
 
 break 
case 'installtheme': {
if (!isOwner) return m.reply('ngomong" lu asik juga bang hheheh')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} ipVps,password`)
let ipvps = t[0];
let passwd = t[1];

let sections = [{
title: 'Silahkan Pilih Theme Yang Ingin Di install',
rows: [{
title: 'INSTALL THEME STTELER',
id: `.th1 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME BHILING', 
id: `.th2 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME ENGIMA',
id: `.th3 ${ipvps},${passwd}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By VallzOffc', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: vallzoffc.decodeJid(vallzoffc.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Silahkan Pilih Theme Yang Ingin Anda Install`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/29b71ff69bfdc5ebb12aa.jpg" } }, { upload: vallzoffc.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await vallzoffc.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
  
      break  
case 'th1': {
    if (!isOwner) return ('Maaf Hanya Untuk VallzOffc');
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function vallzoffc(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/vallzhost/installer-theme/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                stream.write('VallzOffc\n');
                stream.write('1\n');
                stream.write('1\n')
                stream.write('yes\n');
                stream.write('x\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
    
    // Tambahkan jeda 5 menit (300000 ms) sebelum mengirim pesan "success uninstall theme"
    setTimeout(() => {
        if (isSuccess) {
            m.reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`');
        }
    }, 300000); // 300000 ms = 5 menit
}


    break  
case 'uninstalltheme': {
    if (!isOwner) return ('Maaf Hanya Untuk VallzOffc');
let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}uninstalltheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    function vallzoffc(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }
    const command = vallzoffc('\\x62\\x61\\x73\\x68\\x20\\x3c\\x28\\x63\\x75\\x72\\x6c\\x20\\x2d\\x73\\x20\\x68\\x74\\x74\\x70\\x73\\x3a\\x2f\\x2f\\x72\\x61\\x77\\x2e\\x67\\x69\\x74\\x68\\x75\\x62\\x75\\x73\\x65\\x72\\x63\\x6f\\x6e\\x74\\x65\\x6e\\x74\\x2e\\x63\\x6f\\x6d\\x2f\\x56\\x61\\x6c\\x6c\\x7a\\x48\\x6f\\x73\\x74\\x2f\\x69\\x6e\\x73\\x74\\x61\\x6c\\x6c\\x65\\x72\\x2d\\x74\\x68\\x65\\x6d\\x65\\x2f\\x6d\\x61\\x69\\x6e\\x2f\\x69\\x6e\\x73\\x74\\x61\\x6c\\x6c\\x2e\\x73\\x68\\x29');

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES UNINSTALL THEME DIMULAI MOHON TUNGGU 3 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                stream.write('VallzOffc\n');
                stream.write('2\n');
                stream.write('y\n');
                stream.write('x\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
    
    // Tambahkan jeda 3 menit (180000 ms) sebelum mengirim pesan "success uninstall theme"
    setTimeout(() => {
        if (isSuccess) {
            m.reply('SUCCES UNINSTALL THEME PANEL ANDA COBA CEK');
        }
    }, 180000); // 180000 ms = 3 menit
    
    
}

break
case 'installwings':{
if (!isOwner) return ('Maaf Hanya Untuk VallzOffc')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installwings ipvps,password,domainpnl,domainnode`)
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
let domainnode =[3];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = 'bash <(curl -s https://pterodactyl-installer.se)';

const conn = new Client();
conn.on('ready', () => {
          m.reply('*PROSES PENGINSTALLAN PANEL && WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {

          if (data.toString().includes('Input')) {
            stream.write('bash <(curl -s https://pterodactyl-installer.se)\n');
          }
          
               if (data.toString().includes('Input')) {
            stream.write('1\n');
          }

          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('VallzGg\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('Vallzoffc1e\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('vallzoffc@gmail.com');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('input')) {
              stream.write('y\n');
          }
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 90000));
m.reply(`*INSTALL WINGS SUCCES DENGAN NODE YANG TERKAIT*`)
}
break
case 'installpanelv2': {
    if (!isOwner) return ('Maaf Hanya Untuk VallzOffc');
    let t = text.split(',');
    if (t.length < 4) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installpanelv2 ipvps,password,domainpnl,domainnode,ramvps(Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const node = 'bash <(curl https://raw.githubusercontent.com/vallzprivate/theme/main/install.sh)'
    const conn = new Client();

    conn.on('ready', () => {
        m.reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                if (data.toString().includes('Input')) {
                    stream.write('0\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('Vallz007\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('Asia/Jakarta\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('vallzofc@gmail.com\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('vallzofc@gmail.com\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('vallzoffc\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('adm\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('adm\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write(`${password}\n`);
                }
                if (data.toString().includes('Input')) {
                    stream.write(`${subdomain}\n`);
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('yes\n');
                }
                if (data.toString().includes('Please read the Terms of Service')) {
                    stream.write('A\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('1\n');
                }
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    
    async function installWings(conn, domainnode, subdomain, password) {
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                if (data.toString().includes('Input')) {
                    stream.write('1\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write(`${subdomain}\n`);
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('val\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write(`${domainnode}\n`);
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('vallzoffc@gmail.com\n');
                }
                if (data.toString().includes('Input')) {
                    stream.write('y\n');
                }
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }
        
    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        conn.exec(node, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('CreateNode Prcesed stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                stream.write('VallzOffc\n');
                stream.write('4\n');
                stream.write('SGP\n');
                stream.write('AutoCnode Vallz\n');
                stream.write(`${domainnode}\n`)
                stream.write('NODES\n');
                stream.write(`${ramvps}\n`);
                stream.write(`${ramvps}\n`);
                stream.write('1\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }
   
    
    async function sendPanelData(subdomain, password) {
   m.reply(`*DATA PANEL ANDA*\n\n*USERNAME:* vallzoffc\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`)
}
}
break  
case 'startwings': case 'configurewings': {
    if (!isOwner) return ('Maaf Hanya Untuk VallzOffc');
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${cmd} ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/vallzprivate/theme/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES CONFIGURE WINGS*')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
m.reply('SUCCES START WINGS DI PANEL ANDA COBA CEK PASTI IJO😁');
                conn.end();
            }).on('data', (data) => {
            stream.write('VallzOffc\n');
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }

break
case "jpmhidetag": {
if (!isOwner) return m.reply('VallzOffc')
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await vallzoffc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await vallzoffc.sendMessage(jid, {text: teks, mentions: getGroups[jid].participants.map(e => e.id)}, {quoted: qchanel})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}


break
case "jpmpromosi": case "jpmpromo": case "jpm3": {
if (!isOwner) return m.reply('Khusus Vallzoffc')
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await vallzoffc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await vallzoffc.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}

break
case "jpmtesti": {
if (!isOwner) return m.reply('Khusus Vallzoffc')
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await vallzoffc.downloadAndSaveMediaMessage(qmsg)
if (global.idsaluran == "-") return m.reply('Isi Dulu ID Saluran Lu Di File Settings.js!')
let total = 0
let getGroups = await vallzoffc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: vallzoffc.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel})
for (let jid of usergc) {
try {
await vallzoffc.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}

break 
case 'subdomain': {
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} hostname,ipVps`)
let hostname = t[0];
let ip = t[1];

let sections = [{
title: 'List Subdomain di bawah',
rows: [{
title: 'rafatharofficial.my.id',
description: `Create Subdomain rafatharofficial.my.id`, 
id: `.domain1 ${hostname}|${ip}`
},
{
title: 'digital-market.me', 
description: "Create Subdomin digital-market.me", 
id: `.domain2 ${hostname}|${ip}`
},
{
title: 'sellerpanell-store.xyz',
description: `Create Subdomain sellerpanell-store.xyz`, 
id: `.domain3 ${hostname}|${ip}`
},
{
title: 'mypanell-store.com',
description: `Create Subdomain mypanell-store.com`, 
id: `.domain4 ${hostname}|${ip}`
},
{
title: 'panelstoreku.xyz ',
description: `Create Subdomain panelstoreku.xyz `, 
id: `.domain5 ${hostname}|${ip}`
},
{
title: 'panelanimeku.my.id  ',
description: `Create Subdomain panelanimeku.my.id  `, 
id: `.domain7 ${hostname}|${ip}`
},
{
title: 'turzcloud.tech  ',
description: `Create Subdomain turzcloud.tech  `, 
id: `.domain8 ${hostname}|${ip}`
},
{
title: 'cloudxingyu.me  ',
description: `Create Subdomain cloudxingyu.me  `, 
id: `.domain9 ${hostname}|${ip}`
},
{
title: 'xinyustore.tech',
description: `Create Subdomain xinyustore.tech`, 
id: `.domain11 ${hostname}|${ip}`
},
{
title: 'panel-store.games',
description: `Create Subdomain panel-store.games`, 
id: `.domain12 ${hostname}|${ip}`
},
{
title: 'panelshop.live',
description: `Create Subdomain panelshop.live`, 
id: `.domain13 ${hostname}|${ip}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By vallzDev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: vallzoffc.decodeJid(vallzoffc.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the you subdomain`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/29b71ff69bfdc5ebb12aa.jpg" } }, { upload: vallzoffc.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await vallzoffc.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}





           
           
          break
          case 'domain1': {
    if (!isOwner) return reply("Fitur Ini Khusus Untuk Reseller Subdomain VallzOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62856412257530")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By VALLZ HOSTING⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/IvpyNDpaLPCAxpKMCZ5rtG _*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain2': {
    if (!isOwner) return reply("Fitur Ini Khusus Untuk Reseller Subdomain VallzOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/62856412257530")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By VALLZ HOSTING⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/IvpyNDpaLPCAxpKMCZ5rtG _*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          
           
           
  
           
           
               break
           case 'domain3': {
    if (!isOwner) return m.reply("Mohon Maap, Group Ini Tidak Terdaftar Di Dalam Database Kami")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0cf0d98bcb60af202ad5816f672ca471";
               let apitoken = "f5ApkZpsRdJxTuA0xlfr9vCJ1bknGAAJ7rv10H_f";
               let tld = "sellerpanell-store.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By VALLZ HOSTING⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/IvpyNDpaLPCAxpKMCZ5rtG _*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
            break
case 'domain4': {
    if (!isOwner) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain VALLZ HOSTING\nMau Join? Cuman 5.000 Ajaa\n\nHubungi wa.me/62856412257530")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "95a92e2d61881587d97147504adae179";
               let apitoken = "Gh2ZG8DO7MoD7behXJc9NilacIdSv9o1BnMxiY-S";
               let tld = "mypanell-store.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By VALLZ HOSTING⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/IvpyNDpaLPCAxpKMCZ5rtG _*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain5': {

    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e907dafdca23667a2b5736c14243546c";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelstoreku.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
	case 'domain6': {
    
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d2cfda818701061d6f6fb945656f15a0";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panel-turzz.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain6': {

    if (!isOwner) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain ᐯᴀʟʟᴢOғғᴄ\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6282213445634")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By ᐯᴀʟʟᴢOғғᴄ⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain7': {
    
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "754b80a855a0be5f8408362be027de47";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelanimeku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
            break
           case 'domain8': {
    
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0732cec5bce56eb1080ccde36e41a21e";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "turzcloud.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = VallzGntng
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break        
         case 'domain9': {
    
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f267a35df1d1b1de6ad8d64a0b7b4fde";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "cloudxingyu.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = VallzGntng
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
            break
   case 'domain10': {

    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb14e64f34403687018df4c6281b5055";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "xinyustore.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = VallzGntng
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
    case 'domain11': {

    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a33497f2438c716b86d470f0dbd3c0ca";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panel-store.games";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = VallzGntng
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain12': {

    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "974f191d5c51f390104f012eb7be6a02";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelshop.live";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = VallzGntng
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }

case 'delgc':
  if (!isOwner) return m.reply(`khusus Creator`)
    if (!m.isGroup) return m.reply(`Khusus Group`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/idgrup.json', JSON.stringify(pler))
m.reply(`${command} sukses`)
break
case 'addgc':
    if (!m.isGroup) return m.reply(`Khusus Group`)         
if (!isOwner) return m.reply(`khusus Creator`)
pler.push(m.chat)
fs.writeFileSync('./all/idgrup.json', JSON.stringify(pler))
m.reply(`${command} sukses`)



break
    case "vps1g1c": {
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await vallzoffc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await vallzoffc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await vallzoffc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await vallzoffc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await vallzoffc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
  break        
     case "vps16g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
      let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-16gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await vallzoffc.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}

break;
 case "listdroplet": {
  if (!isOwner) return m.reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      vallzoffc.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }
}
break
    
 case "cekdroplet": {
  if (!isOwner) return m.reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      vallzoffc.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      vallzoffc.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });
}

break
case "rebuild": {
  if (!isOwner) return m.reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply("Rebuild VPS berhasil dimulai. Status aksi:" + data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 vallzoffc.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}

break

        case "deldroplet": {
  if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        m.reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      m.reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();
}
        break
        case 'addsc':{
            
            if (args.length !== 1) {

return reply('Format penggunaan salah. Contoh: !addsc <ip>');

}

const ipValue = args[0];

const url = 'http://api.vallzoffc.my.id/api/ip.php';

fetch(url, {

    method: 'POST',

    headers: {

        'Content-Type': 'application/json'

    },

    body: JSON.stringify({

        ip_address: `${ipValue}`,

    

    })

}).then(res => res.json())

.then(data => console.log(data))
m.reply `berhasil mengizinkan akses sc ke ip: ${ipValue} `
.catch(error => m.reply.error(error));

}
break
case "jadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  jadibot(vallzoffc, m, from)
}
break
case "stopjadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  stopjadibot(vallzoffc, from)
}
break
case "listjadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  listjadibot(vallzoffc, m)
}
break
  case 'cekakun': case 'cekakundo' :{
    if (!isOwner) return m.reply('Ngapain? Kepo Amat Dah');

    const getAccountInfo = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/account', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching account info:', error);
        return null;
      }
    };

    getAccountInfo()
      .then((accountInfo) => {
        if (accountInfo) {
          const account = accountInfo.account;
          const responseText = `
Account Info:
Name: ${account.name}
Email: ${account.email}
Droplet Limit: ${account.droplet_limit}
Floating IP Limit: ${account.floating_ip_limit}
Status: ${account.status}
Team Name: ${account.team.name}
          `;
          m.reply(responseText);
        } else {
          m.reply('Failed to fetch account info');
        }
      })
      .catch((err) => {
        m.reply(`Error: ${err.message}`);
      });
    break;
  }
break
  
    case 'cekakun':
      if (!isOwner) return m.reply('Ngapain? Kepo Amat Dah');
        

      const getAccountInfo = async () => {
        try {
          const response = await fetch('https://api.digitalocean.com/v2/account', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_TOKEN}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching account info:', error);
          return null;
        }
      };

      const getPasswordInfo = async () => {
        try {
          const response = await fetch('https://api.digitalocean.com/v2/account/password', {  // Adjust endpoint as necessary
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_TOKEN}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching password info:', error);
          return null;
        }
      };

      const accountInfo = await getAccountInfo();
      const passwordInfo = await getPasswordInfo();

      if (accountInfo && passwordInfo) {
        const account = accountInfo.account;
        const password = passwordInfo.password;  // Adjust according to actual response structure
        const responseText = `
Account Info:
Name: ${account.name}
Email: ${account.email}
Droplet Limit: ${account.droplet_limit}
Floating IP Limit: ${account.floating_ip_limit}
Status: ${account.status}
Team Name: ${account.team.name}
Password: ${password}
        `;
        m.reply(responseText);
      } else {
        m.reply('Failed to fetch account or password info');
      }
break
  case 'req': case 'request':{
  if (!text) return reply(`Jika Ada Produk Yang Ingin Ditambahkan
  
  Silahkan ketik :
  .Request NamaProduk
  
  Contoh :
  .Request Min Tolong Tambahin Fitur Cnokos`)
    reply(`Sip, Saran Anda Telah Kami Terima`)
  vallzoffc.sendMessage('6285641225753@s.whatsapp.net', {text: `Saran: ${text}
  Sender: wa.me/${m.sender.split("@")[0]}`                                           
  })
  };
break
case "turnon": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  
}
break

case 'bcgc': case 'bcgroup': {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await vallzoffc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
vallzoffc.sendMessage(i, {text: `${text}`}, {quoted:m})
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}



  break  
case 'createnode': {
    if (!isOwner) return ('Maaf Hanya Untuk VallzOffc');
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}createnode ipvps,password,domainnode,ramvps`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let domainnode = t[2];
    let ramvps = t[3];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/vallzprivate/theme/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*MEMULAI CREATE NODE & LOCATION*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('*NODE DAN LOCATION TELAH DI TAMBAHKAN SILAHAKAN TAMBAH KAN ALLOCATION MANUAL😂 & AMBIL TOKEN CONFIGURE*')
                conn.end();
            }).on('data', (data) => {
            stream.write('VallzOffc\n');
            stream.write('4\n');
                stream.write('SGP\n');
                stream.write('AutoCnode Vallz\n');
                stream.write(`${domainnode}\n`)
                stream.write('NODES\n');
                stream.write(`${ramvps}\n`);
                stream.write(`${ramvps}\n`);
                stream.write('1\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }


default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return vallzoffc.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return vallzoffc.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
vallzoffc.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
vallzoffc.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return vallzoffc.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return vallzoffc.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
vallzoffc.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})