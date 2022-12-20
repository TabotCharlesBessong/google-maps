import React, { Component } from "react";
import ReactStreetview from "react-streetview";

class App extends React.Component {
  render() {
    const googleMapsApiKey = "AIzaSyA4bN_JLbgMsrsaspEm1ebHDiTNNvE7DTA";

    const streetViewPanoramaOptions = {
      position: { lat: 27.289821, lng: -82.481325 },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
      zoomControl: false
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
