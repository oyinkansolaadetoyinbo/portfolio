import React from 'react';
import './skills.css';

const Present = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Presentation & Communication</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Microsoft PowerPoint</h3>
                    <span className="skills__level">Expert</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Canva</h3>
                    <span className="skills__level">Expert</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Present