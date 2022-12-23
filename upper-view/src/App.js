import React, { Component } from "react";
import ReactStreetview from "react-streetview";

class App extends React.Component {
  render() {
    const googleMapsApiKey = process.env.MAP_API_KEY

    const streetViewPanoramaOptions = {
      position: { lat: 27.289821, lng: -82.481325 },
      pov: { heading: 0, pitch: 0 },
      zoom: 1,
      addressControl: true,
      showRoadLabels: true,
      zoomControl: true
    };

    return (
      <div
        style={{
          width: "800px",
          height: "450px",
          backgroundColor: "#eeeeee"
        }}
      >
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
    );
  }
}

export default App;
