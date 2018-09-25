import Weather from './Weather';

export default function Footer(state){
    return `
<div id="footer"> 
       
                <i class="fab fa-facebook fa-2x"></i>
                <i class="fab fa-twitter fa-2x"></i>
                <i class="fab fa-instagram fa-2x"></i>
                ${Weather(state.weather)}
                
    </div>`;
}
    