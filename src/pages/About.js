function About() {
    const skills = [
        {
            id: 1,
            lesson: 'HTML',
            slug: 'html',
            percent: 61
        },
        {
            id: 2,
            lesson: 'CSS',
            slug: 'css',
            percent: 50
        },
        {
            id: 3,
            lesson: 'JS',
            slug: 'js',
            percent: 15
        },
        {
            id: 3,
            lesson: 'React',
            slug: 'react',
            percent: 10
        },
        {
            id: 5,
            lesson: 'Adobe Photoshop',
            slug: 'ps',
            percent: 60
        },
        {
            id: 6,
            lesson: 'Adobe Illustrator',
            slug: 'ai',
            percent: 50
        }
    ]

    return (    
        <>
        <div className="container">
            <div className="about">
                <h2><b>Beceriler</b> / Skills</h2>
                <p>Öğrendiğim ve kendimi geliştirmeye devam ettiğim yazılım dillerini ve grafik programlarını aşağıdaki gibi hemen hemen yakın olan değerler ile yüzdelendirdim. Yakın zamanda bu sayfaya öğrendiğim diğer dilleri de ekleyerek daha geniş bir portföy oluşturacağım.</p>
                <div className="bar">
                    {skills.map(item =>
                        <div className="progress" key={item.id}>
                            <div className={`progress-bar ${item.slug}`} style={{width: `${item.percent}%`}}>
                                {item.lesson + ' ' + item.percent+'%'}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </>
    );
}

export default About