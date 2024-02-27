red = 200
yellow = 200
blue = 200
white = 200
black = 0

function calculateColor(red, blue, yellow, black, white) {
    // Calculate RGB values
    const calculatedRed = Math.round((red + yellow / 2 + white / 2) * (1 - black / 255));
    const calculatedGreen = Math.round((blue + yellow / 2 + white / 2) * (1 - black / 255));
    const calculatedBlue = Math.round((yellow + white / 2) * (1 - black / 255));

    // Convert to hex format
    const hexColor = `#${calculatedRed.toString(16).padStart(2, '0')}${calculatedGreen.toString(16).padStart(2, '0')}${calculatedBlue.toString(16).padStart(2, '0')}`;

    return hexColor.toUpperCase();
}

console.log(calculateColor(200, 200, 200, 0, 150))