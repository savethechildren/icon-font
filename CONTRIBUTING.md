# Contributing to Save the Children Icon Font

Looking to contribute something? **Here's how you can help.**



## Requesting new icons

New icons mostly start as requests by the [Save the Children community on GitHub](../../issues). 


## Create new SVG icons

New icons can be created and submitted in a pull request. They should adhere to the design standards set out below.


## Design standards for SVG icons

Icons should be designed according to the [Save the Children brand guidelines](https://globalbrand.savethechildren.net/Guidelines/STC%20English%20Global%20Brand%20Identity%20Guidelines/STC_Brand_Identity_Guidelines_LowRes.pdf).

The SVG icons should also follow the keyline shapes principles set out for [Android icons](https://material.io/guidelines/style/icons.html#icons-product-icons), except the padding around the icon is not necessary. As such SVG icons should be set out within a 176x176 square. You can use the inkscape-template.svg template as a starting point.

Icons should be saved in **valid and clean** SVG.


## Pull requests

- At the moment we are only accepting pull requests containing SVG icons
- Submit all pull requests against the appropriate `*-wip` branch for easier merging


## Coding standards: HTML

- Two spaces for indentation, never tabs
- Double quotes only, never single quotes
- Always use proper indentation
- Use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags)


## Coding standards: CSS

- Adhere to the [Recess CSS property order](http://markdotto.com/2011/11/29/css-property-order/)
- Multiple-line approach (one property and value per line)
- Always a space after a property's colon (e.g., `display: block;` and not `display:block;`)
- End all lines with a semi-colon
- For multiple, comma-separated selectors, place each selector on its own line
- Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes, for consistency and safety (see this [blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks)


## License

By contributing your code, you agree to license your contribution under the terms of the MIT License:
- http://opensource.org/licenses/mit-license.html


## Thanks

Thanks to Bootstrap for their wonderful CONTRIBUTING.MD doc. It was modified to create this one.