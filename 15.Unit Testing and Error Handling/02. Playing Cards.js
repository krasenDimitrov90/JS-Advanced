function cardFactory(face, suit) {

    let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let cardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663 ',
    }
    if (!validCards.includes(face) || face.toUpperCase() !== face || suit.toUpperCase() !== suit) {
        throw new Error('Error');
    }

    if (!validCards.includes(face)) {
        throw new Error('Error');
    }
    return {
        face,
        color: cardSuits[suit],
        toString() {
            return `${this.face}${this.color}`;
        }
    }
}

console.log(cardFactory('1', 'C').toString());

