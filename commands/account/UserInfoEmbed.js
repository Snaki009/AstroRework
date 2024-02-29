import { EmbedBuilder } from '@discordjs/builders';

const UserInfoEmbed = (user, member) => {
  return new EmbedBuilder()
    .setColor('#3498db')
    .setAuthor({
      name: `${user.username}#${user.discriminator}` || '-',
      iconURL: user.displayAvatarURL({ size: 1024, dynamic: true }),
    })
    .setThumbnail(user.displayAvatarURL({ size: 1024, dynamic: true }))
    .addFields({ name: 'ID ', value: user.id, inline: true })
    .addFields({
      name: `Roles (${member._roles.length} total)`,
      value: `${member._roles.map((role) => `<@&${role}>`)}`,
      inline: true,
    })
    .addFields({
      name: 'Joined Server ',
      value: `${moment(new Date(member.joinedTimestamp)).format('DD/MM/YYYY')}, (${moment(
        new Date(member.joinedTimestamp),
      ).fromNow()})`,
      inline: true,
    })
    .addFields({
      name: 'Joined Discord',
      value: `${moment(user.createdAt).format('DD/MM/YYYY')}, (${moment(user.createdAt).fromNow()})`,
      inline: false,
    });
};

export default UserInfoEmbed;
