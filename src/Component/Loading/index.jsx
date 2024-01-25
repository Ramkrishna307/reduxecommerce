import React from 'react';
import "./style.scss";
const Loading = () => {
  return (
    <div className="panel">
    <div className="skeleton">
      <div className="skeleton__section skeleton__section--card">
        <div className="skeleton__img"></div>
        <div>
          <div className="skeleton__header skeleton__header--long"></div>
          <div className="skeleton__p"></div>
        </div>
      </div>
      <div className="skeleton__p"></div>
      <div className="skeleton__p"></div>
      <div className="skeleton__p"></div>
    </div>
  </div>
  )
}

export default Loading