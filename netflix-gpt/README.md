## Netflix Project
- tailwind setup
- github setup
- routing
- header
- sign/signup form
- form validation
- useRef hook
- firebase setup
- deploying our app to production
- create sign up/sign in user account in firebase => add the user to the firebase database
- create redux store to store the user info
- store the user info like name, email in the store after sign in or sign up & route to browse page
- sign out
- use update profile api from firebase toupdate the user's profile with display name & photo url. get the photo url from github hard code as of now
- add sign out api from firebase & navigate back to home page
- Bug Fix: If the user is not logged in redirect to the login page if try to access /browse from the url & if the user is logged in then redirect directly to browse page not to login page
- add unsubscibe for onAuthChangeState callback function from firebase doc as this event will be added each time header component is rendered, so on unmount we should remove it. => otherwise effeciency will effect, this is a good practice
- add hardcoded values to constant file
- TMDB - login & register app for getting the API access. get the apikey & token & doc
- make a call to get the ongoing movies from TMDB doc => move this logic to a custom hook
- create a slice for movies & store the ongoing movies result in it as initial state
- design the browse page & create components & use the 1st movie from the now playing movies to show in the main container
- fetch the video of the 1st movie to show in the main container & store it in the redux store
- build maincontainer, video details & video background movie components
- build secondary component, show the imgae for the thumbnail , get the url from tmdb & the image id from the now playing movies api which is there is store now
    - movielist * n
        - movie card * n
- create new hooks for fetching popular movies top rated movies etc & render on the browse page
- gpt search feature => add a link in the header
- create a state for gptsearch component rendering in redux store, create a new slice
- create a button before sign out for gptSearch & on click of it toggle the central store state of it
- when this state is true then show the gpt search comp
- gpt search comp will have gpt search bar & gpt movie suggestions
- add language option on the gpt search bar component.
    - add a select option in header before gptsearch button for selecting language
    - user can select the languages from the drop down (make these on config file in constant file)
    - update the redux store with new slice for this config info
    - read this value of the redux store in search bar component & show diff text in search bar & search button
    - hide the lanuage select option when on homepage
- change the gpt search button to home Page button when on gpt search component
- make account in platfrom.openai site & get the api key
- use the api key & the openai APIs to make a call & get the movies suggestions from the text which user has entered.
    - make a query from the user input & then make the api call
- with the returned result from openai API call the search movie API of TMDB & get the movies
- push the openai recommended movies to the store in gpt slice & also the tmdb results for these movies
- create gpt movie recommendation component & fetch the data from store & use the moviList component to render the movies poster
- do memoization of trailer video, popular movies, now playing movies, etc so that on switch from gpt to home page no new calls are made when we have the data in the store





## layout
- not logged in 
    - login/signup page
    - go to browser page after login
- browser page (after authentication)
    - header
    - movie in background
    - movie details in front
    - movie suggestions
        - movie * n => scroll right left

- netflix-gpt
    - search bar
    - movie suggestions
