const app = document.querySelector('#app');
const req = new XMLHttpRequest();
req.open('GET', 'https://api.covid19api.com/countries');

const callback = () => {
    // console.log(JSON.parse(req.response))
    if (req.status == 200 && req.readyState == 4) {
        const container = document.createElement('div');
        container.classList.add('container');
        JSON.parse(req.response).map(item => {


            // const header = document.createElement('div');
            // header.classList.add('header');
            // header.textContent = item.ISO2;

            const body = document.createElement('div');
            body.classList.add('body');
            body.textContent = item.Country;
            const country = document.createElement('div');
            country.classList.add('country');
            country.setAttribute('id',item.slug)
            // country.appendChild(header);
            country.appendChild(body);
            container.appendChild(country);




        })
        app.appendChild(container);
    }
}

req.onreadystatechange = callback;
req.send();