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

  // 参考サイト
  // https://techacademy.jp/magazine/9459#:~:text=%E3%82%BB%E3%83%AC%E3%82%AF%E3%82%BF%E3%81%A8%E3%81%AF%E3%80%81jQuery%E3%81%A7,%E3%81%8C%E3%81%82%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%97%E3%81%BE%E3%81%99%E3%80%82&text=%E3%81%93%E3%81%AEHTML%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6,%E3%81%A8%E3%81%84%E3%81%86%E3%82%BB%E3%83%AC%E3%82%AF%E3%82%BF%E3%82%92%E4%BD%BF%E3%81%84%E3%81%BE%E3%81%99%E3%80%82

  // jqueryのセレクタ タグで指定
  $("p").css("color","blue");
  let pTag=$("p").type;
  console.log("pTag->"+pTag);

  //クラス名 .がクラス名を表す
  $(".pKisu").css("color","green");


  // IDでの指定
  $("#h1").css("color","orange");
  // classが . ID が #で指定する
  // 一回でclass,id を指定する。
  $("#h2,.pGusu").css("color","aqua");


  // idなので#
  let testInput=$("#testInput").val();
  console.log("testInput->"+testInput);

  $("#title").html("テスト");

}
