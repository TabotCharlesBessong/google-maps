export const getData = async (
	age,
	area,
	gender,
	hour,
	mocode,
	race,
	selectedStartDate,
	selectedEndDate,
	crimeType
) => {
	const params = new URLSearchParams();

	if (area !== "All Areas") {
		params.append("area_name", area);
	}

	if (crimeType !== "ALL CRIME TYPES") {
		params.append("crm_cd_desc", crimeType);
	}

	if (race !== "All") {
		params.append("vict_descent", race);
	}

	if (gender !== "All") {
		params.append("vict_sex", gender);
	}

	if (mocode !== null) {
		params.append("mocodes", mocode);
	}

	const url = `https://data.lacity.org/resource/2nrs-mtv8.json?${params.toString()}`;
	const url2 = `https://data.lacity.org/resource/63jg-8b9z.json?${params.toString()}`;

	const response = await fetch(
		new Date(selectedStartDate) &&
			new Date(selectedEndDate) >= new Date("Jan 1, 2020")
			? url +
					`&$limit=5000&$where=date_occ between '${new Date(selectedStartDate)
						.toISOString()
						.substring(0, 10)}' and '${selectedEndDate
						.toISOString()
						.substring(0, 10)}' and vict_age between '${age[0].toLocaleString(
						"en-US",
						{
							// minimumIntegerDigits: 2,
							useGrouping: false,
						}
					)}' and '${age[1].toLocaleString("en-US", {
						// minimumIntegerDigits: 2,
						useGrouping: false,
					})}'
  and time_occ between '${hour[0].toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})}}' and '${hour[1].toLocaleString("en-US", {
						minimumIntegerDigits: 2,
						useGrouping: false,
					})}}'
  `
			: url2 +
					`&$limit=5000&$where=date_occ between '${new Date(selectedStartDate)
						.toISOString()
						.substring(0, 10)}' and '${selectedEndDate
						.toISOString()
						.substring(0, 10)}' and vict_age between '${age[0].toLocaleString(
						"en-US",
						{
							useGrouping: true,
						}
					)}' and '${age[1].toLocaleString("en-US", {
						useGrouping: true,
					})}'
      and time_occ between '${hour[0].toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false,
			})}}' and '${hour[1].toLocaleString("en-US", {
						minimumIntegerDigits: 2,
						useGrouping: false,
					})}}'
      `
	);
	return response.json();
};
