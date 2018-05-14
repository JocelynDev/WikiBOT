/* BOT DU DISCORD CHAINSTRIKE FRANCE => https://discord.gg/4XMqDUd */

const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!!")

bot.on('ready', function() {
    bot.user.setActivity("ChainStrike | Besoin d'aide ? => !:aide")
});

bot.login("#######");

bot.on('message', message => {

    if(message.content === prefix + "infodiscord")
    {
        var embed = new Discord.RichEmbed()
        .setDescription("** Information du Discord **")
        .addField("Nombre de membres : ",  message.guild.memberCount, true)
        .addField("Le serveur a été créer le : ", message.guild.createdAt, true)
        .addField("Tu nous as rejoint le : ",  message.member.joinedAt, true)
        .setThumbnail(message.author.avatarURL)
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "aide")
    {
        message.channel.send("**Pour afficher les compétences d'un gardien il suffit de saisir la commande suivante :** \n ```!:(NomDuGardien) (Direction) ``` \n Exemple : \n ```!:Chaos tour``` \n **Directions disponible** : Cavalier, Roi, Reine, Fou et Tour \n \n :warning: Les directions sont à saisir sans majuscules ! (Exemple : !:Chaos **t**our) \n \n :warning: Seul les gardiens 5 nats sont disponibles dans le WikiBOT V1 (Les autres arrivent dans les prochaines versions) \n \n \n ** Pour obtenir les commandes du WikiBot :** \n ```!:aide``` \n \n **Pour obtenir les informations du discord et de ton arrivée** : \n ``` !:infodiscord ```    ")
    }

    /* Chaos */

    if(message.content === prefix + "Chaos tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Chaos Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de tous les alliés de 30 %" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3x consécutives pour étourdir la cible pendant 1 tour avec 35 % de chances. Gagne instantanément 1 PA quand la cible est vaincue. (2 PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée et redonne 10 % de leurs PV à tous les alliés. (2 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Supprime 1 effet d'affaiblissement posé sur tous les alliés et récupère 3 % de tes PV au début du tour (délai de récupération au max en premier). (2 PA)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Chaos cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Chaos Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de tous les alliés de 30 %" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3x consécutives pour étourdir la cible pendant 1 tour avec 35 % de chances. Gagne instantanément 1 PA quand la cible est vaincue. (2 PA)", true)       
        .addField("Compétence 2 : ",  "Supprime tous les effets bénéfiques et affaiblissants sur tous les alliés et ennemis (ignore la résistance). (0 PA - 7 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée et inflige des dégâts ignorant la défense de l'ennemi sous l'effet d'étourdissement. Active la Chain Strike avec 25 % de chances si utilisée. (2 PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Chaos roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Chaos Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de tous les alliés de 30 %" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3x consécutives pour étourdir la cible pendant 1 tour avec 35 % de chances. Gagne instantanément 1 PA quand la cible est vaincue. (2 PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée et redonne 10 % de leurs PV à tous les alliés. (2 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée et inflige des dégâts ignorant la défense de l'ennemi sous l'effet d'étourdissement. Active la Chain Strike avec 25 % de chances si utilisée. (2 PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Chaos reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Chaos Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de tous les alliés de 30 %" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3x consécutives pour étourdir la cible pendant 1 tour avec 35 % de chances. Gagne instantanément 1 PA quand la cible est vaincue. (2 PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée et redonne 10 % de leurs PV à tous les alliés. (2 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée et augmente au max les délais de récupération de la cible. Active la Chain Strike avec 25 % de chances si utilisée. (2 PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Chaos fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Chaos Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de tous les alliés de 30 %" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3x consécutives pour étourdir la cible pendant 1 tour avec 35 % de chances. Gagne instantanément 1 PA quand la cible est vaincue. (2 PA)", true)       
        .addField("Compétence 2 : ",  "Supprime tous les effets bénéfiques et affaiblissants sur tous les alliés et ennemis (ignore la résistance) (0 PA - 7 tours de rechargement).", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée et augmente au max les délais de récupération de la cible. Active la Chain Strike avec 25 % de chances si utilisée. (2 PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    /* Diaz */

    if(message.content === prefix + "Diaz cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Diaz Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la précision de l'allié de 40 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit le délai de récupération de tous les alliés de 1 tour avec 50 % de chances quand il y a au moins 3 gardiens participants à l'attaque (seulement une fois par tour). (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives et remplace jusqu'à 3 effets bénéfiques sur la cible par une bombe qui explose dans 2 tours. (2 PA - 4 tours de rechargement) ", true)
        .addField("Compétence 3 : ",  "Réduit le max de PA de l'adversaire au tour suivant de 1. (0 PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Diaz reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Diaz Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la précision de l'allié de 40 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit le délai de récupération de tous les alliés de 1 tour avec 50 % de chances quand il y a au moins 3 gardiens participants à l'attaque (seulement une fois par tour). (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives et augmente la durée de l'effet d'affaiblissement de la cible de 2 tours. (2 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Place une bombe qui explose dans 2 tours sur l'ennemi à portée, supprime les dégâts continus accordés sur tous les ennemis et inflige instantanément le montant de dégâts correspondant. (1 PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Diaz roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Diaz Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la précision de l'allié de 40 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit le délai de récupération de tous les alliés de 1 tour avec 50 % de chances quand il y a au moins 3 gardiens participants à l'attaque (seulement une fois par tour). (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives et augmente la durée de l'effet d'affaiblissement de la cible de 2 tours. (2 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Gagne 1 PA (les PA ne peuvent excéder la limite max) (0 PA - 6 tours de rechargement).", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Diaz fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Diaz Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la précision de l'allié de 40 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit le délai de récupération de tous les alliés de 1 tour avec 50 % de chances quand il y a au moins 3 gardiens participants à l'attaque (seulement une fois par tour). (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives et remplace jusqu'à 3 effets bénéfiques sur la cible par une bombe qui explose dans 2 tours. (2 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Gagne 1 PA (les PA ne peuvent excéder la limite max) (0 PA - 6 tours de rechargement).", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Diaz tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Diaz Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la précision de l'allié de 40 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit le délai de récupération de tous les alliés de 1 tour avec 50 % de chances quand il y a au moins 3 gardiens participants à l'attaque (seulement une fois par tour). (2PA)", true)
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives et augmente la durée de l'effet d'affaiblissement de la cible de 2 tours. (2 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Réduit le max de PA de l'adversaire au tour suivant de 1. (0 PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Esprit de la montagne */

    if(message.content === prefix + "Esprit de la montagne cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Esprit de la montagne (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour infliger des dégâts proportionnels à ta défense et augmente la défense de tous les alliés pendant 2 tours avec 50 % de chances. (2 PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutivement pour infliger des dégâts proportionnels à ta défense et réduis le délai de récupération de 1 tour à chaque coup qd tu obtiens un coup critique. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée pour infliger des dégâts proportionnels à ta défense et récupère l'équivalent de 30 % des dégâts infligés en PV. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1032 | DEF NIV MAX : 1101 | ATT COOP NIV MAX : 826 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Esprit de la montagne reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Esprit de la montagne Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour infliger des dégâts proportionnels à ta défense et augmente la défense de tous les alliés pendant 2 tours avec 50 % de chances.", true)       
        .addField("Compétence 2 : ",  "Augmente ta défense à chaque tour au début du tour.", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 3 fois consécutivement pour infliger des dégâts proportionnels à ta défense et réduis la puissance d'attaque et les dégâts d'attaque pendant 3 tours. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1032 | DEF NIV MAX : 1101 | ATT COOP NIV MAX : 826 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Esprit de la montagne roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Esprit de la montagne Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour infliger des dégâts proportionnels à ta défense et augmente la défense de tous les alliés pendant 2 tours avec 50 % de chances.", true)       
        .addField("Compétence 2 : ",  "Augmente ta défense à chaque tour au début du tour.", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée pour infliger des dégâts proportionnels à ta défense et récupère l'équivalent de 30 % des dégâts infligés en PV. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1032 | DEF NIV MAX : 1101 | ATT COOP NIV MAX : 826 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Esprit de la montagne fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Esprit de la montagne Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour infliger des dégâts proportionnels à ta défense et augmente la défense de tous les alliés pendant 2 tours avec 50 % de chances.", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutivement pour infliger des dégâts proportionnels à ta défense et réduis le délai de récupération de 1 tour à chaque coup qd tu obtiens un coup critique.", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 3 fois consécutivement pour infliger des dégâts proportionnels à ta défense et réduis la puissance d'attaque et les dégâts d'attaque pendant 3 tours. (2 PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1032 | DEF NIV MAX : 1101 | ATT COOP NIV MAX : 826 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Esprit de la montagne tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Esprit de la montagne Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour infliger des dégâts proportionnels à ta défense et augmente la défense de tous les alliés pendant 2 tours avec 50 % de chances.", true)       
        .addField("Compétence 2 : ",  "Augmente ta défense à chaque tour au début du tour.", true)
        .addField("Compétence 3 : ",  "Gagne l'immunité contre la métamorphose et réduis les dégâts reçu de 20 %.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1032 | DEF NIV MAX : 1101 | ATT COOP NIV MAX : 826 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Hadès */

    if(message.content === prefix + "Hadès cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hadès Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de tous les alliés de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque 2 fois consécutives l'ennemi à portée, et l'endort pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Change la position avec un ennemi à portée et prend la fuite. Devient apte à faire une action. (1PA - 4 tours de rechargement) ", true)
        .addField("Compétence 3 : ",  "Augmente ta puissance d'attaque selon le nombre d'ennemis vaincus au début du tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1583 | DEF NIV MAX : 688 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Hadès reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hadès Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de tous les alliés de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque 2 fois consécutives l'ennemi à portée, et l'endort pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Change la position avec une cible alliée et devient apte à faire une action. (1PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque 4 fois consécutives tous les ennemis à portée et inflige des dégâts continus jusqu'à 4 fois pendant 2 tours avec 50% de chances. Active la Chain Strike avec 25% de chances si utilisé. (2PA- 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1583 | DEF NIV MAX : 688 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Hadès roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hadès Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de tous les alliés de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque 2 fois consécutives l'ennemi à portée, et l'endort pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Change la position avec une cible alliée et devient apte à faire une action. ( 1PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque 4 fois consécutives tous les ennemis à portée et réinitialise les délais de récupération quand un ennemi est vaincu. Active la Chain Strike avec 25% de chances si utilisé. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1583 | DEF NIV MAX : 688 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Hadès fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hadès Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de tous les alliés de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque 2 fois consécutives l'ennemi à portée, et l'endort pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Change la position avec un ennemi à portée et prend la fuite. Devient apte à faire une action. (1 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque 4 fois consécutives tous les ennemis à portée et inflige des dégâts continus jusqu'à 4 fois pendant 2 tours avec 50% de chances. Active la Chain Strike avec 25% de chances si utilisé. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1583 | DEF NIV MAX : 688 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Hadès tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hadès Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de tous les alliés de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque 2 fois consécutives l'ennemi à portée, et l'endort pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Change la position avec un ennemi à portée et prend la fuite. Devient apte à faire une action. (1 PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque 4 fois consécutives tous les ennemis à portée et réinitialise les délais de récupération quand un ennemi est vaincu. Active la Chain Strike avec 25% de chances si utilisé. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1583 | DEF NIV MAX : 688 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Hwaryeong */

    if(message.content === prefix + "Hwaryeong cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hwaryeong Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégêts continus et perturbe la récupération de PV pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives pour infliger jusqu'à 3 dégâts continus pendant 3 tours. (2PA - 4 tours de rechargement", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée 2 fois consécutives et inflige des dégâts proportionnels au max des PV de la cible. Active la Chain Strike avec 25% de chance si utilisée. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 722 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Hwaryeong reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hwaryeong Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégêts continus et perturbe la récupération de PV pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Consomme 20% de tes PV actuels pour attaquer l'ennemi à portée 3 fois consécutives et inflige des dégâts ignorant la défense avec 50% de chances pour chaque. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée 2 fois consécutives et inflige des dégâts proportionnels au nombre d'effets d'affaiblissement accordés sur la cible. Active la Chain Strike avec 25% de chance si utilisé. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 722 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Hwaryeong roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hwaryeong Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégêts continus et perturbe la récupération de PV pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Consomme 20% de tes PV actuels pour attaquer l'ennemi à portée 3 fois consécutives et inflige des dégâts ignorant la défense avec 50% de chances pour chaque. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée 2 fois consécutives et inflige des dégâts proportionnels au max des PV de la cible. Active la Chain Strike avec 25% de chance si utilisée. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 722 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Hwaryeong fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hwaryeong Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégêts continus et perturbe la récupération de PV pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives pour infliger jusqu'à 3 dégâts continus pendant 3 tours. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée 2 fois consécutives et inflige des dégâts proportionnels au nombre d'effets d'affaiblissement accordés sur la cible. Active la Chain Strike avec 25% de chance si utilisé. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 722 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Hwaryeong tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Hwaryeong Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégêts continus et perturbe la récupération de PV pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Consomme 20% de tes PV actuels pour attaquer l'ennemi à portée 3 fois consécutives et inflige des dégâts ignorant la défense avec 50% de chances pour chaque. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Revient à la vie avec 100% de ses PV si vaincu et redonne 6% de leurs PV à tous les autres alliés à chaque tour. (10 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 722 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    /* Krishna */

    if(message.content === prefix + "Krishna cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Krishna Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit la défense pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et inflige le double des dégâts sur des Gimmicks. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Le Gimmick allié gagne l'effet d'invincibilité pendant 3 tours au début du tour. Délai de récupération au max en premier. (4 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 1032 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Krishna reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Krishna Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit la défense pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et inflige des dégâts ignorant la défense de l'ennemi sous effet(s) d'incapacité. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Perturbe la récupération de PV et bloque les effets bénéfiques sur tous les ennemis pendant 2 tours avec 80% de chances. (0PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 1032 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Krishna roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Krishna Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit la défense pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et inflige le double des dégâts sur des Gimmicks. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Perturbe la récupération de PV et bloque les effets bénéfiques sur tous les ennemis pendant 2 tours avec 80% de chances. (0PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 1032 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Krishna fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Krishna Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit la défense pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et inflige des dégâts ignorant la défense de l'ennemi sous effet(s) d'incapacité. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Active un bouclier équivalent à 15% du max des PV du lanceur du sort et accorde l'immunité contre les effets d'affaiblissement sur tous les alliés pendant 3 tours. (1PA - 7 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 1032 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Krishna tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Krishna Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée et réduit la défense pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et inflige le double des dégâts sur des Gimmicks. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Active un bouclier équivalent à 15% du max des PV du lanceur du sort et accorde l'immunité contre les effets d'affaiblissement sur tous les alliés pendant 3 tours. (1PA - 7 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 1032 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }



    /* Lu Bu */

    if(message.content === prefix + "Lu Bu cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Lu Bu (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour supprimer 1 effet d'affaiblissement posé sur toi-même quand tu obtiens un coup critique. Augmente ta zone de mouvement pendant 2 tours quand la cible est vaincue. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives pour infliger des dégâts supplémentaires à la cible sous effet(s) d'incapacité et augmente la durée de l'effet d'affaiblissement d'un tour. (2PA - 4 tours de rchargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée pour infliger des dégâts ignorant la défense. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Lu Bu reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Lu Bu Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour supprimer 1 effet d'affaiblissement posé sur toi-même quand tu obtiens un coup critique. Augmente ta zone de mouvement pendant 2 tours quand la cible est vaincue. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives pour infliger des dégâts supplémentaires à la cible sous effet(s) d'incapacité et augmente la durée de l'effet d'affaiblissement d'un tour. (2PA - 4 tours de rchargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée et les renvoie hors de portée, puis les étourdit pendant 2 tours. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Lu Bu roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Lu Bu Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour supprimer 1 effet d'affaiblissement posé sur toi-même quand tu obtiens un coup critique. Augmente ta zone de mouvement pendant 2 tours quand la cible est vaincue. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et inflige des dégâts supplémentaire au boss. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée et les renvoie hors de portée, puis les étourdit pendant 2 tours. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Lu Bu fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Lu Bu Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour supprimer 1 effet d'affaiblissement posé sur toi-même quand tu obtiens un coup critique. Augmente ta zone de mouvement pendant 2 tours quand la cible est vaincue. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et inflige des dégâts supplémentaire au boss. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée pour infliger des dégâts ignorant la défense. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Lu Bu tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Lu Bu Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35 % dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour supprimer 1 effet d'affaiblissement posé sur toi-même quand tu obtiens un coup critique. Augmente ta zone de mouvement pendant 2 tours quand la cible est vaincue. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et inflige des dégâts supplémentaire au boss. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée de façon consécutive et ignore la défense. Active la Chain Strike avec 25% de chances si utilisé. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Sans coeur */

    if(message.content === prefix + "Sans coeur cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Sans coeur Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 35%" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour réduire les dégâts d'attaque pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Active un bouclier égal à 25% du max de tes PV sur une cible alliée et active l'effet de défense de pénétration sur cette cible pendant 2 tours. (1PA - 5 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives pour augmenter le délai de récupération au max. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 860 | ATT COOP NIV MAX : 860 | PV NIV MAX : 7848 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Sans coeur Reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Sans coeur Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 35%" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour réduire les dégâts d'attaque pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Compétence 2 : ",  "Active un bouclier égal à 25% du max de tes PV sur une cible alliée et active l'effet de défense de pénétration sur cette cible pendant 2 tours. (1PA - 5 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives pour augmenter le délai de récupération au max. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 860 | ATT COOP NIV MAX : 860 | PV NIV MAX : 7848 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Sans coeur roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Sans coeur Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 35%" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour réduire les dégâts d'attaque pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 4 fois consécutives sans prendre en compte l'obstacle. N'est pas affecté par la zone de mouvement. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives pour réduire la défense et augmenter les dégâts infligés pendant 2 tours. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Sans coeur fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Sans coeur Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 35%" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour réduire les dégâts d'attaque pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 4 fois consécutives sans prendre en compte l'obstacle. N'est pas affecté par la zone de mouvement. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Supprime 1 effet bénéfique sur tous les ennemis et récupère 5% de ses PV en début de tour. Effet auto : délai de récupération au max d'abord. (3 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Sans coeur tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Sans coeur Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 35%" , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour réduire les dégâts d'attaque pendant 2 tours avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 4 fois consécutives sans prendre en compte l'obstacle. N'est pas affecté par la zone de mouvement. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives pour augmenter le délai de récupération au max. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1480 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7435 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Seigneur dragon */

    if(message.content === prefix + "Seigneur dragon cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seigneur dragon (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 30%" , true)
        .addField("Compétence 1 : ", "Le chef de la tribu des dignes dragons ne suit aucun ordre. Attaque un ennemi ciblé aléatoire à portée à la fin du tour.", true)       
        .addField("Compétence 2 : ",  "Augmente ta puissance d'attaque pendant 1 tour au début du tour.", true)
        .addField("Compétence 3 : ",  "Déplace le seigneur dragon vers une case vide dans ta zone de mouvement et crée un bouclier équivalent à 20% du max de tes PV 3 tours. (2PA - 7 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1514 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Seigneur dragon reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seigneur dragon Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 30%" , true)
        .addField("Compétence 1 : ", "Le chef de la tribu des dignes dragons ne suit aucun ordre. Attaque un ennemi ciblé aléatoire à portée à la fin du tour.", true)       
        .addField("Compétence 2 : ",  "Augmente tes dégâts critiques pendant 1 tour au début du tour.", true)
        .addField("Compétence 3 : ",  "Déplace le seigneur dragon vers une case vide dans ta zone de mouvement et crée un bouclier équivalent à 20% du max de tes PV 3 tours. (2PA - 7 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1514 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Seigneur dragon roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seigneur dragon Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 30%" , true)
        .addField("Compétence 1 : ", "Le chef de la tribu des dignes dragons ne suit aucun ordre. Attaque un ennemi ciblé aléatoire à portée à la fin du tour.", true)       
        .addField("Compétence 2 : ",  "Supprime 1 effet d'affaiblissement sur toi-même au début du tour.", true)
        .addField("Compétence 3 : ",  "Déplace le seigneur dragon vers une case vide dans ta zone de mouvement et crée un bouclier équivalent à 20% du max de tes PV 3 tours. (2PA - 7 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1514 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Seigneur dragon fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seigneur dragon Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 30%" , true)
        .addField("Compétence 1 : ", "Le chef de la tribu des dignes dragons ne suit aucun ordre. Attaque un ennemi ciblé aléatoire à portée à la fin du tour.", true)       
        .addField("Compétence 2 : ",  "Récupère tes PV de 10% au début du tour.", true)
        .addField("Compétence 3 : ",  "Déplace le seigneur dragon vers une case vide dans ta zone de mouvement et crée un bouclier équivalent à 20% du max de tes PV 3 tours. (2PA - 7 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1514 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Seigneur dragon tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seigneur dragon Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 30%" , true)
        .addField("Compétence 1 : ", "Le chef de la tribu des dignes dragons ne suit aucun ordre. Attaque un ennemi ciblé aléatoire à portée à la fin du tour.", true)       
        .addField("Compétence 2 : ",  "Augmente ta puissance d'attaque pendant 1 tour au début du tour.", true)
        .addField("Compétence 3 : ",  "Déplace le seigneur dragon vers une case vide dans ta zone de mouvement et crée un bouclier équivalent à 20% du max de tes PV 3 tours. (2PA - 7 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1514 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 791 | PV NIV MAX : 7228 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Seimei */

    if(message.content === prefix + "Seimei cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seimei Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 40% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour lui voler 1 effet bénéfique et supprime 1 effet d'affaiblissement sur tous les alliés avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque tous les ennemis à portée pour infliger des dégâts proportionnels au nombre d'effets bénéfiques accordés sur toi. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Active un bouclier égal à 25% du max des PV et gagne l'immunité contre les effets d'incapaticté pendant 2 tours si infligés avec des dégâts critiques.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Seimei reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seimei Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 40% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour lui voler 1 effet bénéfique et supprime 1 effet d'affaiblissement sur tous les alliés avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque tous les ennemis à portée pour perturber l'effet d'attaque coop. Pendant 2 tours. (2PA - 4 tous de rechargement)", true)
        .addField("Compétence 3 : ",  "Contre-attaque une cible attaquée, 60% de chances si attaqué.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Seimei roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seimei Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 40% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour lui voler 1 effet bénéfique et supprime 1 effet d'affaiblissement sur tous les alliés avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque tous les ennemis à portée pour perturber l'effet d'attaque coop. Pendant 2 tours. (2PA - 4 tous de rechargement)", true)
        .addField("Compétence 3 : ",  "Active un bouclier égal à 25% du max des PV et gagne l'immunité contre les effets d'incapaticté pendant 2 tours si infligés avec des dégâts critiques.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Seimei fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seimei Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 40% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour lui voler 1 effet bénéfique et supprime 1 effet d'affaiblissement sur tous les alliés avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque tous les ennemis à portée pour infliger des dégâts proportionnels au nombre d'effets bénéfiques accordés sur toi. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Augmente la puissance d'attaque et la défense de 25% selon le nombre d'alliés morts au début de chaque tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Seimei tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Seimei Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la résistance de l'allié de 40% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour lui voler 1 effet bénéfique et supprime 1 effet d'affaiblissement sur tous les alliés avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque tous les ennemis à portée pour perturber l'effet d'attaque coop. Pendant 2 tours. (2PA - 4 tous de rechargement)", true)
        .addField("Compétence 3 : ",  "Augmente la puissance d'attaque et la défense de 25% selon le nombre d'alliés morts au début de chaque tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1411 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 826 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Skuld */ 

    if(message.content === prefix + "Skuld cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Skuld (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour augmenter la puissance d'attaque de tous les alliés pendant 2 tours avec 50% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Elargis la portée de mouvement d'une cible alliée pendant 1 tour. (4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Equilibre le taux de PV de tous les alliés de façon égale au début du tour. Effet auto : délai de récupération au max en premier). (3 tours de rechargement) ", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Skuld reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Skuld Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour augmenter la puissance d'attaque de tous les alliés pendant 2 tours avec 50% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Elargis la portée de mouvement d'une cible alliée pendant 1 tour. (4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Supprime tous les effets bénéfiques de l'ennemi à portée et attaque la cible 5 fois consécutives. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Skuld roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Skuld Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour augmenter la puissance d'attaque de tous les alliés pendant 2 tours avec 50% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et active un bouclier équivalent à 20% du max des PV sur tous les alliés pendant 2 tours (30% si la cible est vaincue). (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Supprime tous les effets bénéfiques de l'ennemi à portée et attaque la cible 5 fois consécutives. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Skuld fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Skuld Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour augmenter la puissance d'attaque de tous les alliés pendant 2 tours avec 50% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 3 fois consécutives et active un bouclier équivalent à 20% du max des PV sur tous les alliés pendant 2 tours (30% si la cible est vaincue). (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives et inflige des dégâts proportionnels au max des PV de la cible. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Skuld tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Skuld Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la défense de l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour augmenter la puissance d'attaque de tous les alliés pendant 2 tours avec 50% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Compétence 2 : ",  "Elargis la portée de mouvement d'une cible alliée pendant 1 tour. (4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives et inflige des dégâts proportionnels au max des PV de la cible. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1376 | DEF NIV MAX : 757 | ATT COOP NIV MAX : 894 | PV NIV MAX : 8054 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /*  Stein */

    if(message.content === prefix + "Stein cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Stein Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente l'attaque coop. De l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour étourdir la cible pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque tous les ennemis à portée 2 fois consécutives et active l'effet de tenacité sur toi-même pendant 2 tours. (2PA - 5 tous de rechargement)", true)
        .addField("Compétence 3 : ",  "Active l'attaque coop. Quelle que soit ta zone de déplacement mais seulement 50% de la puissance d'attaque coop. seront appliqués. Augmente la puissance d'attaque coop. au début de chaque tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 1204 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Stein reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Stein Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente l'attaque coop. De l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour étourdir la cible pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives et redonne 10% de leurs PV à tous les alliés. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Active l'attaque coop. Quelle que soit ta zone de déplacement mais seulement 50% de la puissance d'attaque coop. seront appliqués. Augmente la puissance d'attaque coop. au début de chaque tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 1204 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Stein roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Stein Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente l'attaque coop. De l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour étourdir la cible pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque tous les ennemis à portée 2 fois consécutives et augmente l'attaque coop. pendant 2 tours. (2PA - 5 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Active l'attaque coop. Quelle que soit ta zone de déplacement mais seulement 50% de la puissance d'attaque coop. seront appliqués. Augmente la puissance d'attaque coop. au début de chaque tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 1204 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Stein fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Stein Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente l'attaque coop. De l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour étourdir la cible pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives et augmente la défense de tous les alliés pendant 2 tours. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Active l'attaque coop. Quelle que soit ta zone de déplacement mais seulement 50% de la puissance d'attaque coop. seront appliqués. Augmente la puissance d'attaque coop. au début de chaque tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 1204 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Stein tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Stein Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente l'attaque coop. De l'allié de 30%." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 2 fois consécutives pour étourdir la cible pendant 1 tour avec 35% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives et augmente la puissance d'attaque de tous les alliés pendant 2 tours. (2PA - 4 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Active l'attaque coop. Quelle que soit ta zone de déplacement mais seulement 50% de la puissance d'attaque coop. seront appliqués. Augmente la puissance d'attaque coop. au début de chaque tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1308 | DEF NIV MAX : 791 | ATT COOP NIV MAX : 1204 | PV NIV MAX : 7641 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Tahn */ 
    
    if(message.content === prefix + "Tahn cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Tahn Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3 fois consécutives, et le montant des dégâts critiques est doublé. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 4 fois consécutives et gagne l'immunité contre les effets d'incapacité pendant 2 tours si la première attaque est un coup critique. (2PA - 4 tours de récupération)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives pour infliger des dégâts proportionnels au max des PV de la cible. Activaton de la Chain Strike avec 25% de chances lors de l'utilisation. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1617 | DEF NIV MAX : 654 | ATT COOP NIV MAX : 860 | PV NIV MAX : 7022 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Tahn Reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Tahn Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3 fois consécutives, et le montant des dégâts critiques est doublé. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 4 fois consécutives et supprime tous les effet d'affaiblissement accordés sur toi si la première attaque est un coup critique. (2PA - 4 tours de récupération)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives et récupère tous tes PV si la cible est vaincue. Activaton de la Chain Strike avec 25% de chances lors de l'utilisation. (2PA - 6 tours de récupération)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1617 | DEF NIV MAX : 654 | ATT COOP NIV MAX : 860 | PV NIV MAX : 7022 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Tahn roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Tahn Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3 fois consécutives, et le montant des dégâts critiques est doublé. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 4 fois consécutives et gagne l'immunité contre les effets d'incapacité pendant 2 tours si la première attaque est un coup critique. (2PA - 4 tours de récupération)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives et récupère tous tes PV si la cible est vaincue. Activaton de la Chain Strike avec 25% de chances lors de l'utilisation. (2PA - 6 tours de récupération)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1617 | DEF NIV MAX : 654 | ATT COOP NIV MAX : 860 | PV NIV MAX : 7022 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Tahn fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Tahn Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3 fois consécutives, et le montant des dégâts critiques est doublé. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 4 fois consécutives et supprime tous les effet d'affaiblissement accordés sur toi si la première attaque est un coup critique. (2PA - 4 tours de récupération)", true)
        .addField("Compétence 3 : ",  "Attaque l'ennemi à portée 5 fois consécutives pour infliger des dégâts proportionnels au max des PV de la cible. Activaton de la Chain Strike avec 25% de chances lors de l'utilisation. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1617 | DEF NIV MAX : 654 | ATT COOP NIV MAX : 860 | PV NIV MAX : 7022 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Tahn tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Tahn Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente la puissance d'attaque de l'allié de 35% dans les combats de promotion et dans l'Arène." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée 3 fois consécutives, et le montant des dégâts critiques est doublé. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 4 fois consécutives et gagne l'immunité contre les effets d'incapacité pendant 2 tours si la première attaque est un coup critique. (2PA - 4 tours de récupération)", true)
        .addField("Compétence 3 : ",  "Augmente ta puissance d'attaque de 40% au début du combat. Augmente ton taux critique de 30% si tu as 80% de PV ou plus au début du tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1617 | DEF NIV MAX : 654 | ATT COOP NIV MAX : 860 | PV NIV MAX : 7022 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }


    /* Valkyrie */

    if(message.content === prefix + "Valkyrie cavalier")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Valkyrie Cavalier (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégâts proportionnels aux nombres d'effets bénéfiques accordés sur la cible et supprime 1 effet bénéfique avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Redonne 15% de ses PV à un allié ciblé et accorde un effet d'invincibilité pendant 2 tours. (1PA - 6 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée 3 fois consécutives pour infliger des dégâts proportionnels au max de ses PV, et redonne 15% de leurs PV à tous les alliés. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8674 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Valkyrie reine")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Valkyrie Reine (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégâts proportionnels aux nombres d'effets bénéfiques accordés sur la cible et supprime 1 effet bénéfique avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives pour infliger des dégâts proportionnels au max de tes PV et inflige des dégâts en ignorant la défense des ennemis étourdis. (2PA - 4 tours de récupération)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée 3 fois consécutives pour infliger des dégâts proportionnels au max de tes PV et étourdis-les pendant 2 tours. (2PA - 6 tours de récupération)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8674 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Valkyrie roi")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Valkyrie Roi (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégâts proportionnels aux nombres d'effets bénéfiques accordés sur la cible et supprime 1 effet bénéfique avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Attaque l'ennemi à portée 2 fois consécutives pour infliger des dégâts proportionnels au max de tes PV et inflige des dégâts en ignorant la défense des ennemis étourdis. (2PA - 4 tours de récupération)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée 3 fois consécutives pour infliger des dégâts proportionnels au max de ses PV, et redonne 15% de leurs PV à tous les alliés. (2PA - 6 tours de rechargement)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8674 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Valkyrie fou")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Valkyrie Fou (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégâts proportionnels aux nombres d'effets bénéfiques accordés sur la cible et supprime 1 effet bénéfique avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Redonne 15% de ses PV à un allié ciblé et accorde un effet d'invincibilité pendant 2 tours. (1PA - 6 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Supprime 1 dégât continu pour tous les alliés et leur redonne 5% de leurs PV en début de tour.", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8674 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

    if(message.content === prefix + "Valkyrie tour")
    {
        var embed = new Discord.RichEmbed()
        .setTitle("** Compétence de Valkyrie Tour (5 étoiles nat)** \n")
        .addBlankField()
        .addField("\nCompétence leader : ",  "Augmente le max des PV de l'allié de 35% dans les donjons." , true)
        .addField("Compétence 1 : ", "Attaque l'ennemi à portée pour infliger des dégâts proportionnels aux nombres d'effets bénéfiques accordés sur la cible et supprime 1 effet bénéfique avec 80% de chances. (2PA)", true)       
        .addField("Compétence 2 : ",  "Redonne 15% de ses PV à un allié ciblé et accorde un effet d'invincibilité pendant 2 tours. (1PA - 6 tours de rechargement)", true)
        .addField("Compétence 3 : ",  "Attaque tous les ennemis à portée 3 fois consécutives pour infliger des dégâts proportionnels au max de tes PV et étourdis-les pendant 2 tours. (2PA - 6 tours de récupération)", true)
        .addBlankField()
        .setFooter("ATK NIV MAX : 1204 | DEF NIV MAX : 826 | ATT COOP NIV MAX : 860 | PV NIV MAX : 8674 ")
        .setColor("#3498db")
        message.channel.send(embed)
    }

     /* Fin des 5 étoiles le 13/05/2018 à 07:59 */ 


   













    





    

    















    

    



    





})
