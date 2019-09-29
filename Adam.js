const Discord = require('discord.js');
const adam = new Discord.Client();

adam.on('ready', () => {
    console.log("Connected as " + adam.user.tag);

    adam.user.setActivity("Procrastination");

    adam.guilds.forEach((guild) =>{
        console.log(guild.name);
        guild.channels.forEach((channel) => {
          console.log(`-${channel.name} ${channel.type} ${channel.id}`)
        })
    })
    //general text 448757405443031048
    //general voice 448757405443031050

    let generalText = adam.channels.get("448757405443031048");
    const attach =  new Discord.Attachment("/Users/Youyi/Downloads/Downloads are here/hello.jpeg");
    //generalText.send("I am resurrected for death!");
    generalText.send(attach);

});

adam.on('message', receivedMessage =>{

    let msg = receivedMessage.content.toUpperCase();
    let sender = receivedMessage.author;
    let generalText = adam.channels.get("448757405443031048");

   if(msg.author == adam.user){
       return;
   }

   if(msg == "HELLO ADAM"){
       generalText.send("Hello " + sender.toString() + " 🤗");// Why Cannot I use msg.author?
    }
    //receivedMessage.react("🤗");
    if(msg.startsWith("!") || msg.startsWith("~")){
       processCommand(msg);
    }

});

function processCommand(receivedMessage){
    let command = receivedMessage.substr(1);
    let splitCommand = command.split(" ");
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    if(primaryCommand == "HELP") {
        helpCommand();
    }

    if(primaryCommand == "MUSIC"){
        musicCommand(arguments)
    }
}


function helpCommand(){
    let generalText = adam.channels.get("448757405443031048");

    generalText.send("I can take:\n~music song\n~weather");
    //receivedMessage.channel.send("~weather + \n + ~");
    }

function musicCommand(songName){
    let generalText = adam.channels.get("448757405443031048");
    let generalVoice = adam.channels.get("448757405443031050");



    //generalText.send(songName);
}

adam.login("NTE5MDA3NzEwMzk0NzEyMDk0.DuZERw.XQLblIFgG-6ZRz_InKAkBUfgOkk");