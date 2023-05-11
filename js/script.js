$(function(){// ←プログラム実行宣言
  $('i').click(function(){// ←クリックしたときの処理をするclick()メソッド
    $('ul').toggleClass('.open');// ←クラスを付け外しするメソッド
    $("ul").slideToggle(200);// ←メニューが開閉するメソッド。（）内の数字はは開閉の速さ
  });
  return false;// ←プログラム終了宣言
});