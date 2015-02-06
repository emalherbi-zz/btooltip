/*!
 * btooltip v1.0.0 (http://emalherbi.github.io/btooltip/)
 * Copyright 2010-2015 emalherbi
 * Licensed under MIT (http://en.wikipedia.org/wiki/MIT_License)
 */
+(function($) {
  if (!$.Btooltip) {
    $.Btooltip = {};
  }

  $.Btooltip.start = function(el, options) {
    var base = this;

    base.$el = $(el);
    base.el = el;

    base.init = function() {
      base.options = $.extend({},$.Btooltip.settings, options);
      return true;
    };

    base.toggle = function() {
      var opt = {
        'placement': base.options.placement,
        'title': base.options.title
      };

      base.$el.tooltip('destroy').tooltip(opt).tooltip('toggle');

      if (base.options.destroy) {
        window.setTimeout(function() { base.$el.tooltip('destroy'); }, base.options.destroyTime);
      }

      return true;
    };

    base.init();
    base.toggle();

    return true;
  };

  /**
   * BTooltip Settings.
   *
   * @param placement   | type : string  | how to position the popover - top | bottom | left | right
   * @param title       | type : string  | default title value if `title` tag isn't present
   * @param destroy     | type : boolean | destroy tooltip or not
   * @param destroyTime | type : number  | time to tooltip destroy
   *
   */
  $.Btooltip.settings = {
    placement : 'top',
    title : 'Tooltip on top...',
    destroy : true,
    destroyTime : 2000
  };

  $.fn.btooltip = function(options) {
    var r = null;

    this.each(function() {
      r = $.Btooltip.start(this, options);
    });

    return r;
  };

})(jQuery);
