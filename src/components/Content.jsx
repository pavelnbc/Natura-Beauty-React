import React from 'react';

function Content({ children }) {
  return (
    <main className="content" id="content">
      {children}
    </main>
  )
}

export default Content