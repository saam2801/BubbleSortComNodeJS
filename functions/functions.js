const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let qtdN;
let Numeros = [];

//ok, aqui eu precisei de muita ajuda, mas deu certo
//gemini salvando
/**
 * @returns {promise<number>}*/

function qtdNs() {
    return new Promise((resolve, reject) =>{
        rl.question('Quantos numeros deseja ordenar? ', (resposta) => {
            qtdN = parseInt(resposta.trim());
            //console.log(resposta);
            rl.close();
            if(!qtdN || isNaN(qtdN) || qtdN <= 0){
                return reject("Valor inválido!");
            }else{
                return resolve(qtdN);
            }
        })
    })
}


//basicamente, a partir daqui está tudo errado
//pedir ajuda para o gemini depois, porquê não tem como
/***
 * @param {number} qtdN
 * @returns {promise<Array<number>>}
 */
async function digitar(qtdN){
        for(var i = 0; i < qtdN; i++){
            const texto = "Agora digite estes por favor"
            const resposta = await pergunta(texto);
        }
}

function teste(Numeros){
    for(i = 0; i<= Numeros; i++){console.log(Numeros[i]);}
}

/***
 * @param {string} texto
 * @returns {promise<number>}
 */
//dei uma adiantada e fui vendo oque o gemini respondeu
//então utilizei o código que o mesmo mandou
//muito mais limpo
function pergunta(texto){
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            const numero = ParseInt(resposta.trim());

            if(isNaN(numero)){
                console.log("Entrada inválida, tente novamente.")
                resolve(numero);
            }else{
                resolve(numero);
            }

        })
    })

}

module.exports = {qtdNs, digitar, teste, qtdN, Numeros};