import photo from '../img/my.jpg'

function Main(){
    return(
        <>
        <div className="main">
            <div className='about'>
                   <div class="profile">
                        <img className='img' src={photo}  alt="Metin Bıyık" />
                   </div>
                <p>
                    Nisan 1999 Trabzon/Türkiye doğumluyum. ATA AÖF Bilgi Yönetimi öğrencisiyim.
        </br>
        2018 ile 2020 yılları arasında ALP Telekom firmasında Baz İstasyonu Teknisyeni olarak görev yaptım. Bu süre zarfında, telekomünikasyon altyapılarının kurulumu ve bakımı konularında önemli deneyimler kazandım. 
        </br>
        2020 yılında NTM Elektrik & Elektronik firmasına geçiş yaparak, 2023 yılına kadar Rework işlerinden ve ekip yönetiminden sorumlu personel olarak çalıştım. Bu pozisyonda, süreç iyileştirme ve ekip koordinasyonu gibi kritik alanlarda sorumluluk üstlendim. 
        </br>
        2023 yılından bu yana ise <strong>Turkcell Global Bilgi</strong> bünyesinde Individual <strong>Müşteri Temsilcisi ve Takım Koçu</strong> olarak kariyerime devam ediyorum. Bu görevimde, müşteri memnuniyetini artırmaya yönelik stratejiler geliştiriyor ve müşteri temsilcisi olarak etkin bir şekilde hizmet sunuyorum.
                </p>
            
                <p id="en">
        I was born in Trabzon/Turkey in April 1999. I am a student of ATA AÖF Information Management.
        </br>
        I worked as a Base Station Technician at ALP Telekom between 2018 and 2020. During this time, I gained significant experience in the installation and maintenance of telecommunication infrastructures.
        </br>
        I transferred to NTM Elektrik & Elektronik in 2020 and worked as a staff responsible for rework and team management until 2023. In this position, I assumed responsibility in critical areas such as process improvement and team coordination.
        </br>
        Since 2023, I have been continuing my career as an Individual <strong>Customer Representative and Team Coach</strong> at <strong>Turkcell Global Bilgi</strong>. In this role, I develop strategies to increase customer satisfaction and provide effective service as a customer representative.
                </p>
            </div>
        </div>
        </>
    );
}

export default Main
