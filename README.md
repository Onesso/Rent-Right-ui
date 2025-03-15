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

we should alternate the value of the clssName in that when True or False of the useState it takes the required class

