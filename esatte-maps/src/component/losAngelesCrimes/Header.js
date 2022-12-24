import { IconButton, Tooltip, Typography } from "@material-ui/core"
// import NotificationsIcon from "@material-ui/icons/Notifications"

export const Header = ({ headerRef }) => {
  return (
    <div
      ref={headerRef}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20
      }}
    >
      <div>
        <Typography variant="h6">
          Los Angeles CrimeWatch<sup style={{ fontSize: 12 }}>1.0</sup>
        </Typography>
        <Typography variant="body1" style={{ fontSize: 12, color: "#aaa" }}>
          Inspired by Crime Fighters everywhere.
        </Typography>
      </div>
      {/* <Tooltip title="Get Notifications if crime happens near you"> */}
      {/* <IconButton>
        <NotificationsIcon />
      </IconButton> */}
      {/* </Tooltip> */}
    </div>
  )
}
