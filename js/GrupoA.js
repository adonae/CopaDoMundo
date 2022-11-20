if (JSON.parse(localStorage.getItem("times")) != null) {

    if (JSON.parse(localStorage.getItem("times"))[0].jogos != 0) {
        qatar.children[2].textContent = JSON.parse(localStorage.getItem("times"))[0].pontos;
        qatar.children[3].textContent = JSON.parse(localStorage.getItem("times"))[0].jogos;
        qatar.children[4].textContent = JSON.parse(localStorage.getItem("times"))[0].vitoria;
        qatar.children[5].textContent = JSON.parse(localStorage.getItem("times"))[0].empate;
        qatar.children[6].textContent = JSON.parse(localStorage.getItem("times"))[0].derrota;
        qatar.children[7].textContent = JSON.parse(localStorage.getItem("times"))[0].golsPro;
        qatar.children[8].textContent = JSON.parse(localStorage.getItem("times"))[0].golsContra;
        qatar.children[9].textContent = JSON.parse(localStorage.getItem("times"))[0].saldoGols;
        qatar.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[0].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(0);
    } else {
        qatar.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[1].jogos != 0) {
        equador.children[2].textContent = JSON.parse(localStorage.getItem("times"))[1].pontos;
        equador.children[3].textContent = JSON.parse(localStorage.getItem("times"))[1].jogos;
        equador.children[4].textContent = JSON.parse(localStorage.getItem("times"))[1].vitoria;
        equador.children[5].textContent = JSON.parse(localStorage.getItem("times"))[1].empate;
        equador.children[6].textContent = JSON.parse(localStorage.getItem("times"))[1].derrota;
        equador.children[7].textContent = JSON.parse(localStorage.getItem("times"))[1].golsPro;
        equador.children[8].textContent = JSON.parse(localStorage.getItem("times"))[1].golsContra;
        equador.children[9].textContent = JSON.parse(localStorage.getItem("times"))[1].saldoGols;
        equador.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[1].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(0);
    } else {
        equador.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[2].jogos != 0) {
        holanda.children[2].textContent = JSON.parse(localStorage.getItem("times"))[2].pontos;
        holanda.children[3].textContent = JSON.parse(localStorage.getItem("times"))[2].jogos;
        holanda.children[4].textContent = JSON.parse(localStorage.getItem("times"))[2].vitoria;
        holanda.children[5].textContent = JSON.parse(localStorage.getItem("times"))[2].empate;
        holanda.children[6].textContent = JSON.parse(localStorage.getItem("times"))[2].derrota;
        holanda.children[7].textContent = JSON.parse(localStorage.getItem("times"))[2].golsPro;
        holanda.children[8].textContent = JSON.parse(localStorage.getItem("times"))[2].golsContra;
        holanda.children[9].textContent = JSON.parse(localStorage.getItem("times"))[2].saldoGols;
        holanda.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[2].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(0);
    } else {
        holanda.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[3].jogos != 0) {
        senegal.children[2].textContent = JSON.parse(localStorage.getItem("times"))[3].pontos;
        senegal.children[3].textContent = JSON.parse(localStorage.getItem("times"))[3].jogos;
        senegal.children[4].textContent = JSON.parse(localStorage.getItem("times"))[3].vitoria;
        senegal.children[5].textContent = JSON.parse(localStorage.getItem("times"))[3].empate;
        senegal.children[6].textContent = JSON.parse(localStorage.getItem("times"))[3].derrota;
        senegal.children[7].textContent = JSON.parse(localStorage.getItem("times"))[3].golsPro;
        senegal.children[8].textContent = JSON.parse(localStorage.getItem("times"))[3].golsContra;
        senegal.children[9].textContent = JSON.parse(localStorage.getItem("times"))[3].saldoGols;
        senegal.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[3].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(0);
    } else {
        senegal.children[0].textContent = "\u268B";
    }
}

if (JSON.parse(localStorage.getItem("aux")) != null) {

    if (JSON.parse(localStorage.getItem("aux"))[0].id1 != "a") {
        aJogo1a.value = JSON.parse(localStorage.getItem("aux"))[0].id1;
        aJogo1b.value = JSON.parse(localStorage.getItem("aux"))[0].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[1].id1 != "a") {
        aJogo2a.value = JSON.parse(localStorage.getItem("aux"))[1].id1;
        aJogo2b.value = JSON.parse(localStorage.getItem("aux"))[1].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[2].id1 != "a") {
        aJogo3a.value = JSON.parse(localStorage.getItem("aux"))[2].id1;
        aJogo3b.value = JSON.parse(localStorage.getItem("aux"))[2].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[3].id1 != "a") {
        aJogo4a.value = JSON.parse(localStorage.getItem("aux"))[3].id1;
        aJogo4b.value = JSON.parse(localStorage.getItem("aux"))[3].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[4].id1 != "a") {
        aJogo5a.value = JSON.parse(localStorage.getItem("aux"))[4].id1;
        aJogo5b.value = JSON.parse(localStorage.getItem("aux"))[4].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[5].id1 != "a") {
        aJogo6a.value = JSON.parse(localStorage.getItem("aux"))[5].id1;
        aJogo6b.value = JSON.parse(localStorage.getItem("aux"))[5].id2;
    }
}