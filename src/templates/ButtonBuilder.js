const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Returns with a button to interact.'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId(`example`)
            .setLabel('Example')
            .setStyle(ButtonStyle.Danger)

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        })
    }
}