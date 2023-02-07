let names=["TV2","TV2Charlie","TV2Fri","TV2News","TV2Sport","TV2SportX","TV2Zulu","TV3","TV3Max","TV3Plus","TV3Puls","TV3Sport","Kanal4","Kanal5","6eren","Canal9","Discoverychannel","DK4","NationalGeographic","3Sat","AlJazeera","Animalplanet","ARD","ARTE","BBCBrit","BBCEarth","BBCWorldNews","BloombergNews","BlueHustler","Boomerang","CartoonNetwork","CBSReality","CNBC","CNN","DisneyChannel","DisneyJunior","Euronews","Eurosport1","Eurosport2","France2","History","History2","ID-InvestegationDiscovery","Mezzo","MotorvisionTV","MTV","MTV80s","MTV90s","MTVHits","MyZenTV","NationalGeographicWild","NDR","Nick jr.","Nicktoons","Nickelodeon","NRK1"];
names.sort();
let prettynames=["TV2","TV2 Charlie","TV2 Fri","TV2 News","TV2 Sport","TV2 SportX","TV2 Zulu","TV3","TV3 MAX","TV3+","TV3 Puls","TV3 Sport","Kanal 4","Kanal 5","6'eren","Canal 9","Discovery Channel","DK4","National Geographic","3Sat","Al Jazeera","Animal Planet","ARD","ARTE","BBC Brit","BBC Earth","BBC World News","Bloomberg News","Blue Hustler","Boomerang","Cartoon Network","CBS Reality","CNBC","CNN","Disney Channel","Disney Junior","Euronews","Eurosport 1","Eurosport 2","France 2","History","History 2","ID-Investegation Discovery","Mezzo","Motorvision TV","MTV","MTV 80s","MTV 90s","MTV Hits","MyZen TV","National Geographic Wild","NDR","Nick Jr.","Nicktoons","Nickelodeon","NRK1"];
prettynames.sort();

let left = document.querySelector(".left");
let middleleft=document.querySelector(".middleleft");
let middleright=document.querySelector(".middleright");
let right = document.querySelector(".right");

//TV2 knap
TV2knap=document.querySelector("#TV2Knap");
let clicked=false;
TV2knap.addEventListener("click",function(){
    let kan=document.getElementsByName("Kanal");
    if(clicked==true){
        clicked=false;
        for (let k of kan){
            if (k.value.includes("TV2")){
                if(k.value.includes("TV2Play")){

                }
                else{
                k.checked=false;}
            }
        }}
    else{
        clicked=true;
        for (let k of kan){
            if (k.value.includes("TV2")){
                if(k.value.includes("TV2Play")){

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
let diskanaler=["Kanal4","Kanal5","6eren","Canal9","TLC","Discoverychannel","Animalplanet","Eurosport1","Eurosport2","DiscoveryScience","ID-InvestegationDiscovery"]
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
    
    let mycheck = document.createElement("input");
    mycheck.setAttribute("type","checkbox");
    mycheck.setAttribute("name","Kanal");
    mycheck.setAttribute("value",names[i]);
    mycheck.setAttribute("id","checkbox");
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(prettynames[i]));
    label.setAttribute("id","navn");
    label.style.setProperty("font-size","17px");
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

//Streaming
let VoresStream=["NordiskFilm+","HBOMax","TV2PlayBasis","Viaplay","Discovery+underholdning","TV2PlayFavoritSport","CMore","Discovery+Sport"]

let stream=["TV2PlayBasis","TV2PlayFavoritSport","TV2PlayFavoritSport (Uden reklamer)","Disney+","HBOMax","NetflixStandard","NetflixPremium","NordiskFilm+","CMore","SkyShowtime","Nick+","NationalGeographicNow","Discovery+underholdning","Discovery+Sport","Viaplay"];
stream.sort();
let streampretty=["TV2 PLAY Basis","TV2 PLAY Favorit+Sport","TV2 PLAY Favorit+Sport (u. reklamer)","Disney+","HBO Max","Netflix Standard","Netflix Premium","Nordisk Film+","C More","SkyShowtime","Nick+","National Geographic Now","Discovery+ Underholdning","Discovery+ Sport","Viaplay"];
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
    label.style.setProperty("font-size","17px");
    if (!VoresStream.includes(mycheck.value)){
        label.style.setProperty("color","hsl(360, 100%, 40%)")
    }
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

//Norlys Vælg Frit
let NVFfunc=function(){
    let ikkem=[];
    let kanaler=[{TV2:49,TV2Charlie:39,TV2Fri:39,TV2News:39,TV2Sport:39,TV2SportX:39,TV2Zulu:39,TV3:49,TV3Max:39,TV3Plus:99,TV3Puls:39,TV3Sport:49,Kanal4:39,Kanal5:49,'6eren':39,Canal9:39,Discoverychannel:29,DK4:29,NationalGeographic:29,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:29,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BloombergNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNBC:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:29,DisneyJunior:29,Euronews:"Løsning ikke mulig",Eurosport1:29,Eurosport2:39,France2:"Løsning ikke mulig",History:"Løsning ikke mulig",History2:"Løsning ikke mulig","ID-InvestegationDiscovery":29,Mezzo:"Løsning ikke mulig",MotorvisionTV:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",MyZenTV:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:"Løsning ikke mulig","Nick jr.":"Løsning ikke mulig",Nicktoons:"Løsning ikke mulig",Nickelodeon:29,NRK1:0}];
    let stream=[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Nick+":"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig",Viaplay:"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let NVF=0;
    let NVFbackup=0;
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
                            if(st[s]=="Løsning ikke mulig"||NVF=="Løsning ikke mulig"){
                                NVF="Løsning ikke mulig";
                                if(st[s]=="Løsning ikke mulig"){
                                    ikkem.push(s);
                                }
                            }
                            else{
                                NVFbackup=NVF+st[s];
                                NVF=NVF+st[s];
                            }
                            
                            }
                        }
                    }
        let streampris=0
        popped=[]
        for (let ik of ikkem){
            if (Object.keys(stream[0]).includes(ik)){
                let idx=ikkem.indexOf(ik);
                let idxstream=Object.keys(stream[0]).indexOf(ik);
                let pretty=streampretty[idxstream];
                function isPretty(pret){
                    let pretshort=pret.slice(0,pretty.length)
                    return pretshort===pretty;
                }
                let streamname=Object.keys(streamingpriser[0]).find(isPretty)
                streampris=streampris+streamingpriser[0][streamname];
                popped.push(ikkem.pop(idx));
            }
        }
        if(isNaN(NVF)){
            if (!popped==[]){
                return NVFbackup+109+streampris+" kr. <br>"+"inkl. seperat køb af:"+ popped.join(",");
            }
            else{
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")"}
        }
        return NVF+109+" kr.";
        }

//Norlys Vælg 8
let NVOfunc=function(){
    let ikkem=[];
    let kanaler=[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Zulu:1,TV3:1,TV3Max:1,TV3Plus:1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,Discoverychannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BloombergNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNBC:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:1,Eurosport2:1,France2:"Løsning ikke mulig",History:"Løsning ikke mulig",History2:"Løsning ikke mulig","ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MotorvisionTV:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",MyZenTV:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:"Løsning ikke mulig","Nick jr.":"Løsning ikke mulig",Nicktoons:"Løsning ikke mulig",Nickelodeon:1,NRK1:0}];
    let stream=[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:1,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":0,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Nick+":"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig",Viaplay:1}];
    kanaler.sort();
    stream.sort();
    let NVO=0;
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
                            if(st[s]=="Løsning ikke mulig"||NVO=="Løsning ikke mulig"){
                                NVO="Løsning ikke mulig";
                                if(st[s]=="Løsning ikke mulig"){
                                    ikkem.push(s);
                                }
                            }
                            else{
                                NVO=NVO+st[s];
                            }
                        }
                    }
                }
        if(NVO=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")";
        }
        if(NVO>8){
            return "Mere end 8 valgt"
        }
        else{
        return 439+" kr.";
    }
}

//Norlys Vælg Alt
let NVAfunc=function(){
    let ikkem=[];
    let kanaler=[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Zulu:1,TV3:1,TV3Max:1,TV3Plus:1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,Discoverychannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BloombergNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNBC:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:1,Eurosport2:1,France2:"Løsning ikke mulig",History:"Løsning ikke mulig",History2:"Løsning ikke mulig","ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MotorvisionTV:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",MyZenTV:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:"Løsning ikke mulig","Nick jr.":"Løsning ikke mulig",Nicktoons:"Løsning ikke mulig",Nickelodeon:1,NRK1:0}];
    let stream=[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:79,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":1,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Nick+":"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig",Viaplay:1}];
    kanaler.sort();
    stream.sort();
    let NVA=0;
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
                            if(st[s]=="Løsning ikke mulig"||NVA=="Løsning ikke mulig"){
                                NVA="Løsning ikke mulig";
                                if (st[s]=="Løsning ikke mulig"){
                                    ikkem.push(s);}
                            }
                            if(s=="HBOMax"){
                                HBO=st[s];
                            }
                        }
                    }
                }
        if(NVA=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.: <br>("+ikkem.join(", ")+")";
        }
        return 629+HBO+" kr.";
    }

// stofa pakkeløsning: lille=0,mellem=1,stor=2 ellers løsning ikke mulig
let SPLfunc=function(){
    let ikkem=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Zulu:1,TV3:0,TV3Max:2,TV3Plus:1,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':1,Canal9:2,Discoverychannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:2,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BloombergNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:2,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNBC:"Løsning ikke mulig",CNN:2,DisneyChannel:1,DisneyJunior:2,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,France2:"Løsning ikke mulig",History:"Løsning ikke mulig",History2:"Løsning ikke mulig","ID-InvestegationDiscovery":2,Mezzo:"Løsning ikke mulig",MotorvisionTV:"Løsning ikke mulig",MTV:2,MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",MyZenTV:"Løsning ikke mulig",NationalGeographicWild:2,NDR:0,"Nick jr.":2,Nicktoons:"Løsning ikke mulig",Nickelodeon:1,NRK1:0}];
    let stream=[{TV2PlayBasis:2,TV2PlayFavoritSport:2,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":2,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Nick+":"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":"Løsning ikke mulig",Viaplay:"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let SPL=0;
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
                            if(st[s]=="Løsning ikke mulig"||SPL=="Løsning ikke mulig"){
                                SPL="Løsning ikke mulig";
                                if (st[s]=="Løsning ikke mulig"){
                                    ikkem.push(s);}
                            }
                            if(SPL<st[s]){
                                SPL=st[s];
                            }
                        }
                    }
                }

        pakkepris=[274,469,629]
        pakke=[" (lille pakke)"," (mellem pakke)", " (stor pakke)"]
        if(SPL=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem+")";
        }
        else{
        return pakkepris[SPL]+" kr." +pakke[SPL];
    }
}

//Stofa Vælg Selv
let SVSfunc=function(){
    ikkem=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Zulu:1,TV3:0,TV3Max:2,TV3Plus:2,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':1,Canal9:2,Discoverychannel:1,DK4:0,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:1,ARD:0,ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BloombergNews:"Løsning ikke mulig",BlueHustler:1,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNBC:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:2,France2:"Løsning ikke mulig",History:"Løsning ikke mulig",History2:"Løsning ikke mulig","ID-InvestegationDiscovery":1,Mezzo:1,MotorvisionTV:"Løsning ikke mulig",MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,MyZenTV:"Løsning ikke mulig",NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nicktoons:"Løsning ikke mulig",Nickelodeon:1,NRK1:0}];
    let stream=[{TV2PlayBasis:2,TV2PlayFavoritSport:8,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:5,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":3,CMore:5,SkyShowtime:"Løsning ikke mulig","Nick+":"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":8,Viaplay:5}];
    kanaler.sort();
    stream.sort();
    let SVS=0;
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
                    if(st[s]=="Løsning ikke mulig"||SVS=="Løsning ikke mulig"){
                        SVS="Løsning ikke mulig";
                        if(st[s]=="Løsning ikke mulig"){
                            ikkem.push(s);
                        }
                    }
                    else{
                        SVS=SVS+st[s];
                    }
                    
                    }
                }
            }
    if(isNaN(SVS)){
        return "Løsning ikke mulig pga.:<br>("+ikkem+")";
    }
    priser=[469,559,639];
    if (SVS<=10){
        return priser[0]+" kr."+" (10 point)";
    }
    if (SVS<=20){
        return priser[1]+" kr."+" (20 point)";
    }
    if (SVS<=30){
        return priser[2]+" kr."+" (30 point)";
    }
    else{
        return "Mere end 30 point valgt: ("+SVS+" point)";
    }
}

//Yousee Play 10=299kr.,20=399kr.,30=499kr., 40=599 kr.,+1 point =10kr. 
let YouPfunc=function(){
    ikkem=[];
    let kanaler=[{TV2:3,TV2Charlie:2,TV2Fri:2,TV2News:2,TV2Sport:3,TV2SportX:3,TV2Zulu:2,TV3:3,TV3Max:3,TV3Plus:4,TV3Puls:2,TV3Sport:3,Kanal4:"Løsning ikke mulig",Kanal5:"Løsning ikke mulig",'6eren':"Løsning ikke mulig",Canal9:"Løsning ikke mulig",Discoverychannel:"Løsning ikke mulig",DK4:1,NationalGeographic:1,'3Sat':3,AlJazeera:1,Animalplanet:"Løsning ikke mulig",ARD:0,ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BloombergNews:1,BlueHustler:2,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNBC:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:"Løsning ikke mulig",Eurosport2:"Løsning ikke mulig",France2:1,History:1,History2:1,"ID-InvestegationDiscovery":"Løsning ikke mulig",Mezzo:1,MotorvisionTV:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,MyZenTV:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nicktoons:1,Nickelodeon:1,NRK1:0}];
    let stream=[{TV2PlayBasis:19,TV2PlayFavoritSport:19,"TV2PlayFavoritSport (Uden reklamer)":19,"Disney+":7,HBOMax:7,NetflixStandard:11,NetflixPremium:15,"NordiskFilm+":4,CMore:9,SkyShowtime:6,"Nick+":3,NationalGeographicNow:2,"Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig",Viaplay:10}];
    kanaler.sort();
    stream.sort();
    let YouP=0;
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
                        if(st[s]=="Løsning ikke mulig"||YouP=="Løsning ikke mulig"){
                            YouP="Løsning ikke mulig";
                            if(st[s]=="Løsning ikke mulig"){
                                ikkem.push(s);
                            }
                        }
                        else{
                            YouP=YouP+st[s];
                        }
                        
                        }
                    }
                }
    if(isNaN(YouP)){
        return "Løsning ikke mulig pga.:<br>("+ikkem+")";
    }
    priser=[299,399,499,599];
    if (YouP<=10){
        return priser[0]+" kr."+" (10 point)";
    }
    if (YouP<=20){
        return priser[1]+" kr."+" (20 point)";
    }
    if (YouP<=30){
        return priser[2]+" kr."+" (30 point)";
    }
    if (YouP<=40){
        return priser[3]+" kr."+" (40 point)";
    }
    else{
        let p=(YouP-40)*10;
        return priser[3]+p+" kr."+ " (40+ point)"
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
            let SPL=SPLfunc();
            let SVS=SVSfunc();
            let YouP=YouPfunc();
            let NVO=NVOfunc();
            let NVA=NVAfunc();

            let minpris=Number.MAX_VALUE;
            let expr="([0-9]+) .*"
            Udbyderliste=[{name:"NVF",val:NVF},{name:"SPL",val:SPL},{name:"SVS",val:SVS},{name:"YouP",val:YouP},{name:"NVO",val:NVO},{name:"NVA",val:NVA}];
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
                    if (u.name=="SPL"){
                        SPL="<span class=cheap>"+SPL+"</span>"
                    }
                    if (u.name=="SVS"){
                        SVS="<span class=cheap>"+SVS+"</span>";
                    }
                    if (u.name=="YouP"){
                        YouP="<span class=cheap>"+YouP+"</span>";
                    }
                    if (u.name=="NVO"){
                        NVO="<span class=cheap>"+NVO+"</span>";
                    }
                    if (u.name=="NVA"){
                        NVO="<span class=cheap>"+NVA+"</span>";
                    }
                }
            }
    
            pris.push("Norlys Vælg Frit: ".bold()+NVF);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg 8: ".bold()+NVO);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg Alt: ".bold()+NVA);
            pris.push("<br>");
            pris.push("<br>"+"Stofa pakkeløsning: ".bold()+SPL);
            pris.push("<br>");
            pris.push("<br>"+"Stofa Vælg Selv: ".bold()+SVS);
            pris.push("<br>");
            pris.push("<br>"+"YouSee Play: ".bold()+YouP);
            if (values.length==0){
                swal.fire("Ingen kanaler valgt");
            }
            else{
                swal.fire({title:"Priser:",html:pris.join("")});
            };
            pris=[];
            values=[];
        });    

let streamingpriser=[{"C more":99,"Discovery+ Underholdning (m. reklamer)":49,"Discovery+ Underholdning":79,"Discovery+ Underholdning + Live":99,"Discovery+ Sport":129,"Disney+ (Årspris: 790 kr.)":79,"HBO Max (Årspris: 599 kr.)":79,"Netflix Basis HD 1 enhed": 79,"Netflix Standard":114,"Netflix Premium":149,"Nordisk Film+":49,"SkyShowtime":69,"TV2 Play Basis (m. reklamer)":49,"TV2 Play Basis (u. reklamer)":79,"TV2 Play Favorit (m. reklamer)":129,"TV2 Play Favorit (u. reklamer)": 159,"TV2 Play Favorit+Sport (m. reklamer)":189,"TV2 Play Favorit+Sport (u. reklamer)":219,"Viaplay Basic":119,"Viaplay Total": 449}];
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


            