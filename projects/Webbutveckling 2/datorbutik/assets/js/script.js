var cart = []
var toPay = 0;
var listedItems = [motherboard, cpu, gpu, ram, hdd, pcu];
var motherboard = {
    id: "motherboard",
    name: "Asus STRIX Z270H GAMING, LGA1151, ATX",
    price: 500,
    info: "motherboard info",
    amount: 0
};
var cpu = {
    id: "cpu",
    name: "Intel Core i5-7600K Kaby Lake Processor",
    price: 1500,
    info: "Processor info",
    amount: 0
};
var gpu = {
    id: "gpu",
    name: "ASUS ROG Strix GeForce® GTX 1080",
    price: 2500,
    info: "Det snabbaste kortet någonsin från ASUS ROG med hela 35% bättre prestanda än ett vanligt 1080. Det är överklockat redan från fabrik och har kraften att klara av dagens moderna spel samt VR. Med förbättrad kylning och ASUS aura sync får ditt bygge ett rejält lyft och med Xsplit Gamecaster kan du streama som ett proffs. NVIDIA:s nya flaggskepp GeForce GTX 1080 grafikkort är det mest avancerade spelgrafikkortet som någonsin skapats. Upptäck oöverträffad prestanda, effektverkningsgrad och spelupplevelse - drivet av den nya NVIDIA Pascal™-arkitekturen. Det här är den ultimata spelplattformen. <a href='#'>#GameReady</a>. <ul> <li> Klockfrekvens på 1835 MHz för utmärkt prestanda och spelupplevelse </li> <li> DirectCU III med patenterade vingbladsfläktarlevererar 30 % svalare och 3X tystare prestanda. </li><li> ASUS FanConnecthar systemfläktar med 4-pinnars GPU-styrda kontakter för optimal termisk prestanda. </li> <li> Branschens enda Auto-Extreme Technology med Super Alloy Power IIger premium kvalitet och bästa pålitlighet. </li><li> Aura RGB Lightinguttrycker en egen spelstil. </li><li> HDMI-portar som passar till VRför fängslande upplevelse med virtuell verklighet (VR). </li><li> GPU Tweak II med Xsplit Gamecasterger intuitiv justering av prestanda och möjlighet att strömma spel live direkt. </li><li> NVIDIA ANSELger ett revolutionerande nytt sätt att fånga skärmbilder i spelet. </li><li> NVIDIA GameWorks™ger en interaktiv och bioliknade upplevelse, samt e mycket flytande spelupplevelse.</li></ul>",
    amount: 0
};
var ram = {
    id: "ram",
    name: "Corsair Vengeance DDR4 3000MHz 2x8GB",
    price: 2000,
    info: "Detta är höghastighets-minnen för dig som vill ha det bästa i ditt datorbygge, Corsair har sett till så de gör jobbet de är skapade för plus lite till. De är byggda för överklockning men oroa dig inte ifall det låter skrämmande, den smidiga mjukvaran som medföljer hjälper dig komma åt prestandan utan att du behöver vara expert.",
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
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
span.onclick = function() {
    modal.style.display = "none";
}
document.getElementById()
function addToCart(item) {
    /*var para = document.createElement("a");
    var node = document.createTextNode(item.name+"......................."+item.price+"kr");
    var element = document.getElementById("cartItems");
    para.appendChild(node);
    element.appendChild(para);*/
    amountAdd(item);
    document.getElementById(item.id).style.display = "flex";
};
function moreInfo(item) {
    modal.style.display = "block";
    document.getElementById("info-content").innerHTML = item.info;
    document.getElementById("modal-title").innerHTML = item.name;
}
function continueToOrder(){
    modal.style.display = "block";
    document.getElementById("info-content").innerHTML = ' <form action=""><label for="fname">Mottagare:</label><br><input type="text" id="fname" name="fname" placeholder="Förnamn"><input type="text" id ="sname" name="sname" placeholder="Efternamn"> <br><label for="phone">Telefonnummer:</label><br> <select name="phone" id="phone"><option value="+46">Sverige +46</option><option value="+47">Norge +47</option><option value="+358">Finland +358</option></select><input type="text" id=""> <br><label for="country">Land</label> <br><select name="country" id="country"><option value="swe">Sverige</option></select> <br><label for="postal-code">Postnummer:</label><br><input type="text" name="postal-code" id="postal-code"> <br><label for="adress">Mottagar adress:</label> <br><input type="text" id="adress" name="adress"></form>';

    document.getElementById("modal-title").innerHTML = "Kontakt Information";
}
//window.onclick = function() {
//    modal.style.display = "none";
//}
function amountAdd(item) {
    item.amount += 1;
    toPay += item.price;
    cart += item.name; 
    refreshCart(item);
}
function amountDelete(item) {
    item.amount -= 1;
    toPay -= item.price;
    cart -= item.name;
    refreshCart(item);
}
function refreshCart(item) {
    document.getElementById(item.id).innerHTML =  item.amount+"x "+item.name+"<span class='itemPrice'>"+item.price*item.amount+"kr </span>";
    
    document.getElementById("total").innerHTML = "Att betala: " + toPay + "Kr";
}