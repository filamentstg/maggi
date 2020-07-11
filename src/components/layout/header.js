import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby";
import { window } from "browser-monads";
import menuIcon from '../../images/layout/iconfinder_menu-alt_134216.png';
import closeIcon from '../../images/layout/close.png';
// import tomato from '../../images/layout/tomato.jpg';
const header_data = [
	{
		title: "Make Your Balanced Bowl",
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

class Header extends React.PureComponent {
  state = {
    isMobile: false,
    lang: 'en',
    isShowMenu: false
  }

  componentDidMount() {
    if (window.innerWidth <= 1159) {
      this.setState({
        isMobile: true
      })
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1159) {
        this.setState({
          isMobile: true
        })
      } else {
        this.setState({
          isMobile: false
        })
      }
    });
  }

  render() {
    const { isMobile, lang, isShowMenu } = this.state;
    const { hideMybb } = this.props;
    let menuList = header_data;
    if (hideMybb) {
      menuList = header_data.filter(item => item.action !== 0);
    }
    return (
      <header>
        <div className="main-header">
          <Link to="/">
            <div className="main-header_logo" />
          </Link>
          <div className="main-header_menu" id="main-header">
            {
              !isMobile ?
                <>
                  {menuList.map((item, index) => (
                    <div className="main-header_menu-item" key={index}>
                      <Link to={item.link}><span>{item.title}</span></Link>
                    </div>
                  ))}
                  <div className="main-header_menu-item language">
                    <div className={`language-common en ${lang === 'en' ? 'active' : ''}`} onClick={() => this.setState({lang: 'en'})}>
                      <span>EN</span>
                    </div>
                    <div className={`language-common bm ${lang === 'bm' ? 'active' : ''}`} onClick={() => this.setState({ lang: 'bm' })}>
                      <span>BM</span>
                    </div>
                  </div>
                </> :
                <div style={{ height: '60px'}}>
                  {!isShowMenu && <img style={{ cursor: 'pointer' }} src={menuIcon} alt="" width="50" height="50" onClick={() => this.setState({ isShowMenu: true })} /> }
                  <div className="mobile-menu" style={isShowMenu ? {height: '100%'} : {height: '0'}}>
                  {isShowMenu && <img className="mobile-menu-close-btn" src={closeIcon} alt="" width="50" height="50" onClick={() => this.setState({ isShowMenu: false })} /> }
                    <div className="mobile-menu-container" style={isShowMenu ? { display: 'block' } : { display: 'none' }}>
                      {menuList.map((item, index) => (
                        <div className="mobile-menu-item" key={index} onClick={() => this.setState({ isShowMenu: false })}>
                          <Link to={item.link}><span>{item.title}</span></Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </header>
    );
  }
}

export default Header
