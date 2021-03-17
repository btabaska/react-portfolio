![site image](https://user-images.githubusercontent.com/29316916/99889485-aeddd200-2c0a-11eb-8e40-ec6bc4ea4e3c.png)

- This project is my first Portfolio site made in CSS and HTML using Bootstrap \*

The Project contains 3 pages:

- Home
- Portfolio
- Contact

Home:
This page is current the landing page for the site. It contains a responsive image and wrapping text about me. On the bottom I used Bootstraps buttons to add links to the page. The links also contain "FontAwesome" icons that help describe where the links lead to. I also used a Google Font to make the text on the page break up a little more and look more readable.

Portfolio:
I used the same container style I built with Home to add a grid system in Bootstrap to allow the 5 images of my cat to sit nested into the page. They scale pretty well and remain in the container no matter how you resize the page.

Contact:
I reused the same container style again and added 3 forms and a button to finish off the contact page. This was the easiest page of the bunch using Bootcamp since all elements could just be added as a new row without having to worry about columns

The page also features a navbar and a footer that follow the same styling that was recommended. I added in the JavaScript tag from Bootcamp to also allow the navbar to function in narrower mobile style viewports.

The Footer is currently still set to stay on the bottom. It is not sticky because in larger viewports the navbar's auto margin tag would break and stop applying margin to the footer and it would come up to halfway up the page. I did not have time to fix this since the research I did indicated that it was due to the mix of height style tags that I was using causing problems with the auto margin on the footer being able to calculate the margin required. I decided to leave it as as #TODO that I will resolve later if I have time.

The CSS on the site is minimal and currently only is used to modify the <p> tag on the Home page to import the Google Font and secondly to set the background of the site to a static image. /_ Credit to coolbackgrounds.io for the open licenced background image _/

Current #TODOs for the site:

- Add more cat pictures
- Fix the big with the Sticky Footer's auto margin tag not getting the correct height calculation for the page
- work on spacing the images in the Portfolio grid better when in mobile view (adding a top margin to each picture)

Link: https://btabaska.github.io/Brandon_Portfolio/
