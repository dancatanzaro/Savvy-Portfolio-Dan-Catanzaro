/* import { lowerCase } from 'lodash';

function buildLinks(linkArray){
    var i = 0;
    var links = '';
    var link = '';

    while(i < linkArray.length){
        link = lowerCase(linkArray[i]);

        links += `
                <li>
                    <a href='/${link}'>${linkArray[i]}</a>
                </li>
            `;

        i++;
    }
    
    return links;
}
*/
function Link(link){
    var href = '';

    if(link !== 'home'){
        href = link;
    }


    return `
    <li>
    <a href="/${link}" data-navigo>${link}</a>
    </li>
    `;
}

export default function Navigation(state){
    var links = '';

    
    for(let i = 0; i < state.links.length; i++){
        links += Link(state.links[i]);
    }

    return `
<div id="navigation">
<ul class="container">
            ${links}
            
        </ul>
</div>
`;
}

