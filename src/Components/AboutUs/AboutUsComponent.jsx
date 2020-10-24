import React from 'react';
import UnderLineComponent from '../Utilites/UnderLineComponent';
import signature from '../../assets/Signature.svg'
import people from '../../assets/People.jpg'

const AboutUsComponent = () => {
    return (
      <>
        <div className="about-us-left">
          <UnderLineComponent text="O nas" />
          <h3 className="about-us-left-text">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </h3>
          <img className="about-us-left-signature" src={signature} alt="" />
        </div>
        <div className="about-us-right">
          <img className="about-us-right-img" src={people} alt="" />
        </div>
      </>
    );
};

export default AboutUsComponent;