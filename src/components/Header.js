import {about, instagram, twitter, github, home} from './Icons'
import headers from '../styles/Header.module.scss'

function Header(){
    return(
        <>
        <header className={headers.header}>
            <div className={headers.logo}>
            <a href="/"><h3>Metin Faruk <b>BIYIK</b></h3></a>
            </div>
            <nav className={headers.menu}>
                <ul>
                    <a href="/"><li>{home}</li></a>
                    <a href="/about"><li>{about}</li></a>
                </ul>
                
            </nav>
        </header>
            <nav className={headers.social}>
                <ul>
                <a id={headers.insta} href='https://instagram.com/_metinbiyik' target="_blank" rel="noreferrer"><li>{instagram}</li></a>
                <a id={headers.twitter} href='https://twitter.com/_metinbiyik' target="_blank" rel="noreferrer"><li>{twitter}</li></a>
                <a id={headers.github} href='https://github.com/metinfarukbiyik' target="_blank" rel="noreferrer"><li>{github}</li></a>
                </ul>
            </nav>
            </>
    );
}

export default Header