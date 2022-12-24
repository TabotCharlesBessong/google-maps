import { raceDict, mocodesDict, dayOfWeek } from "../arr"
import { Tooltip } from "@material-ui/core"
import capitalise from "lodash.capitalize"

export const ListDetail = ({ item }) => {
  return (
    <>
      <div>{dayOfWeek[new Date(item.date_occ).getUTCDay()]}</div>
      <div>
        Time:{" "}
        {capitalise(item.time_occ.slice(0, 2) + ":" + item.time_occ.slice(2))}
      </div>
      <br />
      <div>Area: {item.area_name}</div>
      <div>Location: {capitalise(item.location)}</div>
      <div>Premise: {capitalise(item.premis_desc)}</div>

      <div>Status: {capitalise(item.status_desc)}</div>
      <div>Record No.: {item.dr_no}</div>
      <div>Weapon: {capitalise(item.weapon_desc)}</div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <div style={{ marginRight: 5, whiteSpace: "nowrap" }}>
          {" "}
          Victim: {item.vict_age}-year old
        </div>
        <div style={{ marginRight: 5 }}>{raceDict[item.vict_descent]}</div>

        <div style={{ marginRight: 5 }}>
          {item.vict_sex === "M" ? "Male" : "Female"}
        </div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          marginTop: 0,
          flexWrap: "wrap"
        }}
      >
        {item.mocodes?.split(" ").map((item, i) => (
          <Tooltip
            key={i}
            placement="top"
            title={mocodesDict[item.toString()]}
            enterTouchDelay={50}
          >
            <div
              style={{
                paddingRight: 10,
                paddingLeft: 10,
                backgroundColor: "#0EA7BC",
                color: "#fff",
                marginRight: 10,
                borderRadius: 5,
                marginBottom: 10
              }}
            >
              {item}
            </div>
          </Tooltip>
        ))}
      </div>
    </>
  )
}
