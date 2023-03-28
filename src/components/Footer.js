import footers from '../styles/Footer.module.scss'

function Footer(){
    return(
        <footer className={footers.footer}>
            <div className={footers.desc}>
            <p>Bu sayfanın kodlarına <b><a href="https://github.com/metinfarukbiyik/homepage" target="_blank" rel="noreferrer" >GitHub üzerinden</a></b> ulaşabilirsiniz. <a href="https://github.com/metinfarukbiyik" target="_blank" rel="noreferrer">@metinfarukbiyik</a></p>
            </div>
        </footer>
    );
}

export default Footer