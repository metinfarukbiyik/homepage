import photo from '../img/my.jpg'

function Main(){
    return(
        <>
        <div className="main">
            <div className='about'>
                 <div class="profile">
                        <img className='img' src={photo}  alt="Metin Bıyık" />
                   </div>
                <p>22 Nisan 1999 Trabzon/Türkiye doğumluyum. ATA AÖF Bilgi Yönetimi öğrencisiyim. Front-End Dev. olma yolunda kendimi geliştirmek üzere adımlar atıyorum. <strong>HTML/CSS ve JS</strong> dersleri ile bilgimin üzerine yeni bilgiler katarak, kişisel web sayfamda uyguluyorum. Her gün farklı şeyler öğrenerek hem kendimi hem de bu sayfayı güncellemiş oluyorum.
                <p>
                    Nisan 1999 Trabzon/Türkiye doğumluyum. ATA AÖF Bilgi Yönetimi öğrencisiyim.
        2018 ile 2020 yılları arasında ALP Telekom firmasında Baz İstasyonu Teknisyeni olarak görev yaptım. Bu süre zarfında, telekomünikasyon altyapılarının kurulumu ve bakımı konularında önemli deneyimler kazandım. 
        2020 yılında NTM Elektrik & Elektronik firmasına geçiş yaparak, 2023 yılına kadar Rework işlerinden ve ekip yönetiminden sorumlu personel olarak çalıştım. Bu pozisyonda, süreç iyileştirme ve ekip koordinasyonu gibi kritik alanlarda sorumluluk üstlendim. 
        2023 yılından bu yana ise <strong>Turkcell Global Bilgi</strong> bünyesinde Individual <strong>Müşteri Temsilcisi ve Takım Koçu</strong> olarak kariyerime devam ediyorum. Bu görevimde, müşteri memnuniyetini artırmaya yönelik stratejiler geliştiriyor ve müşteri temsilcisi olarak etkin bir şekilde hizmet sunuyorum.
                </p>

                <p id="en">I was born on April 22, 1999 in Trabzon/Turkey. I am an ATA AOF Information Management student. Front-End Dev. I am taking steps to improve myself. I apply it on my personal web page by adding new information on top of my knowledge with <strong>HTML/CSS and JS</strong> lessons. I am updating myself and this page by learning different things every day.                    
                <p id="en">
        I was born in Trabzon/Turkey in April 1999. I am a student of ATA AÖF Information Management.
I worked as a Base Station Technician at ALP Telekom between 2018 and 2020. During this time, I gained significant experience in the installation and maintenance of telecommunication infrastructures.
I transferred to NTM Elektrik & Elektronik in 2020 and worked as a staff responsible for rework and team management until 2023. In this position, I assumed responsibility in critical areas such as process improvement and team coordination.
Since 2023, I have been continuing my career as an Individual <strong>Customer Representative and Team Coach</strong> at <strong>Turkcell Global Bilgi</strong>. In this role, I develop strategies to increase customer satisfaction and provide effective service as a customer representative.
                </p>
            </div>
        </div>
</>
);
}

export default Main
