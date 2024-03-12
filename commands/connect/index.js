import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import serverConsts from '../../config/serverConfig.js';

export const connect = async (interaction) => {
  const authButton = new ButtonBuilder()
    .setLabel('Połącz profil')
    .setURL(serverConsts.connectUrl)
    .setStyle(ButtonStyle.Link);

  await interaction
    .editReply({
      content: `Pamiętaj połaczyć PSN z Discordem!`,
      components: [new ActionRowBuilder().addComponents(authButton)],
    })
    .catch((err) => logger.error('Failed to connect user', err));
};
