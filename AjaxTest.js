function AJjaxTest(){
  function(){
    $.ajax({
      url:'https://google.com',
      dataType:'html'
    },
    error:function(data){
      alert('error');
    }
  });
}
