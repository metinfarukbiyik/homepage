import footers from '../styles/Footer.module.scss'
function Footer() {
    return(
        <footer className={footers.footer}>
        <div className={footers.desc}>
        <p>Bu sayfanın kaynak kodlarına <b><a href="https://github.com/metinfarukbiyik/homepage" target="_blank" rel="noreferrer" >GitHub üzerinden</a></b> ulaşabilirsiniz.</p>
        </div>
    </footer>
    );
}

export default Footer