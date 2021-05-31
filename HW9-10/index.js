let speaker = {
    name: 'speaker',
    say: function (phase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(phase);
                resolve();
            }, 3000);
        });
    }
}
let grandMa = {
    name: 'grandmother',
    say: function (phase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(phase);
                resolve();
            }, 3000);
        });
    }
}
let grandFa = {
    name: 'grandfather',
    say: function (phase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(phase);
                resolve();
            }, 3000);
        });
    }
}
let kolobok = {
    name: 'kolobok',
    isAlive: true,
    song: [' - I was made of flour', ` - I managed to run away from my ${grandMa.name}`, ` - I managed to run away from my ${grandFa.name}`],
    sing: function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.song.forEach((line) => {
                    console.log(line);
                })
                resolve();
            }, 3000);
        });
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
            }, 3000);
        });
    }

}
let fox = {
    name: 'fox',
    say: function (phase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(phase);
                resolve();
            }, 3000);
        });
    }
}


function chapter1(kolobok, grandFa, grandMa) {
    return new Promise((resolve, reject) => {
        speaker.say('Chapter 1')
            .then(() => {
                return speaker.say(`Once upon a time, there are ${grandMa.name} and ${grandFa.name}. And one day ${grandFa.name} say...`);
            })

            .then(() => {
                return grandFa.say(` - Hey, ${grandMa.name}, why don't you make a ${kolobok.name}?`);
            })
            .then(() => {
                return grandMa.say(` - Ok, I'll look for some flour`);
            })
            .then(() => {
                return speaker.say(`And ${grandMa.name} makes a ${kolobok.name}, but he runs away from them.`);
            })
            .then(() => {
                resolve();
            })
    });
}
function chapter5(kolobok, fox, speaker) {
    speaker.say('Chapter 5')
        .then(() => {
            return speaker.say(`${kolobok.name} meets ${fox.name}`);
        })
        .then(() => {
            return fox.say(` - I'll eat you, ${kolobok.name}`);
        })
        .then(() => {
            return kolobok.say(` - Don't eat me, I'll better sing you my song: `);
        })
        .then(() => {
            kolobok.song.push(` - I managed to run away from ${fox.name}`);
            return kolobok.sing();
        })
        .then(() => {
            return speaker.say(`But ${fox.name} thinks for some seconds and says: `);
        })
        .then(() => {
            return fox.say(` - Sorry, ${kolobok.name}, but I'm very old and don't hear well. So, seat next to me and sing again...`);
        })
        .then(() => {
            return speaker.say(`${kolobok.name} seat next to ${fox.name} and she managed to eat him.`);
        })
        .then(() => {
            speaker.say('The end');
        })
}
function story() {
    chapter1(kolobok, grandFa, grandMa, speaker)
        .then(() => {
            chapter5(kolobok, fox, speaker);
        })
}
story();
