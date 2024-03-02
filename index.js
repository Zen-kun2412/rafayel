let data = [
    {
        namePro:"Áo thun Xiao",
        image:"./img/xiao.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Áo thun Venti",
        image:"./img/venti.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Áo thun Kokomi",
        image:"./img/kokomi.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Áo thun Klee",
        image:"./img/klee.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Áo thun Kazuha",
        image:"./img/kazuha.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Áo thun Hutao",
        image:"./img/hutao.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Áo thun Ganyu",
        image:"./img/ganyu.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Áo thun Klee",
        image:"./img/klee.jpg",
        price: "110,000 đ",
    },
];
let htmlProduct = "";
for (let i = 0; i < data.length; i++) {
    htmlProduct += 
    `
    <div class="card-pro" style="display: flex; justify-content: space-between; margin-bottom: 10px;margin-top: 10px;">
                <div style="background-color: white;">
                    <img class="img-pro" src="${data[i].image}" alt="">
                    <div style="display: flex;">
                            <p id="Identify"></p>
                    </div>
                    <h3 style="margin-top:10px">Tên: ${data[i].namePro}</h3>
                    <h4 style="margin-top:10px; margin-bottom: 10px;">Giá:${data[i].price}</h4>
                </div>
            </div>


   
    `
}
document.getElementById("product-panel").innerHTML = htmlProduct;

document.getElementById("btn-submit").addEventListener("click", function () {
    const email = "wunood@gmail.com";
    const message = document.getElementById("message").value;
    const mailtoLink = `mailto:${email}?subject=${message}&body= ${message}`;
    window.location.href = mailtoLink;
    console.log("🚀 ~ file: index.js:6 ~ mailtoLink:", mailtoLink)
});





// đồng hồ đếm tgian
