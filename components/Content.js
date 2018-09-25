import * as Pages from './Pages';

export default function Content(state){
    const page = state[state.active];

    return `
        <div id="content">
            ${Pages[page.body](state)}
        </div>
    `;
}
