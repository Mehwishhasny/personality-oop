#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Personality {
    name;
    age;
    zodiacSign;
    season;
    constructor(name, age, zodiacSign, season) {
        this.name = name;
        this.age = age;
        this.zodiacSign = zodiacSign;
        this.season = season;
    }
    traits() {
        console.log(chalk.bold.cyan(`${(chalk.bold.green(this.name))} based on your answers:`));
        console.log(chalk.bold.cyan(`Your age is ${(chalk.bold.yellow(this.age))}.`));
        console.log(chalk.bold.cyan(`Your zodiac sign is ${(chalk.bold.yellow(this.zodiacSign))}.`));
        console.log(chalk.bold.cyan(`You like ${(chalk.bold.yellow(this.season))} season.`));
    }
}
class AdventurousPersonality extends Personality {
    traits() {
        super.traits();
        console.log(chalk.bgMagenta(chalk.bold.green(`\nYou are independent, energetic and competitive. You have an adventurous personality.`)));
    }
}
class CalmPersonality extends Personality {
    traits() {
        super.traits();
        console.log(chalk.bgMagenta(chalk.bold.green(`\nYou are imaginative, ambitious and compassionate. You have a calm personality.`)));
    }
}
class UniquePersonality extends Personality {
    traits() {
        super.traits();
        console.log(chalk.bgMagenta(chalk.bold.green(`\nYou are determined, practical and passionate. Your personality is unique and diverse.`)));
    }
}
async function main() {
    let info = await inquirer.prompt([
        {
            message: "Please enter your name:",
            type: "input",
            name: "fullName",
        },
        {
            message: "Please enter your age:",
            type: "input",
            name: "years",
        },
        {
            message: "Select your Zodiac sign:",
            type: "list",
            name: "zodiacSign",
            choices: ["Aries", "Pisces", "Aquarius", "Taurus", "Libra", "Gemini", "Virgo", "Capricorn", "Sagittarius", "Scorpio", "Leo", "Cancer"]
        },
        {
            message: "Select a season you like the most:",
            type: "list",
            name: "weather",
            choices: ["Spring", "Summer", "Autumn", "Winter"]
        }
    ]);
    let personality;
    switch (info.zodiacSign) {
        case "Aries":
        case "Sagittarius":
            personality = new AdventurousPersonality(info.fullName, parseInt(info.years), info.zodiacSign, info.weather);
            break;
        case "Pisces":
        case "Capricorn":
        case "Aquarius":
            personality = new CalmPersonality(info.fullName, parseInt(info.years), info.zodiacSign, info.weather);
            break;
        default:
            personality = new UniquePersonality(info.fullName, parseInt(info.years), info.zodiacSign, info.weather);
            break;
    }
    personality.traits();
}
main();
