if (JSON.parse(localStorage.getItem("times")) != null) {

    if (JSON.parse(localStorage.getItem("times"))[20].jogos != 0) {
        belgica.children[2].textContent = JSON.parse(localStorage.getItem("times"))[20].pontos;
        belgica.children[3].textContent = JSON.parse(localStorage.getItem("times"))[20].jogos;
        belgica.children[4].textContent = JSON.parse(localStorage.getItem("times"))[20].vitoria;
        belgica.children[5].textContent = JSON.parse(localStorage.getItem("times"))[20].empate;
        belgica.children[6].textContent = JSON.parse(localStorage.getItem("times"))[20].derrota;
        belgica.children[7].textContent = JSON.parse(localStorage.getItem("times"))[20].golsPro;
        belgica.children[8].textContent = JSON.parse(localStorage.getItem("times"))[20].golsContra;
        belgica.children[9].textContent = JSON.parse(localStorage.getItem("times"))[20].saldoGols;
        belgica.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[20].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(5);
    } else {
        belgica.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[21].jogos != 0) {
        canada.children[2].textContent = JSON.parse(localStorage.getItem("times"))[21].pontos;
        canada.children[3].textContent = JSON.parse(localStorage.getItem("times"))[21].jogos;
        canada.children[4].textContent = JSON.parse(localStorage.getItem("times"))[21].vitoria;
        canada.children[5].textContent = JSON.parse(localStorage.getItem("times"))[21].empate;
        canada.children[6].textContent = JSON.parse(localStorage.getItem("times"))[21].derrota;
        canada.children[7].textContent = JSON.parse(localStorage.getItem("times"))[21].golsPro;
        canada.children[8].textContent = JSON.parse(localStorage.getItem("times"))[21].golsContra;
        canada.children[9].textContent = JSON.parse(localStorage.getItem("times"))[21].saldoGols;
        canada.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[21].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(5);
    } else {
        canada.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[22].jogos != 0) {
        croacia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[22].pontos;
        croacia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[22].jogos;
        croacia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[22].vitoria;
        croacia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[22].empate;
        croacia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[22].derrota;
        croacia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[22].golsPro;
        croacia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[22].golsContra;
        croacia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[22].saldoGols;
        croacia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[22].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(5);
    } else {
        croacia.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[23].jogos != 0) {
        marrocos.children[2].textContent = JSON.parse(localStorage.getItem("times"))[23].pontos;
        marrocos.children[3].textContent = JSON.parse(localStorage.getItem("times"))[23].jogos;
        marrocos.children[4].textContent = JSON.parse(localStorage.getItem("times"))[23].vitoria;
        marrocos.children[5].textContent = JSON.parse(localStorage.getItem("times"))[23].empate;
        marrocos.children[6].textContent = JSON.parse(localStorage.getItem("times"))[23].derrota;
        marrocos.children[7].textContent = JSON.parse(localStorage.getItem("times"))[23].golsPro;
        marrocos.children[8].textContent = JSON.parse(localStorage.getItem("times"))[23].golsContra;
        marrocos.children[9].textContent = JSON.parse(localStorage.getItem("times"))[23].saldoGols;
        marrocos.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[23].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(5);
    } else {
        marrocos.children[0].textContent = "\u268B";
    }
}

if (JSON.parse(localStorage.getItem("aux")) != null) {

    if (JSON.parse(localStorage.getItem("aux"))[30].id1 != "a") {
        fJogo1a.value = JSON.parse(localStorage.getItem("aux"))[30].id1;
        fJogo1b.value = JSON.parse(localStorage.getItem("aux"))[30].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[31].id1 != "a") {
        fJogo2a.value = JSON.parse(localStorage.getItem("aux"))[31].id1;
        fJogo2b.value = JSON.parse(localStorage.getItem("aux"))[31].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[32].id1 != "a") {
        fJogo3a.value = JSON.parse(localStorage.getItem("aux"))[32].id1;
        fJogo3b.value = JSON.parse(localStorage.getItem("aux"))[32].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[33].id1 != "a") {
        fJogo4a.value = JSON.parse(localStorage.getItem("aux"))[33].id1;
        fJogo4b.value = JSON.parse(localStorage.getItem("aux"))[33].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[34].id1 != "a") {
        fJogo5a.value = JSON.parse(localStorage.getItem("aux"))[34].id1;
        fJogo5b.value = JSON.parse(localStorage.getItem("aux"))[34].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[35].id1 != "a") {
        fJogo6a.value = JSON.parse(localStorage.getItem("aux"))[35].id1;
        fJogo6b.value = JSON.parse(localStorage.getItem("aux"))[35].id2;
    }
}