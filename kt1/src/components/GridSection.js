import React from 'react';
import SectionCard from './SectionCard';

const data = [  
    {id: 1, bgc: '#22356F', title: 'Годовое ТО' },
    {id: 2, bgc: '#0052C1', title: 'Выравнивание колёс' },
    {id: 3, bgc: '#76B58B', title: 'Настройка переключатлей' }
];

function GridSection() {
    return (
        <div style={{display: "grid", gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows:'480px', margin: '0'}}>
            {data.map((el) => <SectionCard key={el.id} {...el} />)}
        </div>
    );
}

export default GridSection;
