let putnum = document.getElementById('dbv'); // input number
let botao = document.getElementById('button'); // botao adicionar
let lista = document.getElementById('vlista'); // lista dos vetores
let finalizar = document.getElementById('finalizar'); // botao de finalizar
let valores = []

botao.addEventListener('mouseenter', function corentrar(){
    botao.style.backgroundColor = 'gray'
})
botao.addEventListener('mouseout', function corsair(){
    botao.style.backgroundColor = 'white';
})

function adicionar(){          

    if (putnum.value >=1 && putnum.value <=1000){
        valores.push(Number(putnum.value));
        let item = document.createElement('option')
        item.text = `Valor adicionado: ${putnum.value} `
        lista.appendChild(item)
        putnum.value = '';
        putnum.focus()
    } else {
        window.alert('Os números tem que ser de 1 - 1000 e não podem estar vazios.')
    }}
    
function resultado() {
        

        let tamanho = valores.length;                           /* tamanho da lista */
        let tmh = document.getElementById('tmh')
        tmh.innerText = `Seu array tem ${tamanho} elementos`

        let maior = Math.max(... valores)                       /* maior valor da lista */
        let mir = document.getElementById('mir')
        mir.innerHTML = `O maior valor do array foi: ${maior}`


        let menor = Math.min(... valores)                       /* menor valor da lista */
        let mnr = document.getElementById('mnr')
        mnr.innerHTML = `O menor Valor do array foi: ${menor}`

        const soma = valores.reduce((acumulador, valortotal) => acumulador + valortotal, 0) /* soma dos valores da lista */
        let sm = document.getElementById('sm')
        sm.innerHTML = `a soma dos dados é: ${soma}`

        let media = soma / valores.length
        let mda = document.getElementById('mda')
        mda.innerHTML = `A média dos valores é: ${media}`
        
    }
    
    


