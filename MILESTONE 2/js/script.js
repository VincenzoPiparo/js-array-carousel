// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini e i testi delle 
// immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che 
// concatena un template literal. Al termine di questa fase ci ritroveremo con lo
//  stesso slider, ma costruito dinamicamente attraverso JavaScript.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
// METTERE IMMAGGINI E THUMBS
const imgContainer = document.querySelector(`.img_container`)
const thumbsContainer = document.querySelector(`.thumbs_img`)
console.log(thumbsContainer)

for (let i = 0; i < items.length; i++) {
    const thisImg = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    const newImage = `
        <div class="single_img active">
            <img src="${thisImg}" alt="${i}">
            <div class="single_img_text">
                <h3>${thisTitle}</h3>
                <p>${thisText}</p>
            </div>
        </div>
    `;

    imgContainer.innerHTML += newImage;

    const newImageThumbs = `
        <div class="single_thumbs_img active">
            <img src="${thisImg}" alt="${i}">
        </div>
    `;

    thumbsContainer.innerHTML += newImageThumbs;
}
