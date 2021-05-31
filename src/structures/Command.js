const { Message, Collection } = require('discord.js')
const GuildModel = require('../database/models/Guild')

module.exports = class Command { 
    constructor(client, options) {
        this.client = client
        this.name = options.name
        this.aliases = options.aliases || []
        this.botPerms = {
            guild: options.botPerms?.guild || [],
            channel: options.botPerms?.channel || []
        }
        this.memberPerms = {
            guild: options.memberPerms?.guild || [],
            channel: options.memberPerms?.channel || []
        }
        this.cooldown = options.cooldown || 2;
        this.enabled = typeof options.enabled === 'boolean' ? options.enabled : true;
        this.nsfwOnly = typeof options.nsfwOnly === 'boolean' ? options.nsfwOnly : false;
        this.devsOnly = typeof options.devsOnly === 'boolean' ? options.devsOnly : false;
        this.cooldowns = new Collection();
    }

    /**
     * Comprobar todos los "requisitos" para ejecutar el comando.
     * @param {Message} message - Mensaje recibido.
     * @returns {boolean} - Si cumple todos los requisitos.
     */
    async canRun(message) {
        const model = await GuildModel.findOne({
            id: message.guild.id
        });
        let lang = require('../assets/i18n/en.json')
        if(model && model.lang){
            if(model.lang == "es"){
                lang = require('../assets/i18n/es.json')
            } else if (model.lang == "en"){
                lang = require('../assets/i18n/en.json')
            } 
        }
        if (message.guild && !message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return false;
        if (this.devsOnly && !this.client.devs.includes(message.author.id)) return false;
        if (this.checkCooldowns(message)) return !message.channel.send(`${lang.structure.command.cooldown}`);
        if (!this.enabled && !this.client.devs.includes(message.author.id)) return !message.channel.send(`${lang.structure.command.enabled}`);
        if (message.guild && !message.channel.nsfw && this.nsfwOnly) return !message.channel.send(`${lang.structure.command.nsfwOnly}`);
        if (message.guild && this.memberPerms.guild[0] && !this.memberPerms.guild.every((x) => message.member.permissions.has(x)) && !this.client.devs.includes(message.author.id))
            return !message.channel.send(`${lang.structure.command.memberPerms.guild} \`${this.memberPerms.guild.map(this.parsePermission).join(', ')}\``);
        if (message.guild && this.memberPerms.channel[0] && !this.memberPerms.channel.every((x) => message.channel.permissionsFor(message.member).has(x)) && !this.client.devs.includes(message.author.id))
            return !message.channel.send(`${lang.structure.command.memberPerms.channel} \`${this.this.memberPerms.channel.map(this.parsePermission).join(', ')}\``);
        if (message.guild && this.botPerms.guild[0] && !this.botPerms.guild.every((x) => message.guild.me.permissions.has(x)))
            return !message.channel.send(`${lang.structure.command.botPerms.guild} \`${this.botPerms.guild.map(this.parsePermission).join(', ')}\``);
        if (message.guild && this.botPerms.channel[0] && !this.botPerms.channel.every((x) => message.channel.permissionsFor(message.guild.me).has(x)))
            return !message.channel.send(`${lang.structure.command.botPerms.channel} \`${this.botPerms.channel.map(this.parsePermission).join(', ')}\``);
        return true;
    }

    /**
     * Comprueba si el author de un mensaje se encuentra en cooldown, y en caso de que no se encuentre agregarle uno
     * @param {Message} message - Mensaje recibido.
     * @returns {boolean} - Si esta en cooldown o no.
     */
    checkCooldowns(message) {
        if (this.cooldowns.has(message.author.id)) return true;
        this.cooldowns.set(message.author.id, Date.now() + (this.cooldown * 1000));
        setTimeout(() => {
            this.cooldowns.delete(message.author.id);
        }, this.cooldown * 1000);
        return false;
    }

    /**
     * Convertir el string en una forma más facil de leer.
     * @param {string} permission - El permiso en string.
     * @returns {string} - Permiso modificado.
     */
    parsePermission(permission) {
        return permission.toLowerCase()
            .replace(/_/g, ' ')
            .replace(/(?:^|\s)\S/g, (c) => c.toUpperCase());
    }
}