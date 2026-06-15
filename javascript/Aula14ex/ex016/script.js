function calcular() {
var textoInicio = document.getElementById('inicio').value
var textoPasso = document.getElementById('passo').value
var textofim = document.getElementById('fim').value
var resultado = document.getElementById('resultado')

var nInicio = Number(textoInicio)
var nPasso = Number(textoPasso)
var nFim = Number(textofim)

window.alert(`o inicio é ${nInicio}, o passo é ${nPasso} e o fim é ${nFim}`)


if (textoInicio == '' || textoPasso == '' || textofim == '') {
    resultado.innerHTML = 'Impossível contar'
} else {
        if (nPasso <= 0) {
        window.alert('Passo invalído! Considerando PASSO 1')
        nPasso = 1}
        
        resultado.innerHTML = 'Contando: <br>'
        if (nInicio < nFim){
            for (var c = nInicio; c <= nFim; c += nPasso){
            resultado.innerHTML += `${c} 👉`
            }
        } else {
            for (var c = nInicio; c >= nFim; c -= nPasso){
            resultado.innerHTML += `${c} 👉`
            }
        }

    resultado.innerHTML += `🏁`
    }
}