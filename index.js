import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import greeting from './js/greeting.js';

var State = {
    'active': 'Home',
    'Home': {
        'links': [
            'Blog',
            'Contact',
            'Projects'
        ],
        'title': 'Hey, You Are Home',
        'greeting': greeting()
    },
    'Projects': {
        'links': [
            'Home',
            'Contact',
            'Blog'
        ],
    
        'title': 'Welcome to my Projects',
        'greeting': 'hey projects'
    },
    'Blog': {
        'links': [
            'Home',
            'Contact',
            'Projects'
        ],
        'title': 'Welcome to my Blog',
        'greeting': 'hey blog'
    },
    'Contact': {
        'links': [
            'Home',
            'Projects',
            'Blog'
        ],
        'title': 'Contact me',
        'greeting': 'slide in'
    },
    
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
        ${Navigation(state[state.active])}
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