const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :)? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`); 
  
  rl.question('What is an activity you like doing? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
  
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);

      rl.question('What do you do at the end of a long day? ', (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);

  rl.close();

  console.log(`${answer1} like to listen to ${answer3} while ${answer2}.  ${answer1} also likes to ${answer4} at the end of a long day.`)
});     
}); 
});
});

