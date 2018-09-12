import * as Pages from './Pages';

export default function Content(state){
    return `
    <div id="content">
    ${Pages[state.body]}
    </div>
    `;
}
