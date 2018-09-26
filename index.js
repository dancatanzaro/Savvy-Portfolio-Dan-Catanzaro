import axios from 'axios';
import Navigo from 'navigo';
import Content from './components/Content';
import Footer from './components/Footer';
import Greeter from './components/Greeter';
import Header from './components/Header';
import Navigation from './components/Navigation';
import store from './store/store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var greeter = new Greeter(store.dispatch.bind(store));
// var links = document.querySelectorAll('#navigation a');


function render(){
    var state = store.getState();

    console.log(state);


    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
        `;
    greeter.render(root);
   
    router.updatePageLinks();
}

function handleNavigation(activePage){
    store.dispatch((state) => Object.assign(state, { 'active': activePage }));
}
router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('Home'))
    .resolve();
    
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        store.dispatch((state) => Object.assign(state, { 'posts': response.data }));
    });

axios
    .get('https://api.openweathermap.org/data/2.5/weather?zip=63017,us&APPID=8beac46af307f8e14ce5a810e36347f3')
    .then((response) => {
        store.dispatch((state) => {
            state.weather = response.data;

            return state;
        });
    });

axios
    .get('https://api.github.com/users/dancatanzaro/repos', {
        'headers': {
            'Authorization': `token ${process.env.GITHUB_API_KEY}` //eslint-disable-line
        }
    })
    .then((response) => {
        store.dispatch((state) => {
            state.repos = response.data;

            return state;
        });
    });

store.addStateListener(render);
/* document
    .querySelector('h1')
    .addEventListener(
        'click',
        (event) => {
            var header = "Hey, I'm Dan, and I love to travel, cook, and eat.";

            console.log(event.target);

            if(event.target.innerHTML === header){
                event.target.innerHTML = 'Boo, scared you!';
            }
            else{
                event.target.innerHTML = header;
            }
        }
    );

for(let i = 0; i < links.length; i++){
    links[i].addEventListener(
        'click',
        handleNavigation
    );
}
*/
