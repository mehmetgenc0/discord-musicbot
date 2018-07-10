/* eslint-disable no-unused-vars */

const format = require('string-format');

const defaultMessageStrings = {
  BOT_MENTIONED: 'Hey {}, you should try `{}help` for a list of commands. :ok_hand:',
  UNKNOWN_COMMAND: "Hmmm. I couldn't find that command... did you mistype it?",
  HELP_COMMAND_UNKNOWN: "I can't see a command or alias for that one... why don't you try `{}help`?",
  HELP_COMMAND_WELCOME_DM: "Here's a list of all the commands you can use:",
  HELP_COMMAND_DM: true, // Message is formatted within the command class.
  SET_AVATAR_COMMAND_SUCCESS: ':ok_hand: Avatar successfully set!',
  SET_AVATAR_COMMAND_ERROR: 'Unable to set avatar.\n```{}```',
  SET_AVATAR_COMMAND_INVALID_URL: "Are you sure that's a valid URL..?",
  SET_USERNAME_COMMAND_SUCCESS: ':ok_hand: Username successfully set!',
  SET_USERNAME_COMMAND_ERROR: 'Unable to set username.\n```{}```',
  SET_USERNAME_COMMAND_INVALID_NAME: "Uhh... that doesn't seem to be something I could name myself...",
};

const messageFunctions = {
  /* eslint-disable prettier/prettier */
  BOT_MENTIONED: (string, bot, message) => format(string, message.member.user.toString(), bot.settings.preferences.COMMAND_PREFIX),
  UNKNOWN_COMMAND: (string, bot, message) => string,
  HELP_COMMAND_UNKNOWN: (string, bot, message) => format(string, bot.settings.preferences.COMMAND_PREFIX),
  HELP_COMMAND_WELCOME_DM: (string, bot, message) => string,
  HELP_COMMAND_DM: (string, bot, message, acutualMessage) => acutualMessage,
  SET_AVATAR_COMMAND_SUCCESS: (string, bot, message) => string,
  SET_AVATAR_COMMAND_ERROR: (string, bot, message, error) => format(string, error),
  SET_AVATAR_COMMAND_INVALID_URL: (string, bot, message) => string,
  SET_USERNAME_COMMAND_SUCCESS: (string, bot, message) => string,
  SET_USERNAME_COMMAND_ERROR: (string, bot, message, error) => format(string, error),
  SET_USERNAME_COMMAND_INVALID_NAME: (string, bot, message) => string,
  /* eslint-enable prettier/prettier */
};

module.exports = { defaultMessageStrings, messageFunctions };
