import React from 'react';
import PictureSect from './PictureSect';
import GridSection from './GridSection';
import rndmPic from '../images/image 1.png';

function WhatWeDo() {
    const data = [{id:1, rowParam: 'row', img: rndmPic, title:'Веломастерская “Велозар”', text:'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.', bgc: 'beige', classNme: 'WhatWeDo_image'}];

    return (
        <>
            {data.map((el) => <PictureSect key={el.id} {...el} />)}
            <section className="WhatWeDo_text">
                <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.<br/> А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
            </section>
            <GridSection/>
        </>
    );
}

export default WhatWeDo;
