// Be carefull whether the task want from you to 
// Throw a message or to return it

class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error('This article model is not included in this gallery!');
        }

        let index = this.listOfArticles.findIndex(x => x.articleName === articleName);
        
        if (index === -1) {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: quantity

            });
        } else if (index !== -1) {
            if (this.listOfArticles[index].articleModel === articleModel && this.listOfArticles[index].articleName === articleName) {
                this.listOfArticles[index].quantity += quantity
            }
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let points = 0;
        switch (personality) {
            case 'Vip':
                points = 500;
                break;
            case 'Middle':
                points = 250;
                break;
            default:
                points = 50;
                break;
        }

        if (this.guests.some(x => x.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        this.guests.push({
            guestName: guestName,
            points: points,
            purchaseArticle: 0
        })
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let articleNameIndex = this.listOfArticles.findIndex(x => x.articleName === articleName && x.articleModel === articleModel.toLowerCase())
        
        let neededPoints = this.possibleArticles[articleModel.toLowerCase()];
        if (articleNameIndex === -1) {
            throw new Error('This article is not found.');
        }

        if (this.listOfArticles[articleNameIndex].quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        if (!this.guests.some(x => x.guestName === guestName)) {
            return 'This guest is not invited.';
        }
        
        let guestNameIndex = this.guests.findIndex(x => x.guestName === guestName);
        if (this.guests[guestNameIndex].points < neededPoints) {
            return `You need to more points to purchase the article.`;
        }

        this.guests[guestNameIndex].points -= neededPoints;
        this.guests[guestNameIndex].purchaseArticle += 1;
        this.listOfArticles[articleNameIndex].quantity -= 1;

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo (criteria) {
        let print = [];
        switch (criteria) {
            case 'article':
                print.push('Articles information:');
                this.listOfArticles
                    .forEach(data => print.push(`${data.articleModel} - ${data.articleName} - ${data.quantity}`));
                break;
        
            case 'guest':
                print.push('Guests information:');
                this.guests
                    .forEach(data => print.push(`${data.guestName} - ${data.purchaseArticle}`));
                break;
        }

        return print.join('\n');
    }
}

let art = new ArtGallery("Curtis Mayfield");

art.addArticle('picture', 'Mona Liza', 3);
art.addArticle('Item', 'Ancient vase', 2);
art.addArticle('picture', 'Mona Liza', 1);

art.inviteGuest('John', 'Vip');
art.inviteGuest('Peter', 'Middle');

art.buyArticle('picture', 'Mona Liza', 'John')
art.buyArticle('item', 'Ancient vase', 'Peter')

art.buyArticle('item', 'Mona Liza', 'John')
