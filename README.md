# Styles

for this project we'll be using sass; npm install sass

add the following respective file for styling:

                                a.  index.scss => making ground rules and removing default settings
                                b.  laylout.scss => describing the screen layout
                                c.  responsive.scss => writting screens break points

# Nav bar
To build the navbar we'll have to create a new directory inside the src; Components

inside the component dir create a new directory and add two files navbar.jsx and navabar.scss
                                a.  navbar.jsx - react code
                                b.  navbar.scss - style code

inside the navbar.jsx file we'll create a a menu icon and list of menus; this are to be displayed  only on small screens.

still in the small screen the list of menu is placed absolute (inajificha) (position: absolute;) and it will only appear when the menu icon is placed.

### condition onClicke

on Clicking the menu navigation appears; useState to hold the values

we should alternate the value of the clssName in that when True or False of the useState it takes the required class; one classname allow to have the navbar and vice vercer

on having the navBar the menu icon disappear; chnage the z-index of the menu bar icon.

since we had set all the anchor tag (links) to display: none; the menu items do not appear therefore we'll revert;

align the menu itmes in small screen to be vertically an spaced

# Routes

we'll be creating different pages and this pages we'll results to router that we'll be navigating throught using the navogation we've just built.

                NOTE: What is the difference between main.jsx and App.jsx

                    main.jsx is the entry point of the application. It imports App,jsx to render it. it renders the app into the dom.

                    while

                    App.jsx it defines the main app component. Acts as the main ui structure.
                    it imports other componets and manages them

## Home page
inside the soure; create a dir named router inside a dir named homepage finally the two files homepage.jsx and homepage.scss

inside the App.jsx import the homepage component

now style the App.jsx; the navbar is 100px the rest should be the home page. display flex and flex direction row

in the homepage partition it into two the left(Text) and the right (image) the right has a different bgcolor with an image with no background so that it can take the pages background color.






