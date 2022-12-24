import logo from "../logo.svg"

export const Footer = ({ headerRef }) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 40,
        marginBottom: 20,
        alignItems: "flex-end",
        justifyContent: "space-between"
      }}
    >
      <div>
        <a
          href="https://www.linkedin.com/in/nonoumasy/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0EA7BC", textDecoration: "none" }}
        >
          © 2021 NONOUMASY
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          cursor: "pointer"
        }}
        onClick={() =>
          headerRef?.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div
          style={{
            textAlign: "right",
            marginRight: 10
          }}
        >
          Back to top{" "}
        </div>
        <img src={logo} height="20" width="20" alt="" />
      </div>
    </div>
  )
}
