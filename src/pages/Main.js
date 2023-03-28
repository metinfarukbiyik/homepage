import photo from '../img/my.jpg'

function Main(){
    return(
        <>
        <div className='container'>
        <div className="main">
            <div className='about'>
            <img src={photo}  alt="Metin Bıyık"/>   
                <p>22 Nisan 1999 Trabzon/Türkiye doğumluyum. ATA AÖF Bilgi Yönetimi öğrencisiyim. Front-End Dev. olma yolunda kendimi geliştirmek üzere adımlar atıyorum. <strong>HTML/CSS ve JS</strong> dersleri ile bilgimin üzerine yeni bilgiler katarak, kişisel web sayfamda uyguluyorum. Her gün farklı şeyler öğrenerek hem kendimi hem de bu sayfayı güncellemiş oluyorum.
                </p>
            
                <p id="en">I was born on April 22, 1999 in Trabzon/Turkey. I am an ATA AOF Information Management student. Front-End Dev. I am taking steps to improve myself. I apply it on my personal web page by adding new information on top of my knowledge with <strong>HTML/CSS and JS</strong> lessons. I am updating myself and this page by learning different things every day.                    
                </p>
            </div>
        </div>
        </div>
        </>
    );
}

export default Main