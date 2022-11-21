if (JSON.parse(localStorage.getItem("times")) != null) {

    if (JSON.parse(localStorage.getItem("times"))[28].jogos != 0) {
        coreia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[28].pontos;
        coreia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[28].jogos;
        coreia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[28].vitoria;
        coreia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[28].empate;
        coreia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[28].derrota;
        coreia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[28].golsPro;
        coreia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[28].golsContra;
        coreia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[28].saldoGols;
        coreia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[28].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(7);
    } else {
        coreia.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[29].jogos != 0) {
        gana.children[2].textContent = JSON.parse(localStorage.getItem("times"))[29].pontos;
        gana.children[3].textContent = JSON.parse(localStorage.getItem("times"))[29].jogos;
        gana.children[4].textContent = JSON.parse(localStorage.getItem("times"))[29].vitoria;
        gana.children[5].textContent = JSON.parse(localStorage.getItem("times"))[29].empate;
        gana.children[6].textContent = JSON.parse(localStorage.getItem("times"))[29].derrota;
        gana.children[7].textContent = JSON.parse(localStorage.getItem("times"))[29].golsPro;
        gana.children[8].textContent = JSON.parse(localStorage.getItem("times"))[29].golsContra;
        gana.children[9].textContent = JSON.parse(localStorage.getItem("times"))[29].saldoGols;
        gana.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[29].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(7);
    } else {
        gana.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[30].jogos != 0) {
        portugal.children[2].textContent = JSON.parse(localStorage.getItem("times"))[30].pontos;
        portugal.children[3].textContent = JSON.parse(localStorage.getItem("times"))[30].jogos;
        portugal.children[4].textContent = JSON.parse(localStorage.getItem("times"))[30].vitoria;
        portugal.children[5].textContent = JSON.parse(localStorage.getItem("times"))[30].empate;
        portugal.children[6].textContent = JSON.parse(localStorage.getItem("times"))[30].derrota;
        portugal.children[7].textContent = JSON.parse(localStorage.getItem("times"))[30].golsPro;
        portugal.children[8].textContent = JSON.parse(localStorage.getItem("times"))[30].golsContra;
        portugal.children[9].textContent = JSON.parse(localStorage.getItem("times"))[30].saldoGols;
        portugal.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[30].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(7);
    } else {
        portugal.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[31].jogos != 0) {
        uruguai.children[2].textContent = JSON.parse(localStorage.getItem("times"))[31].pontos;
        uruguai.children[3].textContent = JSON.parse(localStorage.getItem("times"))[31].jogos;
        uruguai.children[4].textContent = JSON.parse(localStorage.getItem("times"))[31].vitoria;
        uruguai.children[5].textContent = JSON.parse(localStorage.getItem("times"))[31].empate;
        uruguai.children[6].textContent = JSON.parse(localStorage.getItem("times"))[31].derrota;
        uruguai.children[7].textContent = JSON.parse(localStorage.getItem("times"))[31].golsPro;
        uruguai.children[8].textContent = JSON.parse(localStorage.getItem("times"))[31].golsContra;
        uruguai.children[9].textContent = JSON.parse(localStorage.getItem("times"))[31].saldoGols;
        uruguai.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[31].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(7);
    } else {
        uruguai.children[0].textContent = "\u268B";
    }
}

if (JSON.parse(localStorage.getItem("aux")) != null) {

    if (JSON.parse(localStorage.getItem("aux"))[42].id1 != "a") {
        hJogo1a.value = JSON.parse(localStorage.getItem("aux"))[42].id1;
        hJogo1b.value = JSON.parse(localStorage.getItem("aux"))[42].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[43].id1 != "a") {
        hJogo2a.value = JSON.parse(localStorage.getItem("aux"))[43].id1;
        hJogo2b.value = JSON.parse(localStorage.getItem("aux"))[43].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[44].id1 != "a") {
        hJogo3a.value = JSON.parse(localStorage.getItem("aux"))[44].id1;
        hJogo3b.value = JSON.parse(localStorage.getItem("aux"))[44].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[45].id1 != "a") {
        hJogo4a.value = JSON.parse(localStorage.getItem("aux"))[45].id1;
        hJogo4b.value = JSON.parse(localStorage.getItem("aux"))[45].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[46].id1 != "a") {
        hJogo5a.value = JSON.parse(localStorage.getItem("aux"))[46].id1;
        hJogo5b.value = JSON.parse(localStorage.getItem("aux"))[46].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[47].id1 != "a") {
        hJogo6a.value = JSON.parse(localStorage.getItem("aux"))[47].id1;
        hJogo6b.value = JSON.parse(localStorage.getItem("aux"))[47].id2;
    }
}