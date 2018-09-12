import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import * as State from './store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);

function render(state){
    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state[state.active])}
        ${Content(state[state.active])}
        ${Footer()}
        `;
   
    router.updatePageLinks();
}

function handleNavigation(activePage){
    var newState = Object.assign({}, State);

            
    newState.active = activePage;
        
    render(newState);
}
router
    .on(':page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();

/* links = document.querySelectorAll('#navigation a');
   
    document
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
}

render(State);

*/

