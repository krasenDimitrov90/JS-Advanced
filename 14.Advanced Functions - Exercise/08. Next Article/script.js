<<<<<<< HEAD
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


=======
function getArticleGenerator(articles) {
    // TODO
}
>>>>>>> dd8b20849d2236d40f3151f4acf85fbb2b88dfd6
