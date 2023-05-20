module.exports = {
    data: {
        name: `example2`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `You select **${interaction.values[0]}**.`
        })
    }
}