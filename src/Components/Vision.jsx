import React from 'react';
import '../styles/VisionSection.css';

const CoolDesign = () => {
  return (
    <div className='coolcontainer'>
      <div className='flex-container'>
        <div className='image-container'>
          <img
            src='https://img.freepik.com/free-vector/realistic-electronic-devices-mockup-with-transparent-background-monitors-screens-computer-laptop-tablet-smartphone-vector-illustration_1284-81260.jpg?t=st=1742287814~exp=1742291414~hmac=e15ecc68902762ca897c736b84e2a838b868628b765d47ba6d62501e45eaf939&w=996'
            alt='Laptop with UI/UX design'
            className='image'
          />
          <div className='cool-design-label'>
            Cool
            <br />
            Design
          </div>
        </div>
        <div className='text-container'>
          <div className='vision-heading'>Our vision</div>
          <h1 className='title'>We craft bright future</h1>
          <p className='description'>
            In et feugiat neque, vel porta ante. Morbi at justo justo. Etiam
            eget eros ac enim iaculis sagittis. Maecenas eget sapien purus.
          </p>
          <div className='features-grid'>
            <div className='feature-item'>
              <i className='fas fa-cloud icon'></i>
              <div>
                <h3 className='feature-title'>Managed it service</h3>
                <p className='feature-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='feature-item'>
              <i className='fas fa-shield-alt icon'></i>
              <div>
                <h3 className='feature-title'>Cloud security</h3>
                <p className='feature-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='feature-item'>
              <i className='fas fa-database icon'></i>
              <div>
                <h3 className='feature-title'>Cloud data</h3>
                <p className='feature-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='feature-item'>
              <i className='fas fa-wifi icon'></i>
              <div>
                <h3 className='feature-title'>Connectivity</h3>
                <p className='feature-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolDesign;
