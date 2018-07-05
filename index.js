const discord = require ('discord.js');
const fs = require (`fs`);
const ms = require (`ms`);
var client = new discord.Client(); 
const token = process.env.token;
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const guildArray = client.guilds.map((guild) => {
    return `${guild.name} ${guild.memberCount}`;
})

client.on ("ready", () => {
    console.log ("Colonial >.<")
    client.user.setActivity (`${client.guilds.size} guilds | c!fun` )
    

    answered = true;
    cAnswer = "";
    userAnswer = "";
    answered2 = true;
    answered3 = true;
    userResponse = ""; 
    nameAnswer = "";
    userResponse2 = ""; 
    cAnswer = "";
});

client.on(`guildMemberAdd`, member => {
    let jChannel = member.guild.channels.find(`name`, `general`)
    let mAvatar = member.user.avatarURL
    if (!jChannel) return;
    const gembed = new discord.RichEmbed()
    gembed.setTitle(`${member.user.username} has joined the server!`)
    gembed.setColor(`RANDOM`)
    gembed.setThumbnail(mAvatar)
    gembed.addField(`Name`, `${member.user.username}`)
    gembed.addField(`Member count`, member.guild.memberCount)
    gembed.setFooter(`${member.guild.name}` + `${member.user.displayAvatarURL}`)
    jChannel.sendEmbed(gembed)
    let jRole = message.guild.roles.find(`name`, `Student`)
    member.addRole(jRole)



})

client.on(`guildMemberRemove`, member => {
    let jChannel = member.guild.channels.find(`name`, `general`)
    let mAvatar = member.user.avatarURL
    if (!jChannel) return;
    const gembed = new discord.RichEmbed()
    gembed.setTitle(`${member.user.username} has left the server!`)
    gembed.setColor(`RANDOM`)
    gembed.setThumbnail(mAvatar)
    gembed.addField(`Name`, `${member.user.username}`)
    gembed.addField(`Member count`, member.guild.memberCount)
    gembed.setFooter(`${member.guild.name}` + `${member.user.displayAvatarURL}`)
    jChannel.sendEmbed(gembed)



})

const prefix = "colonial pls ";

client.on('message', async (message) => {
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1);

    if (message.author.bot) return;

    if (message.content.startsWith(`c!solarsystem`)) {
        message.channel.send(`What would you like to know about?`)

        const filter = m => m.author.equals(message.author);
        message.channel.awaitMessages(filter, { max: 1, time: 6000, errors: [`time`] })
        .then(collected => {
            if (collected.first().content == `Sun`) {
                const sunembed = new discord.RichEmbed()
                sunembed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464103204066426890/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASAs_Solar_Dynamics_Observatory_-_20100819.jpg`)
                sunembed.addField(`Distance`, `One Astronomical Unit`)
                sunembed.addField(`Density`, `1.41 g`)
                sunembed.addField(`Radius`, `432,169 Miles`)
                sunembed.addField(`Volume`, `1.4 x 10^27 cubic meters`)
                sunembed.addField(`Mass`, `1.989 × 10^30 kg`)
                message.channel.send(sunembed)
            }

            if(collected.first().content == `Mercury`) {
                const merembed = new discord.RichEmbed()
                merembed.setTitle(`Mercury`)
                merembed.setColor(`#b2b2b2`)
                merembed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102356892647424/Mercury_in_color_-_Prockter07-edit1.jpg`)
                merembed.addField(`Order from the Sun`, `First Planet`)
                merembed.addField(`Day Length`, `58.26 days`)
                merembed.addField(`Year Length`, `88 days.`)
                merembed.addField(`Distance`, `0.39 Astronomical Units`)
                merembed.addField(`Density`, `${planets.mercury.density} kg.`)
                merembed.addField(`Radius`, `${planets.mercury.radius} meters.`)
                merembed.addField(`Volume`, `${planets.mercury.volume} meters^3.`)
                merembed.addField(`Mass`, `${planets.mercury.mass} kilograms.`)
                merembed.addField(`How will it die?`, `Swallowed by the Sun.`)
                message.channel.send(merembed) 
            }
            
            if(collected.first().content == `Venus`) {
                const veembed = new discord.RichEmbed()
                veembed.setTitle(`Venus`)
                veembed.setColor(`#ffd000`)
                veembed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102343500103683/260px-Venus-real_color.jpg`)
                veembed.addField(`Order from the Sun`, `Second Planet`)
                veembed.addField(`Day Length`, `116.3 days`)
                veembed.addField(`Year Length`, `225 days.`)
                veembed.addField(`Distance`, `0.72 Astronomical Units.`)
                veembed.addField(`Density`, `${planets.venus.density} kg.`)
                veembed.addField(`Radius`, `${planets.venus.radius} meters.`)
                veembed.addField(`Volume`, `${planets.venus.volume} meters^3.`)
                veembed.addField(`Mass`, `${planets.venus.mass} kilograms.`)
                veembed.addField(`How will it die?`, `Swallowed by the Sun.`)
                message.channel.send(veembed) 
            }

            if(collected.first().content == `Earth`) {
                const earembed = new discord.RichEmbed()
                earembed.setTitle(`Earth`)
                earembed.setColor(`#00db41`)
                earembed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102348105711628/638831main_globe_east_2048.jpg`)
                earembed.addField(`Order from the Sun`, `Third Planet`)
                earembed.addField(`Day Length`, `24 hours`)
                earembed.addField(`Year Length`, `365 days`)
                earembed.addField(`Distance`, ` 1 Astronomical Unit.`)
                earembed.addField(`Density`, `${planets.earth.density} kg.`)
                earembed.addField(`Radius`, `${planets.earth.radius} meters.`)
                earembed.addField(`Volume`, `${planets.earth.volume} meters^3.`)
                earembed.addField(`Mass`, `${planets.earth.mass} kilograms.`)
                earembed.addField(`How will it die?`, `Swalloed by sun, Colission with Mars, or launched out of the Solar System when the Sun becomes a Red Giant.`)
                message.channel.send(earembed)

            }

            if(collected.first().content == `Mars`) {
                const marbed = new discord.RichEmbed()
                marbed.setTitle(`Mars`)
                marbed.setColor(`#ff3b00`)
                marbed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102362189922326/OSIRIS_Mars_true_color.jpg`)
                marbed.addField(`Order from the Sun`, `Fourth Planet`)
                marbed.addField(`Day Length`, `1.06 days`)
                marbed.addField(`Year Length`, `687 days`)
                marbed.addField(`Distance`, ` 1.524 Astronomical Units.`)
                marbed.addField(`Density`, `${planets.mars.density} kg.`)
                marbed.addField(`Radius`, `${planets.mars.radius} meters.`)
                marbed.addField(`Volume`, `${planets.mars.volume} meters^3.`)
                marbed.addField(`Mass`, `${planets.mars.mass} kilograms.`)
                marbed.addField(`How will it die?`, `Colission with Earth or Thrown out of Orbit when the Sun becomes a Red Giant.`)
                message.channel.send(marbed) 
            }

            if(collected.first().content == `Jupiter`) {
                const marbed = new discord.RichEmbed()
                marbed.setTitle(`Jupiter`)
                marbed.setColor(`#ff3b00`)
                marbed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102344351547413/330px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg`)
                marbed.addField(`Order from the Sun`, `Fifth Planet`)
                marbed.addField(`Day Length`, `9.93 hours`)
                marbed.addField(`Year Length`, `12 years`)
                marbed.addField(`Distance`, ` 5.2 Astronomical Units.`)
                marbed.addField(`Density`, `${planets.jupiter.density} kg.`)
                marbed.addField(`Radius`, `${planets.jupiter.radius} meters.`)
                marbed.addField(`Volume`, `${planets.jupiter.volume} meters^3.`)
                marbed.addField(`Mass`, `${planets.jupiter.mass} kilograms.`)
                marbed.addField(`How will it die?`, `No strong aswer is defined. Will either die when the Sun supernovas or will just leave the Solar System.`)
                message.channel.send(marbed) 
            }

            if(collected.first().content == `Saturn`) {
                const marbed = new discord.RichEmbed()
                marbed.setTitle(`Saturn`)
                marbed.setColor(`#d7ff47`)
                marbed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102349368066070/download_18.jpeg`)
                marbed.addField(`Order from the Sun`, `Sixth Planet`)
                marbed.addField(`Day Length`, `10.7 hours`)
                marbed.addField(`Year Length`, `29 years`)
                marbed.addField(`Distance`, ` 9.5 Astronomical Units.`)
                marbed.addField(`Density`, `${planets.saturn.density} kg.`)
                marbed.addField(`Radius`, `${planets.saturn.radius} meters.`)
                marbed.addField(`Volume`, `${planets.saturn.volume} meters^3.`)
                marbed.addField(`Mass`, `${planets.saturn.mass} kilograms.`)
                marbed.addField(`How will it die?`, `No strong aswer is defined. Will either die when the Sun supernovas or will be just leave from the Solar System.`)
                message.channel.send(marbed) 
            }

            if(collected.first().content == `Uranus`) {
                const marbed = new discord.RichEmbed()
                marbed.setTitle(`Uranus`)
                marbed.setColor(`#8ad1d1`)
                marbed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102355600932874/Uranus2.jpg`)
                marbed.addField(`Order from the Sun`, `Seventh Planet`)
                marbed.addField(`Day Length`, `17.9 hours`)
                marbed.addField(`Year Length`, `84 years`)
                marbed.addField(`Distance`, ` 19.4 Astronomical Units.`)
                marbed.addField(`Density`, `${planets.uranus.density} kg.`)
                marbed.addField(`Radius`, `${planets.uranus.radius} meters.`)
                marbed.addField(`Volume`, `${planets.uranus.volume} meters^3.`)
                marbed.addField(`Mass`, `${planets.uranus.mass} kilograms.`)
                marbed.addField(`How will it die?`, `Will die when Sun supernovas.`)
                message.channel.send(marbed) 
            }

            if(collected.first().content == `Neptune`) {
                const marbed = new discord.RichEmbed()
                marbed.setTitle(`Uranus`)
                marbed.setColor(`#1a15af`)
                marbed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102352069328915/Neptune_Full.jpg`)
                marbed.addField(`Order from the Sun`, `Eigth Planet`)
                marbed.addField(`Day Length`, `19.1 hours`)
                marbed.addField(`Year Length`, `164 years`)
                marbed.addField(`Distance`, ` 30 Astronomical Units.`)
                marbed.addField(`Density`, `${planets.neptune.density} kg.`)
                marbed.addField(`Radius`, `${planets.neptune.radius} meters.`)
                marbed.addField(`Volume`, `${planets.neptune.volume} meters^3.`)
                marbed.addField(`Mass`, `${planets.neptune.mass} kilograms.`)
                marbed.addField(`How will it die?`, `Will die when Sun supernovas.`)
                message.channel.send(marbed) 
            }

            if(collected.first().content == `Pluto`) {
                const marbed = new discord.RichEmbed()
                marbed.setTitle(`Pluto`)
                marbed.setColor(`#ffeff9`)
                marbed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102372852105226/20151106_crop_p_color2_enhanced_release-superenhanced-2k-dc-ir-zld.png`)
                marbed.addField(`Order from the Sun`, `Dward Planet (Demoted)`)
                marbed.addField(`Day Length`, `6.37 days`)
                marbed.addField(`Year Length`, `247.7 years`)
                marbed.addField(`Distance`, ` 39 Astronomical Units.`)
                marbed.addField(`Density`, `${planets.pluto.density} kg.`)
                marbed.addField(`Radius`, `${planets.pluto.radius} meters.`)
                marbed.addField(`Volume`, `${planets.pluto.volume} meters^3.`)
                marbed.addField(`Mass`, `${planets.pluto.mass} kilograms.`)
                marbed.addField(`How will it die?`, `No clear answer defined.`)
                message.channel.send(marbed) 
            }
            
            if(collected.first().content == `idk`) {
                message.channel.send(`You can do: \n \n Sun \n Mercury \n Venus \n Earth \n Mars \n Jupiter \n Saturn \n Uranus \n Neptune \n Pluto`) 
            }
        })
        
    }
    
    if (message.content.startsWith(`c!light`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("brightlmao.jpg")
                  .brightness(+0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'brightlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!dark`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("darklmao.jpg")
                  .brightness(-0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'darklmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!contrast`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("contrastlmao.jpg")
                  .contrast(+0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'contrastlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!fun`)) {
        const fuembed = new discord.RichEmbed
        fuembed.setThumbnail(message.guild.iconURL)
        fuembed.setTitle(`List of Fun Commands!`)
        fuembed.addField(`m!8ball`, `A simple 8ball command`)
        fuembed.addField(`m!safe`, `Your safe space.` )
        fuembed.addField(`m!kiss`, `Kiss command`)
        fuembed.addField(`m!weeb`, `You're a weeb`)
        fuembed.addField(`m!pride`, `Gay Pride`)
        fuembed.addField(`m!bully`, `Bully a user`)
        fuembed.addField(`m!shove`, `Shove a user into a locker`)
        fuembed.addField(`m!tranny`, `Makes u trans`)
        fuembed.addField(`m!gay`, `Makes u gay`)
        fuembed.addField(`m!commie`, `Makes you a commie`)
        fuembed.addField(`m!grey`, `makes u grey`)
        fuembed.addField(`m!jew`, `Image manipulation`)
        fuembed.addField(`m!wasted`, `Image manipulation`)
        fuembed.addField(`m!contrast`, `Image manipulation`)
        fuembed.addField(`m!dark`, `Image manipulation`)
        fuembed.addField(`m!light`, `Image manipulation`)
        fuembed.addField(`m!noncontrast`, `Image manipulation`)
        fuembed.addField(`m!dither`, `Image manipulation`)
        fuembed.addField(`m!invert`, `Image manipulation`)
        fuembed.addField(`m!thug`, `Image manipulation`)
        fuembed.addField(`m!say`, `Image manipulation`)
        fuembed.setColor(`RANDOM`)
        message.channel.send(fuembed)


    }
	
	

    if (message.content.startsWith(`c!nocontrast`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("nocontrastlmao.jpg")
                  .contrast(-0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'nocontrastlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!dither`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude3) {
            if (err) throw err;
            mydude3.quality(60)  
                  .write("dither565lmao.jpg")
                  .dither565()
            mydude3.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'dither565lmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!invert`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("invertlmao.jpg")
                  .invert()
                  .composite( src, x, y );   
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'invertlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!thug`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/EgxsA9V.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 400, 212 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!safe`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/459815018230317059/463530972152070144/Screen_Shot_2018-07-02_at_11.32.36_AM.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(595, 594)
                      .write("queerkid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 1430, 0 )
                      .write("queer.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send(`Don't worry, you're safe now ;)`, {files: [{attachment: buf, name: 'queer.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!write`)) {
        let mUser = message.mentions.users.first()

        const mUserA = mUser.avatarURL

        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (err, imagetouse) {
                if (err) throw err;
                imagetouse.print(imagetouse, 10, 10, "?")
                     .write("text.jpg");
                imagetouse.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send(`Don't worry, you're safe now ;)`, {files: [{attachment: buf, name: 'text.jpg'}]})
                })
            })
        })
    }

    if (message.content.startsWith(`c!pride`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463672154546765824/4848922942_6a3b774167_z-e1333136836167.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(147, 147)
                      .write("gaykid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 314, 196 )
                      .write("gaykid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'gaykid.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!tranny`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463673472846004235/5852d7ef120000c40beef7dd.jpeg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(185, 185)
                      .write("trannykid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 344, 205 )
                      .write("transkid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'transkid.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!weeb`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463674453922938881/18mlqdeeco4jujpg.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(85, 85)
                      .write("weeb.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 127, 80 )
                      .write("weebs.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'weebs.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!minecraft`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463677586992660480/maxresdefault_6.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(530, 530)
                      .write("kids.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 508, 0 )
                      .write("kid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'kid.jpg'}]})
                }
            )}
        )})
    }

    

    

    


    if (message.content.startsWith(`c!trans`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/YYgoI3H.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }
    
    if (message.content.startsWith(`c!gay`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/Wzlskgl.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!jew`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/kYoUDCl.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!commie`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/358448632812535820/463432544831012864/image.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(176, 176)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(191, 169)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 473, 0 )
                      .composite( imagetouse2, 84, 23)
                      .write("commie.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'commie.jpg'}]})
                }
            )})}
        )})
    }

    if (message.content.startsWith(`c!kiss`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463680991266078721/5aad662e87f5e18e_thumb_temp_facebook_post_image_file23875021420057644.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(275, 275)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(233, 233)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 260, 24 )
                      .composite( imagetouse2, 545, 87)
                      .write("commie.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'commie.jpg'}]})
                }
            )})}
        )})
    }



    if (message.content.startsWith(`c!bully`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://media.discordapp.net/attachments/463426578135908352/463496757922234388/Being_Bullied.jpg?width=1725&height=1170`;
        Jimp.read(message.author.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(357, 357)
                      .write("bullier.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(594, 594)
                      .write("kidbeingbullied.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 0, 178 )
                      .composite( imagetouse2, 1027, 38)
                      .write("bully.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'bully.jpg'}]})
                }
            )})}
        )})
    }

    if (message.content.startsWith(`c!shove`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463503583539625984/shutterstock_127994624.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(655, 655)
                      .write("shove1.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
                if (err) throw err;
                imagetouse2.quality(60)
                           .resize(792, 792)
                           .write("shove2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 89, 220 )
                      .composite( imagetouse2, 1273, 256)
                      .write("shoved.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'shoved.jpg'}]})
                }
            )})}
        )})
    }

    


});
client.login (token);
