
 oyunlar = {

   MMO_RPG:["Nostale","Metin2","Knight Online"],
   Fps:["Oustlast","Call of Duty","Battlefield"],
   KapananOyunlar:["Goley","Cengizhan2","Metin2"],
   Moba:["League Of Legends","Dota2"]
}



function oyunoner(){

    oner=prompt('Oyun tavsiyelerine hazır mısınız? Evet ? Hayır?')
    

    if(oner=="evet" || oner=="Evet" || oner=="eVet" || oner=="evEt" ||oner=="eveT" || oner=="EVET"){

        oner2=prompt('Ne tarz oyun önermemizi istersiniz 1-MMO 2-Fps 3-Moba') 

        if(oner2==1){

            alert(`${oyunlar.MMO_RPG}`)
        }

        else if(oner2==2){

            alert(`${oyunlar.Fps}`)
        }

        else if(oner2==3){

            alert(`${oyunlar.Moba}`)
        }

        else{
alert('Hatalı seçim yaptınız tekrar deneyiniz.')
        }
    }

    else{
        alert('İyi günler')
    }
}