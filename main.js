let tekst1 = "Uwielbiam JavaScript"
let tekst2 = "Jestem świetnym programistą"

function porownanie(tekst1,tekst2) 
{


if (tekst1.length > tekst2.length)
    {

    console.log("tekst1 jest dłuższy od tekst2");

    }
else if (tekst1.length == tekst2.length)
    
    {


    console.log("Długość tekstów jest taka sama");

    }

 else 
    {
    
        console.log ("tekst2 jest dłuższy od tekst 1");
   
    }
}

porownanie(tekst1,tekst2);

