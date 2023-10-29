import fs from 'fs';
import inquirer from 'inquirer';
import { Circle, Triangle, Square } from './lib/shapes.js';


class LogoGenerator {
    constructor() {
        this.textContent = '';
        this.shapeContent = '';
    }

    generateSvg() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
        ${this.shapeContent}${this.textContent}</svg>`;
    }

    setText(text, color) {
        this.textContent = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-size="100">${text}</text>`;
    }

    setShape(shape) {
        this.shapeContent = shape.generateSvg();
    }
}

const logoQuestions = [
    { type: 'input', name: 'text', message: 'Enter up to three characters to be displayed in the logo:' },
    { type: 'input', name: 'textColor', message: 'Enter a color for the text:' },
    { type: 'list', name: 'shape', message: 'Choose a shape for the logo:', choices: ['Circle', 'Square', 'Triangle'] },
    { type: 'input', name: 'shapeColor', message: 'Enter a color for the shape:' },
];

function saveToFile(fileName, data) {
    console.log('Writing to file...');
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Logo generated successfully!')
    );
}

function initializeLogoCreation() {
    const logo = new LogoGenerator();

    inquirer.prompt(logoQuestions).then(answers => {
        const shapeClasses = {
            Circle: Circle,
            Square: Square,
            Triangle: Triangle
        };

        const selectedShape = new shapeClasses[answers.shape]();
        selectedShape.setColor(answers.shapeColor);
        logo.setShape(selectedShape);

        logo.setText(answers.text, answers.textColor);
        
        saveToFile('logo.svg', logo.generateSvg());
    });
}

initializeLogoCreation();
