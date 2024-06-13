if (!sessionStorage.getItem('pageLoaded')) {
    sessionStorage.setItem('pageLoaded', true);
    location.reload();
}

//Hente csv fil med kanaler og lave udbyderliste og kanalliste
//#region
let myvar=""
$.ajax({
  contentType: "application/x-www-form-urlencoded;charset=utf-8",
  async:false,
  url: "https://raw.githubusercontent.com/CWJNor/kanalcsv/main/kanaler_2024.csv",
  success: function(csv) {
      const output = Papa.parse(csv, {
        header: true, // Convert rows to Objects using headers as properties
      });
      if (output.data) {
        myvar=output.data;
      } else {
        console.log(output.errors);
      }
  },
  error: function(jqXHR, textStatus, errorThrow){
      console.log(textStatus);
  }

});
let kanalliste=[];
let udbyderdict={}

//Tilføj tjek om kanalen er i enten Stofa eller Norlys
//Hvis tom så ignorer
for(v of myvar.slice(0,-1)){
let overskrift=Object.keys(v);
let kanalnavn=v["Kanal"];
overskrift.shift();
kanalliste.push(kanalnavn);

for (ov of overskrift){
  if (!udbyderdict[ov]) {
    udbyderdict[ov] = {};
  }
if (v[ov].length==0){
    v[ov]="Løsning ikke mulig";
}
  udbyderdict[ov][kanalnavn]=v[ov];
}
}
kanalliste=kanalliste;
kanalliste.sort();

for(key of Object.keys(udbyderdict)){
const sortedObject = Object.fromEntries(
    Object.entries(udbyderdict[key]).sort((a, b) => a[0].localeCompare(b[0]))
  );
  udbyderdict[key] = sortedObject;
}


//Hente csv fil med genre
//#region
let genre=""
$.ajax({
  contentType: "application/x-www-form-urlencoded;charset=utf-8",
  async:false,
  url: "https://raw.githubusercontent.com/CWJNor/kanalcsv/main/genre_2024.csv",
  success: function(csv) {
      const output = Papa.parse(csv, {
        header: true, // Convert rows to Objects using headers as properties
      });
      if (output.data) {
        genre=output.data;
      } else {
        console.log(output.errors);
      }
  },
  error: function(jqXHR, textStatus, errorThrow){
      console.log(textStatus);
  }

});
let kanallistegenre=[];
let genreliste=[];
let genredict={}

//Tilføj tjek om kanalen er i enten Stofa eller Norlys
//Hvis tom så ignorer

for(v of genre){
    let kanalnavn=v["provider_name"];
    kanallistegenre.push(kanalnavn);
    genreliste.push(v["genre_name"])
    if (!genredict[kanalnavn]) {
        genredict[kanalnavn] = [];
    }
    genredict[kanalnavn].push(v["genre_name"]);

}
kanallistegenre.sort();
genreliste.sort();
genreliste.splice(0,1);



//for(key of Object.keys(genredict)){
//const sortedObject = Object.fromEntries(
//   Object.entries(genredict[key]).sort((a, b) => a[0].localeCompare(b[0]))
//  );
//  genredict[key] = sortedObject;
//}
//#endregion

let beskrivelser=[{"TV2":"Danmarks mest sete tv-kanal, som samler danskerne om alt det vi deler gennem et mangfoldigt programudbud, der omfatter nyheder, aktualitet, dansk fiktion, underholdning, sport, dokumentar og livsstil, spillefilm, morgen-tv og meget mere.",
"TV2 Charlie":"Kanalen henvender sig til voksne og nysgerrige danskere med lyst til at blive underholdtog  prioriterer den gode danske underholdning og musik, dansk fiktion, talkshows, danske filmklassikere, events og de bedste europæiske serier, herunder både dramaer og prisbelønnede krimiserier.",
"TV2 Fri":"En unik fritids- og friluftskanal for dig, der vil inspireres. Oplev programmer om hus, have, madlavning og gør-det-selv arbejde.",
"TV2 News":"Danmarks største nyhedskanal for dig, der vil have breaking news og følge med i begivenhederne, mens de sker.",
"TV2 Sport":"Her får du mere end sublime sportsoplevelser. Du får også knivskarpe analyser og journalistiske sportsmagasiner.",
"TV2 SportX":"TV 2 SPORT X har fokus på store internationale stjerner indenfor verdens bedste fodboldliga, tennis, basketball, X-Games, atletik og meget mere.",
"TV2 Echo":"TV 2 Echo giver et ungt, nysgerrigt og undersøgende perspektiv på alt hvad livet indebærer. Her finder du reality, dokumentarer, nyskabende fiktion, comedy samt store events. Kanalen fokuserer desuden meget på E-sport, hvor vi tilbyder en dedikeret dansk dækning, blandt andet med 700 timers Counter-Strike årligt.",
"TV3":"TV3 er din kanal for sport, reality og underholdning. Det er her du finder programmer som 'Paradise Hotel', 'Divaer i Junglen' og meget mere.",
"TV3 Max":"TV3 Max har en stærk sammensætning af verdensklasse sport og comedy. Her kan du se Premier League, Champions League, Superligaen og The Simpsons.",
"TV3+":"TV3+ viser sport, spænding og spas. Følg kampene i Champions League, Premier League og Superligaen, se masser af Formel 1 og bliv underholdt af en lang række komedieserier.",
"TV3 Puls":"TV3 Puls er kanalen, der fornemmer tendenserne inden for blandt andet mad, mode, indretning og design, og formidler dem gennem fascinerende og inspirerende livsstilsprogrammer i et univers, der aldrig får for travlt til nærvær og indlevelse.",
"TV3 Sport":"TV3 Sport er den ultimative kanal for enhver sportselsker. Her kan du bl.a. følge med i Champions League, Superligaen, Formel 1, NFL, NHL og en række golfturneringer.",
"Kanal 4":"Kanal 4 er for dig, der elsker reality og big characters med en humoristisk, uhøjtidelig, modig og ærlig tilgang til verden. Fascination, drømme og ekstravagance er i højsædet, når du får indblik i nogle af Danmarks største personligheders liv, når de lukker op og giver et eksklusivt indblik i det liv, mange af os kun tør drømme om.",
"Kanal 5":"Kanal 5 samler familien og giver dig et underholdende pusterum, når vi blænder op for tempofyldte underholdningsprogrammer, fængslende krimiserier og stærke faktaprogrammer fra virkelighedens verden og nye, spændende fiktionsserier. Med andre ord - underholdning for hele familien.",
"6'eren": "6’eren er for dig, der elsker både sport, actionfilm og serier. Der er fart over feltet, både når 3F Superligaens tophold spiller og speedway-stjernerne gasser op. Oplev verdensklasse fodbold fra FA Cup og Carabao Cup sammen med et eksperthold bestående af blandt andet Brian Laudrup og Thomas Gravesen.",
"Canal 9":"Canal 9 giver dig spændende fodbold og programmer, der undersøger verden omkring os, uanset om det er mad eller leveforhold. Du får herrefight fra 3F Superligaen og FA Cuppen, og programmer om f.eks. hårdføre typer fra Alaska.",
"Discovery Channel":"En kanal for den kvalitetsbevidste seer, der er til prisvindende dokumentarer, fascinerende serier og intelligent underholdning.",
"DK4":"På dk4 er der nemlig masser af lyttevenlig musik, god gedigen underholdning i musikkens tegn, sidste nyt om den danske teaterscene, aktuelle samtaleprogrammer om litteratur og kunst og indsigtsfulde programmer om alt det, vi elsker at lave i fritiden – lige fra camping og sejlsportsliv til skiløb, lystfiskeri og jagt. dk4 er dansk tv døgnet rundt.",
"National Geographic":"Klog, faktuel underholdning til dig, der vil vide mere om teknologi, naturhistorie, arkæologi og naturens mysterier.",
"3Sat":"Videnskab, litteratur, dokumentar og musik. Teater, kunst og litteratur. 3SAT har forventninger til seernes intelligens – og du får smæk for skillingen.",
"Al-Jazeera":"Aljazeera International sender arabiske nyheder på engelsk til hele verden.",
"Animal Planet":"En dyrekanal for dig, der vil helt tæt på verdens dyreliv og menneskets liv med dyr.",
"ARD":"Hver dag finder du nyproducerede film, serier og dokumentarer på Tysklands største tv-kanal, og mange af dem sendes med danske undertekster, når du ser med fra Danmark.",
"ARTE":"Kultur-kanal med film, temaaftener, dokumentarfilm, debat og reportager.",
"BBC News":"BBC News er en britisk 24-timers nyhedskanal. Nyhedsudsendelserne på kanalen bliver kombineret med dybdeborende reportager, interviews, magasinprogrammer samt økonomiprogrammer.",
"BBC Nordic":"BBC Nordic er det bedste fra BBC Brit og BBC Earth samlet ét sted! På BBC Nordic vil du blandt andet kunne se dine BBC-favoritter som Top Gear og The Graham Norton Show, samt helt nye sæsoner af Serengeti og Live at the Apollo.",
"Blue Hustler":"Blue Hustler er en amerikansk erotisk kanal.",
"Cartoonito":"Catoonito er en børnekanal for de mindste, men mange programmer appellerer også til resten af familien. Her finder du klassiske tegnefilm som Tom & Jerry, og nyere tegnefilm som Mr Bean. Alt tale er naturligvis på dansk. På Catoonito finder du et bredt udvalg af tegnefilm, der kan samle familien på kryds og tværs. Her er både underholdning til fredag aften og søndag morgen.",
"Cartoon Network":"Cartoon Network er en kanal for børn i alle aldre og er fyldt med sjov, eventyr og underholdning. Her får du en blanding af moderne klassikere og helt nye tegnefilm. Alt tale er naturligvis på dansk.",
"CBS Reality":"Kanalen der bringer dig tæt på hverdagsdramaer. Her får du spænding og action fra virkelighedens verden.",
"CNN":"Er du nyhedsjunkie, får du din trang stillet på CNN – en amerikansk nyhedskanal, der giver dig seneste nyt døgnet rundt.",
"Disney Channel":"En familiekanal der giver adgang til alt det bedste fra Disneys magiske verden – med dansk tale eller danske undertekster.",
"Disney Junior":"En kanal i øjenhøjde med de to-seks årige, der blander kendte figurer, musik og magiske fortællinger med læring.",
"Euronews":"Euronews er nyheder fra hele verden, præsenteret i et pan-europæisk perspektiv og på flere europæiske sprog.",
"Eurosport 1":"Uanset om du er til cykling, tennis, motorsport, de største World Cups fra vinterlandskabet, snooker eller atletik – er Eurosport 1 kanalen for dig.",
"Eurosport 2":"Kanalen for dig, der ikke kan få nok af sport. Eurosport 2 byder på vintersport, cykling, tennis og fede fodboldoplevelser.",
"ID-Investigation Discovery":"ID - Investigation Discovery er Danmarks eneste kanal kun med krimi. Her kan du se stærke dokumentarer med rekonstruktioner af virkelighedens mest rå og bestialske forbrydelser. Du kan se drabssager, familiefejder og efterforskning af nogle af de største og vildeste sager, ligesom du kan møde ofre og pårørende i stærke programmer.",
"Mezzo":"Mezzo er en fransk tv-kanal, der er afsat til klassisk musik, jazz og verdensmusik.",
"MTV":"MTV - verdens største musik- og ungdomskanal. En global tv-kanal med lokalt fokus, som giver den bedste blanding af musik og nytænkende underholdning.",
"MTV 80s":"Musikkanalen for de modne seere. Her får du Golden Oldie's på stribe både som musikvideoer og live-optræden fra de bedste koncerter verden over.",
"MTV 90s":"MTV 90s er dedikeret til rock og alternativ musik.",
"MTV Hits":"MTV Hits er et stærkt supplement til MTV. MTV Hits sender alt det bedste og nyeste fra hitlisterne.",
"National Geographic Wild":"Kom helt tæt på naturen og oplev de mest nærgående optagelser med vilde dyr – det hele i en knivskarp billedkvalitet.",
"NDR": "NDR er en tysk kanal med fokus på Nordtyskland",
"Nick jr.":"Nick Jr. er en tv-kanal for de mindste børn mellem to og seks år. Kanalen viser sjove og lærerige tegnefilm, der er tilpasset de yngste og opfordrer til leg og læring.",
"Nickelodeon":"Nickelodeon viser et bredt udbud af tegneserier og serier for børn.",
"NRK1":"NRK1 er en norsk kanal, der rummer lige dele provokerende serier og afmålte dokumentarprogrammer. Mange af dem sendes med danske undertekster, når du ser med fra Danmark. Og se med bør du gøre, hvis du vil være først til helt nye formater.",
"ZDF":"Tysklands public service-kanal ZDF sender hver dag film og serier, kærlighedsdramaer og dokumentariske analyser af krigen og historien – og en stor del af dem med danske undertekster. Nogle af dem har du sikkert hørt om, men dykker du ned i ZDF's program, er der altid nyt og spændende at se.",
"SVT1":"På SVT1 finder du tv med stærke fortællinger om både Sverige, Norden og om verden, og mange af udsendelserne sendes med danske undertekster, når du ser med fra Danmark. SVT1 er for dig, der vil have mere af det, du kender og elsker, men som også gerne vil udfordres.",
"Folketinget":"Folketinget har sin egen tv-kanal, som viser live-tv fra møderne i Folketinget. Folketingets tv sikrer, at du som borger har let adgang til at følge de politiske processer og kan få indblik i, hvad der sker i henholdsvis Folketingssalen og de åbne møder.",
"NRK2":"Norsk kanal fra NRK",
"TV4 Sverige":"TV4 Sverige er den største kommercielle tv-kanal i Sverige",
"SVT2":"SVT2 er Sveriges kanal dedikeret til kultur, viden og nicheprogrammer, og på kanalen finder du derfor et væld af udsendelser, som er både underholdende og en lille smule mere end det. SVT2 sender et udvalg af deres programmer med danske undertekster, når du ser med fra Danmark.",
"TV2 Norge": "TV2 Norge er Norges største kommercielle tv-kanal",
"ProSieben":"Pro 7 satser på underholdning med internationale topserier, film, shows, hurtige nyheder og diverse magasiner.",
"Rai 1":"Rai Uno sender underholdning, nyheder, sport og film 24 timer i døgnet.",
"See":"See byder på originalt dansk indhold, populære serier og masser af sport.",
"TLC":"På TLC er der både tid til refleksion, gråd og grin. Her finder du inspirerende og autentiske programmer med humor og kant.",
"Nick Music":"Nick Music erstatter VH1",
"V sport golf":"V Sport Golf sender masser af live-golf året rundt med danske kommentatorer.",
"Viasat Explore":"Viasat Explore udfordrer din eventyrlyst. Kanalen er garant for eventyr og ekstreme oplevelser. Viasat Explore sender en god blanding af dybdeborende dokumentarserier og udfordrende ekspeditioner.",
"Viasat History":"Hvis du er vild med historiens vingesus og dokumentarer om fordums tid, kan du booste din viden med Viasat History.",
"Viasat Nature":"Viasat Nature viser spændende og lærerige dokumentarer samt natur- og dyreudsendelser. Bliv klog på dyrenes adfærd og naturens mange hemmeligheder med Viasat Nature.",
"Discovery Science":"Kanalen for den nysgerrige seer, der søger svar på universelle spørgsmål i prisvindende dokumentarer og serier om videnskab og teknologi.",
"ESC/ESC1":"Generel underholdningskanal fra Egypten, der indeholder et væld af tv-underholdning.",
"Extreme Sport":"Her er tempoet højt. Kanalen der giver dig det mest nervepirrende og inspirerende inden for livsstil, eventyr og ekstremsport.",
"HRT-TV1":"En kroatisk kanal der sender underholdning, dokumentarer, undervisningsprogrammer, komedieserier, filmer og talkshow.",
"MTV Club":"MTV Club er en musikkanal, der helt og holdent er tilegnet dansemusik. Du får drum’n’bass, trance, garage, house og fest i en fantastisk dansepakke.",
"MTV Live":"MTV Live er en musikbaseret underholdningskanal, som tager udgangspunkt i legendariske, klassiske og splinternye MTV og Vh1 programmer.",
"Polonia":"Følg med i nyheder og tv-programmer direkte fra Polen.",
"Sport Live":"SPORT LIVE er en dansk sportskanal, som sender live mindst 10 timer om dagen. Kanalen sender hestevæddeløb fra hele verden og har et dagligt studieprogram med eksperter. Derudover sender SPORT LIVE fra en række danske sportsbegivenheder."
}]
 
beskrivelser.sort();

let left = document.querySelector(".left");
let middleleft=document.querySelector(".middleleft");
let middleright=document.querySelector(".middleright");
let right = document.querySelector(".right");

  
  let names=kanalliste;

//Norlys knap
Norlysknap=document.querySelector("#Norlys");
let clickedN=false;
NorlysKanaler=[];
Norlysdict=udbyderdict["NorlysVaelgAltDTT_binaer"];
for(k of Object.keys(Norlysdict)){
    if(Norlysdict[k]=="0.0"){
        NorlysKanaler.push(k);
    }
}


//NorlysKanaler=["ZDF","SVT1","NRK1","TV4 Sverige","SVT2","ARD","TV2Norge","NDR","Folketinget"];
Norlysknap.addEventListener("click",function(){
    let kan=document.getElementsByName("Kanal");
    if(clickedN==true){
        clickedN=false;
        for (let k of kan){
            if (NorlysKanaler.includes(k.value)){
                k.checked=false;
            }
        }}
    else{
        clickedN=true;
        for (let k of kan){
            if (NorlysKanaler.includes(k.value)){
                k.checked=true;
            }

        }
}
})

//TV2 dropdown
//#region
let TV2list=["Vælg alle","TV2","TV2 Charlie","TV2 News","TV2 Echo","TV2 Fri","TV2 Sport", "TV2 SportX"]
let TV2drop=document.querySelector("#tv2dropchild");
let clicked2=false;

for (let tv2 of TV2list){
    let node=document.createElement("a");
    let text=document.createTextNode(tv2);
    node.appendChild(text);
    node.classList.add("dropdown-item");
    if(tv2!=="Vælg alle"){
        node.addEventListener("click",function(){
            let kan=document.getElementsByName("Kanal");
                for (let k of kan){
                    if (k.value==tv2){
                        k.checked = !k.checked;
                        triggerEvent(k, 'change');
                    }
                    }
            if(Array.from(TV2drop.childNodes).slice(2).every(item => item.classList.contains("is-active"))){
                TV2drop.childNodes[1].click();
            }
            //if(!Array.from(TV2drop.childNodes).slice(2).some(item => item.classList.contains("is-active"))){
            //    TV2drop.childNodes[1].click();
            //    TV2drop.childNodes[1].classList.remove("is-active");
            //}
            if(!Array.from(TV2drop.childNodes).slice(2).every(item => item.classList.contains("is-active"))){
                TV2drop.childNodes[1].classList.remove("is-active");
            }
                })
    }
    else{
        node.addEventListener("click",function(){
            node.classList.toggle("is-active");
            let kan=document.getElementsByName("Kanal");
            for (let k of kan){
                if (k.value.includes("TV2")){
                    if(k.value.includes("TV2 PLAY")||k.value.includes("TV2 Norge")){
        
                    }
                    else{
                    if(node.classList.contains("is-active")){
                        k.checked=true;
                        triggerEvent(k, 'change');
                    }
                    else{
                            k.checked=false;
                        }
                       
                    }
                    //Hvis "is-active"=>k.checked true , ellers k.checked false
                }
                }
            })}
    if(tv2=="Vælg alle"){
        TV2drop.appendChild(node);
        let breakline=document.createElement("hr");
        //Horisontal linje efter Vælg alle
        breakline.classList.add("dropdown-divider");
        TV2drop.appendChild(breakline)
        }
    else{
        TV2drop.appendChild(node);
    }
}

TV2drop.childNodes[1].addEventListener("click",function(){
    TV2array=Array.from(TV2drop.getElementsByTagName("a"))
    TV2array.forEach((c)=>{
        if (Array.from(TV2drop.childNodes[1].classList).indexOf("is-active")!==-1){
            c.classList.add("is-active");
        }
        else{
            c.classList.remove("is-active");
        }
        }
       
    )})
//#endregion

//Kategori dropdown

let kategorilist=Array.from(new Set(genreliste));
let katdrop=document.querySelector("#kategoridropchild");


//Hent kanaler
for (let kat of kategorilist){
    let node=document.createElement("a");
    let text=document.createTextNode(kat);
    node.appendChild(text);
    node.classList.add("dropdown-item");
    node.addEventListener("click",function(){
        if (Array.from(node.classList).indexOf("is-active")==-1){
            node.classList.add("is-active");
        }
        else{
            node.classList.remove("is-active");
        }
        let kan=document.getElementsByName("Kanal");
            for (let k of kan){
                for (let kanal of Array.from(new Set(kanallistegenre))){
                    if (k.value==kanal){
                        if(genredict[kanal].includes(kat)){
                            if(Array.from(node.classList).indexOf("is-active")==-1){
                                if(genredict[kanal].length>1){
                                    let once=false;
                                    for (let kat of Array.from(katdrop.childNodes).slice(1)){
                                        if(Array.from(kat.classList).includes("is-active") && genredict[k.value].includes(kat.innerHTML.replace("&amp;","&"))){
                                            k.checked=true;
                                            once=true;
                                        }
                                        else{
                                            if(once==false){
                                                k.checked=false;
                                            }
                                           
                                        }
                                }
                                }
                                else{
                                    k.checked=false;
                                
                            }
                        }
                            else{
                                k.checked=true;
                            }
                            //k.checked = !k.checked;
                            triggerEvent(k, 'change');
                        }}
                        }}
            //if(Array.from(katdrop.childNodes).slice(2).every(item => item.classList.contains("is-active"))){
            //    katdrop.childNodes[1].click();
            //}
            //if(!Array.from(katdrop.childNodes).slice(2).every(item => item.classList.contains("is-active"))){
            //    katdrop.childNodes[1].classList.remove("is-active");
            //}
                })
    
    katdrop.appendChild(node);
    }


//Viaplay Group dropdown
//#region
let vialist=["Vælg alle","TV3","TV3+","TV3 Puls","TV3 Sport","TV3 Max","See"]
let viadrop=document.querySelector("#viadropchild");

for (let via of vialist){
    let node=document.createElement("a");
    let text=document.createTextNode(via);
    node.appendChild(text);
    node.classList.add("dropdown-item");
    if(via!=="Vælg alle"){
        node.addEventListener("click",function(){
            let kan=document.getElementsByName("Kanal");
                for (let k of kan){
                    if (k.value==via){
                        k.checked = !k.checked;
                        triggerEvent(k, 'change');
                    }
                    }
            if(Array.from(viadrop.childNodes).slice(2).every(item => item.classList.contains("is-active"))){
                viadrop.childNodes[1].click();
            }
            if(!Array.from(viadrop.childNodes).slice(2).every(item => item.classList.contains("is-active"))){
                viadrop.childNodes[1].classList.remove("is-active");
            }
                })
    }
    else{
        node.addEventListener("click",function(){
            node.classList.toggle("is-active");
            let kan=document.getElementsByName("Kanal");
            for (let k of kan){
                if (vialist.includes(k.value)){
                    if(node.classList.contains("is-active")){
                        k.checked=true;
                        triggerEvent(k, 'change');
                    }
                    else{
                            k.checked=false;
                        }
                       
                    }
                    //Hvis "is-active"=>k.checked true , ellers k.checked false
                }
            })}
    if(via=="Vælg alle"){
        viadrop.appendChild(node);
        let breakline=document.createElement("hr");
        //Horisontal linje efter Vælg alle
        breakline.classList.add("dropdown-divider");
        viadrop.appendChild(breakline)
        }
    else{
        viadrop.appendChild(node);
    }
}

viadrop.childNodes[1].addEventListener("click",function(){
    viaarray=Array.from(viadrop.getElementsByTagName("a"))
    viaarray.forEach((c)=>{
        if (Array.from(viadrop.childNodes[1].classList).indexOf("is-active")!==-1){
            c.classList.add("is-active");
        }
        else{
            c.classList.remove("is-active");
        }
        }
       
    )})
//#endregion

//Discovery dropdown
//#region
let dislist=["Vælg alle","6'eren","Animal Planet","Canal 9","Discovery Channel","Discovery Science","Eurosport 1","Eurosport 2","ID-Investigation Discovery","Kanal 4","Kanal 5","TLC"];
let disdrop=document.querySelector("#disdropchild");

for (let dis of dislist){
    let node=document.createElement("a");
    let text=document.createTextNode(dis);
    node.appendChild(text);
    node.classList.add("dropdown-item");
    if(dis!=="Vælg alle"){
        node.addEventListener("click",function(){
            let kan=document.getElementsByName("Kanal");
                for (let k of kan){
                    if (k.value==dis){
                        k.checked = !k.checked;
                        triggerEvent(k, 'change');
                    }
                    }
            if(Array.from(disdrop.childNodes).slice(2).every(item => item.classList.contains("is-active"))){
                disdrop.childNodes[1].click();
            }
            if(!Array.from(disdrop.childNodes).slice(2).every(item => item.classList.contains("is-active"))){
                disdrop.childNodes[1].classList.remove("is-active");
            }
                })
    }
    else{
        node.addEventListener("click",function(){
            node.classList.toggle("is-active");
            let kan=document.getElementsByName("Kanal");
            for (let k of kan){
                if (dislist.includes(k.value)){
                    if(node.classList.contains("is-active")){
                        k.checked=true;
                        triggerEvent(k, 'change');
                    }
                    else{
                            k.checked=false;
                        }
                       
                    }
                    //Hvis "is-active"=>k.checked true , ellers k.checked false
                }
            })}
    if(dis=="Vælg alle"){
        disdrop.appendChild(node);
        let breakline=document.createElement("hr");
        //Horisontal linje efter Vælg alle
        breakline.classList.add("dropdown-divider");
        disdrop.appendChild(breakline);
        }
    else{
        disdrop.appendChild(node);
    }
    
}

disdrop.childNodes[1].addEventListener("click",function(){
    disarray=Array.from(disdrop.getElementsByTagName("a"))
    disarray.forEach((c)=>{
        if (Array.from(disdrop.childNodes[1].classList).indexOf("is-active")!==-1){
            c.classList.add("is-active");
        }
        else{
            c.classList.remove("is-active");
        }
        }
       
    )})
   
//#endregion


//Stofa knap
//#region
//Stofaknap=document.querySelector("#Stofa");
//let clickedS=false;
//StofaKanaler=[];
//Stofadict=udbyderdict["StofaPakkeloesning_pakker"];
//for(k of Object.keys(Stofadict)){
//    if(Stofadict[k]=="0.0"){
//        StofaKanaler.push(k);
//    }
//}
//Stofaknap.addEventListener("click",function(){
//    let kan=document.getElementsByName("Kanal");
//    if(clickedS==true){
//        clickedS=false;
//        for (let k of kan){
//            if (StofaKanaler.includes(k.value)){
//                k.checked=false;
//            }
//        }}
//    else{
//        clickedS=true;
//        for (let k of kan){
//            if (StofaKanaler.includes(k.value)){
//                k.checked=true;
//            }
//        }
//}
//})
//#endregion

//Ryd knap
let ryd = document.querySelector("#ryd");
ryd.addEventListener("click",function(){
    let kan=document.getElementsByName("Kanal");
        for (let k of kan){
                k.checked=false;
                triggerEvent(k, 'change');
                TV2drop.childNodes[1].classList.remove("is-active");
                viadrop.childNodes[1].classList.remove("is-active");
                disdrop.childNodes[1].classList.remove("is-active");
                for(let f of Array.from(katdrop.childNodes).slice(1)){
                    f.classList.remove("is-active");
                }
                
            }
})

//Feedback knap
//#region
let newwindow = null;

function openWindow(mailtoLink) {
  newwindow = window.open(mailtoLink, 'emailWindow');
  return newwindow;
}

function closeNewWindow() {
  if (newwindow && !newwindow.closed) {
    newwindow.close();
    window.focus();
  }
}
let feedbackknap = document.querySelector("#feedback");

feedbackknap.addEventListener("click", function () {
  Swal.fire({
    title: 'Feedback',
    html: `<input type="text" id="feedbacknavn" class="swal2-input" placeholder="Navn">
           <textarea type="text" id="feedbackbesked" class="swal2-input" placeholder="Feedback"></textarea>`,
    customClass: "swall_feed",
    confirmButtonText: 'Send feedback',
    focusConfirm: false,
    preConfirm: () => {
      const feedbacknavn = Swal.getPopup().querySelector('#feedbacknavn').value;
      const feedbackbesked = Swal.getPopup().querySelector('#feedbackbesked').value;
     

      if (!feedbackbesked || !feedbacknavn) {
        Swal.showValidationMessage(`Udfyld venligst alle felter`);
        return false;
      }

      let recipient = 'torsch@norlys.dk; clajes@norlys.dk';
      let body = feedbackbesked;
      let subject="Feedback fra Prisberegneren: "+feedbacknavn;

      let mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=Feedback til prisberegneren:%0A%0A' + encodeURIComponent(body);
      newwindow = openWindow(mailtoLink);

      return { feedbacknavn: feedbacknavn, feedbackbesked: feedbackbesked}
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({title:"Nyt mailvindue åbner. <br> Tak for din feedback!"})
    }
  });

  window.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);
    if (document.visibilityState === 'visible') {
        closeNewWindow();
    }
  });
});
//#endregion

//Kampagne-knap

//#region
let Kampagneknap=document.querySelector("#btn2");
Kampagneknap.addEventListener("click",function(){
    Swal.fire({
        customClass:"kampagne",
        title: 'Kampagner',
        html: '<div id="kbillede"> <img alt="kampagne" src="kampagner.png"></div>',
        position:"top",
        confirmButtonText: 'OK'
      });
})

function triggerEvent (element, eventName) {
    var event = new Event(eventName);
    element.dispatchEvent(event);
  }

//#endregion

//Tilføj kanaler
//#region
for (let i=0;i<names.length;i++) {
    let side=left;
    if (i>=names.length/4){
        if(i>=3*(names.length/4)){
            side=right;
        }
        else{
            if(i>=2*(names.length/4)){
                side=middleright;
            }
            else{
            side=middleleft;
            }
        }
    }
    let infohover=document.createElement("div");
    infohover.classList.add("hoverable");
    infohover.innerText="i";
    let hiddeninfo=document.createElement("div");
    hiddeninfo.classList.add("hidden");
    if(names[i] in beskrivelser[0]){
        hiddeninfo.innerHTML="<span class='bigtext'>"+names[i]+"</span>"+":<br>"+beskrivelser[0][names[i]];
    }
    else{
        hiddeninfo.innerHTML="<span class='bigtext'>"+names[i]+"</span>"+":<br> Info her";
    }
    let mycheck = document.createElement("input");
    mycheck.setAttribute("type","checkbox");
    mycheck.setAttribute("name","Kanal");
    mycheck.setAttribute("value",names[i]);
    mycheck.setAttribute("id","checkbox");
    mycheck.addEventListener("change",function(){
        if(this.checked){
            //Hvis TV2 kanal
            if (TV2list.indexOf(names[i])!==-1){
                TV2drop.childNodes.forEach(function(child){
                    if (child.text==String(names[i])){
                        child.classList.add("is-active")
                    }
                })
            }
            //Kategori
            //if (kanallistegenre.indexOf(names[i])!==-1){
            //    katdrop.childNodes.forEach(function(child){
            //        console.log(names[i])
            //        console.log(child.text)
            //        console.log(genredict[String(names[i])].includes(child.text))
            //        if (genredict[String(names[i])].includes(child.text)){
            //            child.classList.add("is-active")
            //        }
            //    })
            //}
            //Viaplay
            if (vialist.indexOf(names[i])!==-1){
                viadrop.childNodes.forEach(function(child){
                    if (child.text==String(names[i])){
                        child.classList.add("is-active")
                    }
                })
            }
            //Discovery
            if (dislist.indexOf(names[i])!==-1){
                disdrop.childNodes.forEach(function(child){
                    if (child.text==String(names[i])){
                        child.classList.add("is-active")
                    }
                })
            }
        }
        else{
            //TV2
            if (TV2list.indexOf(names[i])!==-1){
                TV2drop.childNodes.forEach(function(child){
                    if (child.text==String(names[i])){
                        child.classList.remove("is-active")
                    }
                })
            }
            //Kategori
            //if (kanallistegenre.indexOf(names[i])!==-1){
            //    katdrop.childNodes.forEach(function(child){
            //        if (genredict[String(names[i])].includes(child.text)){
            //            child.classList.remove("is-active")
            //        }
            //    })
            //}
            //Viaplay
            if (vialist.indexOf(names[i])!==-1){
                viadrop.childNodes.forEach(function(child){
                    if (child.text==String(names[i])){
                        child.classList.remove("is-active")
                    }
                })
            }
            //Discovery
            if (dislist.indexOf(names[i])!==-1){
                disdrop.childNodes.forEach(function(child){
                    if (child.text==String(names[i])){
                        child.classList.remove("is-active")
                    }
                })
            }
            }
    })
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(names[i]));
    label.classList.add("is-size-5");
    label.setAttribute("id","navn");
    //label.style.setProperty("font-size","17px");
    label.addEventListener("click",function(){
        mycheck.checked = !mycheck.checked;
        //triggerEvent(mycheck, 'change');
    })

    let pointtal=document.createElement("div");
    pointtal.classList.add("stofapoint");
    pointtal.classList.add("hidden");
    //Stofa pointknap
    let stofaaktiv=false; 
    //let kanaler=[udbyderdict["StofaVaelgSelv_point"]];
    ////[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Echo:1,TV3:0,TV3Max:2,"TV3 +":3,TV3Puls:0,TV3Sport:3,Kanal4:0,Kanal5:0,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:1,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:1,"Rai 1":1,See:2,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":1,"Extreme Sport":1,"HRT-TV1":1,MTVClub:1,MTVLive:1,Polonia:1,"Sport Live":1}];
    //kanaler.sort();
    //let pointknap=document.querySelector("#pointknap");
    //pointknap.addEventListener("click",function(){
    //    if(stofaaktiv){
    //        stofaaktiv=false;
    //        pointknap.classList.remove("is-primary");
    //    }
    //    else{
    //        stofaaktiv=true;
    //        pointknap.classList.add("is-primary");
    //    }
    //    if(norlysaktiv){
    //        norlysaktiv=false;
    //        prisknap.classList.remove("is-primary");
    //    }
    //    else{
    //        pointtal.classList.toggle("hidden");
    //    }
    //    if(kanaler[0][names[i]]!=="Løsning ikke mulig"){
    //        pointtal.innerHTML="("+Number(kanaler[0][names[i]])+")";
    //    }
    //    else{
    //        pointtal.innerHTML='\u00A0'
    //    }
    //})

    //Norlys knap
    let kanalpriser=[udbyderdict["NorlysVaelgFritDTT_pris"]];
    //[{TV2:49,TV2Charlie:39,TV2Fri:39,TV2News:39,TV2Sport:39,TV2SportX:39,TV2Echo:39,TV3:49,TV3Max:39,"TV3 +":99,TV3Puls:39,TV3Sport:49,Kanal4:39,Kanal5:49,'6eren':39,Canal9:39,DiscoveryChannel:29,DK4:29,NationalGeographic:29,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:29,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:29,DisneyJunior:29,Euronews:"Løsning ikke mulig",Eurosport1:29,Eurosport2:39,"ID-InvestegationDiscovery":29,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:29,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:39,TLC:29,VH1:29,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":"Løsning ikke mulig"}];
    kanalpriser.sort();
    let norlysaktiv=false;
    let prisknap=document.querySelector("#prisknap");
    prisknap.addEventListener("click",function(){
        if(norlysaktiv){
            norlysaktiv=false;
            prisknap.classList.remove("is-primary");
        }
        else{
            norlysaktiv=true;
            prisknap.classList.add("is-primary");
        }
        if(stofaaktiv){
            stofaaktiv=false;
            pointknap.classList.remove("is-primary");
        }
        else{
            pointtal.classList.toggle("hidden");
        }
        if(kanalpriser[0][names[i]]!=="Løsning ikke mulig"){
            pointtal.innerHTML="("+Number(kanalpriser[0][names[i]])+")";
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    let mellem= document.createElement("br");
    side.appendChild(pointtal);
    side.appendChild(infohover);
    side.appendChild(hiddeninfo);
    side.appendChild(mycheck);
    side.appendChild(label);
    side.appendChild(mellem);
    mycheck.classList.add("mycheck");
    mellem.classList.add("mellem");

}

//#endregion


//Streaming
//Tilføj streaming
let mystream="";
    $.ajax({
      contentType: "application/x-www-form-urlencoded;charset=utf-8",
      async:false,
      url: "https://raw.githubusercontent.com/CWJNor/kanalcsv/main/streaming_2024.csv",
      success: function(csv) {
          const output = Papa.parse(csv, {
            header: true, // Convert rows to Objects using headers as properties
          });
          if (output.data) {
            mystream=output.data;
          } else {
            console.log(output.errors);
          }
      },
      error: function(jqXHR, textStatus, errorThrow){
          console.log(textStatus);
      }
    
  });
  let streamliste=[];
  let streamdict={}


  //Tilføj tjek om kanalen er i enten Stofa eller Norlys
  //Hvis tom så ignorer
for(v of mystream.slice(0,-1)){
  let overskrift=Object.keys(v);
  let streamnavn=v["Streamingtjeneste"];
  overskrift.shift();
  streamliste.push(streamnavn);
  for (ov of overskrift){
    if (!streamdict[ov]) {
      streamdict[ov] = {};
    }
  if (v[ov].length==0){
      v[ov]="Løsning ikke mulig";
  }
    streamdict[ov][streamnavn]=v[ov];
  }
}
//kanalliste=kanalliste;
streamliste.sort();

for(key of Object.keys(streamdict)){
const sortedObject = Object.fromEntries(
    Object.entries(streamdict[key]).sort((a, b) => a[0].localeCompare(b[0]))
    );
    streamdict[key] = sortedObject;
}

//Streamingfirkanter tilføjes
//let stream=["TV2PlayBasis","TV2PlayFavoritSport","TV2PlayFavoritSport (Uden reklamer)","Disney+","HBOMax","NetflixStandard","NetflixPremium","NordiskFilm+","CMore","SkyShowtime","Discovery+underholdning","Discovery+Sport","Viaplay (Film og Serier)","Viaplay Total"];
let stream=streamliste;
stream.sort();

//let stream=["TV2PlayBasis","TV2PlayFavoritSport","TV2PlayFavoritSport (Uden reklamer)","Disney+","HBOMax","NetflixStandard","NetflixPremium","NordiskFilm+","CMore","SkyShowtime","Discovery+underholdning","Discovery+Sport","Viaplay (Film og Serier)","Viaplay Total"];
//stream.sort();
//let streampretty=["TV2 PLAY Basis","TV2 PLAY Favorit+Sport","TV2 PLAY Favorit+Sport (u. reklamer)","Disney+","HBO Max","Netflix Standard","Netflix Premium","Nordisk Film+","C More","SkyShowtime","Discovery+ Underholdning","Discovery+ Sport","Viaplay (Film og Serier)","Viaplay Total"];
//streampretty.sort();
let streamcol1 = document.querySelector(".streamcol1");
let streamcol2 = document.querySelector(".streamcol2");
let streamcol3 = document.querySelector(".streamcol3");
let streamcol4 = document.querySelector(".streamcol4");

for (let i=0;i<stream.length;i++) {
    let side=streamcol1;
    if (i>=3){ //stream.length/4
        if(i>=3*3){
            side=streamcol4;
        }
        else{
            if(i>=2*3){
                side=streamcol3;
            }
            else{
            side=streamcol2;
            }
        }
    }
    let mycheck = document.createElement("input");
    mycheck.setAttribute("type","checkbox");
    mycheck.setAttribute("name","Kanal");
    mycheck.setAttribute("value",stream[i]);
    mycheck.setAttribute("id","checkbox");
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(stream[i]));
    label.setAttribute("id","navn");
    label.classList.add("is-size-5");
    //label.style.setProperty("font-size","17px");
    label.addEventListener("click",function(){
        mycheck.checked = !mycheck.checked;
        //triggerEvent(mycheck, 'change');

        //if(mycheck.checked==true){
        //    mycheck.checked=false;}
        //else{
        //    mycheck.checked=true;
        //}
    })

    let pointtal=document.createElement("div");
    pointtal.classList.add("stofapoint");
    pointtal.classList.add("hidden");
    //Stofa pointknap
    let stofaaktiv=false; 
    //let streamnavn=[streamdict["StofaVaelgSelv_point"]]
    ////[{TV2PlayBasis:2,TV2PlayFavoritSport:8,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:4,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":3,CMore:5,SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":8,"Viaplay (Film og Serier)":6,"Viaplay Total":"Løsning ikke mulig"}]; 
    //streamnavn.sort();
    //let pointknap=document.querySelector("#pointknap");
    //pointknap.addEventListener("click",function(){
    //    if(stofaaktiv){
    //        stofaaktiv=false;
    //    }
    //    else{
    //        stofaaktiv=true;
    //    }
    //    if(norlysaktiv){
    //        norlysaktiv=false;
    //    }
    //    else{
    //        pointtal.classList.toggle("hidden");
    //    }
    //    //pointknap.classList.toggle("is-primary");
    //    if(streamnavn[0][stream[i]]!=="Løsning ikke mulig"){
    //        pointtal.innerHTML="("+Number(streamnavn[0][stream[i]])+")";
    //    }
    //    else{
    //        pointtal.innerHTML='\u00A0'
    //    }
    //})
    //Norlys prisknap
    let streamNor=[streamdict["NorlysVaelgFritDTT_pris"]]
    //[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":"Løsning ikke mulig","Viaplay Total":"Løsning ikke mulig"}];
    streamNor.sort();
    let norlysaktiv=false;
    let prisknap=document.querySelector("#prisknap");
    prisknap.addEventListener("click",function(){
        if(norlysaktiv){
            norlysaktiv=false;
        }
        else{
            norlysaktiv=true;
        }
        if(stofaaktiv){
            stofaaktiv=false;
        }
        else{
            pointtal.classList.toggle("hidden");
        }
        //prisknap.classList.toggle("is-primary");
        if(streamNor[0][stream[i]]!=="Løsning ikke mulig"){
            pointtal.innerHTML="("+Number(streamNor[0][stream[i]])+")";
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })


    let mellem= document.createElement("br");
    side.appendChild(pointtal);
    side.appendChild(mycheck);
    side.appendChild(label);
    side.appendChild(mellem);
    mycheck.classList.add("mycheck");
    mellem.classList.add("mellem");

}

//UDREGNER PRISER
//let streampris=[{"TV2 PLAY Basis":69,"TV2 PLAY Favorit+Sport":189,"TV2 PLAY Favorit+Sport (u. reklamer)":219,"Disney+":79,"HBO Max":79,"Netflix Standard":114,"Netflix Premium":149,"Nordisk Film+":49,"C More":99,"SkyShowtime":69,"Discovery+ Underholdning":79,"Discovery+ Sport":129,"Viaplay (Film og Serier)":129,"Viaplay Total":449}];
//streampris.sort();


//Importerer streamingpriser
let mystreamall="";
    $.ajax({
      contentType: "application/x-www-form-urlencoded;charset=utf-8",
      async:false,
      url: "https://raw.githubusercontent.com/CWJNor/kanalcsv/main/streampriser_2024.csv",
      success: function(csv) {
          const output = Papa.parse(csv, {
            header: true, // Convert rows to Objects using headers as properties
          });
          if (output.data) {
            mystreamall=output.data;
          } else {
            console.log(output.errors);
          }
      },
      error: function(jqXHR, textStatus, errorThrow){
          console.log(textStatus);
      }
    
  });


  
  let streamallliste=[];
  let streamalldict={}

for(v of mystreamall.slice(0,-1)){
    let overskrift=Object.keys(v);
    let navn=v["Streamingtjeneste"];
    overskrift.shift();
    streamallliste.push(navn);
    for (ov of overskrift){
      if (!streamalldict[ov]) {
        streamalldict[ov] = {};
      }
    streamalldict[ov][navn]=Number(v[ov]);
    }
  }
  //kanalliste=kanalliste;
streamallliste.sort();
  
  for(key of Object.keys(streamalldict)){
  const sortedObject = Object.fromEntries(
      Object.entries(streamalldict[key]).sort((a, b) => a[0].localeCompare(b[0]))
      );
      streamalldict[key] = sortedObject;
  }


streampris=[streamalldict["Pris"]]

//Importerer pakkepriser
let mypakke="";
    $.ajax({
      contentType: "application/x-www-form-urlencoded;charset=utf-8",
      async:false,
      url: "https://raw.githubusercontent.com/CWJNor/kanalcsv/main/Pakkepriser_2024.csv",
      success: function(csv) {
          const output = Papa.parse(csv, {
            header: true, // Convert rows to Objects using headers as properties
          });
          if (output.data) {
            mypakke=output.data;
          } else {
            console.log(output.errors);
          }
      },
      error: function(jqXHR, textStatus, errorThrow){
          console.log(textStatus);
      }
    
  });


  let pakkeliste=[];
  let pakkedict={}


  //Tilføj tjek om kanalen er i enten Stofa eller Norlys
  //Hvis tom så ignorer
for(v of mypakke.slice(0,-1)){
  let overskrift=Object.keys(v);
  let pakkenavn=v["Pakke"];
  overskrift.shift();
  pakkeliste.push(pakkenavn);
  for (ov of overskrift){
    if (!pakkedict[ov]) {
      pakkedict[ov] = {};
    }
  if (v[ov].length==0){
      v[ov]="Løsning ikke mulig";
  }
  pakkedict[ov][pakkenavn]=v[ov];
  }
}
//kanalliste=kanalliste;
pakkeliste.sort();

for(key of Object.keys(pakkedict)){
const sortedObject = Object.fromEntries(
    Object.entries(pakkedict[key]).sort((a, b) => a[0].localeCompare(b[0]))
    );
    pakkedict[key] = sortedObject;
}

//Streamingfirkanter tilføjes
//let stream=["TV2PlayBasis","TV2PlayFavoritSport","TV2PlayFavoritSport (Uden reklamer)","Disney+","HBOMax","NetflixStandard","NetflixPremium","NordiskFilm+","CMore","SkyShowtime","Discovery+underholdning","Discovery+Sport","Viaplay (Film og Serier)","Viaplay Total"];
let pakkepris=pakkeliste;
pakkepris.sort();

//DTT
//Norlys Vælg Frit
let NVFfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["NorlysVaelgFritDTT_pris"]];
    //[{TV2:49,TV2Charlie:39,TV2Fri:39,TV2News:39,TV2Sport:39,TV2SportX:39,TV2Echo:39,TV3:49,TV3Max:39,"TV3 +":99,TV3Puls:39,TV3Sport:49,Kanal4:39,Kanal5:49,'6eren':39,Canal9:39,DiscoveryChannel:29,DK4:29,NationalGeographic:29,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:29,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:29,DisneyJunior:29,Euronews:"Løsning ikke mulig",Eurosport1:29,Eurosport2:39,"ID-InvestegationDiscovery":29,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:29,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:39,TLC:29,VH1:29,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":"Løsning ikke mulig"}];
    let stream=[streamdict["NorlysVaelgFritDTT_pris"]];
    let pakke=[pakkedict["NorlysVaelgFritDTT_pris"]]
    //[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":"Løsning ikke mulig","Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let NVF=0;
    let NVFstream=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
    Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }})
    Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
            for (let kanal of kanaler){
                for (let k of Object.keys(kanal)){
                    if(values.includes(k)){
                        if(kanal[k]=="Løsning ikke mulig"||NVF=="Løsning ikke mulig"){
                            NVF="Løsning ikke mulig";
                            if (kanal[k]=="Løsning ikke mulig"){
                                ikkem.push(k);}
                        }
                        else{
                            NVF=NVF+kanal[k];
                        }
                        
                        }
                    }
                }
             
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NVF="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVFstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            else{
                                NVF=NVF+st[s];
                            }
                            
                            }
                        }
                    }
        
        let NVFpris=pakke[0]["Basispris"];
        let basepris=NVFpris+NVF
        if(isNaN(NVF)){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")"
        }
        if(NVFstream==0){
            return basepris+" kr.";
        }
        else{
            return NVFstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        }
//Norlys Vælg 8
let NVODTTfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["NorlysVaelg8DTT_binaer"]];
    //[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Echo:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[streamdict["NorlysVaelg8DTT_binaer"]];
    //[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:1,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":1,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":"Løsning ikke mulig"}];
    let pakke=[pakkedict["NorlysVaelg8DTT_binaer"]]
    kanaler.sort();
    stream.sort();
    let NVODTT=0;
    let NVODTTstream=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NVODTT=="Løsning ikke mulig"){
                                NVODTT="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            else{
                                NVODTT=NVODTT+kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NVODTT="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVODTTstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            else{
                                if(NVODTT!=="Løsning ikke mulig"){
                                    NVODTT=NVODTT+st[s];
                                }
                            }
                        }
                    }
                }
        let basepris=pakke[0]["Basispris"];
        if(NVODTT=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NVODTT>8){
                return "Mere end 8 valgt"
            }
            if(NVODTTstream==0){
                return basepris+" kr."+" ("+NVODTT+" ud af 8 kanaler valgt)";
            }
            else{
                return NVODTTstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+") ("+NVODTT+" ud af 8 kanaler valgt)";
                 }
            }
} 
//Norlys Vælg Alt
let NVAfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["NorlysVaelgAltDTT_binaer"]];
    //[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Echo:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[streamdict["NorlysVaelgAltDTT_binaer"]];
    //[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:79,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":49,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":1}];
    let pakke=[pakkedict["NorlysVaelgAltDTT_binaer"]]
    kanaler.sort();
    stream.sort();
    let NVA=0;
    let NVAstream=0;
    let HBO=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NVA=="Løsning ikke mulig"){
                                NVA="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NVA="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVAstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            if(s=="HBOMax"||s=="NordiskFilm+"){
                                HBO=HBO+st[s];
                            }
                        }
                    }
                }
        let NVApris=pakke[0]["Basispris"]
        let basepris=NVApris+HBO;
        if(NVA=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.: <br>("+ikkem.join(", ")+")";
        }
        if(NVAstream==0){
            return basepris+" kr.";
        }
        else{
            return NVAstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
    }

//OTT
//Norlys Vælg 4 - en streamingtjeneste max
let NV4func=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["NorlysVaelg4OTT_binaer"]];
    //[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Echo:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:1,Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":1,See:1,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:1,MTVLive:1,Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[streamdict["NorlysVaelg4OTT_binaer"]];
    //[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:1,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":1,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":"Løsning ikke mulig"}];
    let pakke=[pakkedict["NorlysVaelg4OTT_binaer"]]
    kanaler.sort();
    stream.sort();
    let NV4=0;
    let NV4stream=0;
    let streamnum=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NV4=="Løsning ikke mulig"){
                                NV4="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            else{
                                NV4=NV4+kanal[k];
                            }
                        }
                    }
                }
                
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NV4="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NV4stream+=streampris[0][s];
                                    streamlist.push(s);
                                
                                }
                            }
                            else{
                                if(NV4!=="Løsning ikke mulig"){
                                    NV4=NV4+st[s];
                                    streamnum+=1;
                                }
                            }
                        }
                    }
                }
        let basepris=pakke[0]["Basispris"]
        if(NV4=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NV4>4){
                return "Mere end 4 valgt"
            }
            if(streamnum>1){
                return "Løsning ikke mulig (Mere end 1 streamingtjeneste valgt)"
            }
            if(NV4stream==0){
                return basepris+" kr."+" ("+NV4+" ud af 4 kanaler valgt)";
            }
            else{
                return NV4stream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+") ("+NV4+" ud af 4 kanaler valgt)";
                 }
            }
} 
//Norlys Vælg 8 - 3 streamingtjenester max
let NVOfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["NorlysVaelg8OTT_binaer"]];
    //[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Echo:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:1,Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":1,See:1,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:1,MTVLive:1,Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[streamdict["NorlysVaelg8OTT_binaer"]];
    //[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:1,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":1,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":"Løsning ikke mulig"}];
    let pakke=[pakkedict["NorlysVaelg8OTT_binaer"]]
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
    kanaler.sort();
    stream.sort();
    let NVO=0;
    let NVOstream=0;
    let streamnum=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NVO=="Løsning ikke mulig"){
                                NVO="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            else{
                                NVO=NVO+kanal[k];
                            }
                        }
                    }
                }
                
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NVO="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVOstream+=streampris[0][s];
                                    streamlist.push(s);
                                
                                }
                            }
                            else{
                                if(NVO!=="Løsning ikke mulig"){
                                    NVO=NVO+st[s];
                                    streamnum+=1;
                                }
                            }
                        }
                    }
                }
        let basepris=pakke[0]["Basispris"]
        if(NVO=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NVO>8){
                return "Mere end 8 valgt"
            }
            if(streamnum>3){
                return "Løsning ikke mulig (Mere end 3 streamingtjeneste valgt)"
            }
            if(NVOstream==0){
                return basepris+" kr."+" ("+NVO+" ud af 8 kanaler valgt)";
            }
            else{
                return NVOstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+") ("+NVO+" ud af 8 kanaler valgt)";
                 }
            }
} 

//Norlys Vælg 20 - 5 streamingtjenester max
let NVTfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["NorlysVaelg20OTT_binaer"]];
    //[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Echo:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:1,Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":1,See:1,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:1,MTVLive:1,Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[streamdict["NorlysVaelg20OTT_binaer"]];
    //[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:1,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":1,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":"Løsning ikke mulig"}];
    let pakke=[pakkedict["NorlysVaelg20OTT_binaer"]]
    kanaler.sort();
    stream.sort();
    let NVT=0;
    let NVTstream=0;
    let streamnum=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NVT=="Løsning ikke mulig"){
                                NVT="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            else{
                                NVT=NVT+kanal[k];
                            }
                        }
                    }
                }
                
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NVT="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVTstream+=streampris[0][s];
                                    streamlist.push(s);
                                
                                }
                            }
                            else{
                                if(NVT!=="Løsning ikke mulig"){
                                    NVT=NVT+st[s];
                                    streamnum+=1;
                                }
                            }
                        }
                    }
                }
        basepris=pakke[0]["Basispris"];
        if(NVT=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NVT>20){
                return "Mere end 20 valgt"
            }
            if(streamnum>5){
                return "Løsning ikke mulig (Mere end 5 streamingtjeneste valgt)"
            }
            if(NVTstream==0){
                return basepris+" kr."+" ("+NVT+" ud af 20 kanaler valgt)";
            }
            else{
                return NVTstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+") ("+NVT+" ud af 20 kanaler valgt)";
                 }
            }
} 

//Norlys Pakkeløsning
let NPLfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["NorlysPakkeloesningOTT_pakker"]];
    //[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Echo:1,TV3:0,TV3Max:2,"TV3 +":1,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':1,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:2,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:2,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:2,DisneyChannel:1,DisneyJunior:2,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":2,Mezzo:"Løsning ikke mulig",MTV:2,MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:2,NDR:0,"Nick jr.":2,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:2,"V sport golf":2,"Viasat Explore":2,"Viasat History":2,"Viasat Nature":2,DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":0}];
    let stream=[streamdict["NorlysPakkeloesningOTT_pakker"]];
    //[{TV2PlayBasis:2,TV2PlayFavoritSport:2,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":2,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":2}];
    let pakke=[pakkedict["NorlysPakkeloesningOTT_pakker"]]
    kanaler.sort();
    stream.sort();
    let NPL=0;
    let NPLstream=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
                for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NPL=="Løsning ikke mulig"){
                                NPL="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(NPL<kanal[k]){
                                NPL=kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NPL="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NPLstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            if(NPL<st[s]){
                                NPL=st[s];
                            }
                        }
                    }
                }
        let NPLp=pakke[0]
        let pakkepris=[NPLp["Lille pakke"],NPLp["Mellem pakke"],NPLp["Stor pakke"]]
        let pakken=[" (lille pakke)"," (mellem pakke)", " (stor pakke)"]
        if(NPL=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NPLstream==0){
                return pakkepris[NPL]+" kr." +pakken[NPL];
            }
            else{
                return NPLstream+pakkepris[NPL]+" kr."+pakken[NPL]+" (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+pakkepris[NPL]+" kr. (ekskl. "+streamlist.join(", ")+")";
            }
    }
}

// stofa pakkeløsning: lille=0,mellem=1,stor=2 ellers løsning ikke mulig
let SPLfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["StofaPakkeloesning_pakker"]];
    //[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Echo:1,TV3:0,TV3Max:2,"TV3 +":1,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':1,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:2,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:2,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:2,DisneyChannel:1,DisneyJunior:2,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":2,Mezzo:"Løsning ikke mulig",MTV:2,MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:2,NDR:0,"Nick jr.":2,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:2,"V sport golf":2,"Viasat Explore":2,"Viasat History":2,"Viasat Nature":2,DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":0}];
    let stream=[streamdict["StofaPakkeloesning_pakker"]];
    //[{TV2PlayBasis:2,TV2PlayFavoritSport:2,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":2,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":2}];
    let pakke=[pakkedict["StofaPakkeloesning_pakker"]]
    kanaler.sort();
    stream.sort();
    let SPL=0;
    let SPLstream=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||SPL=="Løsning ikke mulig"){
                                SPL="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(SPL<kanal[k]){
                                SPL=kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    SPL="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    SPLstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            if(SPL<st[s]){
                                SPL=st[s];
                            }
                        }
                    }
                }
        let SPLp=pakke[0]
        let pakkepris=[SPLp["Lille pakke"],SPLp["Mellem pakke"],SPLp["Stor pakke"]]
        let pakken=[" (lille pakke)"," (mellem pakke)", " (stor pakke)"]
        if(SPL=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(SPLstream==0){
                return pakkepris[SPL]+" kr." +pakken[SPL];
            }
            else{
                return SPLstream+pakkepris[SPL]+" kr."+pakken[SPL]+" (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+pakkepris[SPL]+" kr. (ekskl. "+streamlist.join(", ")+")";
            }
    }
}

//Stofa Vælg Selv
let SVSfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["StofaVaelgSelv_point"]];
    //[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Echo:1,TV3:0,TV3Max:2,"TV3 +":3,TV3Puls:0,TV3Sport:3,Kanal4:0,Kanal5:0,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:1,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:1,"Rai 1":1,See:2,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":1,"Extreme Sport":1,"HRT-TV1":1,MTVClub:1,MTVLive:1,Polonia:1,"Sport Live":0}];
    let stream=[streamdict["StofaVaelgSelv_point"]];
    //[{TV2PlayBasis:2,TV2PlayFavoritSport:8,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:4,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":3,CMore:5,SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":8,"Viaplay (Film og Serier)":6,"Viaplay Total":"Løsning ikke mulig"}];
    let pakke=[pakkedict["StofaVaelgSelv_point"]]
    kanaler.sort();
    stream.sort();
    let SVS=0;
    let SVSstream=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
    for (let kanal of kanaler){
        for (let k of Object.keys(kanal)){
            if(values.includes(k)){
                if(kanal[k]=="Løsning ikke mulig"||SVS=="Løsning ikke mulig"){
                    SVS="Løsning ikke mulig";
                    if (kanal[k]=="Løsning ikke mulig"){
                        ikkem.push(k);}
                }
                else{
                    SVS=SVS+kanal[k];
                }
                }
                }
            }
        for (let st of stream){
            for (let s of Object.keys(st)){
                if(values.includes(s)){
                    if(st[s]=="Løsning ikke mulig"){
                        if(streampris[0][s]=="Løsning ikke mulig"){
                            SVS="Løsning ikke mulig";
                            ikkem.push(s);
                        }
                        else{
                            SVSstream+=streampris[0][s];
                            streamlist.push(s);
                        }
                    }
                    else{
                        SVS=SVS+st[s];
                    }
                    
                    }
                }
            }
    if(isNaN(SVS)){
        return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
    }
    let SVSp=pakke[0]
    let priser=[SVSp["10 point"],SVSp["20 point"],SVSp["30 point"]]
    if(SVSstream==0){
        if (SVS<=10){
            return priser[0]+" kr."+" (10 point)"+" ("+SVS+" point brugt)";
        }
        if (SVS<=20){
            return priser[1]+" kr."+" (20 point)"+" ("+SVS+" point brugt)";
        }
        if (SVS<=30){
            return priser[2]+" kr."+" (30 point)"+" ("+SVS+" point brugt)";
        }
        else{
            return "Mere end 30 point valgt: ("+SVS+" point)";
        }
    }
    else{
        if (SVS<=10){
            return priser[0]+SVSstream+" kr."+" (10 point)"+" ("+SVS+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[0]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (SVS<=20){
            return priser[1]+SVSstream+" kr."+" (20 point)"+" ("+SVS+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[1]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (SVS<=30){
            return priser[2]+SVSstream+" kr."+" (30 point)"+" ("+SVS+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[2]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        else{
            return "Mere end 30 point valgt: ("+SVS+" point)";
        }
    }
}

//Yousee Play 10=299kr.,20=399kr.,30=499kr., 40=599 kr.,+1 point =10kr. 
let YouPfunc=function(){
    ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["YouseePlay_point"]];
    //[{TV2:3,TV2Charlie:2,TV2Fri:2,TV2News:2,TV2Sport:3,TV2SportX:3,TV2Echo:2,TV3:3,TV3Max:3,"TV3 +":4,TV3Puls:2,TV3Sport:3,Kanal4:"Løsning ikke mulig",Kanal5:"Løsning ikke mulig",'6eren':"Løsning ikke mulig",Canal9:"Løsning ikke mulig",DiscoveryChannel:"Løsning ikke mulig",DK4:1,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:"Løsning ikke mulig",ARD:0,ARTE:1,BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:1,BlueHustler:2,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:"Løsning ikke mulig",Eurosport2:"Løsning ikke mulig","ID-InvestegationDiscovery":"Løsning ikke mulig",Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":"Løsning ikke mulig",ProSieben:1,"Rai 1":1,See:3,TLC:"Løsning ikke mulig",VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[streamdict["YouseePlay_point"]];
    //[{TV2PlayBasis:19,TV2PlayFavoritSport:19,"TV2PlayFavoritSport (Uden reklamer)":19,"Disney+":5,HBOMax:7,NetflixStandard:11,NetflixPremium:15,"NordiskFilm+":4,CMore:9,SkyShowtime:6,"Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":10,"Viaplay Total":"Løsning ikke mulig"}];
    let pakke=[pakkedict["YouseePlay_point"]]
    kanaler.sort();
    stream.sort();
    let YouP=0;
    let YouPstream=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
        for (let kanal of kanaler){
            for (let k of Object.keys(kanal)){
                if(values.includes(k)){
                    if(kanal[k]=="Løsning ikke mulig"||YouP=="Løsning ikke mulig"){
                        YouP="Løsning ikke mulig";
                        if (kanal[k]=="Løsning ikke mulig"){
                            ikkem.push(k);}
                    }
                    else{
                        YouP=YouP+kanal[k];
                    }
                    
                    }
                }
            }
            for (let st of stream){
                for (let s of Object.keys(st)){
                    if(values.includes(s)){
                        if(st[s]=="Løsning ikke mulig"){
                            if(streampris[0][s]=="Løsning ikke mulig"){
                                YouP="Løsning ikke mulig";
                                ikkem.push(s);
                            }
                            else{
                                YouPstream+=streampris[0][s];
                                streamlist.push(s);
                            }
                        }
                        else{
                            YouP=YouP+st[s];
                        }
                        
                        }
                    }
                }
    if(isNaN(YouP)){
        return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
    }
    let YouPp=pakke[0]
    let priser=[YouPp["10 point"],YouPp["20 point"],YouPp["30 point"],YouPp["40 point"]]
    if(YouPstream==0){
        if (YouP<=10){
            return priser[0]+" kr."+" (10 point)"+" ("+YouP+" point brugt)";
        }
        if (YouP<=20){
            return priser[1]+" kr."+" (20 point)"+" ("+YouP+" point brugt)";
        }
        if (YouP<=30){
            return priser[2]+" kr."+" (30 point)"+" ("+YouP+" point brugt)";
        }
        if (YouP<=40){
            return priser[3]+" kr."+" (40 point)"+" ("+YouP+" point brugt)";
        }
        else{
            let p=(YouP-40)*YouPp["40+ point (per point)"];
            return priser[3]+p+" kr."+ " (40+ point)"+" ("+YouP+" point brugt)"
        }
    }
    else{
        if (YouP<=10){
            return priser[0]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[0]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=20){
            return priser[1]+YouPstream+" kr."+" (20 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[1]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=30){
            return priser[2]+YouPstream+" kr."+" (30 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[2]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=40){
            return priser[3]+YouPstream+" kr."+" (40 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[3]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        else{
            let p=(YouP-40)*YouPp["40+ point (per point)"];
            let basepris=priser[3]+p;
            return basepris+YouPstream+" kr."+ " (40+ point)"+" ("+YouP+" point brugt)" +" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
    }
    
}

//Yousee pakkeløsning

//Norlys Pakkeløsning
let YouPakkefunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["Yousee_pakker"]];
    //[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Echo:1,TV3:0,TV3Max:2,"TV3 +":1,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':1,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:2,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:2,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:2,DisneyChannel:1,DisneyJunior:2,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":2,Mezzo:"Løsning ikke mulig",MTV:2,MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:2,NDR:0,"Nick jr.":2,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:2,"V sport golf":2,"Viasat Explore":2,"Viasat History":2,"Viasat Nature":2,DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":0}];
    let stream=[streamdict["Yousee_pakker"]];
    //[{TV2PlayBasis:2,TV2PlayFavoritSport:2,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":2,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":2}];
    let pakke=[pakkedict["Yousee_pakker"]]
    kanaler.sort();
    stream.sort();
    let NPL=0;
    let NPLstream=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
                for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NPL=="Løsning ikke mulig"){
                                NPL="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(NPL<kanal[k]){
                                NPL=kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NPL="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NPLstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            if(NPL<st[s]){
                                NPL=st[s];
                            }
                        }
                    }
                }
        let NPLp=pakke[0]
        let pakkepris=[NPLp["Lille pakke"],NPLp["Mellem pakke"],NPLp["Stor pakke"]]
        let pakken=[" (lille pakke)"," (mellem pakke)", " (stor pakke)"]
        if(NPL=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NPLstream==0){
                return pakkepris[NPL]+" kr." +pakken[NPL];
            }
            else{
                return NPLstream+pakkepris[NPL]+" kr."+pakken[NPL]+" (inkl. tilkøb af "+streamlist.join(", ")+" direkte hos streamingudbyderen)"+"<br>"+pakkepris[NPL]+" kr. (ekskl. "+streamlist.join(", ")+")";
            }
    }
}



//Allente Stream TV: Basic=0,Standard=1,Premium=2
let AllStreamFunc=function(){
    let ekstraflex=0;
    let ekstrapris=0;
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["AllenteStreamTV_pakker"]];//[{TV2:0,TV2Charlie:0,TV2Fri:0,TV2News:0,TV2Sport:2,TV2SportX:2,TV2Echo:0,TV3:0,TV3Max:2,"TV3 +":0,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':0,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:1,NDR:"Løsning ikke mulig","Nick jr.":1,Nickelodeon:1,NRK1:"Løsning ikke mulig",ZDF:"Løsning ikke mulig",SVT1:"Løsning ikke mulig",Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":"Løsning ikke mulig",SVT2:"Løsning ikke mulig","TV2Norge":"Løsning ikke mulig",ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:"Løsning ikke mulig","V sport golf":"Løsning ikke mulig","Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":2}];
    let stream=[streamdict["AllenteStreamTV_pakker"]];//[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":0,"Viaplay Total":2}];
    //["Viaplay (Film og Serier)","HBOMax","Discovery+underholdning","Discovery+Sport","CMore","SkyShowtime"];
    //[{"Viaplay (Film og Serier)":79,HBOMax:69,"Discovery+underholdning":79,"Discovery+Sport":129,CMore:99,SkyShowtime:59}];
    let pakke=[pakkedict["AllenteStreamTV_pakker"]]
    kanaler.sort();
    stream.sort();
    let AS=0;
    let ASstream=0;
    let streamekstra=0;
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })

            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]==1 && ekstraflex==0){
                                ekstraflex+=1
                            }
                            if(kanal[k]=="Løsning ikke mulig"||AS=="Løsning ikke mulig"){
                                AS="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(AS<kanal[k] && kanal[k]!==2){
                                AS=kanal[k];
                            }
                            else if(kanal[k]==2){
                                ekstrapris=130
                            }
                            }
                        }
                    }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]==1){
                                ekstraflex+=1
                            }
                            if(st[s]=="Løsning ikke mulig"||AS=="Løsning ikke mulig"){
                                if (st[s]=="Løsning ikke mulig"){
                                    if(streampris[0][s]=="Løsning ikke mulig"){
                                        AS="Løsning ikke mulig";
                                        ikkem.push(s);
                                    }
                                    else{
                                        ASstream+=streampris[0][s];
                                        streamlist.push(s);
                                    }
                                }
                                }
                            
                            if(AS<st[s]){
                                AS=st[s];
                        }
                    }}}
        if(0<ekstraflex && ekstraflex<=2){
            AS=1
        }
        else if(2<ekstraflex && ekstraflex<=4){
            AS=2
        }
        else if(ekstraflex>4){
            AS="TooMany"
        }
        let ekstratekst=""
        if(ekstrapris!==0){
            ekstratekst=" (inkl. ekstra køb af sportskanaler) "
        }
        let ASp=pakke[0]
        let pakkepris=[ASp["Lille pakke"],ASp["Mellem pakke"],ASp["Stor pakke"]]
        let pakken=[" (Basic pakke)"," (Stream Flex 2)", " (Stream Flex 4)"];
        if(AS=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else if(AS=="TooMany"){
            return "Løsning ikke mulig pga. for mange tilvalg (Ekstra kanaler og streaming)";
        }
        else{
            if(ASstream==0){
                let prisAll=pakkepris[AS]+streamekstra;
                return prisAll+ekstrapris+" kr." +pakken[AS]+ekstratekst;
            }
            else{
                let prisAll=pakkepris[AS]+streamekstra;
                return prisAll+ASstream+ekstrapris+" kr."+pakken[AS]+" "+ekstratekst+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+prisAll+" kr."+" (ekskl. "+streamlist.join(", ")+")"
            }
    }
}

//Allente Parabol TV
let AllParaFunc=function(){
    let ekstrapris=0;
    let ikkem=[];
    let streamlist=[];
    let kanaler=[udbyderdict["AllenteParabolTV_pakker"]];
    //[{TV2:0,TV2Charlie:0,TV2Fri:0,TV2News:0,TV2Sport:2,TV2SportX:2,TV2Echo:0,TV3:0,TV3Max:2,"TV3 +":0,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':0,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:1,Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:1,MTV80s:1,MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:1,NDR:"Løsning ikke mulig","Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:"Løsning ikke mulig",SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":"Løsning ikke mulig",ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":2}];
    let stream=[streamdict["AllenteParabolTV_pakker"]];
    //[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:1,"Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":0,"Viaplay Total":2}];
    let streamtilvalg=[streamdict["Allente streamingtilvalg (pris)"]];
    let streamtilvalgnavn=Object.keys(streamtilvalg);
    let ekstrastreaming=[];
    kanaler.sort();
    stream.sort();
    let AP=0;
    let APstream=0;
    let streamekstra=0;
    let pakke=[pakkedict["AllenteParabolTV_pakker"]]
    Object.keys(kanaler[0]).forEach(navn=>{
        if(kanaler[0][navn]!=="Løsning ikke mulig"){
          kanaler[0][navn]=Number(kanaler[0][navn])
        }
      })
      Object.keys(stream[0]).forEach(stnavn=>{
        if(stream[0][stnavn]!=="Løsning ikke mulig"){
          stream[0][stnavn]=Number(stream[0][stnavn])
        }
      })
      Object.keys(streamtilvalg[0]).forEach(sttnavn=>{
        if(streamtilvalg[0][sttnavn]!=="Løsning ikke mulig"){
          streamtilvalg[0][sttnavn]=Number(streamtilvalg[0][sttnavn])
        }
      })
      Object.keys(pakke[0]).forEach(pnavn=>{
        if(pakke[0][pnavn]!=="Løsning ikke mulig"){
            pakke[0][pnavn]=Number(pakke[0][pnavn])
        }  
    })
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||AP=="Løsning ikke mulig"){
                                AP="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(AP<kanal[k] && kanal[k]!==2){
                                AP=kanal[k];
                            }
                        }
                    }
                }
                for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]==2){
                                if(AP==1){
                                    AP=2
                                }
                                else if(AP==0){
                                    ekstrapris=130
                                }}
                                
                            }
                        }
                    }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"||AP=="Løsning ikke mulig"){
                                if(streamtilvalgnavn.includes(s)){
                                    streamekstra=streamekstra+streamtilvalg[0][s];
                                    ekstrastreaming.push(s);
                                }
                                else{
                                    if (st[s]=="Løsning ikke mulig"){
                                        if(streampris[0][s]=="Løsning ikke mulig"){
                                            AP="Løsning ikke mulig";
                                            ikkem.push(s);
                                        }
                                        else{
                                            APstream+=streampris[0][s];
                                            streamlist.push(s);
                                        }
                                    }
                                }
                            }
                            if(AP<st[s]){
                                AP=st[s];
                            }
                        }
                    }
                }
        let ekstratekst=""
        if(ekstrapris!==0){
            ekstratekst=" (inkl. ekstra køb af sportskanaler) "
        }
        if(!ekstrastreaming.length==0){
            ekstratekst+="(inkl. tilvalgspakke: "+ekstrastreaming.join(", ")+")";
        }
        let APp=pakke[0]
        let pakkepris=[APp["Lille pakke"],APp["Mellem pakke"],APp["Stor pakke"]]
        let pakken=[" (Basic pakke)"," (Standard pakke)", " (Premium pakke)"];
        if(AP=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(APstream==0){
                let prisAll=pakkepris[AP]+streamekstra;
                return prisAll+ekstrapris+" kr." +pakken[AP]+ekstratekst;
            }
            else{
                let prisAll=pakkepris[AP]+streamekstra;
                return prisAll+APstream+ekstrapris+" kr."+pakken[AP]+" "+ekstratekst+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+prisAll+" kr."+" (ekskl. "+streamlist.join(", ")+")"
            }
    }
}

let values = [];
let pris=[];

const btn = document.querySelector('#btn');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="Kanal"]:checked');
            
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            let NVF=NVFfunc();
            let YouP=YouPfunc();
            let NVO=NVOfunc();
            let NVODTT=NVODTTfunc();
            let NV4=NV4func();
            let NVT=NVTfunc();
            let NVA=NVAfunc();
            let NPL=NPLfunc();
            let AS=AllStreamFunc();
            let AP=AllParaFunc();
            let Youpakke=YouPakkefunc();

            let minpris=Number.MAX_VALUE;
            let expr="([0-9]+) .*"
            Udbyderliste=[{name:"NVODTT",val:NVODTT},{name:"NVF",val:NVF},{name:"NPL",val:NPL},{name:"YouP",val:YouP},{name:"NVO",val:NVO},{name:"NV4",val:NV4},{name:"NVT",val:NVT},{name:"NVA",val:NVA},{name:"AS",val:AS},{name:"AP",val:AP},{name:"Youpakke",val:Youpakke}];
            for (let u of Udbyderliste){
                val=u.val.replace(expr,"");
                val=parseInt(val);
                if(val<minpris){
                    minpris=val;
                }
            }
            for (let u of Udbyderliste){
                val=u.val.replace(expr,"");
                val=parseInt(val);
                if(val==minpris){
                    if (u.name=="NVF"){
                        NVF="<span class=cheap>"+NVF+"</span>";
                    }
                    if (u.name=="NVODTT"){
                        NVODTT="<span class=cheap>"+NVODTT+"</span>";
                    }
                    if (u.name=="NPL"){
                        NPL="<span class=cheap>"+NPL+'</span>'
                    }
                    if (u.name=="YouP"){
                        YouP="<span class=cheap>"+YouP+"</span>";
                    }
                    if (u.name=="Youpakke"){
                        YouP="<span class=cheap>"+Youpakke+"</span>";
                    }
                    if (u.name=="NV4"){
                        NV4="<span class=cheap>"+NV4+"</span>";
                    }
                    if (u.name=="NVO"){
                        NVO="<span class=cheap>"+NVO+"</span>";
                    }
                    if (u.name=="NVT"){
                        NVT="<span class=cheap>"+NVT+"</span>";
                    }
                    if (u.name=="NVA"){
                        NVA="<span class=cheap>"+NVA+"</span>";
                    }
                    if (u.name=="AS"){
                        AS="<span class=cheap>"+AS+"</span>";
                    }
                    if (u.name=="AP"){
                        AP="<span class=cheap>"+AP+"</span>";
                    }
                }
            }
            
            //pris.push("Norlys Vælg Frit: ".bold()+NVF);
            //pris.push("<br>");
            pris.push("Norlys pakkeløsning<img  alt='streaming' src='streaming.png' class='icon'></img><img  alt='kabel' src='fibercoax.png' class='icon'></img>: ".bold()+NPL);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg 4<img  alt='streaming' src='streaming.png' class='icon'></img>: ".bold()+NV4);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg 8<img  alt='streaming' src='streaming.png' class='icon'></img>: ".bold()+NVO);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg 20<img  alt='streaming' src='streaming.png' class='icon'></img>: ".bold()+NVT);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Flex<img  alt='antenne' src='antenne.png' class='icon'></img>: ".bold()+NVF);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Flex 8<img  alt='antenne' src='antenne.png' class='icon'></img>: ".bold()+NVODTT);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Stor TV-Pakke<img  alt='antenne' src='antenne.png' class='icon'></img>: ".bold()+NVA);
            pris.push("<br>");
            pris.push("<br>"+"YouSee Play: ".bold()+YouP);
            pris.push("<br>");
            pris.push("<br>"+"YouSee Pakkeløsning: ".bold()+Youpakke);
            //pris.push("<br>");
            //pris.push("<br>"+"Allente Streaming: ".bold()+AS);
            pris.push("<br>");
            pris.push("<br>"+"Allente Parabol: ".bold()+AP);
            if (values.length==0){
                swal.fire("Ingen kanaler valgt");
            }
            else{
                swal.fire({title:"Priser:",html:'<div class="align-left">'+pris.join("")+'<br><br><span style="font-style:italic"> OBS: Se hjemmeside for foreningspriser</span></div>',customClass:"swall_wide"});
            };
            pris=[];
            values=[];
        });    

let streamingpriser=[streamalldict["Pris"]];
streamingpriser.sort();





let btn4=document.querySelector("#btn4");
btn4.addEventListener('click',(event)=>{

    let streamprisprint=0;
    valgte=[]
    let checkboxes = document.querySelectorAll('input[name="Kanal"]:checked');
            
    checkboxes.forEach((checkbox) => {    
        valgte.push(checkbox.value);
    });


    let match=[];
    for (let stream of streamingpriser){
        for (let s of Object.keys(stream)){
            for(v in valgte){
                if(valgte[v]==s){
                    match.push(valgte[v])
                    streamprisprint+=stream[s];
                }
            }
        }}
        if (match.length==0){
            swal.fire("Ingen streamingtjenester valgt");
        }
        else if(match.includes("C More")){
            swal.fire("C More kan ikke købes direkte. Fjern C More for at se udregning");
        }
        else{
        swal.fire({title:"Pris for valgte streamingtjenester<hr>",html:"<div class=align-left id=streamingprisberegn> <p style='font-size:32px;'>"+streamprisprint+" kr.</p><br> Ved køb direkte hos streamingudbyderen af: <br><br>"+match.join(",<br>")+ "</div>",width:"1000px"});
    }})
       

const btn1=document.querySelector("#btn1");
        btn1.addEventListener('click',(event)=>{
            streamprint=[]
            for (let stream of streamingpriser){
                for (let s of Object.keys(stream)){
                    streamprint.push(s.bold()+":  "+stream[s]+" kr."+"<br><br>");
                }
                }
                
            ;
            let middleIndex = Math.ceil(streamprint.length / 2);

            let firstHalf = streamprint.splice(0, middleIndex);   
            let secondHalf = streamprint.splice(-middleIndex);
            swal.fire({title:"Priser på streaming<hr>",html:"<div class=align-left id=streamingpris>"+"<div>"+firstHalf.join("")+"</div>"+"<div>"+secondHalf.join("")+"</div>"+"</div>",width:"1000px"});
            });


//Stofa vælg frit
//#region

//Importerer pakkepriser
let valegselvpriser="";
    $.ajax({
      contentType: "application/x-www-form-urlencoded;charset=utf-8",
      async:false,
      url: "https://raw.githubusercontent.com/CWJNor/kanalcsv/main/VælgSelvFrit.csv",
      success: function(csv) {
          const output = Papa.parse(csv, {
            header: true, // Convert rows to Objects using headers as properties
          });
          if (output.data) {
            valegselvpriser=output.data;
          } else {
            console.log(output.errors);
          }
      },
      error: function(jqXHR, textStatus, errorThrow){
          console.log(textStatus);
      }
    
  });
  let vsliste=[];
  let vsdict={}

  //Tilføj tjek om kanalen er i enten Stofa eller Norlys
  //Hvis tom så ignorer
for(v of valegselvpriser.slice(0,-1)){
  let overskrift=Object.keys(v);
  let kanalnavnvs=v["Navn"];
  overskrift.shift();
  vsliste.push(kanalnavnvs);
  for (ov of overskrift){
    if (!vsdict[ov]) {
      vsdict[ov] = {};
    }
  vsdict[ov][kanalnavnvs]=v[ov];
  }
}
//kanalliste=kanalliste;
vsliste.sort();

for(key of Object.keys(vsdict)){
const sortedObject = Object.fromEntries(
    Object.entries(vsdict[key]).sort((a, b) => a[0].localeCompare(b[0]))
    );
    vsdict[key] = sortedObject;
}

const btn3=document.querySelector("#btn3");

btn3.addEventListener("click",()=>{
    Swal.fire({
        customClass:"ekstrakanaler",
        title: 'Tilkøbskanaler',
        html: '<a href="https://norlys.dk/trim/tv-add-on/?_gl=1*ager6x*_ga*NjY1NDk2MjI5LjE2OTUxMjc5ODk.*_ga_21LE3BG3D3*MTcwOTE5NTU3MS4xMy4xLjE3MDkxOTU1NzYuMC4wLjUyNDgyODE0Nw..*_ga_RFE9GML5G7*MTcwOTE5NTU3Mi4yLjEuMTcwOTE5NTU3Ni4wLjAuMA..">Link</a><br/> <div class="float-container"><div id="billedeekstra1" class="float-child"> <h1 class=headerekstra>Streaming</h1><img alt="streaming" src="ekstrastream.png" class="imgchannels"> </div><div id="billedeekstra2" class="float-child"> <h1 class=headerekstra>Antenne</h1> <img alt="antenne" src="ekstraantenne.png" class="imgchannels"></div></div></div>',
        position:"top",
        confirmButtonText: 'OK'
      });
})
//#endregion
