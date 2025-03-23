# Styles

for this project we'll be using sass; npm install sass

add the following respective file for styling:

                                a.  index.scss => making ground rules and removing default settings
                                b.  laylout.scss => describing the screen layout
                                c.  responsive.scss => writting screens break points

# Nav bar

To build the navbar we'll have to create a new directory inside the src; Components

inside the component dir create a new directory and add two files navbar.jsx and navabar.scss
a. navbar.jsx - react code
b. navbar.scss - style code

inside the navbar.jsx file we'll create a a menu icon and list of menus; this are to be displayed only on small screens.

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

styling the image; it should over flow to the left a little bit; it is achieve by increasing the width percentage to prevent it from explanding to the right image cntainer position relative and img tag position absolute

            NOTE: What is the difference between position relative and absolute in styling

            position absolute well see which is the closest postion relative and compare to it, if no position relative it will compare to with left side of the web page therefore most of the parent is given position relative so that there child can reference that parent ot compare its postion as in our case the the imagecontainer and the img

Below the text add the serachbar component; due to complexity we'll create a component and import it to the home page

on the search bar the two button have a functionality whereby at start the Buy is active and the button has a different background

the following are detail explanation:

This code is a simple React component for a search bar that helps users search for properties to either "buy" or "rent". Here's a breakdown of what it does:

1. **Imports**:

   - It imports React and a CSS file (`searchbar.scss`) for styling.
   - It also imports `useState`, a React hook used to manage state (data that can change).

2. **Types**:

   - There's a list called `types` with two options: "buy" and "rent". These are the two choices the user can pick from.

3. **State**:

   - The `useState` hook is used to create a state variable called `query`. This keeps track of the user's search preferences:
     - `type`: "buy" or "rent" (default is "buy").
     - `location`: The city or area the user is searching in.
     - `minPrice` and `maxPrice`: The price range the user is interested in.

4. **Switch Type Function**:

   - The `switchtype` function updates the `type` in the `query` state when the user clicks either "buy" or "rent". It ensures the selected option is highlighted as "active".

5. **Rendered JSX**:

   - The component renders a search bar with:
     - Two buttons for "buy" and "rent". Clicking a button updates the `type` in the `query`.
     - A form with:
       - A text input for the location (city or area).
       - Two number inputs for the minimum and maximum price.
       - A search button with an icon (likely a magnifying glass).

6. **Styling**:
   - The `className` for the buttons changes to "active" when a button is selected, so it can be styled differently (e.g., highlighted).

In simple terms, this is a search bar where users can:

- Choose between buying or renting.
- Enter a location and price range.
- Click a search button to find properties.

# REACT ROUTER DOM

react-router-dom is a library for handling navigation in React applications. It allows you to build single-page applications (SPAs) with multiple views without reloading the page.

It is written in App.js

create another router (page) listpage. we'll use react router to navigate to this page.

inside App.js we want to make the website in that the navbar we'll be in every page. thefore the layout of the page is place in its directory, whereby it only have the <Navbar /> and the outlets(the other component) outlet is written there to symbolise there is a list of other components but the actual components are place inside the App.js as Children.

for single item we'll be using there id; each item will it own id therefore in App.jsx this is how the path is written: path: "/:id",

The listPage is partition into two; the map and the items plus filter section.

the items side is further divided into two the filter and the listr of cards ( both the filter and card are separeted components declared outside the listpage)

we have a dummy data that we have import into the listpage. the data is used to map the cards

inside the listpage the map should be fixed and the list of properties should be scrowlable

the list is scrowlable and the images are rendering

Now on the right side we are implimenting the map; we'll be implimenting it by using react leaflet

Leaflet comes with its own css out of the box; import "leaflet/dist/leaflet.css";
we'll use it to implement the map

# SinglePage implimentation

when you click on a item or pointer in the in the list page you should be directed to the single page of the said property

the single page is divided into two sections; details and the features

inside details section we have an image ( and it will be imported as it own component)

when you click on the image a slider should open and fill the entire screen.

### implimenting the slider next and previous logic

the logic is that when you click on the left arrow you move to the prevous page upto the first one and when you click on the right arrow you move up to the last one

All the components are placed in the single page

styling the singlepage to fit all the screen type

# Profile Page

to access the profile page the user must be logged in

logged in users can e able to see there profile image instead of sign in and sign up

creating a list to show suspence when loading list of properties

NOTE: for seamless scrolling of different part/components of the page? set the most parent element height to 100% then the component that you want to scroll(detail/left part of the page) set the height to 100vh and overflow-y to scroll

onClicking the message the chat becomes visible; therefore we will use useState in that it is set to null and the chat disappers when true the chat appear.

# Connecting the front-end to the back-end

## Register

for regitering will have a formData and from the for we get user credentials.

handleSubmit funtion is responsible for taking the data and sending it to the api. this function must be async, we'll use the try catch incase of any error:

      NOTE:    Your frontend (running on http://localhost:5173) is trying to make a POST request to your backend (running on http://localhost:8800). Since these are two different origins (ports 5173 and 8800 are considered different origins), the browser blocks the request unless the backend explicitly allows it.

      Preflight Request:
      For certain types of requests (like POST with JSON data), the browser first sends an OPTIONS request (called a preflight request) to check if the server allows the actual request. If the server doesn't respond to the preflight request with the correct CORS headers, the browser blocks the request.

      therefore To resolve this issue, we need to configure your backend server to allow requests from your frontend origin (http://localhost:5173).


      from the server the following code is written to allow cookies to be sent: app.use(cors({origin: "http://http://localhost:5173", credentials: true})) N/B the browser is very strict the address should not have the trailing slash


when the user has successfully registered he is redirected to the log in page; this is by the use of useNavigate hook. from react router dom


## Login


we'll be using the try catch finally so that we can disable our submit button waiting for the server responce. the responce from the server, is the user credetils from the database.

Now we will be storing this credentials to the localstorage of the browser

## Logout

onClicking the log out button we'll be clearing the localstorage and deleteing the cookie

we are going to make a post request to the server to clear the cookie

and also clear the localstorage


# Using context;  (useContext/createContext)

we are creating a context that will be getting the user information from the localstorage and providing it to different routes.

in the AuthContext we are exporting two context namely; AuthContext and AuthContextProvider ; this names are case sensitive and they should be used as they are.

To enable routes to be provided, we are wrapping the entire App with <AuthContextProvider>

therefore inside main.js wrap the <App />

At this point when we login we are directed to the homepage and when we reload the homepage we get the user informoation i.e. console.log(currentUser);

BUT

But the user should not have to refresh the page so that it can be updated; remember we want the user information so that we can prefill the homepages' avartar and username at the top right coner

Therefore

we want we the user logs in and redirected to the homepage all the required data should be already availble;

previously we were handling the saving of user information to localstorage in the loginpage but now we want to handle it in the AuthContext and later the AuthContext will provide the saved user information to the entire application.
Therefore we are creating a updateUser function in the AuthContext. this function is responsible for saving the user information. Therefore From the AuthContext we are goin to provide this function to the login page and use it to get the user information from the from the res.data and save it to the localstorage


# Updating the navbar

we are updating navbar so that it can dynamically allocate the username and profile when the user logs in. By the use of AuthContext which will provide the the user information.


# updating the profilepage
on the profilePage is where we have the logout buttton, where by instead of deleteing the localstorage we are going to set the updateUser(AuthContext funtction) to null; throught this logic, the function will run in the AuthContxet and set to localStorage to a null.

we are going to use the state (currentUser) from the AuthProvider to display the logged in userinformation in the profilePage


# Building the Contact us page

something intresting you can not give your className div as Map it will break the layout

here is the dign https://i.pinimg.com/1200x/8d/e1/94/8de1942f8e0eed447eeb3e0de5698233.jpg

i have suffered trying to make the page scrollable.

from my style at this point; this is how to make a page scroll.
