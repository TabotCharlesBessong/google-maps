import "date-fns"
import DateFnsUtils from "@date-io/date-fns"
// import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers"
import {debounce} from "lodash"

export default function DatePicker({ selectedDate, setSelectedDate, label }) {
  const handleDateChange = debounce((item) => {
    console.log("i fired...")
    setSelectedDate(item)
  }, 2000)

  return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				disableToolbar
				variant="inline"
				format="MM/dd/yyyy"
				margin="normal"
				id="date-picker-inline"
				label={label}
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					"aria-label": "change date",
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}
