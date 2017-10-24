import React from 'react';

function LeftSideBanner({ setContWithoutDisappear }) {
    return (
      <div className="left-side-banner" onClick={setContWithoutDisappear}>
          <img src="/img/doctor.jpg" alt="doctor-img"/>

          <div className="guarantees">
              <img src="/img/guarantees/BBB.png" alt="BBB-img"/>
              <img src="/img/guarantees/CIPA.png" alt="CIPA-img"/>
              <img src="/img/guarantees/MIPA.png" alt="MIPA-img"/>
              <img src="/img/guarantees/Safety-check.png" alt="safety-check-img"/>
          </div>
      </div>
    )
}

export default LeftSideBanner