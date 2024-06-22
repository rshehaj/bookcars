// src/components/Map.tsx
import React from 'react'

const Map: React.FC = () => (
  <div className="col-lg-5 offset-lg-1 col-md-12">
    <h5>Location</h5>
    <div className="google-map">
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=portez,%20fier+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  </div>
    )

export default Map
