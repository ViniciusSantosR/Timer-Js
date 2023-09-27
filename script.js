function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var txt = document.getElementById('txt')
    var data = new Date();
    var mim = data.getMinutes();
    var hora = data.getHours();

    if(hora >= 0 && hora <= 9){
        var hora = '0'+hora
    }

    msg.innerHTML = `Agora são ${hora}:${mim} horas.`;

    if(hora >= 5 && hora < 12){
        txt.innerHTML = 'Bom Dia!';
        img.src = 'IMGs/dia.png';
        document.body.style.background = '#34b1eb';
    }
    
    else if(hora >= 12 && hora <= 18){
        txt.innerHTML = 'Boa Tarde!';
        img.src = 'IMGs/tarde.png';
        document.body.style.background = '#E38B41';
    }
    
    else if(hora >= 19 && hora <= 24){
        txt.innerHTML = 'Boa Noite!';
        img.src = 'IMGs/noite.png';
        document.body.style.background = '#4841E3';
    }

    else{
        txt.innerHTML = 'Boa Madrugada!';
        img.src = 'IMGs/madrugada.png';
        document.body.style.background = '#3a31b5';
    }
}
