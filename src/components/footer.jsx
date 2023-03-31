import Instagram from '../assets/InstagramLogo.svg'
import Linkedin from '../assets/LinkedinLogo.svg'
import './footer.css'

const Footer= ()=>{
    return (
        <>
        
            <div class="footer">

                <ul>
                <li>Prompt Generator</li>
                <li>Dweep Daily</li>
                <li>All Contributors</li>
                <li>Your data on Dweep.io</li>
                <li>Contribute to Dweep</li>
                </ul>

                <ul class="footer-list2">
                
                <li>Dweep.io</li>
                <li>Made with love in India</li>

                <li class="logo-list">
                    <img src={Instagram}></img>
                    <img src={Linkedin}></img>
                </li>
                <li>&nbsp;</li>
                <li>hello@dweep.io</li>
                
                </ul>
             </div>
         </>
    )
}
export default Footer