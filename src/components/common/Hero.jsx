export const Hero = ({ title, description, imageSrc, buttonText }) => {
    return (
        <section className="hero">      
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-description">{description}</p> 
                {buttonText && (
                  
                        <a href="/home" className="hero-button order-now">{buttonText}</a>
                   
                )}
            </div>
            <div className="hero-image-container">
                <img src={imageSrc} alt="Hero Image" className="hero-image"/>
            </div>
            <div className="overlay"></div>
        </section>
    )
}