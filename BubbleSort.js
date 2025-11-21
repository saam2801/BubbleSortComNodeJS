const functions = require("./functions/functions.js");
const {rl} = functions

const BubbleSort = require("./functions/BubbleSort.js")
//ao recrutador que possívelmente estiver lendo isso, eu tive que usar gemini mais de uma vez neste programa
async function main(){
    const qtdN = await functions.qtdNs();
    console.log(qtdN, " Números");

    const array = await functions.digitar(qtdN);
    
    //functions.teste(array);

    const arrayFinal = await BubbleSort(array);

    functions.teste(arrayFinal);

    //deixar no final para não encerrar o programa
    rl.close()
}
main();


//a lógica em si está pronta, agora oque falta é apenas alguns ajustes finos

