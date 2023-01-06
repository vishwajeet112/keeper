import react from 'react';
const date = new Date();

function Footer(){
    return(
        <footer>
            <p>copyright &#169;	 {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer;