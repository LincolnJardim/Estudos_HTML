let valores = []

function adicionar() {
    let num = document.getElementById('numerotxt')
    let numero = Number(num.value)
    let listaValores = document.getElementById('lista')

    if (numero < 1 || numero > 100 || valores.indexOf(numero) != -1) {
        window.alert('Número inválido ou já adicionado na lista!')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${numero} foi adicionado`

        listaValores.appendChild(item)

        valores.push(numero)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let resultado = document.getElementById('resultado')
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tamanho = valores.length
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]

        resultado.innerHTML = ''
        
        for (let pos = 0; pos < tamanho; pos++) {
            soma += valores[pos]
            
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        let media = soma / tamanho

        resultado.innerHTML += `<p>Ao todo, temos ${tamanho} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valor digitados é ${media}</p>`

    }
}
