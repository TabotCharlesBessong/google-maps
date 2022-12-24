import { Slider, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { createTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import debounce from "lodash.debounce"

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#0EA7BC"
      },
      track: {
        color: "#0EA7BC"
      },
      rail: {
        color: "#0EA7BC"
      },
      markLabel: {
        color: "#999"
      },
      markLabelActive: {
        color: "#999"
      }
    }
  }
})

const HourSlider = withStyles({
  mark: {
    backgroundColor: "#0EA7BC",
    opacity: 0.5,
    height: 8,
    width: 1,
    marginTop: 0
  }
})(Slider)

const marks = []

for (let i = 0; i <= 24; i += 4) {
  marks.push({ value: i, label: i })
}

export const HourSliderComp = ({ hour, setHour }) => {
  const handleChange = debounce((event, newValue) => {
    setHour(newValue)
  }, 100)

  return (
    <div style={{ width: "100%", marginLeft: 0 }}>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography style={{ fontSize: 10 }}>Select Hour</Typography>
        <div
          style={{
            fontSize: 10,
            cursor: "pointer",
            color: "#0EA7BC",
            fontWeight: "bold"
          }}
          onClick={() => setHour([0, 24])}
        >
          Reset Hour
        </div>
      </div>
      <ThemeProvider theme={muiTheme}>
        <HourSlider
          value={hour}
          marks={marks}
          max={24}
          track={"normal"}
          valueLabelDisplay="auto"
          color="primary"
          onChange={handleChange}
          aria-labelledby="range-slider"
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 40,
            width: "95%",
            display: "flex",
            justifyContent: "center"
          }}
        />
      </ThemeProvider>
    </div>
  )
}
