This project is a response to the challenge proposed at https://github.com/rh-southsystem/desafio-front-dragon

### To start the project, in the project directory, you can run:

`npm install`
 
Then

`npm start`

The application runs in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To login, just input any e-mail and a password

The login is mocked since there's no backend for this application

### Some remarks
## This application has no tests
Should I have more time, I would add some behavioral tests with Jest & Enzyme

## Code structure
I started by setting up services and API calls inside of redux, using axios.
Then I noticed I was creating too much overhead for such a simple application. I didn't need multiple services since the application calls just one API. Also, making the calls outside of redux seems to be the best practice nowadays.
So I've switched back to make the calls inside the components that will use the response and removed axios in favor of native fetch.
Also, I changed the redux structure to use the most up-to-date useReducer().
Similarly, I had stated with a "screen" and "components" structure, just to notice that almost all of my components where also a screen per se, and that I would use a total of 5 component files. So I moved all of them to the root of src to keep things as simple as they can be. Should the application be bigger, I would have to keep the "screens" and "component" directories, to differentiate between components that respond to a route and "visual" only components.

## API usage
Since I was working with a mock API without specific documentation, it was harder to make sense of some fields. For example, each dragon has an array of "histories", but I never got to GET (badum-tss) a dragon with such array filled with some data. So I'm not sure about what kind of object comes from it.
In the individual dragon page, I made the assumption that it would be an array of strings.
But since I was so unsure about this field (and also because of the fact that the API doesn't seem to take into consideration the POST data I send and generates random data instead), I don't use this field on the create dragon form. 
