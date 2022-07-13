function deckOfCards(cards) {

    let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let cardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    let filteredCards = [];

    for (let card of cards) {
        let cardFace = card.slice(0, card.length - 1);
        let cardSuit = card.slice(card.length - 1);
        
        if (!isValidCard(cardFace , cardSuit)) {
            console.log(`Invalid card: ${card}`);
            return;
        } else {
            filteredCards.push(cardFace + cardSuits[cardSuit])
        }
    }

    // cards.forEach(card => {
        
    // })

    console.log(filteredCards.join(' '));

    function isValidCard(cardFace , cardSuit) {
        if (!validCards.includes(cardFace) || cardFace !== cardFace.toUpperCase() ||
            !cardSuits.hasOwnProperty(cardSuit || cardSuit !== cardSuit.toUpperCase())) {
                return false;
        }
        return true;
    }
}

deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])