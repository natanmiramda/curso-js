function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >=0 && hora < 12)
    {  img.src = 'manhap.png'}
    else if (hora>=12 && hora < 18){
        img.src = 'tardep.png'
    }
    else{
        img.src = 'noitep.png'
    }


}