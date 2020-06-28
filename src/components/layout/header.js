import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby";

const header_data = [
	{
		title: "Make a Balanced Bowl",
		action: 0,
		link: '/make-balanced-bowl'
	},
	{
		title: "Why MAGGI®?",
		action: 1,
		link: '/#why-maggi'
	},
	{
		title: "Delicious Recipes",
		action: 2,
		link: '/#delicious-recipes'
	},
];

const Header = ({ siteTitle }) => {
  const [active, setActive] = useState('en');
  return (
    <header>
      <div className="main-header">
        <Link to="/">
          <div className="main-header_logo" />
        </Link>

        <div className="main-header_menu">
          {header_data.map((item, index) => (
            <div className="main-header_menu-item" key={index}>
              <Link to={item.link}><span>{item.title}</span></Link>
            </div>
          ))}
          <div className="main-header_menu-item language">
            <div className={`language-common en ${active === 'en'? 'active' : ''}`} onClick={() => setActive('en')}>
              <span>EN</span>
            </div>
            <div className={`language-common bm ${active === 'bm' ? 'active' : ''}`} onClick={() => setActive('bm')}>
              <span>BM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header