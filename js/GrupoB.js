if (JSON.parse(localStorage.getItem("times")) != null) {

    if (JSON.parse(localStorage.getItem("times"))[4].jogos != 0) {
        eua.children[2].textContent = JSON.parse(localStorage.getItem("times"))[4].pontos;
        eua.children[3].textContent = JSON.parse(localStorage.getItem("times"))[4].jogos;
        eua.children[4].textContent = JSON.parse(localStorage.getItem("times"))[4].vitoria;
        eua.children[5].textContent = JSON.parse(localStorage.getItem("times"))[4].empate;
        eua.children[6].textContent = JSON.parse(localStorage.getItem("times"))[4].derrota;
        eua.children[7].textContent = JSON.parse(localStorage.getItem("times"))[4].golsPro;
        eua.children[8].textContent = JSON.parse(localStorage.getItem("times"))[4].golsContra;
        eua.children[9].textContent = JSON.parse(localStorage.getItem("times"))[4].saldoGols;
        eua.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[4].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(1);
    } else {
        eua.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[5].jogos != 0) {
        inglaterra.children[2].textContent = JSON.parse(localStorage.getItem("times"))[5].pontos;
        inglaterra.children[3].textContent = JSON.parse(localStorage.getItem("times"))[5].jogos;
        inglaterra.children[4].textContent = JSON.parse(localStorage.getItem("times"))[5].vitoria;
        inglaterra.children[5].textContent = JSON.parse(localStorage.getItem("times"))[5].empate;
        inglaterra.children[6].textContent = JSON.parse(localStorage.getItem("times"))[5].derrota;
        inglaterra.children[7].textContent = JSON.parse(localStorage.getItem("times"))[5].golsPro;
        inglaterra.children[8].textContent = JSON.parse(localStorage.getItem("times"))[5].golsContra;
        inglaterra.children[9].textContent = JSON.parse(localStorage.getItem("times"))[5].saldoGols;
        inglaterra.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[5].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(1);
    } else {
        inglaterra.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[6].jogos != 0) {
        ira.children[2].textContent = JSON.parse(localStorage.getItem("times"))[6].pontos;
        ira.children[3].textContent = JSON.parse(localStorage.getItem("times"))[6].jogos;
        ira.children[4].textContent = JSON.parse(localStorage.getItem("times"))[6].vitoria;
        ira.children[5].textContent = JSON.parse(localStorage.getItem("times"))[6].empate;
        ira.children[6].textContent = JSON.parse(localStorage.getItem("times"))[6].derrota;
        ira.children[7].textContent = JSON.parse(localStorage.getItem("times"))[6].golsPro;
        ira.children[8].textContent = JSON.parse(localStorage.getItem("times"))[6].golsContra;
        ira.children[9].textContent = JSON.parse(localStorage.getItem("times"))[6].saldoGols;
        ira.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[6].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(1);
    } else {
        ira.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[7].jogos != 0) {
        gales.children[2].textContent = JSON.parse(localStorage.getItem("times"))[7].pontos;
        gales.children[3].textContent = JSON.parse(localStorage.getItem("times"))[7].jogos;
        gales.children[4].textContent = JSON.parse(localStorage.getItem("times"))[7].vitoria;
        gales.children[5].textContent = JSON.parse(localStorage.getItem("times"))[7].empate;
        gales.children[6].textContent = JSON.parse(localStorage.getItem("times"))[7].derrota;
        gales.children[7].textContent = JSON.parse(localStorage.getItem("times"))[7].golsPro;
        gales.children[8].textContent = JSON.parse(localStorage.getItem("times"))[7].golsContra;
        gales.children[9].textContent = JSON.parse(localStorage.getItem("times"))[7].saldoGols;
        gales.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[7].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(1);
    } else {
        gales.children[0].textContent = "\u268B";
    }
}

if (JSON.parse(localStorage.getItem("aux")) != null) {

    if (JSON.parse(localStorage.getItem("aux"))[6].id1 != "a") {
        bJogo1a.value = JSON.parse(localStorage.getItem("aux"))[6].id1;
        bJogo1b.value = JSON.parse(localStorage.getItem("aux"))[6].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[7].id1 != "a") {
        bJogo2a.value = JSON.parse(localStorage.getItem("aux"))[7].id1;
        bJogo2b.value = JSON.parse(localStorage.getItem("aux"))[7].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[8].id1 != "a") {
        bJogo3a.value = JSON.parse(localStorage.getItem("aux"))[8].id1;
        bJogo3b.value = JSON.parse(localStorage.getItem("aux"))[8].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[9].id1 != "a") {
        bJogo4a.value = JSON.parse(localStorage.getItem("aux"))[9].id1;
        bJogo4b.value = JSON.parse(localStorage.getItem("aux"))[9].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[10].id1 != "a") {
        bJogo5a.value = JSON.parse(localStorage.getItem("aux"))[10].id1;
        bJogo5b.value = JSON.parse(localStorage.getItem("aux"))[10].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[11].id1 != "a") {
        bJogo6a.value = JSON.parse(localStorage.getItem("aux"))[11].id1;
        bJogo6b.value = JSON.parse(localStorage.getItem("aux"))[11].id2;
    }
}