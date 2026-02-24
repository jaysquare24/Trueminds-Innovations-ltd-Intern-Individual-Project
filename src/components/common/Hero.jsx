import { motion } from "framer-motion"

export const Hero = ({ title, description, imageSrc, buttonText }) => {
    return (
        <section className="hero">      
            <div className="hero-content">
                <motion.h1 className="hero-title" 
                initial={{ opacity: 0 , x: -50}} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}>
                    {title}
                </motion.h1>
                <motion.p 
                className="hero-description" 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.3 }}>
                    {description}
                </motion.p> 
                {buttonText && (
                  
                    <motion.a href="/home" 
                    className="hero-button order-now" 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.6 }}>
                        {buttonText}
                    </motion.a>
                   
                )}
            </div>
            <div className="hero-image-container">
                <img src={imageSrc} alt="Hero Image" className="hero-image"/>
            </div>
            <div className="overlay"></div>
        </section>
    )
}