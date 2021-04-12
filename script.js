const pokemon = 'Pikachu';

const botao = document.querySelector('button');


function verificaPokemon(){
    let resposta = document.querySelector('input').value.trim();
    const input = document.querySelector('input');
    const chute = input.value;

    if (pokemon == chute){
        input.value = 'Você ACERTOU!!!'
    }else if (resposta.length){
        if(resposta.toLowerCase() == pokemon.toLowerCase())
        input.value ="Você ACERTOU!!!"
    }else{
        input.value = 'Você ERROU!!'
    }

}

botao.onclick = verificaPokemon;




    
