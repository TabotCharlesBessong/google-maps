import React, { useState, useCallback } from "react"
import { Collapse, List, ListItem } from "@material-ui/core"
import capitalise from "lodash.capitalize"
import { ListDetail } from "./ListDetail"

export const CustomizedListItem = ({
  i,
  item,
  setCenterCoordinates,
  setZoomLevel,
  setSelectedItem
}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleCenterMarker = useCallback(
    (item) => {
      setCenterCoordinates({
        lat: item.lat === "0" ? Number(34.05) : Number(item.lat),
        lng: item.lon === "0" ? Number(-118.24) : Number(item.lon)
      })
      setZoomLevel(13)
      setSelectedItem(item)
    },
    [setCenterCoordinates, setZoomLevel, setSelectedItem]
  )

  return (
    <>
      <ListItem
        button
        onClick={handleOpen}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%"
          // overflow: "hidden"
        }}
      >
        <div
          style={{
            display: "flex"
          }}
        >
          <div style={{ marginRight: 10 }}>{i + 1}.</div>
          <div style={{ marginRight: 10 }}>{capitalise(item.crm_cd_desc)}</div>
        </div>
        <div>{new Date(item.date_occ).toLocaleDateString()}</div>
      </ListItem>

      <Collapse key={i} in={open} timeout="auto" unmountOnExit>
        <List
          component="li"
          key={i}
          style={{
            marginLeft: 50,
            cursor: "pointer"
            // width: "100vw",
            // overflow: "hidden"
          }}
          onClick={() => handleCenterMarker(item)}
        >
          <ListDetail item={item} />
        </List>
      </Collapse>
    </>
  )
}
