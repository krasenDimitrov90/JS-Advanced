function attachEventsListeners() {

    let buttonsElements = document.querySelectorAll(`input[value="Convert"]`);
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    Array.from(buttonsElements)
        .forEach(el => {
            el.addEventListener('click', calculate)
        })

    function calculate(e) {
        let buttonName = e.currentTarget.id;
        let idPatern = buttonName.replace('Btn','');
        let inputNumber = Number(document.getElementById(idPatern).value);
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        switch (buttonName) {
            case 'daysBtn':
                seconds = inputNumber * 24 * 60 * 60;
                break;
            case 'hoursBtn':
                seconds = inputNumber * 60 * 60;
                break;
            case 'minutesBtn':
                seconds = inputNumber * 60;
                break;
            case 'secondsBtn':
                seconds = inputNumber;
                break;
        }
        minutes = seconds / 60;
        hours = minutes / 60;
        days = hours / 24;

        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
}