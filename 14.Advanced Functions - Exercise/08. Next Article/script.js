function getArticleGenerator(articles) {

    return function show() {
        if (articles.length === 0) {
            return
        }
        let contentElement = document.getElementById('content');
        let artticleElement = document.createElement('article');
        artticleElement.textContent = articles.shift();;
        contentElement.appendChild(artticleElement);
    }
}


