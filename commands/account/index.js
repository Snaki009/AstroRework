import { EmbedBuilder } from "@discordjs/builders";

export const getAvatar = async (interaction, client) => {
    const user = interaction.options.getUser('user') || interaction.user
    const profile = interaction.options.getBoolean('profile')

    const guild = client.guilds.cache.get(interaction.guildId);
    const me = await guild.members.fetch(user.id)

    const embed = new EmbedBuilder()
        .setColor('#3498db')
        .setTitle(`${user.username} #${user.discriminator}`)
        .setImage(profile ? user.displayAvatarURL({ size: 1024, dynamic: true }) : me.displayAvatarURL({ size: 1024, dynamic: true }))

    interaction.editReply({ embeds: [embed] }).catch(err => console.log(err))
}