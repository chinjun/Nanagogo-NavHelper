/* eslint quote-props: [2, "consistent"] */
'use strict';

/* todo: 
    incorporate group pages, like e.g. http://7gogo.jp/lp/oQHZ66SVotLWkVIvojdMdG==
    verify that all the links go to the correct member pages
    sort by name before adding (currently sorted by kana ordering, may wish to sort by latin ordering if eng names are displayed)
    
    name -> title or jpn_name
    color -> background
    
    track user options using chrome storage: https://developer.chrome.com/extensions/storage
*/



$(function() {
    // will this survive ?
    var g_open = {};
    var row_height = '26';
    var main = $('body').children();
    var local_url = window.location.href;
    
    main.css('margin-left', '100px');
    $('.l-header').css('margin-left', '100px');
    $('body').append('<div class="left-contents"></div>');

    // Still a lot of repetition...
    $.each(nanagogo_groups, function(group, group_data){
        // can remove conditional check once all groups are implemented
        if (!group_data.empty) {
            var gclass = group_data.css_class;
            g_open[gclass] = false;
            
            $('<div class="group48 ' + gclass + '">' + group_data.title + '</div>')
            .css('background', group_data.background)
            .appendTo('.left-contents');
            
            $.each(group_data.teams, function(team, team_data){
                var tclass = team_data.css_class;
                
                $('<div class="team48 ' + gclass + ' ' + tclass + '">' + team_data.title + '</div>')
                .css('background', team_data.background)
                .appendTo('.left-contents');
                
                $('<ul class="list48 ' + gclass + ' ' + tclass + '"></ul>')
                .css("height", team_data.members.length * row_height + 'px')
                .appendTo('.left-contents');
                
                
                
                $.each(team_data.members, function(member, member_data) {
                    $('<li></li>').append('<a href="' + member_data.url + '" target="_parent">' + member_data.jpn_name + '</a>')
                    .appendTo('.list48.' + tclass);
                });
                
                // does this need to be here or after the members are assigned?
                $('.team48.' + tclass)
                .click(function(){$('.list48.' + tclass).slideToggle()});
                
            });
            
            $('.group48.' + gclass).click(function(){
                if (g_open[gclass] === true) { 
                  $('.list48.' + gclass).slideUp();
                  $('.team48.' + gclass).slideUp();
                  g_open[gclass] = false;
                }
                else { 
                  $(".team48." + gclass).slideDown();
                  g_open[gclass] = true;
                }
            });
            
        };
    });
  
    var curr_member = $('a[href="' + local_url + '"]');
    
    $('a[href="' + local_url + '"]').parent().addClass('highlight')
    .parentsUntil('.ul').slideDown()
    .prev().slideDown();
  
  
  /* // old method
  // todo: do all of this with a single function
  
   
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
  
  $('body').append(nav);
  
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
*/
    
});
