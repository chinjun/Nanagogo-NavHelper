/* eslint quote-props: [2, "consistent"] */
'use strict';

/* todo: 
    incorporate group pages, like e.g. http://7gogo.jp/lp/oQHZ66SVotLWkVIvojdMdG==
    verify that all the links go to the correct member pages
*/

/* nanagogo_groups['AKB48']['Teams']['Team A']['岩田華怜']['english_name'] == 'Iwata Karen' */
/* member data: url, name, kennin status? */
var nanagogo_groups = {
    'AKB48' : {
        'Teams' : {
            'Team A' : {
                // Annin's link is to a 10th gen 755
                // '入山杏奈'     : { 'url' : 'http://7gogo.jp/lp/oQHZ66SVotLWkVIvojdMdG==', 'english_name' : 'Iriyama Anna' },
                '岩田華怜'     : { 'url' : 'http://7gogo.jp/lp/pdAqgqtgPFAWkVIvojdMdG==', 'english_name' : 'Iwata Karen' },
                '小笠原茉由'   : { 'url' : 'http://7gogo.jp/lp/34cMib_tE2LWkVIvojdMdG==', 'english_name' : 'Ogasawara Mayu' },
                '大和田南那'   : { 'url' : 'http://7gogo.jp/lp/za4CH4HIu87WkVIvojdMdG==', 'english_name' : 'Owada Nana' },
                '大家志津香'   : { 'url' : 'http://7gogo.jp/lp/SGo2TE6AAx-WkVIvojdMdG==', 'english_name' : 'Oya Shizuka' },
                '小嶋菜月'     : { 'url' : 'http://7gogo.jp/lp/_Lpk-NZZSzEWkVIvojdMdG==', 'english_name' : 'Kojima Natsuki' },
                '小嶋陽菜'     : { 'url' : 'http://7gogo.jp/lp/vY_r5fWR7IlWkVIvojdMdG==', 'english_name' : 'Kojima Haruna' },
                '佐々木優佳里' : { 'url' : 'http://7gogo.jp/lp/qCdWye1yFdeWkVIvojdMdG==', 'english_name' : 'Sasaki Yukari' },
                '島崎遥香'     : { 'url' : 'http://7gogo.jp/lp/mp3LH4G-d8LWkVIvojdMdG==', 'english_name' : 'Shimazaki Haruka' },
                '白間美瑠'     : { 'url' : 'http://7gogo.jp/lp/dWtbBcuTI4tWkVIvojdMdG==', 'english_name' : 'Shiroma Miru' },
                '高橋みなみ'    : { 'url' : 'http://7gogo.jp/lp/7yRhOGmxoKhWkVIvojdMdG==', 'english_name' : 'Takahashi Minami' },
                '田北香世子'   : { 'url' : 'http://7gogo.jp/lp/w3De4uJkhUYWkVIvojdMdG==', 'english_name' : 'Takita Kayoko' },
                '谷口めぐ'      : { 'url' : 'http://7gogo.jp/lp/feeeK4iBLaEWkVIvojdMdG==', 'english_name' : 'Taniguchi Megu' },
                '中西智代梨'   : { 'url' : 'http://7gogo.jp/lp/ELMicfC5qphWkVIvojdMdG==', 'english_name' : 'Nakanishi Chiyori' },
                '中村麻里子'   : { 'url' : 'http://7gogo.jp/lp/UKK9qKjtuxtWkVIvojdMdG==', 'english_name' : 'Nakamura Mariko' },
                '西山怜那'     : { 'url' : 'http://7gogo.jp/lp/NAVdqtYXjrYWkVIvojdMdG==', 'english_name' : 'Nishiyama Rena' },
                '平田梨奈'     : { 'url' : 'http://7gogo.jp/lp/MEAMz6W4JcRWkVIvojdMdG==', 'english_name' : 'Hirata Rina' },
                '前田亜美'     : { 'url' : 'http://7gogo.jp/lp/BkoI5GQgTWRWkVIvojdMdG==', 'english_name' : 'Maeda Ami' },
                '宮崎美穂'     : { 'url' : 'http://7gogo.jp/lp/7cVrRTmSjHYWkVIvojdMdG==', 'english_name' : 'Miyazaki Miho' },
                '宮脇咲良'     : { 'url' : 'http://7gogo.jp/lp/zk0jj7dC0w1WkVIvojdMdG==', 'english_name' : 'Miyawaki Sakura' },
                '横山由依'     : { 'url' : 'http://7gogo.jp/lp/2M575KWQ8qRWkVIvojdMdG==', 'english_name' : 'Yokoyama Yui' },
                // '山田菜々美' : { 'url' : 'http://', 'english_name' : 'Yamada Nanami' },
            },
            'Team K' : {
                '相笠萌'       : { 'url' : 'http://7gogo.jp/lp/QskGSndOo7HWkVIvojdMdG==', 'english_name' : 'Aigasa Moe' },
                // '阿部マリア'     : { 'url' : '', 'english_name' : 'Abe Maria' ),
                '石田晴香'     : { 'url' : 'http://7gogo.jp/lp/dT4zuHTWQO-WkVIvojdMdG==', 'english_name' : 'Ishida Haruka' },
                '市川愛美'     : { 'url' : 'http://7gogo.jp/lp/CrLRVXJvQ-EWkVIvojdMdG==', 'english_name' : 'Ichikawa Manami' },
                '兒玉遥'       : { 'url' : 'http://7gogo.jp/lp/hiJUcq7tYoaWkVIvojdMdG==', 'english_name' : 'Kodama Haruka' },
                '篠崎彩奈'     : { 'url' : 'http://7gogo.jp/lp/2GolEnidmfAWkVIvojdMdG==', 'english_name' : 'Shinozaki Ayana' },
                '島田晴香'     : { 'url' : 'http://7gogo.jp/lp/BQksvx6o1o1WkVIvojdMdG==', 'english_name' : 'Shimada Haruka' },
                '下口ひなな'    : { 'url' : 'http://7gogo.jp/lp/BO1k-YmgHZaWkVIvojdMdG==', 'english_name' : 'Shimoguchi Hinana' },
                '鈴木まりや'     : { 'url' : 'http://7gogo.jp/lp/7tXReNFs0Y7WkVIvojdMdG==', 'english_name' : 'Suzuki Mariya' },
                '高城亜樹'     : { 'url' : 'http://7gogo.jp/lp/XwmKlo1I1xxWkVIvojdMdG==', 'english_name' : 'Takajo Aki' },
                '田野優花'     : { 'url' : 'http://7gogo.jp/lp/U-BFAd1TcCtWkVIvojdMdG==', 'english_name' : 'Tano Yuka' },
                // '中田ちさと'     : { 'url' : '', 'english_name' : 'Nakata Chisato' },
                // '中野郁海'     : { 'url' : '', 'english_name' : 'Nakano Ikumi' },
                '永尾まりや'     : { 'url' : 'http://7gogo.jp/lp/7LwfEpd2OexWkVIvojdMdG==', 'english_name' : 'Nagao Mariya' },
                '藤田奈那'     : { 'url' : 'http://7gogo.jp/lp/iYG4g2iR1EAWkVIvojdMdG==', 'english_name' : 'Fujita Nana' },
                '松井珠理奈'   : { 'url' : 'http://7gogo.jp/lp/wgAO-66VrkRWkVIvojdMdG==', 'english_name' : 'Matsui Jurina' },
                '峯岸みなみ'    : { 'url' : 'http://7gogo.jp/lp/4nXwYUY-vNaWkVIvojdMdG==', 'english_name' : 'Minegishi Minami' },
                '向井地美音'   : { 'url' : 'http://7gogo.jp/lp/xJyc1EyBe-LWkVIvojdMdG==', 'english_name' : 'Mukaichi Mion' },
                '武藤十夢'     : { 'url' : 'http://7gogo.jp/lp/HAvLciwSA0hWkVIvojdMdG==', 'english_name' : 'Muto Tomu' },
                '茂木忍'       : { 'url' : 'http://7gogo.jp/lp/WFzHcGl0iolWkVIvojdMdG==', 'english_name' : 'Mogi Shinobu' },
                '湯本亜美'     : { 'url' : 'http://7gogo.jp/lp/1wHIP97TSG-WkVIvojdMdG==', 'english_name' : 'Yumoto Ami' },
                '山本彩'       : { 'url' : 'http://7gogo.jp/lp/YZhq2EGQ5OlWkVIvojdMdG==', 'english_name' : 'Yamamoto Sayaka' },
            },
            'Team B' : {},
            'Team 4' : {} /*,
            'Team 8' : {},*/ /* Team 8 is not on 755 */
        }
    },
    'SKE48' : {},
    'NMB48' : {},
    'HKT48' : {},
    'NGT48' : {},
    /* nogizaka formatting needs to be revised, or else just remove them from this list */
    'Nogizaka46' : {
        'Teams' : {
            'Nogizaka46' : {
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
            }
        }
    }
}


/* It would be better if teams were kept separate even when showing the whole roster */
/* Perhaps define teams and colours some other way than above? */
/* eventually make it possible to choose. right now this list does nothing */
var list_select_options = ['AKB48', 'Team A', 'Team K', 'Team B', 'Team 4', 'Nogizaka46']


/* set variables, eventually allow these to be chosen by the user */
var member_list = nanagogo_groups['AKB48']

var akb48_open = false;

$(function() {
  /* build the core of the menu manually */
  var nav = $('<div class="left-contents">\
  <div class="group48 akb48">' + 'AKB48' + '</div>\
  <div class="team48 akb48 teama">' + 'Team A' + '</div>\
  <ul class="list48 akb48 teama"></ul>\
  <div class="team48 akb48 teamk">' + 'Team K' + '</div>\
  <ul class="list48 akb48 teamk"></ul>\
  <div class="team48 akb48 teamb">' + 'Team B' + '</div>\
  <ul class="list48 akb48 teamb"></ul>\
  <div class="team48 akb48 team4">' + 'Team 4' + '</div>\
  <ul class="list48 akb48 team4"></ul>\</div>');
  var main = $('body').children();
  var local_url = window.location.href;
  
  main.css('margin-left', '100px');
  $('.l-header').css('margin-left', '100px');
  $('body').append(nav);
  
  /* todo: do all of this with a single function */
  var row_height = 26;
  var member_count = 0;
  $.each(member_list['Teams']['Team A'], function(member, data) {
    $('<li></li>')
      .append('<a href="' + data['url'] + '" target="_parent">' + member + '</a>')
      .appendTo('.list48.teama');
      member_count += 1;
  });
  $('.list48.teama').css("height", member_count * row_height + 'px');
  
  
  member_count = 0;
  $.each(member_list['Teams']['Team K'], function(member, data) {
    $('<li></li>')
      .append('<a href="' + data['url'] + '" target="_parent">' + member + '</a>')
      .appendTo('.list48.teamk');
      member_count += 1;
  });
  $('.list48.teamk').css("height", member_count * row_height + 'px');
  
  member_count = 0;
  $.each(member_list['Teams']['Team B'], function(member, data) {
    $('<li></li>')
      .append('<a href="' + data['url'] + '" target="_parent">' + member + '</a>')
      .appendTo('.list48.teamb');
      member_count += 1;
  });
  $('.list48.teamb').css("height", member_count * row_height + 'px');
  
  member_count = 0;
  $.each(member_list['Teams']['Team 4'], function(member, data) {
    $('<li></li>')
      .append('<a href="' + data['url'] + '" target="_parent">' + member + '</a>')
      .appendTo('.list48.team4');
      member_count += 1;
  });
  $('.list48.team4').css("height", member_count * row_height + 'px');
  
  $('a[href="' + local_url + '"]').parentsUntil('.ul').slideDown();
  $('a[href="' + local_url + '"]').parentsUntil('.ul').prev().slideDown();
  
  $(".group48.akb48").click(function(){
    if (akb48_open === true) { 
      $(".list48.akb48").slideUp();
      $(".team48.akb48").slideUp();
      akb48_open = false;
    }
    else { 
      $(".team48.akb48").slideDown();
      akb48_open = true;
    }
  });
  
  $("div.teama").click(function(){
    $("ul.teama").slideToggle();
  });
  
  $("div.teamk").click(function(){
    $("ul.teamk").slideToggle();
  });
  
  $("div.teamb").click(function(){
    $("ul.teamb").slideToggle();
  });
  
  $("div.team4").click(function(){
    $("ul.team4").slideToggle();
  });
  
  
});
