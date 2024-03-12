import { tiers } from '../config/psn';

const consts = require('../consts/consts');
const { serverConsts } = require('../consts/server');

// HELPER FUNCTION FOR UPDATING USER ROLES
// Type: 'add' | 'remove'
// roleName: exact role name to be assigned
export const updateRole = (type, userId, roleName, client, guildId) => {
  const guild = client.guilds.cache.get(guildId || serverConsts.guildId);
  const role = guild.roles.cache.find((role) => role.name === roleName);

  if (!role) return;
  guild.members
    .fetch(userId)
    .then((user) => {
      user.roles[type](role);
    })
    .catch((err) => logger.error('Error getting user', err));
};

// remove all roles that are related to psn account level
export const removePSNRoles = (client, userId, current, guildId) => {
  updateRole('remove', userId, 'Platinum', client, guildId);
  updateRole('remove', userId, 'Niepołączony', client, guildId);
  Object.keys(consts.tiers).forEach((index) => {
    index !== current && updateRole('remove', userId, tiers[index], client);
  });
};
