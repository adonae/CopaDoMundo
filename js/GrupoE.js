if (JSON.parse(localStorage.getItem("times")) != null) {

    if (JSON.parse(localStorage.getItem("times"))[16].jogos != 0) {
        alemanha.children[2].textContent = JSON.parse(localStorage.getItem("times"))[16].pontos;
        alemanha.children[3].textContent = JSON.parse(localStorage.getItem("times"))[16].jogos;
        alemanha.children[4].textContent = JSON.parse(localStorage.getItem("times"))[16].vitoria;
        alemanha.children[5].textContent = JSON.parse(localStorage.getItem("times"))[16].empate;
        alemanha.children[6].textContent = JSON.parse(localStorage.getItem("times"))[16].derrota;
        alemanha.children[7].textContent = JSON.parse(localStorage.getItem("times"))[16].golsPro;
        alemanha.children[8].textContent = JSON.parse(localStorage.getItem("times"))[16].golsContra;
        alemanha.children[9].textContent = JSON.parse(localStorage.getItem("times"))[16].saldoGols;
        alemanha.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[16].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(4);
    } else {
        alemanha.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[17].jogos != 0) {
        costa_rica.children[2].textContent = JSON.parse(localStorage.getItem("times"))[17].pontos;
        costa_rica.children[3].textContent = JSON.parse(localStorage.getItem("times"))[17].jogos;
        costa_rica.children[4].textContent = JSON.parse(localStorage.getItem("times"))[17].vitoria;
        costa_rica.children[5].textContent = JSON.parse(localStorage.getItem("times"))[17].empate;
        costa_rica.children[6].textContent = JSON.parse(localStorage.getItem("times"))[17].derrota;
        costa_rica.children[7].textContent = JSON.parse(localStorage.getItem("times"))[17].golsPro;
        costa_rica.children[8].textContent = JSON.parse(localStorage.getItem("times"))[17].golsContra;
        costa_rica.children[9].textContent = JSON.parse(localStorage.getItem("times"))[17].saldoGols;
        costa_rica.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[17].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(4);
    } else {
        costa_rica.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[18].jogos != 0) {
        espanha.children[2].textContent = JSON.parse(localStorage.getItem("times"))[18].pontos;
        espanha.children[3].textContent = JSON.parse(localStorage.getItem("times"))[18].jogos;
        espanha.children[4].textContent = JSON.parse(localStorage.getItem("times"))[18].vitoria;
        espanha.children[5].textContent = JSON.parse(localStorage.getItem("times"))[18].empate;
        espanha.children[6].textContent = JSON.parse(localStorage.getItem("times"))[18].derrota;
        espanha.children[7].textContent = JSON.parse(localStorage.getItem("times"))[18].golsPro;
        espanha.children[8].textContent = JSON.parse(localStorage.getItem("times"))[18].golsContra;
        espanha.children[9].textContent = JSON.parse(localStorage.getItem("times"))[18].saldoGols;
        espanha.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[18].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(4);
    } else {
        espanha.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[19].jogos != 0) {
        japao.children[2].textContent = JSON.parse(localStorage.getItem("times"))[19].pontos;
        japao.children[3].textContent = JSON.parse(localStorage.getItem("times"))[19].jogos;
        japao.children[4].textContent = JSON.parse(localStorage.getItem("times"))[19].vitoria;
        japao.children[5].textContent = JSON.parse(localStorage.getItem("times"))[19].empate;
        japao.children[6].textContent = JSON.parse(localStorage.getItem("times"))[19].derrota;
        japao.children[7].textContent = JSON.parse(localStorage.getItem("times"))[19].golsPro;
        japao.children[8].textContent = JSON.parse(localStorage.getItem("times"))[19].golsContra;
        japao.children[9].textContent = JSON.parse(localStorage.getItem("times"))[19].saldoGols;
        japao.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[19].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(4);
    } else {
        japao.children[0].textContent = "\u268B";
    }
}

if (JSON.parse(localStorage.getItem("aux")) != null) {

    if (JSON.parse(localStorage.getItem("aux"))[24].id1 != "a") {
        eJogo1a.value = JSON.parse(localStorage.getItem("aux"))[24].id1;
        eJogo1b.value = JSON.parse(localStorage.getItem("aux"))[24].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[25].id1 != "a") {
        eJogo2a.value = JSON.parse(localStorage.getItem("aux"))[25].id1;
        eJogo2b.value = JSON.parse(localStorage.getItem("aux"))[25].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[26].id1 != "a") {
        eJogo3a.value = JSON.parse(localStorage.getItem("aux"))[26].id1;
        eJogo3b.value = JSON.parse(localStorage.getItem("aux"))[26].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[27].id1 != "a") {
        eJogo4a.value = JSON.parse(localStorage.getItem("aux"))[27].id1;
        eJogo4b.value = JSON.parse(localStorage.getItem("aux"))[27].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[28].id1 != "a") {
        eJogo5a.value = JSON.parse(localStorage.getItem("aux"))[28].id1;
        eJogo5b.value = JSON.parse(localStorage.getItem("aux"))[28].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[29].id1 != "a") {
        eJogo6a.value = JSON.parse(localStorage.getItem("aux"))[29].id1;
        eJogo6b.value = JSON.parse(localStorage.getItem("aux"))[29].id2;
    }
}