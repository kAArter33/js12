let string1 = "Uwielbiam JavaScript"
let string2 = "Jestem świetnym programistą"

function porownanie(tekst1, tekst2) {

    if (tekst1.length > tekst2.length) {
        return `Dłuższy jest: ${tekst1}`
    }
    else if (tekst1.length == tekst2.length) {
        return `Długość tekstów jest taka sama`
    }
    else {
        return `Dłuższy tekst: ${tekst2}`
    }
}

console.log(porownanie(string1, string2));

