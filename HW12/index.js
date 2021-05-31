class Character {
    isCharacter = true;
    say(phrase) {
        console.log(phrase);
    }
}

class Animal extends Character {
    isAnimal = true;
    static createCertainCharacter(name) {
        if (name === 'Fox') {
            return new Fox();
        }
        else if (name === 'Rabbit') {
            return new Rabbit();
        }
        else if (name === 'Bear') {
            return new Bear();
        }
        else if (name === 'Wolf') {
            return new Wolf();
        }
        else {
            return 'No this character';
        }
    }
}

class Human extends Character {
    isHuman = true;
}

class Creature extends Character {
    isCreature = true;
}
class Kolobok extends Creature {
    #responceTimeInSec;
    constructor() {
        super();
        this.#responceTimeInSec = 3;
        this.name = 'kolobok';
        this.song = [' - I was made of flour', ` - I managed to run away from my grandmother`, ` - I managed to run away from my grandfather`];
    }
    setResponceTime(seconds) {
        this.#responceTimeInSec = seconds;
    }
    sing() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.song.forEach((line) => {
                    console.log(line);
                })
                resolve();
            }, this.#responceTimeInSec * 1000);
        });
    }
    say(phase) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(phase);
                resolve();
            }, this.#responceTimeInSec * 1000);
        });
    }
}

class Fox extends Animal {
    constructor() {
        super();
        this.name = 'fox';
    }
}
class Rabbit extends Animal {
    constructor() {
        super();
        this.name = 'rabbit';
    }
}
class Bear extends Animal {
    constructor() {
        super();
        this.name = 'bear';
    }
}
class Wolf extends Animal {
    constructor() {
        super();
        this.name = 'wolf';
    }
}
class MaleCharacter extends Human {
    constructor() {
        super();
        this.isMan = true;
        this.isWomam = false;
    }
}
class FemaleCharacter extends Human {
    constructor() {
        super();
        this.isMan = false;
        this.isWomam = true;
    }
}

class Speaker extends MaleCharacter {
    constructor() {
        super();
        this.name = 'speaker';
    }
}

class GrandFa extends MaleCharacter {
    constructor() {
        super();
        this.name = 'grandfather';
    }
}
class GrandMa extends FemaleCharacter {
    constructor() {
        super();
        this.name = 'grandmother';
    }
}


function chapter1(kolobok, grandFa, grandMa, speaker) {
    return new Promise((resolve, reject) => {
        speaker.say('Chapter 1');
        speaker.say(`Once upon a time, there are ${grandMa.name} and ${grandFa.name}. And one day ${grandFa.name} say...`);
        grandFa.say(` - Hey, ${grandMa.name}, why don't you make a ${kolobok.name}?`);
        grandMa.say(` - Ok, I'll look for some flour`);
        speaker.say(`And ${grandMa.name} makes a ${kolobok.name}, but he runs away from them.`);
        resolve();
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
                return resolve();
            })
    })
}

function chapter2to4(kolobok, character, speaker, numOfChapter) {
    return new Promise((resolve, reject) => {
        speaker.say(`Chapter ${numOfChapter}`);
        speaker.say(`${kolobok.name} meets ${character.name}`);
        character.say(` - I'll eat you, ${kolobok.name}`);
        kolobok.say(` - Don't eat me, I'll better sing you my song: `)
            .then(() => {
                kolobok.song.push(` - I managed to run away from ${character.name}`);
                return kolobok.sing();
            })
            .then(() => {
                speaker.say(`${kolobok.name} runs away from ${character.name}`);
                return resolve();
            })
    })
}


function story() {
    let kolobok = new Kolobok();
    let speaker = new Speaker();
    let grandFa = new GrandFa();
    let grandMa = new GrandMa();
    let fox = new Fox();
    let bear = new Bear();
    let wolf = new Wolf();
    let rabbit = new Rabbit();
    kolobok.setResponceTime(7);
    storyTelling(kolobok, speaker, grandMa, grandFa, fox, bear, wolf, rabbit);
}
story();

async function storyTelling(kolobok, speaker, grandMa, grandFa, fox, bear, wolf, rabbit) {
    await chapter1(kolobok, grandFa, grandMa, speaker);
    await chapter2to4(kolobok, rabbit, speaker, 2);
    await chapter2to4(kolobok, wolf, speaker, 3);
    await chapter2to4(kolobok, bear, speaker, 4);
    await chapter5(kolobok, fox, speaker);
}

