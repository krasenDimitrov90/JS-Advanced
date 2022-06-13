function extract(content) {
    let pattern = /\(([^)]+)\)/g;
    let contentElements = document.getElementById(content);
    let matches = contentElements.textContent.matchAll(pattern);
    let groupMatches = [];
    
    
    for (const match of matches) {
        groupMatches.push(match[1]);
    }
    return groupMatches;
}