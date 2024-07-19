function validateInput() {
    const tempInput = document.getElementById('temperature-input').value;
    if (isNaN(tempInput)) {
        alert('Please enter a valid number');
    }
}

function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature-input').value);
    const unitFrom = document.getElementById('unit-input').value;
    let convertedTemp;
    let resultText;

    if (isNaN(temp)) {
        alert('Please enter a valid number');
        return;
    }

    switch (unitFrom) {
        case 'celsius':
            convertedTemp = {
                fahrenheit: (temp * 9/5) + 32,
                kelvin: temp + 273.15
            };
            resultText = `${temp.toFixed(2)} °C = ${convertedTemp.fahrenheit.toFixed(2)} °F = ${convertedTemp.kelvin.toFixed(2)} K`;
            updateBackgroundColor(temp);
            break;
        case 'fahrenheit':
            convertedTemp = {
                celsius: (temp - 32) * 5/9,
                kelvin: ((temp - 32) * 5/9) + 273.15
            };
            resultText = `${temp.toFixed(2)} °F = ${convertedTemp.celsius.toFixed(2)} °C = ${convertedTemp.kelvin.toFixed(2)} K`;
            updateBackgroundColor(convertedTemp.celsius);
            break;
        case 'kelvin':
            convertedTemp = {
                celsius: temp - 273.15,
                fahrenheit: ((temp - 273.15) * 9/5) + 32
            };
            resultText = `${temp.toFixed(2)} K = ${convertedTemp.celsius.toFixed(2)} °C = ${convertedTemp.fahrenheit.toFixed(2)} °F`;
            updateBackgroundColor(convertedTemp.celsius);
            break;
        default:
            resultText = 'Invalid unit';
    }

    document.getElementById('result').innerText = resultText;
}

function updateBackgroundColor(celsius) {
    const temperature = parseFloat(celsius);
    let color;

    if (temperature <= 0) {
        color = '#2f9fff'; // Cold (blue)
    } else if (temperature > 0 && temperature <= 25) {
        color = '#4facfe'; // Cool (light blue)
    } else if (temperature > 25 && temperature <= 35) {
        color = '#ffbb00'; }// Warm (yellow)  
    else {
        color = '#ff3e00'; // Hot (red)
    }

    document.body.style.background = `linear-gradient(45deg, ${color}, ${color})`;
}
