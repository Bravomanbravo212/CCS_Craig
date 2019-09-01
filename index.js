const Commando = require(`discord.js-commando`);
const bot = new Commando.Client();
const TOKEN = `NTQ2NjU5NDg0ODU3MjcwMjcy.XR-zEA.ogr5KlyxcHCFOQ8hBYUuB89SXCw`



bot.registry.registerGroup(`simple`, `Simple`);
bot.registry.registerGroup(`music`, `Music`);
bot.registry.registerGroup(`admin`, `Admin`);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.commandPrefix = `.`
global.servers = {};

bot.on(`message`, function(message){
    if(message.content == `Hello`)
    {
       message.reply(`Hello, how are you?`);
    }
});

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the official Canada Correctional Services Communications Server! Be sure to read all of the rules before interacting with us!");
});

bot.on(`ready`,function(){
    console.log(`Ready`);
    bot.user.setActivity(`Canada Corrections`, {type: `WATCHING`})
})

bot.login(process.env.token);
