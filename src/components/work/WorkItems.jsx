import React from 'react';
import './work.css'

const WorkItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <div className="work__filters-link">
            <a href={item.code_link} className="work__button">
                Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>

            <a href={item.demo_link} className="work__button-clicky">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
            </div>
        </div>
    )
}

export default WorkItems