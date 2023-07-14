
let vendasMes = 12000
let metaMes = 10000;
let comissao = 0;

if(vendasMes >= metaMes){
    comissao = vendasMes * 0.04
    console.log(`
    ==============########==================
       SUAS VENDAS FORAM DE R$ ${vendasMes}

       SUA COMISSÃO SERÁ DE R$ ${comissao}
    ==============########====================`);
} else if(vendasMes < metaMes){
    comissao = vendasMes * 0.02
    console.log(`
    ==============########==================
       SUAS VENDAS FORAM DE R$ ${vendasMes}

       SUA COMISSÃO SERÁ DE R$ ${comissao}
    ==============########====================`);

} else{
      console.log(`
     ==============########==================
        DIGITE UM VALOR VÁLIDO !
     ==============########====================`);
 
}


