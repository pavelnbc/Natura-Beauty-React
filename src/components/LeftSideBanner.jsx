import React from 'react';

function LeftSideBanner({ setContWithoutDisappear }) {
    return (
      <div className="left-side-banner" onClick={setContWithoutDisappear}>
          <img src="/img/doctor.jpg" alt="doctor-img"/>
      </div>
    )
}

export default LeftSideBanner