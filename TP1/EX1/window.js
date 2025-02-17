function setDifficulty(difficulty){
    let maxAttempts;
    let maxNumber;
    switch(difficulty){
        case 'facile':
            maxAttempts = 10;
            maxNumber = 50;
            break;
        case 'intermédiaire':
            maxAttempts = 7;
            maxNumber = 100;
            break;
        case 'difficile':
            maxAttempts = 5;
            maxNumber = 200;
            break;
    }
    return [maxAttempts, maxNumber];
}

function checkAnswer(Guess, Number){
    if (Guess === Number) {
        alert("Félicitations! Vous avez deviné le nombre.");
        return true;
    } else if (Guess < Number) {
        alert("Le nombre est plus grand.");
    } else {
        alert("Le nombre est plus petit.");
    }
    return false;
}

function start(){
    let difficulty = prompt("Choisissez un niveau de difficulté: Facile, Intermédiaire, Difficile").toLowerCase();
    let guessed=false;
    let attempts=0;
    let maxattempts, maxNumber;
    [maxattempts, maxNumber] = setDifficulty(difficulty);
    let Number=0;
    while(Number<1 || Number>maxNumber){
        Number=Math.floor(Math.random() * maxNumber) + 1;
    }
    while(attempts < maxattempts && !guessed){
        let Guess = parseInt(prompt(`Devinez le nombre (entre 1 et ${maxNumber}). Tentative ${attempts + 1} sur ${maxattempts}:`), maxattempts);
        attempts++;
        guessed=checkAnswer(Guess, Number);
    }
    if (!guessed) {
        alert(`Désolé, vous avez épuisé vos tentatives. Le nombre était ${Number}.`);
    }
}

function jouer(){
    let b= document.getElementsByClassName("button");
    if(b[0].innerText=="Commencer le Jeu"){
        b[0].innerText="Rejouer";
    }
    start();
}