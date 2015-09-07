/* eslint quote-props: [2, "consistent"] */
'use strict';


var nanagogo_teama = {
  '入山杏奈'   : { 'url' : 'http://7gogo.jp/lp/oQHZ66SVotLWkVIvojdMdG==', 'english_name' : 'Iriyama Anna' },
  '岩田華怜'   : { 'url' : 'http://7gogo.jp/lp/pdAqgqtgPFAWkVIvojdMdG==', 'english_name' : 'Iwata Karen' },
  /* Maachun's 755 is not on Stage48 */
  '小笠原茉由' : { 'url' : 'http://7gogo.jp/lp/34cMib_tE2LWkVIvojdMdG==', 'english_name' : 'Ogasawara Mayu' },
  '大和田南那' : { 'url' : 'http://7gogo.jp/lp/za4CH4HIu87WkVIvojdMdG==', 'english_name' : 'Owada Nana' },
  '大家志津香' : { 'url' : 'http://7gogo.jp/lp/SGo2TE6AAx-WkVIvojdMdG==', 'english_name' : 'Oya Shizuka' },
  '小嶋菜月'   : { 'url' : 'http://7gogo.jp/lp/_Lpk-NZZSzEWkVIvojdMdG==', 'english_name' : 'Kojima Natsuki' },
  '小嶋陽菜'   : { 'url' : 'http://7gogo.jp/lp/vY_r5fWR7IlWkVIvojdMdG==', 'english_name' : 'Kojima Haruna' },
'佐々木優佳里' : { 'url' : 'http://7gogo.jp/lp/qCdWye1yFdeWkVIvojdMdG==', 'english_name' : 'Sasaki Yukari' },
  '島崎遥香'   : { 'url' : 'http://7gogo.jp/lp/mp3LH4G-d8LWkVIvojdMdG==', 'english_name' : 'Shimazaki Haruka' },
  '白間美瑠'   : { 'url' : 'http://7gogo.jp/lp/dWtbBcuTI4tWkVIvojdMdG==', 'english_name' : 'Shiroma Miru' },
  '高橋みなみ' : { 'url' : 'http://7gogo.jp/lp/7yRhOGmxoKhWkVIvojdMdG==', 'english_name' : 'Takahashi Minami' },
  '田北香世子' : { 'url' : 'http://7gogo.jp/lp/w3De4uJkhUYWkVIvojdMdG==', 'english_name' : 'Takita Kayoko' },
  '谷口めぐ'   : { 'url' : 'http://7gogo.jp/lp/feeeK4iBLaEWkVIvojdMdG==', 'english_name' : 'Taniguchi Megu' },
  '中西智代梨' : { 'url' : 'http://7gogo.jp/lp/ELMicfC5qphWkVIvojdMdG==', 'english_name' : 'Nakanishi Chiyori' },
  '中村麻里子' : { 'url' : 'http://7gogo.jp/lp/UKK9qKjtuxtWkVIvojdMdG==', 'english_name' : 'Nakamura Mariko' },
  '西山怜那'   : { 'url' : 'http://7gogo.jp/lp/NAVdqtYXjrYWkVIvojdMdG==', 'english_name' : 'Nishiyama Rena' },
  '平田梨奈'   : { 'url' : 'http://7gogo.jp/lp/MEAMz6W4JcRWkVIvojdMdG==', 'english_name' : 'Hirata Rina' },
  '前田亜美'   : { 'url' : 'http://7gogo.jp/lp/BkoI5GQgTWRWkVIvojdMdG==', 'english_name' : 'Maeda Ami' },
  /* Miyazaki Miho's 755 is not on Stage48 */
  '宮崎美穂'   : { 'url' : 'http://7gogo.jp/lp/7cVrRTmSjHYWkVIvojdMdG==', 'english_name' : 'Miyazaki Miho' },
  '宮脇咲良'   : { 'url' : 'http://7gogo.jp/lp/zk0jj7dC0w1WkVIvojdMdG==', 'english_name' : 'Miyawaki Sakura' },
  /* '山田菜々美' : { 'url' : 'http://', 'english_name' : 'Yamada Nanami' }, */
  '横山由依'   : { 'url' : 'http://7gogo.jp/lp/2M575KWQ8qRWkVIvojdMdG==', 'english_name' : 'Yokoyama Yui' },
}


var nanagogo_teamk = {}
var nanagogo_teamb = {}
var nanagogo_team4 = {}

/* It would be better if teams were kept separate even when showing the whole roster */
/* Also, an "all48" setting would need to account for kennin */
/* Perhaps define teams and colours some other way than above? */
var nanagogo_akb48 = $.extend({}, nanagogo_teama, nanagogo_teamk, nanagogo_teamb, nanagogo_team4)

/* eventually make it possible to choose. right now this list does nothing */
var list_select_options = ['AKB48', 'Team A', 'Team K', 'Team B', 'Team 4', 'Nogizaka46']

var nogizaka = {
  '秋元真夏': 'http://7gogo.jp/lp/EHJO22HByVYWkVIvojdMdG==',
  '生田絵梨花': 'http://7gogo.jp/lp/qVRNAvlchjLWkVIvojdMdG==',
  '生駒里奈': 'http://7gogo.jp/lp/jkOW8cD6yvaWkVIvojdMdG==',
  '伊藤かりん': 'http://7gogo.jp/lp/mQefyXKRyixWkVIvojdMdG==',
  '伊藤純奈': 'http://7gogo.jp/lp/QQIMkqI4yZLWkVIvojdMdG==',
  '井上小百合': 'http://7gogo.jp/lp/m2nb5PEEVF-WkVIvojdMdG==',
  '衛藤美彩': 'http://7gogo.jp/lp/IehN_dxcAlhWkVIvojdMdG==',
  '川後陽菜': 'http://7gogo.jp/lp/848OPG81AWtWkVIvojdMdG==',
  '川村まひろ': 'http://7gogo.jp/lp/EJjT0Dzb7XlWkVIvojdMdG==',
  '北野日奈子': 'http://7gogo.jp/lp/2Fl8X2eu81xWkVIvojdMdG==',
  '斎藤ちはる': 'http://7gogo.jp/lp/ZPRzeIO_rx-WkVIvojdMdG==',
  '斉藤優里': 'http://7gogo.jp/lp/WcgJ5NeKFhlWkVIvojdMdG==',
  '桜井玲香': 'http://7gogo.jp/lp/967Kcw7O3WLWkVIvojdMdG==',
  '白石麻衣': 'http://7gogo.jp/lp/-41Jgd7qLKLWkVIvojdMdG==',
  '新内眞衣': 'http://7gogo.jp/lp/CvkGFK1FrRAWkVIvojdMdG==',
  '高山一実': 'http://7gogo.jp/lp/slEyH7eOqmEWkVIvojdMdG==',
  '中田花奈': 'http://7gogo.jp/lp/MMhO048Vl1EWkVIvojdMdG==',
  '西野七瀬': 'http://7gogo.jp/lp/ipNEKvlo_eAWkVIvojdMdG==',
  '能條愛未': 'http://7gogo.jp/lp/sPHC9jWzi6xWkVIvojdMdG==',
  '橋本奈々未': 'http://7gogo.jp/lp/JitPAdGLEXaWkVIvojdMdG==',
  '星野みなみ': 'http://7gogo.jp/lp/JV4GaKQJZnaWkVIvojdMdG==',
  '堀未央奈': 'http://7gogo.jp/lp/59sEGXLHsYEWkVIvojdMdG==',
  '松村沙友理': 'http://7gogo.jp/lp/9SGk_al6McHWkVIvojdMdG==',
  '山崎怜奈': 'http://7gogo.jp/lp/loSdLlzZXdtWkVIvojdMdG==',
  '渡辺みり愛': 'http://7gogo.jp/lp/7J9xwxaZ77eWkVIvojdMdG==',
  '和田まあや': 'http://7gogo.jp/lp/5eM1jJlrHM1WkVIvojdMdG=='
};

/* set variables, eventually allow these to be chosen by the user */
var page_title = 'AKB48'
var team_select = nanagogo_teama

$(function() {
  var nav = $('<div class="left-contents"><p class="title-48g">' + page_title + '</p><ul class="list-48g"></ul></div>');
  var main = $('body').children();

  main.css('margin-left', '100px');
  $('.l-header').css('margin-left', '100px');
  $('body').append(nav);

  $.each(team_select, function(member, data) {
    $('<li></li>')
      .append('<a href="' + data['url'] + '" target="_parent">' + member + '</a>')
      .appendTo('.list-48g');
  });
});
