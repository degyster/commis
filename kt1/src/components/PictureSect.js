import React from 'react';

function PictureSect({rowParam, img, title, text, bgc, classNme}) {
    return (
        <section className={classNme}>
            <img src={img} alt="DinoComponent"></img>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    );
}

export default PictureSect;
