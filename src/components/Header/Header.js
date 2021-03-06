/** @jsx jsx */
import { useEffect, useState } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../../assets/usbnex-logo.svg"
import NavButton from "../UI/NavButton/NavButton"
import "./Header.css"
import { Auth } from "aws-amplify"

const Header = ({ path }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function fetchAuth() {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
    }
    fetchAuth();
  }, [])
  const logOut = async () => {
    await Auth.signOut()
    setUser(null)
  }
  const isLogin = path === "/login"
  return (
    <header className="header">
      <Link to="/">
        <div className="header__brand">
          <div className="header__brand__logo">
            <Logo />
          </div>

          <div className="header__brand__title">
            <h1>
              <small>usbnex</small>
            </h1>
          </div>
        </div>
      </Link>
      <div className="header__nav">
        <ul>
          <li>
            <Link
              to="/missions"
              sx={{
                color: "accent",
                fontSize: 16,
              }}
            >
              Mission
            </Link>
          </li>
          <li>
            <Link
              to="/how-it-works"
              sx={{
                color: "accent",
                fontSize: 16,
              }}
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link
              to="/ryval"
              sx={{
                color: "accent",
                fontSize: 16,
              }}
            >
              Ryval
            </Link>
          </li>
        </ul>
      </div>
      {user ? (
        <button
          sx={{
            variant: "links.primary",
            border: "none",
            fontFamily: "inherit",
            fontWeight: "bolder",
            fontSize: "16px",
          }}
          className="header__btn"
          onClick={logOut}
        >
          Sign Out
        </button>
      ) : (
        <NavButton
          title={isLogin ? "Signup" : "Login"}
          link={isLogin ? "/signup" : "/login"}
          className="header__btn"
          variant="primary"
        />
      )}
    </header>
  )
}

export default Header
