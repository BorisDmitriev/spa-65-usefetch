# SPA-react-router-2

1. create a 404-NotFound-Page component that displays an error message when the page is not found. Include this component in the `App.jsx` file by creating a route with the path "\*".

2. Add a navbar to the application that links to the "Home", "About" and "StarwarsCharacter" pages. The navbar should be displayed on every page of the application.

3. create a `SharedLayout.jsx` component that serves as a container for the application. This component should contain the navbar and the footer. Include this component in the `App.jsx` file and define each route as a subpath of this route.

4. Modify the Navbar component to display an active class on the selected link using `NavLink`.

5. Add an index page to the application that will be displayed when the application loads.

6. Create a `CharacterDetails.jsx` component that displays a detailed description of a product. Use a dynamic route to get to this page. Link this component from the `StarwarsCharacter` page.
7. To get to all the data, it is best to use useContext and create a provider component that makes the API call for you and then passes the received data as global-state to the `CharacterDetails.jsx` component and `StarwarsCharacter` page.
8. **Now please offload the API call itself into a custom hook named `useFetch` and include this hook in your provider component.**

**Note**

You are free to use this API to get data:

https://swapi.dev/api/people/

Have fun ;)
