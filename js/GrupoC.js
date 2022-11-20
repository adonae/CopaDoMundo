if (JSON.parse(localStorage.getItem("times")) != null) {

    if (JSON.parse(localStorage.getItem("times"))[8].jogos != 0) {
        argentina.children[2].textContent = JSON.parse(localStorage.getItem("times"))[8].pontos;
        argentina.children[3].textContent = JSON.parse(localStorage.getItem("times"))[8].jogos;
        argentina.children[4].textContent = JSON.parse(localStorage.getItem("times"))[8].vitoria;
        argentina.children[5].textContent = JSON.parse(localStorage.getItem("times"))[8].empate;
        argentina.children[6].textContent = JSON.parse(localStorage.getItem("times"))[8].derrota;
        argentina.children[7].textContent = JSON.parse(localStorage.getItem("times"))[8].golsPro;
        argentina.children[8].textContent = JSON.parse(localStorage.getItem("times"))[8].golsContra;
        argentina.children[9].textContent = JSON.parse(localStorage.getItem("times"))[8].saldoGols;
        argentina.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[8].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(2);
    } else {
        argentina.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[9].jogos != 0) {
        arabia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[9].pontos;
        arabia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[9].jogos;
        arabia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[9].vitoria;
        arabia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[9].empate;
        arabia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[9].derrota;
        arabia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[9].golsPro;
        arabia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[9].golsContra;
        arabia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[9].saldoGols;
        arabia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[9].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(2);
    } else {
        arabia.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[10].jogos != 0) {
        mexico.children[2].textContent = JSON.parse(localStorage.getItem("times"))[10].pontos;
        mexico.children[3].textContent = JSON.parse(localStorage.getItem("times"))[10].jogos;
        mexico.children[4].textContent = JSON.parse(localStorage.getItem("times"))[10].vitoria;
        mexico.children[5].textContent = JSON.parse(localStorage.getItem("times"))[10].empate;
        mexico.children[6].textContent = JSON.parse(localStorage.getItem("times"))[10].derrota;
        mexico.children[7].textContent = JSON.parse(localStorage.getItem("times"))[10].golsPro;
        mexico.children[8].textContent = JSON.parse(localStorage.getItem("times"))[10].golsContra;
        mexico.children[9].textContent = JSON.parse(localStorage.getItem("times"))[10].saldoGols;
        mexico.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[10].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(2);
    } else {
        mexico.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[11].jogos != 0) {
        polonia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[11].pontos;
        polonia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[11].jogos;
        polonia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[11].vitoria;
        polonia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[11].empate;
        polonia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[11].derrota;
        polonia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[11].golsPro;
        polonia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[11].golsContra;
        polonia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[11].saldoGols;
        polonia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[11].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(2);
    } else {
        polonia.children[0].textContent = "\u268B";
    }
}

if (JSON.parse(localStorage.getItem("aux")) != null) {

    if (JSON.parse(localStorage.getItem("aux"))[12].id1 != "a") {
        cJogo1a.value = JSON.parse(localStorage.getItem("aux"))[12].id1;
        cJogo1b.value = JSON.parse(localStorage.getItem("aux"))[12].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[13].id1 != "a") {
        cJogo2a.value = JSON.parse(localStorage.getItem("aux"))[13].id1;
        cJogo2b.value = JSON.parse(localStorage.getItem("aux"))[13].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[14].id1 != "a") {
        cJogo3a.value = JSON.parse(localStorage.getItem("aux"))[14].id1;
        cJogo3b.value = JSON.parse(localStorage.getItem("aux"))[14].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[15].id1 != "a") {
        cJogo4a.value = JSON.parse(localStorage.getItem("aux"))[15].id1;
        cJogo4b.value = JSON.parse(localStorage.getItem("aux"))[15].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[16].id1 != "a") {
        cJogo5a.value = JSON.parse(localStorage.getItem("aux"))[16].id1;
        cJogo5b.value = JSON.parse(localStorage.getItem("aux"))[16].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[17].id1 != "a") {
        cJogo6a.value = JSON.parse(localStorage.getItem("aux"))[17].id1;
        cJogo6b.value = JSON.parse(localStorage.getItem("aux"))[17].id2;
    }
}