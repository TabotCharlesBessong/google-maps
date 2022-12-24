import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import { makeStyles } from "@material-ui/core/styles"

import Popup from "./Popup"

const MapFoo = ({ data, centerCoordinates, zoomLevel }) => {
  const classes = useStyles()
  const [popupInfo, setPopupInfo] = useState(null)
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        {popupInfo && (
          <Popup popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
        )}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCbll8tLBXWpHeb0VDuCTLi8NVwWG7Y7Hs" }}
          defaultCenter={centerCoordinates}
          defaultZoom={zoomLevel}
        >
          {data &&
            data?.map((item, i) => {
              return (
                <div
                  className={classes.marker}
                  lat={item.lat}
                  lng={item.lon}
                  key={item.dr_no}
                  onMouseOver={() => {
                    setPopupInfo(item)
                  }}
                  onMouseLeave={() => {
                    setPopupInfo(null)
                  }}
                  onClick={() => {
                    setPopupInfo(!popupInfo)
                  }}
                >
                  {i + 1}
                </div>
              )
            })}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default React.memo(MapFoo)

const useStyles = makeStyles(() => ({
  marker: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ec5d5d",
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "#fff",
    fontWeight: "bold",
    fontSize: 10,
    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.2)",
    color: "#fff",
    cursor: "pointer",
    zIndex: 10
  }
  // marker: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#ec5d5d",
  //   width: 30,
  //   padding: 3,
  //   borderRadius: 5,
  //   borderStyle: "solid",
  //   borderWidth: 2,
  //   borderColor: "#fff",
  //   fontWeight: "bold",
  //   fontSize: 10,
  //   boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.2)",
  //   color: "#fff",
  //   cursor: "pointer",
  //   zIndex: 10
  // }
}))
