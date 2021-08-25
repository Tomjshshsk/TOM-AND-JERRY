const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://tinyurl.com/39yucpsv";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater JUGGRU*
*owner number wa.me/919656813724*
*yt channel : https://youtu.be/74RMmXW5bQk*
*githublink       https://github.com/JUGGRU-SER-12/JUGGRUBOTZ*
*audio commads     https://github.com/JUGGRU-SER-12/JUGGRUBOTZ/tree/master/uploads*
`}) 

}));
