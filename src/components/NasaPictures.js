import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const NasaPictures = () => {
    const [photos, setPhotos] = useState([]);

    const grow = keyframes`
        from {
            color: white;
            transform: scale(1);
        }
        to {
            transform: scale(1.25);
            color: #ddd;
        }
    `;
    const ContainerDiv = styled.div`
        background-color: #333;
        padding: 1rem 2rem;
        border-radius: 1rem;
        width: 66%;
        margin: 0 auto;
    `;
    const Title = styled.h1`
        font-size: 2.5rem;
        width: 61%;
        margin: 0 auto;
        padding: 0;
        &:hover {
            animation: ${grow} 0.75s ease-in;
            animation-fill-mode: forwards;
        }
    `;
    const Explanation = styled.p`
        background-color: #222;
        padding: 2rem;
        border-radius: 2rem;
    `;
    const Italic = styled.div`
        font-style: italic;
    `;
    const PhotoTitle = styled(Italic)`
        text-shadow: 0 0.33rem black;
        font-size: 1.5rem;
        margin-top: 1rem;
    `;
    const Loading = styled(Italic)`
        color: #ddd;
    `;

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=WkQiPbiZMW3bmRRzoV0rNN3bUZwbK0NbZv6hk6rg&date=2019-06-14')
            // .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
            .then(res => {
                console.log("res:", res);
                console.log("res.data:", res.data);
                console.log("res.data.url: ", res.data.url);
                setPhotos(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <ContainerDiv>
            <Title>Nasa Photo of the Day</Title>
            <PhotoTitle>{photos.title}</PhotoTitle>
            {!photos.url ? 
                <Loading>Loading...</Loading> : 
                <img src={photos.url} className="photo" alt="nasa pic of the day" />            
            }
            <Explanation>{photos.explanation}</Explanation>
        </ContainerDiv>
    );
};

export default NasaPictures;