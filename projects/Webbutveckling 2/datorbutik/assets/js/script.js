var cart = []
var toPay = 0;
var listedItems = [motherboard, cpu, gpu, ram, hdd, pcu];
var motherboard = {
    id: "motherboard",
    name: "motherboard",
    price: 500,
    info: "motherboard info",
    amount: 0
};
var cpu = {
    id: "cpu",
    name: "Processor",
    price: 1500,
    info: "Processor info",
    amount: 0
};
var gpu = {
    id: "gpu",
    name: "Graphic card",
    price: 2500,
    info: "Grapic card info",
    amount: 0
};
var ram = {
    id: "ram",
    name: "2x 4gb Ram Sticks",
    price: 2000,
    info: "Ram info",
    amount: 0
};
var hdd = {
    id: "hdd",
    name: "hard drive",
    price: 900,
    info: "hard drive info",
    amount: 0
};
var pcu = {
    id: "pcu",
    name: "power supply unit",
    price: 1200,
    info: "power supply info",
    amount: 0
};
function addToCart(item) {
    /*var para = document.createElement("a");
    var node = document.createTextNode(item.name+"......................."+item.price+"kr");
    var element = document.getElementById("cartItems");
    para.appendChild(node);
    element.appendChild(para);*/

    
    item.amount += 1;
    
    document.getElementById(item.id).innerHTML = item.amount+"x "+item.name+"<span class='itemPrice'>"+item.price+"kr </span>";
    toPay += item.price;
    cart += item.name;
    document.getElementById("total").innerHTML = "Att betala: " + toPay + "Kr";
    document.getElementById(item.id).style.display = "flex";
};
function moreInfo(item) {
    
}