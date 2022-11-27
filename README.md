# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![](dist/assets/images/127.0.0.1%205500-Newshomepage.png)

This is the screenshot of my solution.

### Links

- Solution URL: [https://github.com/jjalbuenacabuyao/news-homepage-main](https://github.com/jjalbuenacabuyao/news-homepage-main)
- Live Site URL: [https://jjalbuenacabuyao.github.io/news-homepage-main/](https://jjalbuenacabuyao.github.io/news-homepage-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In this project I use the picture element with the source element and srcset attribute in order to change the image when it reaches the breakpoint.

```html
<picture class="illustration">
  <source
    srcset="dist\assets\images\image-web-3-desktop.jpg"
    media="(min-width: 576px)"
  />
  <img
    src="dist/assets/images/image-web-3-mobile.jpg"
    alt="Illustration of 3d shapes with different colors"
  />
</picture>
```

I also applied the css grid-template-areas property to layout the page.

```css
.container {
  grid-template-areas:
    "nav nav nav"
    "illustration illustration new"
    "title text new"
    "featured featured featured";
}
```

And lastly, the js in order to make the button work.

```js
navButton.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible");
  if (isVisible == "false") {
    navButton.setAttribute("aria-expanded", true);
    nav.setAttribute("data-visible", true);
  } else {
    navButton.setAttribute("aria-expanded", false);
    nav.setAttribute("data-visible", false);
  }
});
```

### Useful resources

- [josh W Comeau's Modern CSS rest](https://www.joshwcomeau.com/css/custom-css-reset/) - This helped me to override the default styles of some elements
