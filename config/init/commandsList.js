import { Constants, ApplicationCommandOptionType } from 'discord.js';

const commandsList = [
  {
    name: 'avatar',
    description: 'Powiększ avatar',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'profile',
        description: 'Pokaż profilowy zamiast serwerowego ',
        required: false,
        type: ApplicationCommandOptionType.Boolean,
      },
    ],
  },
  {
    name: 'connect',
    description: 'Połącz profil',
  },
  {
    name: 'userinfo',
    description: 'Szczególy o użytkowniku',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
    ],
  },
];

export default commandsList;
