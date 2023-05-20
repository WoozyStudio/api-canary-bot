const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Returns with a menu to interact.'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId(`example`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(new StringSelectMenuOptionBuilder({
                label: `Option #1`,
                value: `TEST1`
            }), new StringSelectMenuOptionBuilder({
                label: `Option #2`,
                value: `TEST2`
            }));

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    }
}