// Importing shape classes from './lib/shapes.js'
import { Circle, Square, Triangle } from './shapes';

const testGroup = describe;

testGroup('Circle', () => {
    it('should generate a circle SVG', () => {
        const circle = new Circle();
        circle.setColor('red');
        const svg = circle.generateSvg();
        expect(svg).toBe('<circle cx="50%" cy="50%" r="100" fill="red" />');
    });
});

testGroup('Square', () => {
    it('should generate a square SVG', () => {
        const square = new Square();
        square.setColor('blue');
        const svg = square.generateSvg();
        expect(svg).toBe('<rect x="25%" y="25%" width="50%" height="50%" fill="blue" />');
    });
});

testGroup('Triangle', () => {
    it('should generate a triangle SVG', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        const svg = triangle.generateSvg();
        expect(svg).toBe(`<polygon points="500, 225 300, 625 700, 625" fill="green" />`);
    });
});
