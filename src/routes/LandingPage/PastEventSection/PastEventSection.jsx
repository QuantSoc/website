import React, { useState, useEffect } from 'react';
import './index.less';

const PastEventSection = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            const context = import.meta.glob('../../../assets/past-events/*.png');
            const imageFiles = await Promise.all(Object.values(context).map(module => module()));
            setImages(imageFiles.map(mod => mod.default));
        };

        fetchImages();
    }, []);

    const totalSlides = Math.ceil(images.length / 4);
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const currentImages = images.slice(currentIndex * 4, (currentIndex + 1) * 4);

    return (
        <section className="past-events">
            <div className="slider-container">
                <div className="events-row" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="event-card">
                            <img src={image} alt={`Past Event ${index}`} />
                        </div>
                    ))}
                </div>
                <div className="slider-indicators">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastEventSection;
