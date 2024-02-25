let datatop = [
    {
        namePro:"Áo thun Xiao",
        image:"./img/ei.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Ghế",
        image:"./img/hutaotop.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Đèn",
        image:"./img/paimon.jpg",
        price: "110,000 đ",
    },
    {
        namePro:"Tủ",
        image:"./img/wanderer.jpg",
        price: "110,000 đ",
    },
];
let htmlProducttop = "";
for (let i = 0; i < datatop.length; i++) {
    htmlProducttop += 
    `
    <div class="card-pro" style="display: flex; justify-content: space-between; margin-bottom: 10px;margin-top: 10px;">
                <div style="background-color: white;">
                <a href="spmau.html"><img class="img-pro" src="${datatop[i].image}" alt=""></a>
                    <div style="display: flex;">
                            <p id="Identify"></p>
                    </div>
                    <h3 style="margin-top:10px">Tên: ${datatop[i].namePro}</h3>
                    <h4 style="margin-top:10px; margin-bottom: 10px;">Giá:${datatop[i].price}</h4>
                </div>
            </div>


   
    `
}
document.getElementById("product-panel-top").innerHTML = htmlProducttop;