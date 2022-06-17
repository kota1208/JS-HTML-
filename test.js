console.log("test");


// DOMとは　JSを自由に操作する仕組み。DOMは階層構造になっており、ノードを操作していく



function testFunction(){
  const testObj=document.getElementById("test");
  console.log("testContent:"+testObj.textContent);
  console.log("testValue:"+testObj.value);



  let testValue=document.getElementById("testValue");
  // エラー
  console.log("testContent:"+testValue.textContent);
  console.log("testValue:"+testValue.value);


  //innerhtmlで書き換える
  let wrapObj=document.getElementById("wrap");
  wrap.innerHtml="<h1>innerHtml</h1>";
  console.log(wrap.innerHtml="<h1>innerHtml</h1>");


  // createElementの中で、作成するタグを指定する
  var p = document.createElement('h1');

  //テキストを追加する
  p.textContent = 'これはサンプルです';

  //body要素内にp要素を配置する
  document.body.appendChild( p );

  let list=[];
  for(i=0;i<10;i++){
    list.push(i);
  }
  console.log(list);

  list.forEach(value => {
    console.log(value);
  });

  let labelObj=document.createElement('label');
  let selectObj=document.createElement('option');
  console.log("option->"+selectObj);
  selectObj.textContent="piyo";

  labelObj.textContent=selectObj;
  console.log(labelObj);
  document.body.appendChild(labelObj);

  // jqueryのセレクタ
  $("p").css("color","blue");
}
