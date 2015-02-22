// Placeholder feature detection
if ('placeholder' in document.createElement('input')) {

  // Hide <label> in modern browsers
  $(document.documentElement).addClass('inputplaceholder');

} else {

  // Hide/show the <label> when text is added/removed
  $(document).on('keydown.placeholder cut.placeholder paste.placeholder setValue.placeholder', 'input[placeholder],textarea[placeholder]', function() {
    var $field = $(this);
    var initialValue = $field.val();
    setTimeout(function() {
      var updatedValue = $field.val();
      if (updatedValue !== initialValue) {
        $field.toggleClass('placeholder-state-hidden', updatedValue.length > 0);
      }
    }, 0);
  });

}