var cart = []
var toPay = 0;
var listedItems = [motherboard, cpu, gpu, ram, hdd, pcu];
var motherboard = {
    name: "motherboard",
    price: 500,
    info: "motherboard info"
};
var cpu = {
    name: "Processor",
    price: 1500,
    info: "Processor info"
};
var gpu = {
    name: "Graphic card",
    price: 2500,
    info: "Grapic card info"
};
var ram = {
    name: "2x 4gb Ram Sticks",
    price: 2000,
    info: "Ram info"
};
var hdd = {
    name: "hard drive",
    price: 900,
    info: "hard drive info"
};
var pcu = {
    name: "power supply unit",
    price: 1200,
    info: "power supply info"
};
function addToCart(item) {
    var para = document.createElement("p");
    var node = document.createTextNode(item.name+"......................."+item.price+"kr");
    var element = document.getElementById("cartItems");
    toPay += item.price;
    cart += item.name;
    document.getElementById("total").innerHTML = toPay + "Kr";
    para.appendChild(node);
    element.appendChild(para);
};
function moreInfo(item) {
    
}