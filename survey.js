const readline = require("readline");

const profile = {
  name: {},
  activity: {},
  band: {},
  meal: {},
  food: {},
  sport: {},
  superPower: {},
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? (Nicknames are also acceptable): ", (answer) => {
  profile["name"] = answer;
  rl.question("What's an activity you like doing? ", (answer2) => {
    profile["activity"] = answer2;
    rl.question("What do you listen to while doing that? ", (answer3) => {
      profile["band"] = answer3;
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        (answer4) => {
          profile["meal"] = answer4;
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (answer5) => {
              profile["food"] = answer5;
              rl.question(
                "Which sport is your absolute favourite? ",
                (answer6) => {
                  profile["sport"] = answer6;
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (answer7) => {
                      profile["superPower"] = answer7;
                      console.log(
                        `${profile.name} loves listening to ${profile.band} while ${profile.activity}, devouring ${profile.food} for ${profile.meal}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.superPower}.`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
