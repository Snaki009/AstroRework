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
    name: 'stats',
    description: 'Statystyki',
  },
  {
    name: 'removeinba',
    description: 'Usuń inbe',
    options: [
      {
        name: 'name',
        description: 'Nazwa',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'inby',
    description: 'Wyświetl inby',
    options: [
      {
        name: 'page',
        description: 'Strona',
        required: false,
        type: ApplicationCommandOptionType.Number,
      },
    ],
  },
  {
    name: 'reactions',
    description: 'zebrane reakcje',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,

        type: ApplicationCommandOptionType.User,
      },
    ],
  },
  {
    name: 'level',
    description: 'Aktualny poziom',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
    ],
  },
  {
    name: 'coinflip',
    description: 'Rzuć monetą',
    options: [
      {
        name: 'a',
        description: 'Opcja A',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'b',
        description: 'Opcja B',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
    ],
  },
  {
    name: 'purge',
    description: 'Wyczyść wiadomości',
    options: [
      {
        name: 'amount',
        description: 'Ile',
        required: true,
        type: ApplicationCommandOptionType.Number,
      },
      {
        name: 'user',
        description: 'Użytkownik',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'channel',
        description: 'Kanał',
        required: false,
        type: ApplicationCommandOptionType.Channel,
      },
    ],
  },
  {
    name: 'trofka',
    description: 'Ostatnia zdobyta trofka',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'psn',
        description: 'Nazwa PlayStation',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'detailed',
        description: 'Rozszerzona komenda',
        required: false,
        type: ApplicationCommandOptionType.Boolean,
      },
    ],
  },
  {
    name: 'ranking',
    description: 'Sprawdź ranking trofkarzy',
    options: [
      {
        name: 'typ',
        description: 'level | plat | trofki',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'od',
        description: 'Od miejsca #',
        requried: false,
        type: ApplicationCommandOptionType.Number,
      },
    ],
  },
  {
    name: 'przebacz',
    description: 'Zresetuj licznik warnów',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
    ],
  },
  {
    name: 'wyczysc',
    description: 'Usuń wydarzenie z kartoteki',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'id',
        description: 'Numer zdarzenia /kartoteka',
        required: true,
        type: ApplicationCommandOptionType.Number,
      },
    ],
  },
  {
    name: 'kartoteka',
    description: 'Kartoteka',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
    ],
  },
  {
    name: 'warn',
    description: 'warn',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'reason',
        description: 'powód',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'weight',
        description: 'Waga, domyślnie 1',
        required: false,
        type: ApplicationCommandOptionType.Number,
      },
    ],
  },
  {
    name: 'leaderboard',
    description: 'Najaktywniejsi',
    options: [
      {
        name: 'od',
        description: 'Od miejsca #',
        requried: false,
        type: ApplicationCommandOptionType.Number,
      },
    ],
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
  {
    name: 'dodajinbe',
    description: 'Dodaj inbe',
    options: [
      {
        name: 'name',
        description: 'Nazwa inby',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'punkty',
    description: 'Sprawdź punkty',
  },
  {
    name: 'addpoints',
    description: 'Dodaj punkty',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'points',
        description: 'Punkty',
        required: true,
        type: ApplicationCommandOptionType.Number,
      },
      {
        name: 'override',
        description: 'Zamień?',
        required: true,
        type: ApplicationCommandOptionType.Boolean,
      },
    ],
  },
  {
    name: 'adminconnect',
    description: 'Połącz ręcznie kogoś do psn',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'psn',
        description: 'PSN Login',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'token',
    description: 'Nie można odczytać profilu, spróbuj /token',
  },
  {
    name: 'mute',
    description: 'Mute',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'time',
        description: 'Czas',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'reason',
        description: 'Powód',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'admin',
        description: 'Moderator?',
        required: false,
        type: ApplicationCommandOptionType.Boolean,
      },
    ],
  },
  {
    name: 'poll',
    description: 'Stwórz ankietę',
    options: [
      {
        name: 'question',
        description: 'Pytanie',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_1',
        description: 'opcja 1',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_2',
        description: 'opcja 2',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_3',
        description: 'opcja 3',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_4',
        description: 'opcja 4',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_5',
        description: 'opcja 5',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_6',
        description: 'opcja 6',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_7',
        description: 'opcja 7',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_8',
        description: 'opcja 8',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_9',
        description: 'opcja 9',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'choice_10',
        description: 'opcja 10',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'meta',
    description: 'Sprawdź MetaScore',
    options: [
      {
        name: 'game',
        description: 'Dokładna nazwa gry',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'platform',
        description: 'platforma, domyślnie ps4',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'ruletka',
    description: 'Spróbuj szczęścia',
  },
  {
    name: 'kick',
    description: 'Kick',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'reason',
        description: 'powód',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'ban',
    description: 'Ban',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'reason',
        description: 'powód',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'trofki',
    description: 'Trofki w konkretnej lub ostatniej grze, zostaw nazwę użytkownika postą żeby zobaczyć swoje',
    options: [
      {
        name: 'game',
        description: 'Nazwa gry',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'user',
        description: 'Użytkownik',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'psn',
        description: 'Nazwa PlayStation',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'profil',
    description: 'Sprawdź profil użytkownika',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'psn',
        description: 'Nazwa PlayStation',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'update',
    description: 'Zaktualizuj swój lub czyjś profil',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: false,
        type: ApplicationCommandOptionType.User,
      },
    ],
  },
  {
    name: 'psn',
    description: 'Sprawdź czyjąś nazwę PSN',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
    ],
  },
  {
    name: 'gierka',
    description: 'Sprawdź cenę w Ps Store',
    options: [
      {
        name: 'game',
        description: 'Nazwa gry',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'connect',
    description: 'Połącz się z botem!',
  },
  {
    name: 'captiongif',
    description: 'Dodaj tekst na gifa',
    options: [
      {
        name: 'url',
        description: 'Link do gifa',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'bot',
        description: 'Teskt dolny',
        required: true,
        type: ApplicationCommandOptionType.String,
      },
      {
        name: 'top',
        description: 'Teskt górny',
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  {
    name: 'setlvl',
    description: 'Ustaw poziom',
    options: [
      {
        name: 'user',
        description: 'Użytkownik',
        required: true,
        type: ApplicationCommandOptionType.User,
      },
      {
        name: 'level',
        description: 'Poziom',
        required: true,
        type: ApplicationCommandOptionType.Number,
      },
    ],
  },
];

export default commandsList;
