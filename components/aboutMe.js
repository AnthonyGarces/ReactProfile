import Container from 'react-bootstrap/Container';

export default function AboutMe() {
    return(
        <Container>
            
            <div className="mx-auto col-9 bg-white shadow rounded mt-4 pb-4 pt-2 border border-dark clearfix">
                <h1>About Me</h1>
                <hr />
                <img
                    className="col-4 height:auto float-left rounded m-1"
                    src="/images/SisAndI.jpeg"
                />
                <p className="container-fluid">
                    Hello! My name is Esteban Garces and I'm an aspiring full stack developer.
                    Programming has always come across to me as this mystical and foreign study,
                    so I'm excited to delve into this field one step at a time. Here, you can
                    check out my portfolio to follow in real time how I'm progressing and
                    learning. I hope that you like what you see, and if you have any suggestions
                    or would like contact me you're more than welcome to reach out. I'd love to
                    hear from you!
                </p>
                <p className="container-fluid">
                I was born and raised here in Austin, Texas and graduated from Texas A&amp;M
                with a bachelor's in Psychology and Spanish. My hobbies (usually) include
                playing the newest RPG on my PS4, watching basketball or football, and going
                to concerts. I also love traveling and have spent large amounts of time in
                Costa Rica and Mexico, and can't wait to plan my next visit to! I say that,
                I'm not going to have time for any of that anytime soon!
                </p>
                <a href="https://github.com/AnthonyGarces" target="_blank">
                    <img src="/images/GitHub_Logo.png" style={{ height: 50, width: 105, padding: 10 }} />
                </a>
                <a href="https://www.linkedin.com/in/anthony-garces-122b0a122/" target="_blank">
                    <img src="/images/LI-Logo.png" style={{ height: 50, width: "75x", padding: 10 }}/>
                </a>
            </div>

            <style jsx>{`
                p {
                    font-size: 21px
                }
            `}</style>
        </Container>
    )
}