let valorColesterol = parseFloat(prompt("Digite o seu valor de colesterol :"));

if(valorColesterol<=180){
    document.write(`
    ======================
    Saúde OK!
    ======================`);
}
 else if(valorColesterol>=180){
        document.write(`
        =======================
        Vamos procurar uma ajuda médica?
        ==============================`);
    }
