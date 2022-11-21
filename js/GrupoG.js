if (JSON.parse(localStorage.getItem("times")) != null) {

    if (JSON.parse(localStorage.getItem("times"))[24].jogos != 0) {
        brasil.children[2].textContent = JSON.parse(localStorage.getItem("times"))[24].pontos;
        brasil.children[3].textContent = JSON.parse(localStorage.getItem("times"))[24].jogos;
        brasil.children[4].textContent = JSON.parse(localStorage.getItem("times"))[24].vitoria;
        brasil.children[5].textContent = JSON.parse(localStorage.getItem("times"))[24].empate;
        brasil.children[6].textContent = JSON.parse(localStorage.getItem("times"))[24].derrota;
        brasil.children[7].textContent = JSON.parse(localStorage.getItem("times"))[24].golsPro;
        brasil.children[8].textContent = JSON.parse(localStorage.getItem("times"))[24].golsContra;
        brasil.children[9].textContent = JSON.parse(localStorage.getItem("times"))[24].saldoGols;
        brasil.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[24].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(6);
    } else {
        brasil.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[25].jogos != 0) {
        camaroes.children[2].textContent = JSON.parse(localStorage.getItem("times"))[25].pontos;
        camaroes.children[3].textContent = JSON.parse(localStorage.getItem("times"))[25].jogos;
        camaroes.children[4].textContent = JSON.parse(localStorage.getItem("times"))[25].vitoria;
        camaroes.children[5].textContent = JSON.parse(localStorage.getItem("times"))[25].empate;
        camaroes.children[6].textContent = JSON.parse(localStorage.getItem("times"))[25].derrota;
        camaroes.children[7].textContent = JSON.parse(localStorage.getItem("times"))[25].golsPro;
        camaroes.children[8].textContent = JSON.parse(localStorage.getItem("times"))[25].golsContra;
        camaroes.children[9].textContent = JSON.parse(localStorage.getItem("times"))[25].saldoGols;
        camaroes.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[25].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(6);
    } else {
        camaroes.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[26].jogos != 0) {
        suica.children[2].textContent = JSON.parse(localStorage.getItem("times"))[26].pontos;
        suica.children[3].textContent = JSON.parse(localStorage.getItem("times"))[26].jogos;
        suica.children[4].textContent = JSON.parse(localStorage.getItem("times"))[26].vitoria;
        suica.children[5].textContent = JSON.parse(localStorage.getItem("times"))[26].empate;
        suica.children[6].textContent = JSON.parse(localStorage.getItem("times"))[26].derrota;
        suica.children[7].textContent = JSON.parse(localStorage.getItem("times"))[26].golsPro;
        suica.children[8].textContent = JSON.parse(localStorage.getItem("times"))[26].golsContra;
        suica.children[9].textContent = JSON.parse(localStorage.getItem("times"))[26].saldoGols;
        suica.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[26].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(6);
    } else {
        suica.children[0].textContent = "\u268B";
    }

    if (JSON.parse(localStorage.getItem("times"))[27].jogos != 0) {
        servia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[27].pontos;
        servia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[27].jogos;
        servia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[27].vitoria;
        servia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[27].empate;
        servia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[27].derrota;
        servia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[27].golsPro;
        servia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[27].golsContra;
        servia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[27].saldoGols;
        servia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[27].pontos) / 9 * 100).toFixed(1);
        classificacao();
        vGeral(6);
    } else {
        servia.children[0].textContent = "\u268B";
    }
}

if (JSON.parse(localStorage.getItem("aux")) != null) {

    if (JSON.parse(localStorage.getItem("aux"))[36].id1 != "a") {
        gJogo1a.value = JSON.parse(localStorage.getItem("aux"))[36].id1;
        gJogo1b.value = JSON.parse(localStorage.getItem("aux"))[36].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[37].id1 != "a") {
        gJogo2a.value = JSON.parse(localStorage.getItem("aux"))[37].id1;
        gJogo2b.value = JSON.parse(localStorage.getItem("aux"))[37].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[38].id1 != "a") {
        gJogo3a.value = JSON.parse(localStorage.getItem("aux"))[38].id1;
        gJogo3b.value = JSON.parse(localStorage.getItem("aux"))[38].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[39].id1 != "a") {
        gJogo4a.value = JSON.parse(localStorage.getItem("aux"))[39].id1;
        gJogo4b.value = JSON.parse(localStorage.getItem("aux"))[39].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[40].id1 != "a") {
        gJogo5a.value = JSON.parse(localStorage.getItem("aux"))[40].id1;
        gJogo5b.value = JSON.parse(localStorage.getItem("aux"))[40].id2;
    }

    if (JSON.parse(localStorage.getItem("aux"))[41].id1 != "a") {
        gJogo6a.value = JSON.parse(localStorage.getItem("aux"))[41].id1;
        gJogo6b.value = JSON.parse(localStorage.getItem("aux"))[41].id2;
    }
}