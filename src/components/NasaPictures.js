import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaPictures = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=WkQiPbiZMW3bmRRzoV0rNN3bUZwbK0NbZv6hk6rg&date=2012-03-14')
            // .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
            .then(res => {
                console.log("res:", res);
                console.log("res.data:", res.data);
                console.log("res.config.url:", res.config.url);
                console.log("res.data.url: ", res.data.url);

                setPhotos(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Nasa Photo of the Day</h1>
            <h3>{photos.title}</h3>
            <img src={photos.url} alt="nasa pic of the day" />
            <p>{photos.explanation}</p>
        </div>
    );
};

export default NasaPictures;