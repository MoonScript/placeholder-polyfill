# Placeholder Polyfill for IE9
Described in this Socialcast engineering blog post:
[blog.socialcast.com/placeholder-polyfill-for-old-ie](http://blog.socialcast.com/placeholder-polyfill-for-old-ie/)

Working demo on this login page:
[press.socialcast.com](https://press.socialcast.com/login)
> Check it out if you're using IE < 10

## Required markup
Examples for `<input>` and `<textarea>` in [markup.html](markup.html).

### Server-side populated values
When the `<input>` or `<textarea>` is pre-populated with a value from the server-side, a class of `placeholder-state-hidden` must be added to the field, in order to hide the `<label>`.

## Required CSS
Defined in [style.css](style.css).
> The padding/positioning of the `<label>` will have to be adjust so that its text **exactly** overlaps with the spot where text would be entered into the text field.

## JavaScript
Required code in [placeholder.js](placeholder.js).

Additional convenience plugins located in [plugins.js](plugins.js):
* `.setValue(value)`: Instead of using `.val(value)` to programmatically change the field value via JavaScript, use this to make sure that the label gets shown/hidden properly.
* `.setPlaceholder(placeholder)`: To programmatically change the placeholder text via JavaScript, use this to make sure that both the placeholder attribute **and** the `<label>` text gets updated.
