$(function(){
   $('#btn-plus').click(function(){
      var current = Number($('#counter').html());
      current++;
      $('#counter').html(current);
   });
   $('#btn-minus').click(function(){
      var current = Number($('#counter').html());
      if (current===0) return;
      current--;
      $('#counter').html(current);
   });
});