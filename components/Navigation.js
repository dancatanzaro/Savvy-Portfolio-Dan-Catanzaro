export default function Navigation(){
    return `
<div id="navigation">
<ul class="container">
            <li><a href="/">home</a></li>
            <li><a href="/projects">projects</a>
            <ul>
                <li>drinks</li>
                <li>food</li>
                <li>health</li>
            </ul></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/contact">contact</a></li>
        </ul>
</div>
`;
}