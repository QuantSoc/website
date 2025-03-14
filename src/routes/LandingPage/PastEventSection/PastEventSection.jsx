import React, { useState, useEffect } from 'react';
import './index.less';

const PastEventSection = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            const context = import.meta.glob('../../../assets/past-events/*.png');
            const imageFiles = await Promise.all(Object.values(context).map(module => module()));
            setImages(imageFiles.map(mod => mod.default));
        };

        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setIsFading(true); // Start fade-out

            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % Math.ceil(images.length / 4));
                setIsFading(false); // Start fade-in
            }, 500); // Match fade-out duration
        }, 3000);

        return () => clearInterval(interval);
    }, [images, currentIndex]);

    const currentImages = images.slice(currentIndex * 4, (currentIndex + 1) * 4);

    return (
        <section className="past-events">
            <div className={`events-row ${isFading ? 'fade-out' : 'fade-in'}`}>
                {currentImages.map((image, index) => (
                    <div key={index} className="event-card">
                        <img src={image} alt={`Past Event ${index}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PastEventSection;
