if (!sessionStorage.getItem('pageLoaded')) {
    sessionStorage.setItem('pageLoaded', true);
    location.reload();
}

let names=["TV2","TV2Charlie","TV2Fri","TV2News","TV2Sport","TV2SportX","TV2Zulu","TV3","TV3Max","TV3 +","TV3Puls","TV3Sport","Kanal4","Kanal5","6eren","Canal9","DiscoveryChannel","DK4","NationalGeographic","3Sat","AlJazeera","Animalplanet","ARD","ARTE","BBCBrit","BBCEarth","BBCWorldNews","BlueHustler","Boomerang","CartoonNetwork","CBSReality","CNN","DisneyChannel","DisneyJunior","Euronews","Eurosport1","Eurosport2","ID-InvestegationDiscovery","Mezzo","MTV","MTV80s","MTV90s","MTVHits","NationalGeographicWild","NDR","Nick jr.","Nickelodeon","NRK1","ZDF","SVT1","Folketinget","NRK2","TV4 Sverige","SVT2","TV2Norge","ProSieben","Rai 1","See","TLC","VH1","V sport golf","Viasat Explore","Viasat History","Viasat Nature","DiscoveryScience","ESC/ESC1","Extreme Sport","HRT-TV1","MTVClub","MTVLive","Polonia","Sport Live"];
names.sort();
let prettynames=["TV2","TV2 Charlie","TV2 Fri","TV2 News","TV2 Sport","TV2 SportX","TV2 Zulu","TV3","TV3 MAX","TV3 +","TV3 Puls","TV3 Sport","Kanal 4","Kanal 5","6'eren","Canal 9","Discovery Channel","DK4","National Geographic","3Sat","Al Jazeera","Animal Planet","ARD","ARTE","BBC Brit","BBC Earth","BBC World News","Blue Hustler","Boomerang","Cartoon Network","CBS Reality","CNN","Disney Channel","Disney Junior","Euronews","Eurosport 1","Eurosport 2","ID-Investegation Discovery","Mezzo","MTV","MTV 80s","MTV 90s","MTV Hits","National Geographic Wild","NDR","Nick Jr.","Nickelodeon","NRK1","ZDF","SVT1","Folketinget","NRK2","TV4 Sverige","SVT2","TV2 Norge","ProSieben","Rai 1","See","TLC","VH1","V sport golf","Viasat Explore","Viasat History","Viasat Nature","Discovery Science","ESC/ESC1","Extreme Sport","HRT-TV1","MTV Club","MTV Live","Polonia","Sport Live"];
prettynames.sort();

let beskrivelser=[{"TV2":"Danmarks mest sete tv-kanal, som samler danskerne om alt det vi deler gennem et mangfoldigt programudbud, der omfatter nyheder, aktualitet, dansk fiktion, underholdning, sport, dokumentar og livsstil, spillefilm, morgen-tv og meget mere.",
"TV2Charlie":"Kanalen henvender sig til voksne og nysgerrige danskere med lyst til at blive underholdtog  prioriterer den gode danske underholdning og musik, dansk fiktion, talkshows, danske filmklassikere, events og de bedste europæiske serier, herunder både dramaer og prisbelønnede krimiserier.",
"TV2Fri":"En unik fritids- og friluftskanal for dig, der vil inspireres. Oplev programmer om hus, have, madlavning og gør-det-selv arbejde.",
"TV2News":"Danmarks største nyhedskanal for dig, der vil have breaking news og følge med i begivenhederne, mens de sker.",
"TV2Sport":"Her får du mere end sublime sportsoplevelser. Du får også knivskarpe analyser og journalistiske sportsmagasiner.",
"TV2SportX":"TV 2 SPORT X har fokus på store internationale stjerner indenfor verdens bedste fodboldliga, tennis, basketball, X-Games, atletik og meget mere.",
"TV2Zulu":"TV 2 ZULU er TV 2s kanal for ”unge i alle aldre”, der holder af originalt dansk indhold. ZULU har særligt fokus på reportager fra de unges virkelighed, nyskabende fiktion, comedy samt events på og uden for tv-skærmen og de digitale medier.",
"TV3":"TV3 er din kanal for sport, reality og underholdning. Det er her du finder programmer som 'Paradise Hotel', 'Divaer i Junglen' og meget mere.",
"TV3Max":"TV3 Max har en stærk sammensætning af verdensklasse sport og comedy. Her kan du se Premier League, Champions League, Superligaen og The Simpsons.",
"TV3 +":"TV3+ viser sport, spænding og spas. Følg kampene i Champions League, Premier League og Superligaen, se masser af Formel 1 og bliv underholdt af en lang række komedieserier.",
"TV3Puls":"TV3 Puls er kanalen, der fornemmer tendenserne inden for blandt andet mad, mode, indretning og design, og formidler dem gennem fascinerende og inspirerende livsstilsprogrammer i et univers, der aldrig får for travlt til nærvær og indlevelse.",
"TV3Sport":"TV3 Sport er den ultimative kanal for enhver sportselsker. Her kan du bl.a. følge med i Champions League, Superligaen, Formel 1, NFL, NHL og en række golfturneringer.",
"Kanal4":"Kanal 4 er for dig, der elsker reality og big characters med en humoristisk, uhøjtidelig, modig og ærlig tilgang til verden. Fascination, drømme og ekstravagance er i højsædet, når du får indblik i nogle af Danmarks største personligheders liv, når de lukker op og giver et eksklusivt indblik i det liv, mange af os kun tør drømme om.",
"Kanal5":"Kanal 5 samler familien og giver dig et underholdende pusterum, når vi blænder op for tempofyldte underholdningsprogrammer, fængslende krimiserier og stærke faktaprogrammer fra virkelighedens verden og nye, spændende fiktionsserier. Med andre ord - underholdning for hele familien.",
"6eren": "6’eren er for dig, der elsker både sport, actionfilm og serier. Der er fart over feltet, både når 3F Superligaens tophold spiller og speedway-stjernerne gasser op. Oplev verdensklasse fodbold fra FA Cup og Carabao Cup sammen med et eksperthold bestående af blandt andet Brian Laudrup og Thomas Gravesen.",
"Canal9":"Canal 9 giver dig spændende fodbold og programmer, der undersøger verden omkring os, uanset om det er mad eller leveforhold. Du får herrefight fra 3F Superligaen og FA Cuppen, og programmer om f.eks. hårdføre typer fra Alaska.",
"DiscoveryChannel":"En kanal for den kvalitetsbevidste seer, der er til prisvindende dokumentarer, fascinerende serier og intelligent underholdning.",
"DK4":"På dk4 er der nemlig masser af lyttevenlig musik, god gedigen underholdning i musikkens tegn, sidste nyt om den danske teaterscene, aktuelle samtaleprogrammer om litteratur og kunst og indsigtsfulde programmer om alt det, vi elsker at lave i fritiden – lige fra camping og sejlsportsliv til skiløb, lystfiskeri og jagt. dk4 er dansk tv døgnet rundt.",
"NationalGeographic":"Klog, faktuel underholdning til dig, der vil vide mere om teknologi, naturhistorie, arkæologi og naturens mysterier.",
"3Sat":"Videnskab, litteratur, dokumentar og musik. Teater, kunst og litteratur. 3SAT har forventninger til seernes intelligens – og du får smæk for skillingen.",
"AlJazeera":"Aljazeera International sender arabiske nyheder på engelsk til hele verden.",
"Animalplanet":"En dyrekanal for dig, der vil helt tæt på verdens dyreliv og menneskets liv med dyr.",
"ARD":"Hver dag finder du nyproducerede film, serier og dokumentarer på Tysklands største tv-kanal, og mange af dem sendes med danske undertekster, når du ser med fra Danmark.",
"ARTE":"Kultur-kanal med film, temaaftener, dokumentarfilm, debat og reportager.",
"BBCBrit":"BBC Brit sender originale dramaserier, engelsk comedy og underholdningsprogrammer.",
"BBCEarth":"BBC Earth er en tv-kanal, hvor prisvindende faktuelle og ikke-faktuelle programmer bliver præsenteret af eksperter i verdensklasse.",
"BBCWorldNews":"BBC World er en britisk 24-timers nyhedskanal. Nyhedsudsendelserne på kanalen bliver kombineret med dybdeborende reportager, interviews, magasinprogrammer samt økonomiprogrammer.",
"BlueHustler":"Blue Hustler er en amerikansk erotisk kanal.",
"Boomerang":"Et sjovt og sikkert sted for de mindste – men også et stort hit blandt forældre med sine klassiske serier, der vækker minder.",
"CartoonNetwork":"Cartoon Network er en kanal for børn i alle aldre og er fyldt med sjov, eventyr og underholdning. Her får du en blanding af moderne klassikere og helt nye tegnefilm. Alt tale er naturligvis på dansk.",
"CBSReality":"Kanalen der bringer dig tæt på hverdagsdramaer. Her får du spænding og action fra virkelighedens verden.",
"CNN":"Er du nyhedsjunkie, får du din trang stillet på CNN – en amerikansk nyhedskanal, der giver dig seneste nyt døgnet rundt.",
"DisneyChannel":"En familiekanal der giver adgang til alt det bedste fra Disneys magiske verden – med dansk tale eller danske undertekster.",
"DisneyJunior":"En kanal i øjenhøjde med de to-seks årige, der blander kendte figurer, musik og magiske fortællinger med læring.",
"Euronews":"Euronews er nyheder fra hele verden, præsenteret i et pan-europæisk perspektiv og på flere europæiske sprog.",
"Eurosport1":"Uanset om du er til cykling, tennis, motorsport, de største World Cups fra vinterlandskabet, snooker eller atletik – er Eurosport 1 kanalen for dig.",
"Eurosport2":"Kanalen for dig, der ikke kan få nok af sport. Eurosport 2 byder på vintersport, cykling, tennis og fede fodboldoplevelser.",
"ID-InvestegationDiscovery":"ID - Investigation Discovery er Danmarks eneste kanal kun med krimi. Her kan du se stærke dokumentarer med rekonstruktioner af virkelighedens mest rå og bestialske forbrydelser. Du kan se drabssager, familiefejder og efterforskning af nogle af de største og vildeste sager, ligesom du kan møde ofre og pårørende i stærke programmer.",
"Mezzo":"Mezzo er en fransk tv-kanal, der er afsat til klassisk musik, jazz og verdensmusik.",
"MTV":"MTV - verdens største musik- og ungdomskanal. En global tv-kanal med lokalt fokus, som giver den bedste blanding af musik og nytænkende underholdning.",
"MTV80s":"Musikkanalen for de modne seere. Her får du Golden Oldie's på stribe både som musikvideoer og live-optræden fra de bedste koncerter verden over.",
"MTV90s":"MTV 90s er dedikeret til rock og alternativ musik.",
"MTVHits":"MTV Hits er et stærkt supplement til MTV. MTV Hits sender alt det bedste og nyeste fra hitlisterne.",
"NationalGeographicWild":"Kom helt tæt på naturen og oplev de mest nærgående optagelser med vilde dyr – det hele i en knivskarp billedkvalitet.",
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
"TV2Norge": "TV2 Norge er Norges største kommercielle tv-kanal",
"ProSieben":"Pro 7 satser på underholdning med internationale topserier, film, shows, hurtige nyheder og diverse magasiner.",
"Rai 1":"Rai Uno sender underholdning, nyheder, sport og film 24 timer i døgnet.",
"See":"See byder på originalt dansk indhold, populære serier og masser af sport.",
"TLC":"På TLC er der både tid til refleksion, gråd og grin. Her finder du inspirerende og autentiske programmer med humor og kant.",
"VH1":"VH1 er en musikkanal, der sender musikvideoer døgnet rundt. Vær opdateret på de seneste hitlister og se med, når stjernerne præsenterer deres helt egen top 10.",
"V sport golf":"V Sport Golf sender masser af live-golf året rundt med danske kommentatorer.",
"Viasat Explore":"Viasat Explore udfordrer din eventyrlyst. Kanalen er garant for eventyr og ekstreme oplevelser. Viasat Explore sender en god blanding af dybdeborende dokumentarserier og udfordrende ekspeditioner.",
"Viasat History":"Hvis du er vild med historiens vingesus og dokumentarer om fordums tid, kan du booste din viden med Viasat History.",
"Viasat Nature":"Viasat Nature viser spændende og lærerige dokumentarer samt natur- og dyreudsendelser. Bliv klog på dyrenes adfærd og naturens mange hemmeligheder med Viasat Nature.",
"DiscoveryScience":"Kanalen for den nysgerrige seer, der søger svar på universelle spørgsmål i prisvindende dokumentarer og serier om videnskab og teknologi.",
"ESC/ESC1":"Generel underholdningskanal fra Egypten, der indeholder et væld af tv-underholdning.",
"Extreme Sport":"Her er tempoet højt. Kanalen der giver dig det mest nervepirrende og inspirerende inden for livsstil, eventyr og ekstremsport.",
"HRT-TV1":"En kroatisk kanal der sender underholdning, dokumentarer, undervisningsprogrammer, komedieserier, filmer og talkshow.",
"MTVClub":"MTV Club er en musikkanal, der helt og holdent er tilegnet dansemusik. Du får drum’n’bass, trance, garage, house og fest i en fantastisk dansepakke.",
"MTVLive":"MTV Live er en musikbaseret underholdningskanal, som tager udgangspunkt i legendariske, klassiske og splinternye MTV og Vh1 programmer.",
"Polonia":"Følg med i nyheder og tv-programmer direkte fra Polen.",
"Sport Live":"SPORT LIVE er en dansk sportskanal, som sender live mindst 10 timer om dagen. Kanalen sender hestevæddeløb fra hele verden og har et dagligt studieprogram med eksperter. Derudover sender SPORT LIVE fra en række danske sportsbegivenheder."
}]

beskrivelser.sort();

let left = document.querySelector(".left");
let middleleft=document.querySelector(".middleleft");
let middleright=document.querySelector(".middleright");
let right = document.querySelector(".right");

//Norlys knap
Norlysknap=document.querySelector("#Norlys");
let clickedN=false;
NorlysKanaler=["ZDF","SVT1","NRK1","TV4 Sverige","SVT2","ARD","TV2Norge","NDR"];
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

//Stofa knap
Stofaknap=document.querySelector("#Stofa");
let clickedS=false;
StofaKanaler=["TV2","TV2Charlie","TV3","TV3Puls","Kanal4","Kanal5","DK4","Folketinget","NRK1","NRK2","TV2Norge","SVT1","SVT2","TV4 Sverige","ZDF","NDR","Sport Live"];
Stofaknap.addEventListener("click",function(){
    let kan=document.getElementsByName("Kanal");
    if(clickedS==true){
        clickedS=false;
        for (let k of kan){
            if (StofaKanaler.includes(k.value)){
                k.checked=false;
            }
        }}
    else{
        clickedS=true;
        for (let k of kan){
            if (StofaKanaler.includes(k.value)){
                k.checked=true;
            }
        }
}
})

//TV2 knap
TV2knap=document.querySelector("#TV2Knap");
let clicked=false;
TV2knap.addEventListener("click",function(){
    let kan=document.getElementsByName("Kanal");
    if(clicked==true){
        clicked=false;
        for (let k of kan){
            if (k.value.includes("TV2")){
                if(k.value.includes("TV2Play")||k.value.includes("TV2Norge")){

                }
                else{
                k.checked=false;}
            }
        }}
    else{
        clicked=true;
        for (let k of kan){
            if (k.value.includes("TV2")){
                if(k.value.includes("TV2Play")||k.value.includes("TV2Norge")){

                }
                else{
                    k.checked=true;
                }
                
            }

        }
}
})

//TV3 knap
TV3knap=document.querySelector("#TV3Knap");
let clicked3=false;
TV3knap.addEventListener("click",function(){
    let kan=document.getElementsByName("Kanal");
    if(clicked3==true){
        clicked3=false;
        for (let k of kan){
            if (k.value.includes("TV3")){
                k.checked=false;
            }
        }}
    else{
        clicked3=true;
        for (let k of kan){
            if (k.value.includes("TV3")){
                k.checked=true;
            }

        }
}
})

//Discovery knap
DisKnap=document.querySelector("#DiscoveryKnap");
let clickeddis=false;
let diskanaler=["Kanal4","Kanal5","6eren","Canal9","TLC","DiscoveryChannel","Animalplanet","Eurosport1","Eurosport2","DiscoveryScience","ID-InvestegationDiscovery"]
DisKnap.addEventListener("click",function(){
    let kan=document.getElementsByName("Kanal");
    if(clickeddis==true){
        clickeddis=false;
        for (let k of kan){
            if (diskanaler.includes(k.value)){
                k.checked=false;
            }
        }}
    else{
        clickeddis=true;
        for (let k of kan){
            if (diskanaler.includes(k.value)){
                k.checked=true;
            }

        }
}
})

//Ryd knap
let ryd = document.querySelector("#ryd");
ryd.addEventListener("click",function(){
    let kan=document.getElementsByName("Kanal");
        for (let k of kan){
                k.checked=false;
            }
})

//Tilføj kanaler
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
        hiddeninfo.innerHTML="<span class='bigtext'>"+prettynames[i]+"</span>"+":<br>"+beskrivelser[0][names[i]];
    }
    else{
        hiddeninfo.innerHTML="<span class='bigtext'>"+prettynames[i]+"</span>"+":<br> Info her";
    }
    let mycheck = document.createElement("input");
    mycheck.setAttribute("type","checkbox");
    mycheck.setAttribute("name","Kanal");
    mycheck.setAttribute("value",names[i]);
    mycheck.setAttribute("id","checkbox");
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(prettynames[i]));
    label.classList.add("is-size-5");
    label.setAttribute("id","navn");
    //label.style.setProperty("font-size","17px");
    label.addEventListener("click",function(){
        if(mycheck.checked==true){
            mycheck.checked=false;}
        else{
            mycheck.checked=true;
        }
    })
    let mellem= document.createElement("br");
    side.appendChild(infohover);
    side.appendChild(hiddeninfo);
    side.appendChild(mycheck);
    side.appendChild(label);
    side.appendChild(mellem);
    mycheck.classList.add("mycheck");
    mellem.classList.add("mellem");

}

//Streaming
let stream=["TV2PlayBasis","TV2PlayFavoritSport","TV2PlayFavoritSport (Uden reklamer)","Disney+","HBOMax","NetflixStandard","NetflixPremium","NordiskFilm+","CMore","SkyShowtime","NationalGeographicNow","Discovery+underholdning","Discovery+Sport","Viaplay (Film og Serier)","Viaplay Total"];
stream.sort();
let streampretty=["TV2 PLAY Basis","TV2 PLAY Favorit+Sport","TV2 PLAY Favorit+Sport (u. reklamer)","Disney+","HBO Max","Netflix Standard","Netflix Premium","Nordisk Film+","C More","SkyShowtime","National Geographic Now","Discovery+ Underholdning","Discovery+ Sport","Viaplay (Film og Serier)","Viaplay Total"];
streampretty.sort();
let streamcol1 = document.querySelector(".streamcol1");
let streamcol2 = document.querySelector(".streamcol2");
let streamcol3 = document.querySelector(".streamcol3");
let streamcol4 = document.querySelector(".streamcol4");

for (let i=0;i<stream.length;i++) {
    let side=streamcol1;
    if (i>=stream.length/4){
        if(i>=3*(stream.length/4)){
            side=streamcol4;
        }
        else{
            if(i>=2*(stream.length/4)){
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
    label.appendChild(document.createTextNode(streampretty[i]));
    label.setAttribute("id","navn");
    label.classList.add("is-size-5");
    //label.style.setProperty("font-size","17px");
    label.addEventListener("click",function(){
        if(mycheck.checked==true){
            mycheck.checked=false;}
        else{
            mycheck.checked=true;
        }
    })
    let mellem= document.createElement("br");
    side.appendChild(mycheck);
    side.appendChild(label);
    side.appendChild(mellem);
    mycheck.classList.add("mycheck");
    mellem.classList.add("mellem");

}

//UDREGNER PRISER
let streampris=[{"TV2PlayBasis":49,"TV2PlayFavoritSport":189,"TV2PlayFavoritSport (Uden reklamer)":219,"Disney+":79,"HBOMax":79,"NetflixStandard":114,"NetflixPremium":149,"NordiskFilm+":49,"CMore":99,"SkyShowtime":69,"NationalGeographicNow":"Løsning ikke mulig","Discovery+underholdning":79,"Discovery+Sport":129,"Viaplay (Film og Serier)":129,"Viaplay Total":449}];
streampris.sort();

//Norlys Vælg Frit
let NVFfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:49,TV2Charlie:39,TV2Fri:39,TV2News:39,TV2Sport:39,TV2SportX:39,TV2Zulu:39,TV3:49,TV3Max:39,"TV3 +":99,TV3Puls:39,TV3Sport:49,Kanal4:39,Kanal5:49,'6eren':39,Canal9:39,DiscoveryChannel:29,DK4:29,NationalGeographic:29,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:29,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:29,DisneyJunior:29,Euronews:"Løsning ikke mulig",Eurosport1:29,Eurosport2:39,"ID-InvestegationDiscovery":29,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:29,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:39,TLC:29,VH1:29,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":"Løsning ikke mulig"}];
    let stream=[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":"Løsning ikke mulig","Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let NVF=0;
    let NVFstream=0;
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
        
        let basepris=109+NVF;
        if(isNaN(NVF)){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")"
        }
        if(NVFstream==0){
            return NVF+109+" kr.";
        }
        else{
            return NVFstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        }

//Norlys Vælg 8
let NVOfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Zulu:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:1,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":1,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let NVO=0;
    let NVOstream=0;
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
                                    console.log("Her");
                                    NVO=NVO+st[s];
                                }
                            }
                        }
                    }
                }
        if(NVO=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NVO>8){
                return "Mere end 8 valgt"
            }
            if(NVOstream==0){
                return 469+" kr."+" ("+NVO+" ud af 8 kanaler valgt)";
            }
            else{
                return NVOstream+469+" kr. (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+469+" kr. (ekskl. "+streamlist.join(", ")+") ("+NVO+" ud af 8 kanaler valgt)";
                 }
            }
} 

//Norlys Vælg Alt
let NVAfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Zulu:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:79,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":49,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":1}];
    kanaler.sort();
    stream.sort();
    let NVA=0;
    let NVAstream=0;
    let HBO=0;
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
        let basepris=729+HBO;
        if(NVA=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.: <br>("+ikkem.join(", ")+")";
        }
        if(NVAstream==0){
            return 729+HBO+" kr.";
        }
        else{
            return NVAstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
    }

// stofa pakkeløsning: lille=0,mellem=1,stor=2 ellers løsning ikke mulig
let SPLfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Zulu:1,TV3:0,TV3Max:2,"TV3 +":1,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':1,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:2,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:2,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:2,DisneyChannel:1,DisneyJunior:2,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":2,Mezzo:"Løsning ikke mulig",MTV:2,MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:2,NDR:0,"Nick jr.":2,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:2,"V sport golf":2,"Viasat Explore":2,"Viasat History":2,"Viasat Nature":2,DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":0}];
    let stream=[{TV2PlayBasis:2,TV2PlayFavoritSport:2,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":2,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":2}];
    kanaler.sort();
    stream.sort();
    let SPL=0;
    let SPLstream=0;
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

        pakkepris=[274,529,779]
        pakke=[" (lille pakke)"," (mellem pakke)", " (stor pakke)"]
        if(SPL=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(SPLstream==0){
                return pakkepris[SPL]+" kr." +pakke[SPL];
            }
            else{
                return SPLstream+pakkepris[SPL]+" kr. (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+pakkepris[SPL]+" kr. (ekskl. "+streamlist.join(", ")+")";
            }
    }
}

//Stofa Vælg Selv
let SVSfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Zulu:1,TV3:0,TV3Max:2,"TV3 +":3,TV3Puls:0,TV3Sport:3,Kanal4:0,Kanal5:0,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:1,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:1,"Rai 1":1,See:2,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":1,"Extreme Sport":1,"HRT-TV1":1,MTVClub:1,MTVLive:1,Polonia:1,"Sport Live":1}];
    let stream=[{TV2PlayBasis:2,TV2PlayFavoritSport:8,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:4,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":3,CMore:5,SkyShowtime:"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":8,"Viaplay (Film og Serier)":6,"Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let SVS=0;
    let SVSstream=0;
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
    priser=[469,559,629];
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
    let kanaler=[{TV2:3,TV2Charlie:2,TV2Fri:2,TV2News:2,TV2Sport:3,TV2SportX:3,TV2Zulu:2,TV3:3,TV3Max:3,"TV3 +":4,TV3Puls:2,TV3Sport:3,Kanal4:"Løsning ikke mulig",Kanal5:"Løsning ikke mulig",'6eren':"Løsning ikke mulig",Canal9:"Løsning ikke mulig",DiscoveryChannel:"Løsning ikke mulig",DK4:1,NationalGeographic:1,'3Sat':3,AlJazeera:1,Animalplanet:"Løsning ikke mulig",ARD:0,ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:2,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:"Løsning ikke mulig",Eurosport2:"Løsning ikke mulig","ID-InvestegationDiscovery":"Løsning ikke mulig",Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":"Løsning ikke mulig",ProSieben:1,"Rai 1":1,See:3,TLC:"Løsning ikke mulig",VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:19,TV2PlayFavoritSport:19,"TV2PlayFavoritSport (Uden reklamer)":19,"Disney+":7,HBOMax:7,NetflixStandard:11,NetflixPremium:15,"NordiskFilm+":4,CMore:9,SkyShowtime:6,NationalGeographicNow:2,"Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":10,"Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let YouP=0;
    let YouPstream=0;
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
    priser=[299,399,499,599];
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
            let p=(YouP-40)*10;
            return priser[3]+p+" kr."+ " (40+ point)"+" ("+YouP+" point brugt)"
        }
    }
    else{
        if (YouP<=10){
            return priser[0]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[0]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=20){
            return priser[1]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[1]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=30){
            return priser[2]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[2]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=40){
            return priser[3]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[3]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        else{
            let p=(YouP-40)*10;
            let basepris=priser[3]+p;
            return basepris+YouPstream+" kr."+ " (40+ point)"+" ("+YouP+" point brugt)" +" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
    }
    
}

//Allente Stream TV: Basic=0,Standard=1,Premium=2
let AllStreamFunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:0,TV2News:0,TV2Sport:2,TV2SportX:2,TV2Zulu:0,TV3:0,TV3Max:2,"TV3 +":0,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':0,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:1,NDR:"Løsning ikke mulig","Nick jr.":1,Nickelodeon:1,NRK1:"Løsning ikke mulig",ZDF:"Løsning ikke mulig",SVT1:"Løsning ikke mulig",Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":"Løsning ikke mulig",SVT2:"Løsning ikke mulig","TV2Norge":"Løsning ikke mulig",ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:"Løsning ikke mulig","V sport golf":"Løsning ikke mulig","Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":2}];
    let stream=[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig",NationalGeographicNow:1,"Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":0,"Viaplay Total":2}];
    let streamtilvalgnavn=["Viaplay (Film og Serier)","HBOMax","Discovery+underholdning","Discovery+Sport","CMore","SkyShowtime"];
    let streamtilvalg=[{"Viaplay (Film og Serier)":79,HBOMax:69,"Discovery+underholdning":79,"Discovery+Sport":129,CMore:99,SkyShowtime:59}];
    let ekstrastreaming=[]
    kanaler.sort();
    stream.sort();
    let AS=0;
    let ASstream=0;
    let streamekstra=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||AS=="Løsning ikke mulig"){
                                AS="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(AS<kanal[k]){
                                AS=kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"||AS=="Løsning ikke mulig"){
                                if(streamtilvalgnavn.includes(s)){
                                    streamekstra=streamekstra+streamtilvalg[0][s];
                                    ekstrastreaming.push(s);
                                }
                                else{
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
                            }
                            if(AS<st[s]){
                                AS=st[s];
                            }
                        }
                    }
                }
        let ekstratekst=""
        if(!ekstrastreaming.length==0){
            ekstratekst="(inkl. tilvalgspakke: "+ekstrastreaming.join(", ")+")";
        }

        pakkepris=[429,549,659]
        pakke=[" (Basic pakke)"," (Standard pakke)", " (Premium pakke)"]
        if(AS=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(ASstream==0){
                let prisAll=pakkepris[AS]+streamekstra;
                return prisAll+" kr." +pakke[AS]+ekstratekst;
            }
            else{
                let prisAll=pakkepris[AS]+streamekstra;
                return prisAll+ASstream+" kr."+pakke[AS]+" "+ekstratekst+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+prisAll+" kr."+" (ekskl. "+streamlist.join(", ")+")"
            }
    }
}

//Allente Parabol TV
let AllParaFunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:0,TV2News:0,TV2Sport:2,TV2SportX:2,TV2Zulu:0,TV3:0,TV3Max:2,"TV3 +":0,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':0,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:1,Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:1,MTV80s:1,MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:1,NDR:"Løsning ikke mulig","Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:"Løsning ikke mulig",SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":"Løsning ikke mulig",ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":2}];
    let stream=[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:1,NationalGeographicNow:1,"Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":0,"Viaplay Total":2}];
    let streamtilvalgnavn=["Viaplay (Film og Serier)","HBOMax","Discovery+underholdning","Discovery+Sport","CMore","SkyShowtime"];
    let streamtilvalg=[{"Viaplay (Film og Serier)":79,HBOMax:69,"Discovery+underholdning":79,"Discovery+Sport":129,CMore:99,SkyShowtime:59}];
    let ekstrastreaming=[];
    kanaler.sort();
    stream.sort();
    let AP=0;
    let APstream=0;
    let streamekstra=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||AP=="Løsning ikke mulig"){
                                AP="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(AP<kanal[k]){
                                AP=kanal[k];
                            }
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
        if(!ekstrastreaming.length==0){
            ekstratekst="(inkl. tilvalgspakke: "+ekstrastreaming.join(", ")+")";
        }

        pakkepris=[469,589,709];
        pakke=[" (Basic pakke)"," (Standard pakke)", " (Premium pakke)"];
        if(AP=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(APstream==0){
                let prisAll=pakkepris[AP]+streamekstra;
                return prisAll+" kr." +pakke[AP]+ekstratekst;
            }
            else{
                let prisAll=pakkepris[AP]+streamekstra;
                return prisAll+APstream+" kr."+pakke[AP]+" "+ekstratekst+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+prisAll+" kr."+" (ekskl. "+streamlist.join(", ")+")"
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
            let NVO=NVOfunc();
            let NVA=NVAfunc();

            let minpris=Number.MAX_VALUE;
            let expr="([0-9]+) .*"
            Udbyderliste=[{name:"NVF",val:NVF},{name:"NVO",val:NVO},{name:"NVA",val:NVA}];
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
                    if (u.name=="NVO"){
                        NVO="<span class=cheap>"+NVO+"</span>";
                    }
                    if (u.name=="NVA"){
                        NVA="<span class=cheap>"+NVA+"</span>";
                    }
                }
            }
    
            pris.push("Norlys Vælg Frit: ".bold()+NVF);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg 8: ".bold()+NVO);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg Alt: ".bold()+NVA);
            if (values.length==0){
                swal.fire("Ingen kanaler valgt");
            }
            else{
                swal.fire({title:"Priser:",html:'<div class="align-left">'+pris.join("")+'</div>',customClass:"swall_wide"});
            };
            pris=[];
            values=[];
        });    

let streamingpriser=[{"C more":99,"Discovery+ Underholdning (m. reklamer)":49,"Discovery+ Underholdning":79,"Discovery+ Underholdning + Live":99,"Discovery+ Sport":129,"Disney+ (Årspris: 790 kr.)":79,"HBO Max (Årspris: 599 kr.)":79,"Netflix Basis HD 1 enhed": 79,"Netflix Standard":114,"Netflix Premium":149,"Nordisk Film+":49,"SkyShowtime":69,"TV2 Play Basis (m. reklamer)":49,"TV2 Play Basis (u. reklamer)":79,"TV2 Play Favorit (m. reklamer)":129,"TV2 Play Favorit (u. reklamer)": 159,"TV2 Play Favorit+Sport (m. reklamer)":189,"TV2 Play Favorit+Sport (u. reklamer)":219,"Viaplay (Film og Serier)":129,"Viaplay Total": 449}];
streamingpriser.sort();

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

