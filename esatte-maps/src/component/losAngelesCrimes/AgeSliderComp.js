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

const AgeSlider = withStyles({
  mark: {
    backgroundColor: "#0EA7BC",
    opacity: 0.5,
    height: 8,
    width: 1,
    marginTop: 0
  }
})(Slider)

const marks = []

for (let i = 0; i <= 99; i += 10) {
  marks.push({ value: i, label: i })
}

export const AgeSliderComp = ({ age, setAge }) => {
  const handleChange = debounce((event, newValue) => {
    setAge(newValue)
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
        <Typography style={{ fontSize: 10 }}>Select Age of Victim</Typography>
        <div
          style={{
            fontSize: 10,
            cursor: "pointer",
            color: "#0EA7BC",
            fontWeight: "bold"
          }}
          onClick={() => setAge([0, 99])}
        >
          Reset Ages
        </div>
      </div>
      <ThemeProvider theme={muiTheme}>
        <AgeSlider
          value={age}
          marks={marks}
          max={99}
          track={"normal"}
          valueLabelDisplay="auto"
          color="primary"
          onChange={handleChange}
          aria-labelledby="range-slider"
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 60,
            width: "95%",
            display: "flex",
            justifyContent: "center"
          }}
        />
      </ThemeProvider>
    </div>
  )
}
