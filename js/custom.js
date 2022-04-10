//上部画像の設定
$('.list--gallery').slick({
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  fade: true, //フェードの有効化
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.list--choice').slick({
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 4, //表示させるスライドの数
  focusOnSelect: true, //フォーカスの有効化
  asNavFor: '.list--gallery', //連動させるスライドショーのクラス名
});

//下の選択画像をスライドさせずに連動して変更させる設定。
$('.list--gallery').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var index = nextSlide; //次のスライド番号
  //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
  $(".list--choice .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});
