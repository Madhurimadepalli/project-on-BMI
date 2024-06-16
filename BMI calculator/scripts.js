document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Please enter valid values.');
        return;
    }

    const bmi = weight / (height * height);
    const category = getBMICategory(bmi);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
});

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
}

