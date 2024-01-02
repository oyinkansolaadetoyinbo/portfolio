import React from 'react';
import './skills.css';

const Stats = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Statistical Analysis</h3>

    <div className="skills__box">
        <div className="skills__group">
            {/* <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">SPSS</h3>
                    <span className="skills__level">Expert</span>
                </div>
            </div> */}

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Expert</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">R</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Excel</h3>
                    <span className="skills__level">Expert</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Stats