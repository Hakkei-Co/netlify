/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import "./footer.css"

const Footer = () => (
  <footer className="footer">

    <div className="footer__copyright">
      <span
        sx={{
          color: "accent",
          fontSize: 16,
        }}
      >
        &copy;2020-2021 Hakkei & Co LLC
      </span>
    </div>
    <div className="footer__links">
      <Link
        to="/terms-of-use"
        sx={{
          color: "accent",
          fontSize: 16,
        }}
      >
        Terms of Use
      </Link>
      <hr />
      <Link
        to="/security-statement"
        sx={{
          color: "accent",
          fontSize: 16,
        }}
      >
        Security Statement
      </Link>
      <hr />
      <Link
        to="/privacy-notice"
        sx={{
          color: "accent",
          fontSize: 16,
        }}
      >
        Privacy Notice
      </Link>
      <hr />
      <Link
        to="/acceptable-use"
        sx={{
          color: "accent",
          fontSize: 16,
        }}
      >
        Acceptable Use
      </Link>
      <hr />
      <Link
        to="/cookies-policy"
        sx={{
          color: "accent",
          fontSize: 16,
        }}
      >
        Cookies Policy
      </Link>
    </div>
  </footer>
)

export default Footer
