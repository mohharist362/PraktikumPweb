const productContainer = document.querySelector(".calendar__content");

fetch("imagehero.json")
.then((response) => response.json())
.then((data) => {

    let contentHTML = "";
    data.products.forEach((product) => {
    contentHTML += `
    <div class="calendar__content">
        <p class="calendar__title">${imageheros.title}<span class="calendar--highlight"> Kalender Freepik</span></p>
        <p class="calendar__text"><span class="calendar--highlight">Semua perayaan dan acara</span> berada di ujung jari anda</p>
        <a class="button--transparent" href="#">Telusuri kalender</a>
    </div>
    `;
    });
    productContainer.innerHTML = contentHTML;
})



// fetch("imagehero.json")
// .then(function(response){
//     return response.json();
// })
// .then(function(imagehero){
//     let placeholder = document.querySelector(".calendar__container");
//     let out = "";
//     for(let imageheros of imagehero){
//         out += `
//         <div class="calendar__content">
//             <p class="calendar__title">${imageheros.title}<span class="calendar--highlight"> ${imageheros.titlespan}</span></p>
//             <p class="calendar__text"><span class="calendar--highlight">${imageheros.subtitle}</span> ${imageheros.subtitlespan}</p>
//             <a class="button--transparent" href="#">${imageheros.titletombol}</a>
//         </div>
//         `
//     }

//     placeholder.innerHTML = out;
// })