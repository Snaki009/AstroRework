import { getAvatar, getUserInfo } from './account/index.js';
import { connect } from './connect/index.js';

export const handleCommands = async (interaction, client) => {
  // most commands would require interaction to be passed so they can respond and client to do stuff

  switch (interaction.commandName) {
    case 'avatar':
      getAvatar(interaction, client);
      break;
    case 'connect':
      connect(interaction);
      break;
    case 'userInfo':
      getUserInfo(interaction, client);
      break;
    default:
      break;
  }
};

export const handleInlineCommands = async (msg, clieant) => {
  const c = msg.content;

  if (c.startsWith('<COMMAND>')) {
  }
};
