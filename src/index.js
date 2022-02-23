const inquirer = require('inquirer');
const emojis = require('./emojis');

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomEmoji() {
  return emojis[randomBetween(0, emojis.length - 1)];
}

function randomEmojiPassword(length = 12) {
  return Array.from({ length }, () => randomEmoji()).join('');
}

inquirer
  .prompt([
    {
      type: 'number',
      name: 'length',
      message: 'Qual o tamanho da senha?',
    },
  ])
  .then((answers) => {
    const { length } = answers;

    console.log('Sua nova senha é:', randomEmojiPassword(length));
  })
  .catch((error) => {
    console.log(error);
  });
