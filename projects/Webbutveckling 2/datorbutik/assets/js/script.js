var cart = []
var toPay = 0;
var listedItems = [motherboard, cpu, gpu, ram, hdd, pcu];
var motherboard = {
    id: "motherboard",
    name: "Asus STRIX Z270H GAMING, LGA1151, ATX",
    price: 1500,
    info: "<ul><li>The successor to Pro Gaming motherboards</li><li>5-Way Optimization — One-click full-system tuning handles everything from overclocking to cooling and beyond</li><li>3D printable modules for ultimate customizability</li><li>Next-gen connectivity — Onboard dual M.2 slots for up to 32Gbps of PCIe bandwidth, and 2 x USB 3.1 Typ-A</li><li>ROG SupremeFX audio — Renowned audio performance with dual headphone amplifiers, leveled-up Sonic Studio III, and Sonic Radar III</li><li>Gaming networking — Best-in-class Intel® Gigabit Ethernet, LANGuard, and GameFirst technology</li><li>Patent-pending ASUS SafeSlot for enhanced PCIe retention and shearing resistance</li></ul>",
    amount: 0
};
var cpu = {
    id: "cpu",
    name: "Intel Core i5-7600K Kaby Lake Processor",
    price: 2500,
    info: "<h4>De nya 7:e generationens Intel Core stationära processorer levererar:</h4><ul><li>En imponerande portfölj av standard och olåsta processorer från Intel® Core™ i7 till Core™ i3 som erbjuder prestanda för ett brett spektrum av användningsområden.</li><li>Intel® Optane™ minne med intelligent programvara ger prestandaförbättringar samt snabba programsvarstider för systemacceleration och gensvar.</li><li>Utökar DDR4 RAM minne-tekniken i mainstream, vilket gör att system kan ha upp till 64GB minne och höga överföringshastigheter vid låg effekt jämfört med DDR3 (DDR4-2400 MT/s @ 1,2V vs DDR3-1600 MT/s @ 1,5V).</li><li>Förbättrat komplett utbud av inställningar för basklocka1 som ger mer kontroll, mer kornighet för överklockning av din plattform - när den är ihopparad med Intel® Z270 chipset, som också låter dig finjustera viktiga aspekter av ditt system, inklusive kärnor, kraft och minne.</li><li>Intel® Turbo Boost Technology 2.0 på Intel Core i7 och i5 processorer för att ge en extra prestandaexplosion när du behöver den.</li></ul></div>",
    amount: 0
};
var gpu = {
    id: "gpu",
    name: "ASUS ROG Strix GeForce® GTX 1080",
    price: 5500,
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
    name: 'Seagate Barracuda 1TB 3.5" HDD',
    price: 900,
    info: 'SATA 6.0Gb/s, 7200RPM, 64MB cache, 3.5"<br>BarraCuda är ledare inom branschen med högsta kapaciteter för bordsdatorer och bärbara datorer. Med drivenheter tillgänglig med upp till 10 TB är BarraCuda-portföljen ett utmärkt alternativ för uppgraderingar med olika prisalternativ. Den kompromisslösa BarraCuda Pro förenas med branschledande lagringskapacitet på 7 200 RPM snurrhastighet för snabb prestanda och laddningstid när du spelar eller utför arbeten med tung belastning. BarraCuda är även utrustad med en garanti på 2 år.    ',
    amount: 0
};
var pcu = {
    id: "pcu",
    name: "Corsair HX1000i, 1000W PSU",
    price: 1200,
    info: "<h1>High power and incredible efficiency in our quietest PSUs yet</h1>                 <p>HXi Series power supplies give you extremely tight voltage control, virtually silent operation, and a fully modular cable set. With all Japanese 105°C capacitors, they’re a great choice for high performance PCs where reliability is essential. 80 PLUS Platinum efficiency reduces operating cost and excess heat, and together with Zero RPM Fan Mode technology, gives you virtually silent operation.<br> With Corsair Link Digital support, you can monitor power supply performance, toggle single rail or multi rail mode, and control fan speed directly from your desktop. And, the fully modular, low profile cable set makes builds and upgrades easy, with clean, great-looking results.</p>",
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
function sendOrder(){
    modal.style.display = "block";
    document.getElementById("info-content").innerHTML = '<p>Din hanteras och skickas inom några arbetsdagar</p>';
    document.getElementById("modal-title").innerHTML = "Beställnings bekräftelse";
}
function moreInfo(item) {
    modal.style.display = "block";
    document.getElementById("info-content").innerHTML = item.info;
    document.getElementById("modal-title").innerHTML = item.name;
}
function continueToOrder(){
    modal.style.display = "block";
    document.getElementById("info-content").innerHTML = ' <form action=""><label for="fname">Mottagare:</label><br><input type="text" id="fname" name="fname" placeholder="Förnamn"><input type="text" id ="sname" name="sname" placeholder="Efternamn"> <br><label for="phone">Telefonnummer:</label><br> <select name="phone" id="phone"><option value="+46">Sverige +46</option><option value="+47">Norge +47</option><option value="+358">Finland +358</option></select><input type="text" id=""> <br><label for="country">Land</label> <br><select name="country" id="country"><option value="swe">Sverige</option></select> <br><label for="postal-code">Postnummer:</label><br><input type="text" name="postal-code" id="postal-code"> <br><label for="adress">Mottagar adress:</label> <br><input type="text" id="adress" name="adress"><br><input onclick="sendOrder()"type="submit" value="Beställ"></form>';

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