import { EmbedBuilder } from '@discordjs/builders';
import { getGuild } from '../../helpers/registerCommands.js';
import UserInfoEmbed from './UserInfoEmbed.js';

export const getAvatar = async (interaction, client) => {
  const user = interaction.options.getUser('user') || interaction.user;
  const profile = interaction.options.getBoolean('profile');

  const guild = client.guilds.cache.get(interaction.guildId);
  const me = await guild.members.fetch(user.id);

  const embed = new EmbedBuilder()
    .setColor('#3498db')
    .setTitle(`${user.username} #${user.discriminator}`)
    .setImage(
      profile
        ? user.displayAvatarURL({ size: 1024, dynamic: true })
        : me.displayAvatarURL({ size: 1024, dynamic: true }),
    );

  interaction.editReply({ embeds: [embed] }).catch((err) => console.log(err));
};

export const getUserInfo = async (interaction, client) => {
  const user = interaction.options.getUser('user') || interaction.user;
  const guild = getGuild(client);

  let member;

  try {
    member = await guild.members.fetch(user.id);
  } catch (err) {
    console.log('No such ');
  }

  interaction.editReply({ embeds: [UserInfoEmbed(user, member)] }).catch((err) => console.log(err));
};
