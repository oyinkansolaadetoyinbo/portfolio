import React from 'react';
import './skills.css';
import Database from './Database';
import Viz from './Viz';
import Wrangle from './Wrangle';
import Stats from './Stats';
import Present from './Present';
import AppDev from './app_dev';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
<Database />
<Viz />
<Wrangle />
{/* <Stats /> */}
<Present />
{/* <AppDev /> */}
        </div>
    </section>
  )
}

export default Skills