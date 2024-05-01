function calculateHours() {
    const hours = parseInt(document.getElementById('hours').value);
    const level = document.getElementById('level').value;

    if (isNaN(hours)) {
        document.getElementById('result').innerHTML = "Please enter a valid number of hours.";
        return;
    }

    const levels = {
        'a1': { units: 12, sections: 36 },
        'a2': { units: 12, sections: 48 },
        'b1': { units: 12, sections: 48 },
        'b1+': { units: 10, sections: 30 },
        'b2': { units: 10, sections: 30 },
        'c1': { units: 10, sections: 30 }
    };

    const adjustedHours = hours - 3;
    const units = levels[level].units;
    const sections = levels[level].sections;
    const hoursPerSection = adjustedHours / sections;

    document.getElementById('result').innerHTML = `Adjusted Hours: ${adjustedHours} <br> Hours per Section: ${hoursPerSection.toFixed(2)}`;
}
