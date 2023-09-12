const request = new XMLHttpRequest();
request.open('GET', 'https://api.adviceslip.com/advice', true);

//Reload advice function
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {

        const data = JSON.parse(this.response);

        const cardMessage = document.getElementById('cardMessage');
        const cardTitle = document.getElementById('cardTitle');

        let adviceNumber = document.getElementById('adviceNumber');

        if (!adviceNumber) {
            adviceNumber = document.createElement('h1');
            adviceNumber.id = 'adviceNumber';
        }
        adviceNumber.setAttribute('class', 'advice-number');
        adviceNumber.textContent = `ADVICE # ${data.slip.id}`;

        let adviceText = document.getElementById('adviceText');

        if (!adviceText) {
            adviceText = document.createElement('p');
            adviceText.id = 'adviceText';
        }
        adviceText.setAttribute('class', 'text-message');
        adviceText.textContent = `"${data.slip.advice}"`;

        cardTitle.appendChild(adviceNumber);
        cardMessage.appendChild(adviceText);

    } else {
        console.log('There is an error. Please check the code ' + request.status);
    }
}
//Send the request to create page
request.send();

//Build the page (HTML) function
const createPage = function () {

    const container = document.getElementById('container');
    container.setAttribute('class', 'container');

    //card creation with header and body

    const card = document.createElement('div');
    card.setAttribute('class', 'card-container');

    const cardTitle = document.createElement('div');
    cardTitle.id = 'cardTitle';
    cardTitle.setAttribute('class', 'card-title');

    const cardMessage = document.createElement('div');
    cardMessage.id = 'cardMessage';
    cardMessage.setAttribute('class', 'card-message');

    const cardDivider = document.createElement('div');
    cardDivider.setAttribute('class', 'card-divider');

    const cardIcon = document.createElement('span');
    cardIcon.setAttribute('class', 'card-icon');
    cardIcon.addEventListener("click", () => {
        request.open('GET', 'https://api.adviceslip.com/advice', true);
        request.send();
    });

    //Card elements creation 

    const imageDivider = document.createElement('img');
    imageDivider.setAttribute('class', 'image-divider');
    imageDivider.alt = "Ilustration from Frontend Mentor";

    const iconDice = document.createElement('img');
    iconDice.setAttribute('class', 'icon-dice');
    iconDice.alt = "Ilustration from Frontend Mentor";

    //Add card header and body

    container.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardMessage);
    card.appendChild(cardDivider);
    card.appendChild(cardIcon);

    //Add elements to the card body 

    cardDivider.appendChild(imageDivider);
    cardIcon.appendChild(iconDice);

}
createPage();




