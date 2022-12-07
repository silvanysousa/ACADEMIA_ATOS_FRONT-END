/* SORTEIO DAS PALAVRAS */
function jogar () {

    function novaPalavra () {

        const palavras = ["yellow", "gray", "brown", "red", "blue", "orange", "black", "green", "pink"];

        let sorteadas = [];

            while (sorteadas.length < 9) {

                var sorteio = Math.floor(Math.random() * palavras.length);

                if (!sorteadas.includes(sorteio)) {
                    sorteadas.push(sorteio);
                }  
            }

        document.getElementById('palavra').textContent = palavras[sorteadas[5]]; 
        
    } //fim novaPalavra()

    /* SORTEIO DAS CORES */

    function novaCor () {

        const cores = ["green", "yellow", "blue", "brown", "black", "red", "gray", "orange", "pink"];

        let sorteadas = [];

            while (sorteadas.length < 9) {

                var sorteio = Math.floor(Math.random() * cores.length);

                if (!sorteadas.includes(sorteio)) {
                    sorteadas.push(sorteio);
                }                         
            }

        document.getElementById('palavra').style.color = cores[sorteadas[5]];
            
        document.getElementById('cor1').style.backgroundColor = cores[sorteadas[0]];
        document.getElementById('cor2').style.backgroundColor = cores[sorteadas[1]];
        document.getElementById('cor3').style.backgroundColor = cores[sorteadas[2]];
        document.getElementById('cor4').style.backgroundColor = cores[sorteadas[3]];
        document.getElementById('cor5').style.backgroundColor = cores[sorteadas[4]];
        document.getElementById('cor6').style.backgroundColor = cores[sorteadas[5]];
        document.getElementById('cor7').style.backgroundColor = cores[sorteadas[6]];
        document.getElementById('cor8').style.backgroundColor = cores[sorteadas[7]];
        document.getElementById('cor9').style.backgroundColor = cores[sorteadas[8]];

        
        
    } //fim novaCor()

    /* EVENTOS DE CLICK */
    
    start.addEventListener("click", novaPalavra);    
    start.addEventListener("click", novaCor);

    contador();
    pontos();

    cor1.addEventListener("click", novaCor);
    cor1.addEventListener("click", novaPalavra);
    cor2.addEventListener("click", novaCor);
    cor2.addEventListener("click", novaPalavra);
    cor3.addEventListener("click", novaCor);
    cor3.addEventListener("click", novaPalavra);
    cor4.addEventListener("click", novaCor);
    cor4.addEventListener("click", novaPalavra);
    cor5.addEventListener("click", novaCor);
    cor5.addEventListener("click", novaPalavra);
    cor6.addEventListener("click", novaCor);
    cor6.addEventListener("click", novaPalavra);
    cor7.addEventListener("click", novaCor);
    cor7.addEventListener("click", novaPalavra);
    cor8.addEventListener("click", novaCor);
    cor8.addEventListener("click", novaPalavra);
    cor9.addEventListener("click", novaCor);
    cor9.addEventListener("click", novaPalavra);

    /* CONTADOR */

    function contador() {

        const atualizar = (tempo) => {
            const timer = document.getElementById('timer');

            timer.textContent = tempo;
        }

        const contador = (tempo) => {
            const pararContador = () => clearInterval(id);
            
            const contar = () => {
                if (tempo === 0) {
                    pararContador();            
                }
                atualizar(tempo);
                tempo--;
            }
            const id = setInterval(contar,1000);
        }
        var tempo = 30;
        start.addEventListener("click", contador(tempo));
    }    
} 

/* ENCERRA SE ERRAR 

function encerrar() {
    start.disabled = true;
}
*/


/* COMPARANDO O ELEMENTO CLICADO COM O SORTEADO */

function pontos() {

    let sorteado = document.getElementById('palavra').textContent;
    let clicado = document.getElementById('cores').value;
                
    if (clicado == sorteado) {   
        pontuacao.textContent ++;            
        console.log("Acertou");
        
    } else {
        pontuacao.textContent = 0;
        console.log("Errou");
        alert("Errou");
        //encerrar();
    }        
    
}

/* INICIANDO O JOGO */

start.addEventListener("click", jogar);