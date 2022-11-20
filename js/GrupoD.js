if (JSON.parse(localStorage.getItem("times")) != null) {

    if (JSON.parse(localStorage.getItem("times"))[12].jogos != 0) {
        australia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[12].pontos;
        australia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[12].jogos;
        australia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[12].vitoria;
        australia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[12].empate;
        australia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[12].derrota;
        australia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[12].golsPro;
        australia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[12].golsContra;
        australia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[12].saldoGols;
        australia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[12].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(3);
    } else {
        australia.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[13].jogos != 0) {
        dinamarca.children[2].textContent = JSON.parse(localStorage.getItem("times"))[13].pontos;
        dinamarca.children[3].textContent = JSON.parse(localStorage.getItem("times"))[13].jogos;
        dinamarca.children[4].textContent = JSON.parse(localStorage.getItem("times"))[13].vitoria;
        dinamarca.children[5].textContent = JSON.parse(localStorage.getItem("times"))[13].empate;
        dinamarca.children[6].textContent = JSON.parse(localStorage.getItem("times"))[13].derrota;
        dinamarca.children[7].textContent = JSON.parse(localStorage.getItem("times"))[13].golsPro;
        dinamarca.children[8].textContent = JSON.parse(localStorage.getItem("times"))[13].golsContra;
        dinamarca.children[9].textContent = JSON.parse(localStorage.getItem("times"))[13].saldoGols;
        dinamarca.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[13].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(3);
    } else {
        dinamarca.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[14].jogos != 0) {
        franca.children[2].textContent = JSON.parse(localStorage.getItem("times"))[14].pontos;
        franca.children[3].textContent = JSON.parse(localStorage.getItem("times"))[14].jogos;
        franca.children[4].textContent = JSON.parse(localStorage.getItem("times"))[14].vitoria;
        franca.children[5].textContent = JSON.parse(localStorage.getItem("times"))[14].empate;
        franca.children[6].textContent = JSON.parse(localStorage.getItem("times"))[14].derrota;
        franca.children[7].textContent = JSON.parse(localStorage.getItem("times"))[14].golsPro;
        franca.children[8].textContent = JSON.parse(localStorage.getItem("times"))[14].golsContra;
        franca.children[9].textContent = JSON.parse(localStorage.getItem("times"))[14].saldoGols;
        franca.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[14].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(3);
    } else {
        franca.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[15].jogos != 0) {
        nigeria.children[2].textContent = JSON.parse(localStorage.getItem("times"))[15].pontos;
        nigeria.children[3].textContent = JSON.parse(localStorage.getItem("times"))[15].jogos;
        nigeria.children[4].textContent = JSON.parse(localStorage.getItem("times"))[15].vitoria;
        nigeria.children[5].textContent = JSON.parse(localStorage.getItem("times"))[15].empate;
        nigeria.children[6].textContent = JSON.parse(localStorage.getItem("times"))[15].derrota;
        nigeria.children[7].textContent = JSON.parse(localStorage.getItem("times"))[15].golsPro;
        nigeria.children[8].textContent = JSON.parse(localStorage.getItem("times"))[15].golsContra;
        nigeria.children[9].textContent = JSON.parse(localStorage.getItem("times"))[15].saldoGols;
        nigeria.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[15].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(3);
    } else {
        nigeria.children[0].textContent = "\u268B";
    }
}

if (JSON.parse(localStorage.getItem("aux")) != null) {

    if (JSON.parse(localStorage.getItem("aux"))[18].id1 != "a") {
        dJogo1a.value = JSON.parse(localStorage.getItem("aux"))[18].id1;
        dJogo1b.value = JSON.parse(localStorage.getItem("aux"))[18].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[19].id1 != "a") {
        dJogo2a.value = JSON.parse(localStorage.getItem("aux"))[19].id1;
        dJogo2b.value = JSON.parse(localStorage.getItem("aux"))[19].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[20].id1 != "a") {
        dJogo3a.value = JSON.parse(localStorage.getItem("aux"))[20].id1;
        dJogo3b.value = JSON.parse(localStorage.getItem("aux"))[20].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[21].id1 != "a") {
        dJogo4a.value = JSON.parse(localStorage.getItem("aux"))[21].id1;
        dJogo4b.value = JSON.parse(localStorage.getItem("aux"))[21].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[22].id1 != "a") {
        dJogo5a.value = JSON.parse(localStorage.getItem("aux"))[22].id1;
        dJogo5b.value = JSON.parse(localStorage.getItem("aux"))[22].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[23].id1 != "a") {
        dJogo6a.value = JSON.parse(localStorage.getItem("aux"))[23].id1;
        dJogo6b.value = JSON.parse(localStorage.getItem("aux"))[23].id2;
    }
}