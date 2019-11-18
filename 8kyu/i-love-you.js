// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
    const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    
    return phrases[nbPetals % phrases.length - 1] || phrases[phrases.length - 1];
}
