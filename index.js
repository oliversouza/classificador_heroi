const readline = require('readline');

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomeHeroi;
let xpHeroi;
let nivelHeroi;

// Captura o nome do herói
rl.question("Digite o nome do herói: ", (nome) => {
    nomeHeroi = nome;

    // Captura a experiência do herói
    rl.question("Digite a experiência do herói (número): ", (xp) => {
        xpHeroi = parseInt(xp);

        // Verifica se o valor de XP é válido
        if (!isNaN(xpHeroi) && xpHeroi >= 0) {
            // Determina o nível do herói
            switch (true) {
                case xpHeroi >= 0 && xpHeroi <= 1000:
                    nivelHeroi = "Ferro";
                    break;
                case xpHeroi >= 1001 && xpHeroi <= 2000:
                    nivelHeroi = "Bronze";
                    break;
                case xpHeroi >= 2001 && xpHeroi <= 3000:
                    nivelHeroi = "Bronze";
                    break;
                case xpHeroi >= 3001 && xpHeroi <= 5000:
                    nivelHeroi = "Prata";
                    break;
                case xpHeroi >= 5001 && xpHeroi <= 7000:
                    nivelHeroi = "Ouro";
                    break;
                case xpHeroi >= 7001 && xpHeroi <= 8000:
                    nivelHeroi = "Platina";
                    break;
                case xpHeroi >= 8001 && xpHeroi <= 9000:
                    nivelHeroi = "Ascendente";
                    break;
                case xpHeroi >= 9001 && xpHeroi <= 10000:
                    nivelHeroi = "Imortal";
                    break;
                default:
                    nivelHeroi = "Radiante";
            }
            console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}!`);
        } else {
            console.log("Você digitou um valor inválido para a experiência.");
        }

        // Encerra a interface readline
        rl.close();
    });
});
