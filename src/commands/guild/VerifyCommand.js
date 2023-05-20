const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('Verify a guild bot to be able to modify it.')
    .addUserOption(user => user.setName("bot").setDescription("Select the bot you want to verify.").setRequired(true))
    .addStringOption(desc => desc.setName("description").setDescription("Write a description for the bot.").setRequired(true))
    .addStringOption(prefix => prefix.setName("prefix").setDescription("Write the bot prefix.").setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser("bot")
        const desc = interaction.options.getString("description")
        const prefix = interaction.options.getString("prefix")

        const MessageChannelBot = new EmbedBuilder()
        .setAuthor({ name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL({ size: 2048, dynamic: true })}` })
        .setTitle(`${user.tag}`)
        .setImage(`${user.displayAvatarURL({ size: 2048, dynamic: true })}`)
        .setThumbnail(`${client.user.displayAvatarURL({ size: 2048, dynamic: true })}`)
        .setColor(0x2ea967)
        .addFields({ name: "Main Features", value: `${desc}` }, { name: "Bot Prefix", value: `${prefix}` })
        .setFooter({ text: `Publised by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ size: 2048, dynamic: true })}` })

        const MessageButtonInvite = new ButtonBuilder()
            .setLabel('Invite')
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=applications.commands%20bot`)

        interaction.reply({ content: "Your bot has been successfully sent for evaluation!" })
        const ch = client.channels.cache.get('1071487993774350376');
        ch.send({ embeds: [MessageChannelBot], components: [new ActionRowBuilder().addComponents(MessageButtonInvite)] });
    }
}