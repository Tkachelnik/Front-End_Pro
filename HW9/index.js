let speaker = {
    name: 'speaker',
    say: function (phrase) {
        console.log(phrase);
    }
}
let grandMa = {
    name: 'grandmother',
    say: function (phrase) {
        console.log(phrase);
    }
}
let grandFa = {
    name: 'grandfather',
    say: function (phrase) {
        console.log(phrase);
    }
}
let kolobok = {
    name: 'kolobok',
    isAlive: true,
    song: [' - I was made of flour', ` - I managed to run away from my ${grandMa.name}`, ` - I managed to run away from my ${grandFa.name}`],
    sing: function () {
        this.song.forEach((line) => {
            console.log(line);
        })
    },
    say: function (phase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(phase);
                if (this.isAlive) {
                    resolve();
                } else {
                    reject();
                }
            }, 5000);
        });
    }

}
let fox = {
    name: 'fox',
    say: function (phrase) {
        console.log(phrase);
    }
}
function chapter1(kolobok, grandFa, grandMa) {
    speaker.say('Chapter 1');
    speaker.say(`Once upon a time, there are ${grandMa.name} and ${grandFa.name}. And one day ${grandFa.name} say...`);
    grandFa.say(` - Hey, ${grandMa.name}, why don't you make a ${kolobok.name}?`);
    grandMa.say(` - Ok, I'll look for some flour`);
    speaker.say(`And ${grandMa.name} makes a ${kolobok.name}, but he runs away from them.`);
}
function chapter5(kolobok, fox, speaker) {
    speaker.say('Chapter 5');
    speaker.say(`${kolobok.name} meets ${fox.name}`);
    fox.say(` - I'll eat you, ${kolobok.name}`);

    kolobok.say(` - Don't eat me, I'll better sing you my song: `)
        .then(() => {
            kolobok.song.push(` - I managed to run away from ${fox.name}`);
            kolobok.sing();
            speaker.say(`But ${fox.name} says: `);
            fox.say(` - Sorry, ${kolobok.name}, but I'm very old and don't hear well. So, seat next to me and sing again...`);
            speaker.say(`${kolobok.name} seat next to ${fox.name} and she managed to eat him.`);
            kolobok.isAlive = false;
            speaker.say('The end');
        })
        .catch(() => {
            speaker.say('Fox do not listen to kolobok and eat him');
        });
}
function story() {
    for (i = 1; i <= 5; i++) {
        switch (i) {
            case 1: chapter1(kolobok, grandFa, grandMa, speaker)
                break;
            case 5: chapter5(kolobok, fox, speaker)
                break;
        }
        if (i == 5) break;
    }
}
story();
