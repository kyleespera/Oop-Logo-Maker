class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    generateSvg() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    generateSvg() {
        const centerX = 500; // Center X-coordinate, based on 1000px canvas width
        const centerY = 425; // Center Y-coordinate, based on 1000px canvas height
        const halfSize = 200; // Half the desired size of the triangle

        const points = [
            `${centerX}, ${centerY - halfSize}`,
            `${centerX - halfSize}, ${centerY + halfSize}`,
            `${centerX + halfSize}, ${centerY + halfSize}`
        ].join(" ");

        return `<polygon points="${points}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    generateSvg() {
        return `<rect x="25%" y="25%" width="50%" height="50%" fill="${this.color}" />`;
    }
}

export { Circle, Triangle, Square };



