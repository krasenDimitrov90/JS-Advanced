function colorize() {
    // TODO
    let tableElements = document.querySelectorAll('table tr:nth-of-type(even)');
    //tableElements.forEach(x => x.style.background = 'teal')
    let rows = Array.from(tableElements);
    for (let row of rows) {
        row.style.background = 'teal';
    }
}