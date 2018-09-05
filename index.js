import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

var State = {
    'active': 'home',
    'home': {
        'title': 'Hey, You Are Home'
    },
    'projects': {
        'title': 'Welcome to my Projects'
    },
    'blog': {
        'title': 'Welcome to my Blog'
    },
    'contact': {
        'title': 'Contact me'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var newState = State;

    newState.active = event.target.textContent;

    event.preventDefault();
    
    render(newState);
}

function render(state){
    var links;

    
    root.innerHTML = `
        ${Navigation()}
        ${Header(state[state.active])}
        ${Content()}
        ${Footer()}
        `;

    links = document.querySelectorAll('#navigation a');
   
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