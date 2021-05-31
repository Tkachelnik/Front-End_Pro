let charecter = {
    say: function (phase) {
        console.log(phase);
    }
}

function Kolobok() {
    this.responceTimeInSec = 3;
    this.name = 'kolobok';
    this.isAlive = true;
    this.song = [' - I was made of flour', ` - I managed to run away from my grandmother`, ` - I managed to run away from my grandfather`];
    this.sing = function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.song.forEach((line) => {
                    console.log(line);
                })
                resolve();
            }, this.responceTimeInSec * 1000);
        });
    };
    this.say = function (phase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(phase);
                resolve();
            }, this.responceTimeInSec * 1000);
        });
    };
}

function GrandFa() {
    this.name = 'grandfather';
}

function GrandMa() {
    this.name = 'grandmother';
}

function Speaker() {
    this.name = 'speaker';
}

function Fox() {
    this.name = 'fox';
}


function chapter1(kolobok, grandFa, grandMa, speaker) {
    return new Promise((resolve, reject) => {
        speaker.say('Chapter 1');
        speaker.say(`Once upon a time, there are ${grandMa.name} and ${grandFa.name}. And one day ${grandFa.name} say...`);
        grandFa.say(` - Hey, ${grandMa.name}, why don't you make a ${kolobok.name}?`);
        grandMa.say(` - Ok, I'll look for some flour`);
        speaker.say(`And ${grandMa.name} makes a ${kolobok.name}, but he runs away from them.`);
    })
}
function chapter5(kolobok, fox, speaker) {
    return new Promise((resolve, reject) => {
        speaker.say('Chapter 5');
        speaker.say(`${kolobok.name} meets ${fox.name}`);
        fox.say(` - I'll eat you, ${kolobok.name}`);
        kolobok.say(` - Don't eat me, I'll better sing you my song: `)
            .then(() => {
                kolobok.song.push(` - I managed to run away from ${fox.name}`);
                return kolobok.sing();
            })
            .then(() => {
                speaker.say(`But ${fox.name} thinks for some seconds and says: `);
                fox.say(` - Sorry, ${kolobok.name}, but I'm very old and don't hear well. So, seat next to me and sing again...`);
                speaker.say(`${kolobok.name} seat next to ${fox.name} and she managed to eat him.`);
                speaker.say('The end');
            })
    })
}
function story() {
    Kolobok.prototype = charecter;
    GrandMa.prototype = charecter;
    GrandFa.prototype = charecter;
    Speaker.prototype = charecter;
    Fox.prototype = charecter;
    let kolobok = new Kolobok();
    let speaker = new Speaker();
    let grandFa = new GrandFa();
    let grandMa = new GrandMa();
    let fox = new Fox();
    kolobok.responceTimeInSec = 10;
    chapter1(kolobok, grandFa, grandMa, speaker)
        .then(() => {
            return chapter5(kolobok, fox, speaker);
        })
}
story();