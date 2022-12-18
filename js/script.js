const toursBase = [
    {
        id: 1,
        image: "https://www.fscoceans.com/usr/blog_thumbs/27_adli-wahid-3-QB-YKxTKY-unsplash.jpg",
        country: "Турция",
        days: "8 дней",
        hotel: "Анталья | Sherwood Dreams Resort 5*",
        price: "500$",
    },
    {
        id: 2,
        image: "http://mobimg.b-cdn.net/v3/fetch/7b/7bc3a46be570184b2d396fc4c0ba5642.jpeg",
        country: "Египет",
        days: "8 дней",
        hotel: "Анталья | Sherwood Dreams Resort 5*",
        price: "500$",
    },
    {
        id: 3,
        image: "https://avatars.dzeninfra.ru/get-zen_brief/7731634/pub_63621c88881f8e207a3ffff9_63621c88881f8e207a3ffffb/scale_1200",
        country: "Турция",
        days: "8 дней",
        hotel: "Анталья | Sherwood Dreams Resort 5*",
        price: "500$",
    },
    {
        id: 4,
        image: "https://img2.akspic.ru/crops/5/4/6/5/6/165645/165645-oliver_shostrom-phiphi-horvatiya-voda-gidroresursy-1920x1080.jpg",
        country: "Таиланд",
        days: "8 дней",
        hotel: "Анталья | Sherwood Dreams Resort 5*",
        price: "500$",
    },
    {
        id: 5,
        image: "https://www.novostroy.ru/regions/u/editor_2/image_3977546_68640401.jpg",
        country: "ОАЭ",
        days: "8 дней",
        hotel: "Анталья | Sherwood Dreams Resort 5*",
        price: "500$",
    },
    {
        id: 6,
        image: "https://avatars.mds.yandex.net/i?id=2487626eead7efb8bdc5957eba8363481dc16f47-7085654-images-thumbs&n=13&exp=1",
        country: "Малайзия",
        days: "8 дней",
        hotel: "Анталья | Sherwood Dreams Resort 5*",
        price: "500$",
    },
];

const container = document.querySelector(".tours_row");

window.addEventListener("load", () => {
    if(!localStorage.getItem("tours")) {
        localStorage.setItem("tours", JSON.stringify(toursBase))
    } else {
        const tours = JSON.parse(localStorage.getItem("tours"))
        card(tours)
    }
})

function card (base){
    const template = base.map(({image, country, days, hotel, price}) => {
        return `
        <div class="tour_card">
          <img src="${image}" alt="" class="tour_card-img"/>
        
          <div class="tour_card-general">
            <div class="tour_card-title">
                <p class="tour_card-country">${country}</p>
                <p class="tour_card-days">${days}</p>
            </div>

            <div class="tour_card-description">
                <div class="tour_card-info">
                    <p class="tour_card-rating">${hotel}</p>
                </div>
                <div class="tour_card-price">${price}</div>
            </div>
          </div>
        </div>
        `
    }).join(" ")

    container.innerHTML = template
}