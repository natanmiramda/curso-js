function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.ariaValueMax.length == 0 || fim.ariaValueMax.length == 0 || passo.ariaValueMax.length == 0) {
    window.alert('[ERRO] faltam dado!')
  } else{
    res.innerHTML= 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    for(let c = i; c <= f; c += p) {
        res.innerHTML += '${c}'
    }
  }

}