import {about, instagram, twitter, github, home} from './Icons'
import styles from '../styles/Header.module.scss'

function Header(){
    return(
        <div className="container">
        <header className={styles.header}>
            <div className={styles.logo}>
            <a href="/"><h3>Metin Faruk <b>BIYIK</b></h3></a>
            </div>
            <nav className={styles.menu}>
                <ul>
                    <a href="/"><li>{home}</li></a>
                    <a href="/about"><li>{about}</li></a>
                </ul>
                
            </nav>
        </header>
            <nav className={styles.social}>
                <ul>
                <a id={styles.insta} href='https://instagram.com/_metinbiyik' target="_blank" rel="noreferrer"><li>{instagram}</li></a>
                <a id={styles.twitter} href='https://twitter.com/_metinbiyik' target="_blank" rel="noreferrer"><li>{twitter}</li></a>
                <a id={styles.github} href='https://github.com/metinfarukbiyik' target="_blank" rel="noreferrer"><li>{github}</li></a>
                </ul>
            </nav>
        </div>
    );
}

export default Header