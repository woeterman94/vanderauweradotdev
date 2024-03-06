//WARGAMES JOSHUA SIMULATOR 3000

// $('html').on('click',function(){
//   $('span').focus();
// });
// var g = 0;
// $('span').on('input',function(){
//   var v = $(this).text(), l = $('li:last-of-type'), t = $(this);
//   v = v.replace(/\s/g, '');
//   switch(v.toLowerCase()){
//     case"no": l.after('<li>CMON I WANNA PLAY'); t.text(''); break;
//     case"yes": case"da": case"si": case"ja": l.after('<li>HERE ARE THE GAMES: CHESS, POKER, WAR'); g=1; 
//       t.text('');  break;
//     case"chess":  case"poker": case"war":
//       l.after('<li>GLOBAL THERMONUCLEAR WAR INITIATED, HAVE A NICE DAY<br><br>WINNER: NONE'); 
//       $('center').text('Only winning move is not to play!');t.text('3...2....1...'); setTimeout(function(){ l.after('<iframe width="420" height="315" src="//www.youtube.com/embed/q6iY9DHOeCg?modestbranding=0&rel=0&autoplay=1&controls=0&showinfo=1&autohide=1" frameborder="0" allowfullscreen></iframe>'); },1000);  break;
//     default:
//     if(g==1 && v.length>5){ l.after('<li>WHAT A STRANGE GAME.'); t.text(''); }
//     if(g==0 && v.length>9){ l.after('<li>QUIT FOOLING AROUND,<br> ANSWER YES / NO'); t.text(''); } break;
//   }
// });

setInterval(function () {
  $('.blink').toggleClass("blinker");
  i++;
  if (i == 6)
    clearInterval(b);
}, 400);