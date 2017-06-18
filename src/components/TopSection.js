import React from 'react'

export const TopSection = ({title, content}) => {
  return (
    <div className="section-container top-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 section-description">
            <h2>{title}</h2>
            <div className="divider-1">
              <span></span>
            </div>
            <div>{content ? content : 'Oops, did not get content'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}