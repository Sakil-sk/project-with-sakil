document.getElementById('ageInput').addEventListener('input', function () {
    var age = parseInt(this.value);
    var adultCard = document.getElementById('adultCard');
    var childCard = document.getElementById('childCard');
    var teenCard = document.getElementById('teenCard');
    var seniorCard = document.getElementById('seniorCard');

    if (age >= 18) {
        adultCard.style.display = 'block';
        childCard.style.display = 'none';
        teenCard.style.display = 'none';
        seniorCard .style.display = 'none';
    } else {
        adultCard.style.display = 'none';
        childCard.style.display = 'block';
        teenCard.style.display = 'none';
        seniorCard .style.display = 'none';
    } 
});
