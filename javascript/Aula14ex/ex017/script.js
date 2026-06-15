function multiplicar() {
    var textoNum = document.getElementById('numero').value
    var textoTabuada = document.getElementById('tabuada')

    var num = Number(textoNum)

    if (textoNum == '') {
        window.alert('Campo vazio, digite um número!')
    } else {
        var c = 1
        textoTabuada.innerHTML = ''
        while (c <= 10) {

            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            
            item.value = `tab${c}`
            
            textoTabuada.appendChild(item)
            c++

        }
    }
}