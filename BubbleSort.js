const functions = require("./functions/functions.js");

//eu não acredito que realmente deu certo
//o gemini, me salvou de um jeito
//meu Deus, isso realmente deu certo, o segredo eram as promises
//ao recrutador que possívelmente estiver lendo isso, eu tive que usar gemini mais de uma vez neste programa
async function main(){
    const qtdN = await functions.qtdNs();
    console.log(qtdN);
}
main();