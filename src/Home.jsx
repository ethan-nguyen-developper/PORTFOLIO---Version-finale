import { HashLink } from 'react-router-hash-link';

import './Home.css'

function Home() {
    return (
        <>
        <header>
            <HashLink smooth to="/#section1" className='header-link'>NGUYEN Ethan</HashLink>

            <nav>
                <HashLink smooth to="/#section2" className='nav-link'>section2</HashLink>
                <HashLink smooth to="/#section3" className='nav-link'>section3</HashLink>
                <HashLink smooth to="/#section4" className='nav-link'>section4</HashLink>
            </nav>
        </header>

        <main>
            <h1>Bienvenue sur mon portfolio</h1>
        </main>

        <footer>
            <p>&copy; 2026 - NGUYEN Ethan</p>
        </footer>
        </>
    )
}

export default Home