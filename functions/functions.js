const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function qtdNs() {
    try {
    rl.question('Quantos numeros deseja ordenar? ', (qtdN) => {
    console.log(qtdN);
    rl.close();
    //precisei de ajuda com esse isNan
    if(!qtdN || isNaN(qtdN) || qtdN <= 0){
        throw new Error('Inválido! Por favor, digite um número positivo (0 excluso).')
    }else{
        return qtdN;
    }
} );
    } catch (error) {
        console.error("Erro :", error.message);
    }

}
//arrumar depois, preciso ver a doc do return para return como int
function digitar(qtdN){
    for(var i = 0; i <= qtdN; i++){
        rl.question("Por favor, digite o ", i + 1, " número:", (Numero))
        console.log(Numero)
    }
}
module.exports = {qtdNs, digitar};