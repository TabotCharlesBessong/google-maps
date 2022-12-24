import { useEffect, useState, useRef, useMemo } from "react"
import { getData } from "../../api/losangeles"
// import { areaNameArr, raceDict, genderArr } from "./arr"
import pink from "@material-ui/core/colors/pink"
import cyan from "@material-ui/core/colors/cyan"
import {
	useMediaQuery,
	createTheme,
	ThemeProvider,
	Container,
	Grid,
	CssBaseline,
} from "@material-ui/core";

import "./styles.css"

import Geocode from "react-geocode"
import { SelectComp , TabComp, Footer, Header,HourSliderComp,SelectRaceComp,Resources , Map} from "../../component";
import {
	crimeTypeArr,
	areaNameArr,
	raceDict,
	genderArr,
} from "../../constant/data";
import AgeSliderComp from "../../component/losAngelesCrimes/AgeSliderComp";
import DateFilterComp from "../../component/losAngelesCrimes/DateFilterComp";


Geocode.setApiKey("AIzaSyC31moz8nAhu41H9DN38B4I5bCI9Rq_jjc");

const raceArr = Object.keys(raceDict)

const LosAngelesCrimes =()=> {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: cyan,
          secondary: pink
        }
      }),
    [prefersDarkMode]
  )

  const [data, setData] = useState([])
  // const [allData, setAllData] = useState([])
  // const [filteredData, setFilteredData] = useState([])
  const [area, setArea] = useState("All Areas")
  const [race, setRace] = useState("All")
  const [age, setAge] = useState([0, 99])
  const [hour, setHour] = useState([0, 24])
  const [gender, setGender] = useState("All")
  const [mocode] = useState(null)
  const [zoomLevel, setZoomLevel] = useState(10)
  const headerRef = useRef()
  const [seletectedItem, setSelectedItem] = useState({})
  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: 34.0722,
    lng: -118.37
  })
  const [crimeType, setCrimeType] = useState("ALL CRIME TYPES")
  const [selectedStartDate, setSelectedStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 1)
  )
  const [selectedEndDate, setSelectedEndDate] = useState(new Date(Date.now()))
  const listRefs = useRef([])
  listRefs.current = []

  const addToRefs = (el) => {
    if (el && !listRefs.current.includes(el)) {
      listRefs.current.push(el)
    }
  }
  const scrollToItem = (i) => {
    listRefs.current[i]?.scrollIntoView({
      behavior: "smooth"
    })
  }

  // const allCrimeTypes = map(uniqBy(allData, "area_name"), "area_name")
  // console.log(allCrimeTypes)
  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       return await getAllData()
  //     }
  //     fetchData().then((item) => setAllData(item))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await getData(
          age,
          area,
          gender,
          hour,
          mocode,
          race,
          selectedStartDate,
          selectedEndDate,
          crimeType
        )
        return res
      }

      fetchData().then((item) => {
        setData(item)
      })
      console.log("team 1 fired.")
      return () => {
        setData([])
      }
    } catch (err) {
      console.log(err)
    }
  }, [
    age,
    setAge,
    area,
    gender,
    hour,
    mocode,
    race,
    selectedStartDate,
    selectedEndDate,
    crimeType,
    setCenterCoordinates
  ])

  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          spacing={0}
          style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        >
          <Grid
            item
            xs={12}
            md={4}
            style={{ height: "100vh", overflow: "auto" }}
          >
            <Container maxWidth="xs">
              <Header headerRef={headerRef} />
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginTop: 20 }}>
                  <SelectComp
                    title={"Select Area"}
                    arr={areaNameArr}
                    foo={area}
                    setFoo={setArea}
                  />
                </Grid>
                <Grid item xs={12}>
                  <DateFilterComp
                    selectedStartDate={selectedStartDate}
                    selectedEndDate={selectedEndDate}
                    setSelectedStartDate={setSelectedStartDate}
                    setSelectedEndDate={setSelectedEndDate}
                  />
                </Grid>
                <Grid item xs={12}>
                  <HourSliderComp hour={hour} setHour={setHour} />
                </Grid>
                <Grid item xs={12}>
                  <SelectComp
                    title={"Select Crime Type"}
                    arr={crimeTypeArr}
                    foo={crimeType}
                    setFoo={setCrimeType}
                  />
                </Grid>
                {/* <Grid item xs={12} style={{ marginBottom: 40 }}>
                  <div style={{ marginBottom: 5, fontSize: 10 }}>
                    Experimental Feature *
                  </div>
                  <ComboBox
                    arr={mocodesDict}
                    mocode={mocode}
                    setMocode={setMocode}
                  />
                </Grid> */}

                <Grid item xs={6}>
                  <SelectRaceComp
                    title={"Select Race of Victim"}
                    arr={raceArr}
                    foo={race}
                    setFoo={setRace}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SelectComp
                    title={"Select Gender of Victim"}
                    arr={genderArr}
                    foo={gender}
                    setFoo={setGender}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <AgeSliderComp age={age} setAge={setAge} />
              </Grid>

              <TabComp
                area={area}
                race={race}
                gender={gender}
                crimeType={crimeType}
                filteredData={data}
                listRefs={listRefs}
                addToRefs={addToRefs}
                zoomLevel={zoomLevel}
                setZoomLevel={setZoomLevel}
                setCenterCoordinates={setCenterCoordinates}
                setSelectedItem={setSelectedItem}
              />
              <Resources />
              <Footer headerRef={headerRef} />
            </Container>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Map
              scrollToItem={scrollToItem}
              data={data}
              zoomLevel={zoomLevel}
              centerCoordinates={centerCoordinates}
              seletectedItem={seletectedItem}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

export default LosAngelesCrimes
