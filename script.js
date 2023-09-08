const request = new XMLHttpRequest();
request.open('GET', 'https://api.adviceslip.com/advice', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {

        const data = JSON.parse(this.response);

        const container = document.getElementById('container');
        container.setAttribute('class', 'container');

        Object.values(data).forEach(message => {

            const card = document.createElement('div');
            card.setAttribute('class', 'card-container');

            const cardTitle = document.createElement('div');
            cardTitle.setAttribute('class', 'card-title');

            const cardMessage = document.createElement('div');
            cardMessage.setAttribute('class', 'card-message');

            const cardDivider = document.createElement('div');
            cardDivider.setAttribute('class', 'card-divider');

            const cardIcon = document.createElement('button');
            cardIcon.setAttribute('class', 'card-icon');
            cardIcon.addEventListener("click", (data) => {
                location.reload();
            });

            //Elements to add into the divisor

            const adviceNumber = document.createElement('p');
            adviceNumber.setAttribute('class', 'advice-number');
            adviceNumber.textContent = `ADVICE # ${message.id}`;

            const adviceText = document.createElement('p');
            adviceText.setAttribute('class', 'text-message');
            adviceText.textContent = `"${message.advice}"`;

            const imageDivider = document.createElement('img');
            imageDivider.setAttribute('class', 'image-divider');

            const iconDice = document.createElement('img');
            iconDice.setAttribute('class', 'icon-dice');

            //Add
            container.appendChild(card);
            card.appendChild(cardTitle);
            card.appendChild(cardMessage);
            card.appendChild(cardDivider);
            card.appendChild(cardIcon);

            cardTitle.appendChild(adviceNumber);
            cardMessage.appendChild(adviceText);
            cardDivider.appendChild(imageDivider);
            cardIcon.appendChild(iconDice);

        });
    } else {
        console.log('error code ' + request.status);
    }
}

request.send();