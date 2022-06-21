// css の変更
$('.contener').css('color','blue');

function showWord(){
    $('.jQuery_fadeOut').show();
}

function fadeOutWord(){
    $('.jQuery_fadeOut').fadeOut();
}



function changeColor(){
   let colorElement=document.getElementById('inputColor');
   console.log(colorElement.value);
    $('#colorWord').css('color',colorElement.value);
}

function colorChange(){
    let colorElement=document.getElementById('inputColorChange');
    console.log(colorElement.value);
    $('#colorChangeWord').css('color',colorElement.value);
}
