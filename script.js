document.getElementById('calcBtn').addEventListener('click', function() {
    // Recupera i valori inseriti dall'utente
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // Controlla se i campi sono compilati
    if (!age || !weight || !height) {
        alert('Per favore, compila tutti i campi correttamente!');
        return;
    }

    // Formula di Mifflin-St Jeor per il BMR
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Calcolo del TDEE (Mantenimento)
    const tdee = bmr * activity;

    // Stima dei macronutrienti per il mantenimento
    // Proteine: 2g per kg di peso corporeo (4 kcal per grammo)
    const proteinsGrams = weight * 2;
    const proteinsCalories = proteinsGrams * 4;

    // Grassi: 25% delle calorie totali (9 kcal per grammo)
    const fatsCalories = tdee * 0.25;
    const fatsGrams = fatsCalories / 9;

    // Carboidrati: il resto delle calorie (4 kcal per grammo)
    const carbsCalories = tdee - (proteinsCalories + fatsCalories);
    const carbsGrams = carbsCalories / 4;

    // Mostra i risultati nella pagina arrotondando i valori
    document.getElementById('bmrResult').innerText = Math.round(bmr);
    document.getElementById('tdeeResult').innerText = Math.round(tdee);
    document.getElementById('proteinResult').innerText = Math.round(proteinsGrams);
    document.getElementById('fatResult').innerText = Math.round(fatsGrams);
    document.getElementById('carbResult').innerText = Math.round(carbsGrams);
    
    // Rende visibile il box dei risultati
    document.getElementById('results').style.display = 'block';
});