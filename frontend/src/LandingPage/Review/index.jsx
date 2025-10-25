import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './review.css';




const Index = () => {


    useEffect(() => {
        const elements = document.querySelectorAll('.animate-fade-slide');
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        elements.forEach(el => observer.observe(el));
    }, []);
    
    const navigate = useNavigate()

    const images = [
        { img: "../asset/image/sparkels/1.jpeg" },
        { img: "../asset/image/sparkels/2.jpeg" },
        { img: "../asset/image/sparkels/3.jpeg" },
        { img: "../asset/image/sparkels/4.jpeg" },
        { img: "../asset/image/sparkels/5.jpeg" },
        { img: "../asset/image/sparkels/6.jpeg" },
        { img: "../asset/image/sparkels/7.jpeg" },
        { img: "../asset/image/sparkels/8.jpeg" },
        { img: "../asset/image/sparkels/9.jpeg" },
        { img: "../asset/image/sparkels/10.jpeg" },
        { img: "../asset/image/sparkels/11.jpeg" },
        { img: "../asset/image/sparkels/12.jpeg" },
        { img: "../asset/image/sparkels/13.jpeg" },
        { img: "../asset/image/sparkels/14.jpeg" },
        { img: "../asset/image/sparkels/15.jpeg" }
    ]

    const totalImagesNeeded = 34 * 3;

    let repeatedImages = Array.from({ length: totalImagesNeeded }, (_, i) => {
        return images[i % images.length];
    });

    for (let i = repeatedImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [repeatedImages[i], repeatedImages[j]] = [repeatedImages[j], repeatedImages[i]];
    }

    return (
        <section className="review">
            <div className="upper">
                <div className="rut">
                    <h2 className="animate-fade-slide">Smart. Motivated</h2>
                    <h2 className="Inventive animate-fade-slide">Inventive</h2>
                    <h3 className='career animate-fade-slide'>Build A Career With heliolunor</h3>
                </div>

                <div>
                    <button className="join-btn" onClick={() => navigate("/contact")}>Join Our Talent</button>
                </div>

                <div className="rutConnect">
                    <h2>Connect With Us</h2>
                    <h2 className="Inventive">+91 6380319582</h2>
                    <h5>kaleeswaran.b@heliolunor.in</h5>
                    <h5>infoheliolunor@gmail.com</h5>
                    
                </div>
            </div>

            <div className="mid">
                <div className="image-overlay">
                    <p className="overlay-text">Let’s Spark Your Passion!</p>
                    <span className="overlay-span-text">Students Experience Reimagined</span>
                </div>

                {/* <div className="image-row">
                    {repeatedImages.map((item, index) => (
                        <img key={index} src={item.img} alt={`img-${index}`} />
                    ))}
                </div> */}

                <div className="image-row">
                    {repeatedImages.map((item, index) => {
                        let extraClass = ''
                        if (index % 10 == 0) extraClass = 'big'
                        else if (index % 7 == 0) extraClass = 'tall'
                        else if (index % 5 == 0) extraClass = 'wide'

                        return (
                            <img key={index} src={item.img} alt={`img-${index}`} className={extraClass} />
                        )
                    })}
                </div>


            </div>

            <div className="divider-wrapper">
                <div className="divider"></div>
            </div>

            <h1 className="reason">  We Are heliolunor For A Reason</h1>


        </section>
    )
}

export default Index;
