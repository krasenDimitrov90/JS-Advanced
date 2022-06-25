function encodeAndDecodeMessages() {
    let textToEncodeElement = document.querySelectorAll('textarea')[0];
    let textToDecodeElement = document.querySelectorAll('textarea')[1];
    let encodeButtonElement = document.querySelectorAll('button')[0];
    let decodeButtonElement = document.querySelectorAll('button')[1];

    let encode = () => {

        let encodeText = Array.from(textToEncodeElement.value.split(''))
            .map(char => {
                return String.fromCharCode(char.charCodeAt(0) + 1)
            });
        textToDecodeElement.value = encodeText.join('')
        textToEncodeElement.value = '';
    }

    encodeButtonElement.addEventListener('click', encode);

    decodeButtonElement.addEventListener('click', decode);

    function decode() {

        let decodeText = Array.from(textToDecodeElement.value.split(''))
            .map(char => {
                return String.fromCharCode(char.charCodeAt(0) - 1)
            });
        textToDecodeElement.value = decodeText.join('');
    }
}