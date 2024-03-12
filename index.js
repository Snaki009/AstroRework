import dotenv from 'dotenv';
dotenv.config();

// import psn from 'psn-api'
import Discord from 'discord.js';
import { handleCommands } from './commands/index.js';
import { registerCommands } from './helpers/index.js';
import mongoose from 'mongoose';
import { UserModel } from './db/user.js';
import startServer from './webServer/index.js';
import { logger } from './logger.js';
import intents from './config/init/intents.js';

const token = process.env.discord_token;
const npsso = process.env.psn_token; //psn
const mongoDB = process.env.mongo + 'astroDB';

const client = new Discord.Client({ intents });
mongoose.set('strictQuery', false);

try {
  await mongoose.connect(mongoDB);
} catch (err) {
  logger.error('There was an error connecting to db', err);
}

// GENERAL INFO
// client      - bot instance
// guild       - server instance
// intents     - needs to be provided as a permission that bot will be using
// npsso       - psn token
// interaction - slash command

// GENERAL TODO:
// 1. Connect - testing
// 2. Better logs than console.logs
// 3. Web UI

// Fired on bot start once
// TODO:
// 1. Keep psn token alive
// 2. Set interval for reminders (could be done differently idk, this is replit apporach)
// 3. Get all reactionMessages from cache so app can listen to this (and add roles for ex.)
// 4. Add bot statsus
// 5. When registerCommands adds too many commands later ones arent addded, also this slows down startup so try to add something to check if its already added
client.once('ready', async () => {
  logger.info(`Logged in!`);

  // Example db usage
  // try {
  //   const user = new UserModel({ id: '123', psn: 'test' });
  //   await user.save();
  // } catch (err) {
  //   console.log('Create failed');
  // }
  // const test = await UserModel.find({ id: '123' }).exec();
  // console.log(test);

  registerCommands(client);
});

// Debug, probably wont be used. There was retry mechanism for replit issues
client.on('debug', function (info) {});

// Log for app quit
client.on('disconnect', () => {
  console.log(client.user.username + ' disconnected!');
});

// When reaction is added to any comment
// TODO:
// 1. Remove reaction if admin is muted
// 2. Check and proceed roulette
// 3. Add roles if its roleMessage
client.on('messageReactionAdd', async (reaction, user) => {});

// When reaction is removed to any comment
// TODO:
// 1. Remove role when its roleMessage
client.on('messageReactionRemove', async (reaction, user) => {});

// User related changes, ex. username or role update
// TODO:
// 1. Username change detection to admin channel
client.on('guildMemberUpdate', (oldMember, newMember) => {});

// Detects user status changes, ex. current game
// TODO:
// 1. Add roles related to current game
client.on('presenceUpdate', async (oldPresence, newPresence) => {});

// Handling commands
// To use interaction it has to be registered in READY
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  try {
    // Set "Thinking" messasge - if reply takes longer it will give an error "interaction not found" - try to always use editReply with defer
    await interaction.deferReply();
    await handleCommands(interaction, client);
  } catch (err) {
    logger.error(err);
  }
});

// Creating messages not related to commands
// TODO:
// 1. Inline commands
// 2. Ban patterns - forbidden words
// 3. Moving messages
// 4. Exp
// 5. Mute admins
client.on('messageCreate', async (msg) => {});

// On message delete (self explainatory)
// TODO:
// 1. Send deleted message to admin channel
client.on('messageDelete', (deletedMsg) => {});

// On message edit
// TODO:
// 1. Send changed message to admin channel\
// 2. Add banned words mechanism to prevent exploits
client.on('messageUpdate', async (prevMsg, newMsg) => {});

// When new member enters
// TODO:
// 1. Welcome
// 2. Add [not connected] role
// 3. Add entry to warn records
client.on('guildMemberAdd', (member) => {});

// When member leaves
// TODO:
// 1. Say goodbye
// 2. Add entry to warn records
client.on('guildMemberRemove', (member) => {});

// Function to connect bot to  discord
client.login(token).catch((e) => logger.error(e));
startServer();
