export default function Header(state){
    return `
    <div id="header">
<h1>${state.title}</h1> 
<h4>${state.greeting}</h4>
<div id="greeting"></div>
</div>`;
}
