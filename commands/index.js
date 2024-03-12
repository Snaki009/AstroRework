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
    case 'adminconnect':
    case 'stats':
    case 'coinflip':
    case 'purge':
    case 'ranking':
    case 'wyczysc':
    case 'przebacz':
    case 'warn':
    case 'kartoteka':
    case 'remindme':
    case 'dodajinbe':
    case 'removeinba':
    case 'inby':
    case 'addpoints':
    case 'punkty':
    case 'trofki':
    case 'trofka':
    case 'token':
    case 'update':
    case 'psn':
    case 'profil':
    case 'gierka':
    case 'ruletka':
    case 'ban':
    case 'mute':
    case 'kick':
    case 'setlvl':
    case 'level':
    case 'leaderboard':
    case 'poll':
    case 'meta':
    case 'reactions':
    default:
      break;
  }
};

export const handleInlineCommands = async (msg, client) => {
  const inlinePrefix = '.';
  const c = msg.content;

  if (!c.startsWith(inlinePrefix)) return;

  // ADMIN COMMANDS, TODO: CHECK BY ROLE NOT BY ID
  if (msg.author.id == '894023662502563921') {
    if (c.startsWith(inlinePrefix + 'ast')) {
      const response = msg.content.replace('.ast ', '');
      msg.channel.send(response);
      msg.delete();
    }
  }

  // Google search
  if (c.startsWith(inlinePrefix + 'g')) {
  }

  // Google image search
  if (c.startsWith(inlinePrefix + 'gi')) {
  }

  // YT search
  if (c.startsWith(inlinePrefix + 'yt')) {
  }

  // Random answer
  if (c.startsWith(inlinePrefix + 'czy')) {
  }

  // Coelho image gen
  if (c.startsWith(inlinePrefix + 'coelho')) {
  }

  // Remindme
  if (c.startsWith(inlinePrefix + 'przypomnij')) {
  }
};
