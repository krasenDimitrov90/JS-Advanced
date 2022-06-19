function attachGradientEvents() {
    
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gradientMouseMoveHandler = (e) => {
        
        let percent = Math.trunc((e.offsetX / (e.target.clientWidth - 1)) * 100)
        resultElement.textContent = `${percent}%`;
    }

    const gradientMouseOutHandler = () => {
        resultElement.textContent = '';
    }
    gradientElement.addEventListener('mousemove' , gradientMouseMoveHandler);
    gradientElement.addEventListener('mouseout' , gradientMouseOutHandler)

}