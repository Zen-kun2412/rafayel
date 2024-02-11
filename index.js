let data = [
    {
        id: 1,
        namePro:"áo polo cho zai đẹp",
        image:"https://vn-live-01.slatic.net/p/fdfe48d67cbfb54bb14aaf22b7607e6f.jpg",
        desc: "description",
        price: "20$",
    },
    {
        id: 2,
        namePro:"Ghế",
        image:"https://vn-live-01.slatic.net/p/fdfe48d67cbfb54bb14aaf22b7607e6f.jpg",
        desc: "description",
        price: "20$",
    },
    {
        id: 3,
        namePro:"Đèn",
        image:"https://vn-live-01.slatic.net/p/fdfe48d67cbfb54bb14aaf22b7607e6f.jpg",
        desc: "description",
        price: "20$",
    },
    {
        id: 4,
        namePro:"Tủ",
        image:"https://vn-live-01.slatic.net/p/fdfe48d67cbfb54bb14aaf22b7607e6f.jpg",
        desc: "description",
        price: "20$",
    },
    {
        id: 5,
        namePro:"Laptop",
        image:"image/laptop_img.png",
        desc: "description",
        price: "20$",
    }
];
let htmlProduct = "";
for (let i = 0; i < data.length; i++) {
    htmlProduct += 
    `
    <div class="card-pro" style="display: flex; justify-content: space-between;">
                <div style="background-color: white;">
                    <img class="img-pro" src="${data[i].image}" alt="">
                    <div style="display: flex;">
                            <h4>Mã: </h4> 
                            <p id="Identify"></p>
                    </div>
                    <h5>Tên: ${data[i].namePro}</h5>
                    <h4>Giá:${data[i].price}</h4>
                </div>
            </div>


   
    `
}
document.getElementById("product-panel").innerHTML = htmlProduct;

 