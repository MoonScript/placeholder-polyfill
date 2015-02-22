// Set both the native placeholder and the <label> (for polyfill)
$.fn.setPlaceholder = function(value) {
  return this.attr('placeholder', value).next('label.placeholder').text(value);
};

// Update the field's value, but trigger custom event so the <label> can be shown or hidden
$.fn.setValue = function(value) {
  return this.trigger('setValue.placeholder').val(value);
};