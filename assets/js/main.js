//capturar evento de submit do formulario
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const form = document.querySelector('#form')
const pessoas = []


  
//função de evento do submit da pagina
form.addEventListener("submit",function (e){ 
    e.preventDefault()//evento de prevenção de envio
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if (!peso){ //se peso não for verdadeiro
        setResultado('Peso invalido',false)
        return;
    }
    if (!altura){ //se altura não for verdadeira
        setResultado('Altura invalida',false)
        return;
    }
    const imc = getImc(peso,altura)
    const nivelImc = getNivelImc(imc)
    const msg = `Seu imc é ${imc} (${nivelImc}).`;
    setResultado(msg, true)    
})
function getImc(peso,altura){
    const imc = peso/altura**2
    return imc.toFixed(2)
}
//Função para criação de paragrafos
function criaP(){
    const p = document.createElement('p') //criando paragrafo
    return p;
    
    
}
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3']
    if (imc>= 39.9){
        return nivel[5] ;
    } 
    if (imc >= 34.9){
        return nivel[4] ;
    } 
    if (imc >= 29.9){
        return nivel[3] ;
    }
    if (imc >= 24.9){
        return nivel[2] ;
    }
    if (imc >= 18.5){
        return nivel[1] ;
    }
    if (imc < 18.5){
        return nivel[0] ;
    }
}
//pegando os valores do input
function setResultado(msg,isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML= "" //zerando o resultado
    const p = criaP()

    if (isValid){ //se For valido fica verde
        p.classList.add('paragrafo-resultado');
    }
    else{ //se for invalido fica vermelho
        p.classList.add('invalido-resultado')

    }

    p.innerHTML=msg;
    
    resultado.appendChild(p)
   
   
}



