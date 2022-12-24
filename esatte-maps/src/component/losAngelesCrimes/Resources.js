const resourceArr = [
  {
    title: "Data Source",
    hrefLink:
      "https://data.lacity.org/Public-Safety/Crime-Data-from-2020-to-Present/2nrs-mtv8"
  },
  {
    title: "Summary Reporting System (SRS)",
    hrefLink:
      "https://data.lacity.org/api/views/2nrs-mtv8/files/b13f2ec6-8112-43ca-b235-2f3feb4ebaaa?download=true&filename=UCR%20Manual.pdf"
  },
  {
    title: "MO Codes Guide",
    hrefLink:
      "https://data.lacity.org/api/views/2nrs-mtv8/files/4591b6bf-5846-4de0-9fb0-8780a77a036c?download=true&filename=MO_CODES_Numerical_20191119.pdf"
  }
]

export const Resources = () => {
  return (
    <div style={{ marginTop: 40, marginBottom: 20 }}>
      <div>Resources:</div>
      <ol>
        {resourceArr.map((item, i) => {
          return (
            <li key={i}>
              <a
                href={item.hrefLink}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#0EA7BC" }}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
