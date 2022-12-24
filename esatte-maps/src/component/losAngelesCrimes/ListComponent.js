import { Divider } from "@material-ui/core"
import React from "react"
import { CustomizedListItem } from "./CustomizedListItem"

export const ListComponent = ({
  data,
  // open,
  // setOpen,
  addToRefs,
  setCenterCoordinates,
  setZoomLevel,
  setSelectedItem
}) => {
  return (
    <>
      <div style={{ marginTop: 20 }}>
        {data?.length > 0 &&
          data
            .sort(function (a, b) {
              return new Date(a.time_occ) - new Date(b.time_occ)
            })
            .sort(function (a, b) {
              return new Date(a.date_occ) - new Date(b.date_occ)
            })
            .map((item, i) => {
              return (
                <div
                  key={item.dr_no}
                  ref={addToRefs}
                  style={{ width: "100%", overflow: "auto" }}
                >
                  <CustomizedListItem
                    i={i}
                    item={item}
                    // open={open}
                    // setOpen={setOpen}
                    setCenterCoordinates={setCenterCoordinates}
                    setZoomLevel={setZoomLevel}
                    setSelectedItem={setSelectedItem}
                  />
                  <Divider />
                </div>
              )
            })}
      </div>
    </>
  )
}
