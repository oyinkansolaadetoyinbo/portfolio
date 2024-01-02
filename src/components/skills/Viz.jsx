import React from 'react';
import './skills.css';

const Viz = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Data Visualization & Dashboarding</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Power BI</h3>
                    <span className="skills__level">Expert</span>
                </div>
            </div>

            {/* <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Tableau</h3>
                    <span className="skills__level">Expert</span>
                </div>
            </div> */}

            {/* <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Looker</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div> */}

            {/* <div className="skills__data">
                <i className="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Python (Matplotlib, Seaborn, Bokeh)</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div> */}
        </div>
    </div>
</div>
  )
}

export default Viz