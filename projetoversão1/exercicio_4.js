let notaAluno = parseFloat(prompt("Digite a nota :"));

if (notaAluno < 0 || notaAluno > 10){
    document.write(` 
    =============
    N o t a  I n v á l i d a 
    =============== `)
} else if (notaAluno >= 0 && notaAluno < 4) {
     document.write(`
     ===============
     A l u n o  R e p r o v a d o
     ==============`);
} else if (notaAluno >= 4 && notaAluno <= 7) {
    document.write(`
    ===============
    A l u n o  e m   R e c u p e r a ç ã o
    ==============`) }

    else if (notaAluno >= 7 && notaAluno <= 10) {
        document.write(`
        ===============
        A l u n o  A p r o v a d o 
        ==============`) }
    