/* app js */
// Shorthand for $( document ).ready()
$(function() {
  console.log( "ready!" );

  hljs.initHighlightingOnLoad();

  $('#btnLeft').click(function() {
    $('#btnLeft').btooltip({title : 'Tooltip on left', placement: 'left'});
  });

  $('#btnTop').click(function() {
    $('#btnTop').btooltip({title : 'Tooltip on top', placement: 'top'});
  });

  $('#btnBottom').click(function() {
    $('#btnBottom').btooltip({title : 'Tooltip on bottom', placement: 'bottom'});
  });

  $('#btnRight').click(function() {
    $('#btnRight').btooltip({title : 'Tooltip on right', placement: 'right'});
  });
});
