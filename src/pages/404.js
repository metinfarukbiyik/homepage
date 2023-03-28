function page404() {
    return(
            <div className="Not404">
                <h3>
                    Aradığınız sayfa Bulunamadı!
                </h3>
                <h4>
                    Anasayfaya dönmek için <span className="link"><a href="/"><b>tıklayın</b></a></span><br />
                    Hatalı buluyorsanız <strong>´<a href="mailto:metin@biyik.dev">metin@biyik.dev</a>`</strong> adresine mail gönderebilirsiniz.
                </h4>
            </div>
    );
}

export default page404