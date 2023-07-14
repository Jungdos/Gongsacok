import React from "react";

const BackgroundImage = () => {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                height: '60%',
                width: '100%',
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundSize: 'cover',
                zIndex: -1
            }}
        />
    );
};

export default BackgroundImage;