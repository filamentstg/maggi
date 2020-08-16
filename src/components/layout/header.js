import React from "react"
import { Link } from "gatsby";
import { navigateTo } from 'gatsby-link';
import { window } from "browser-monads";
import menuIcon from '../../images/layout/iconfinder_menu-alt_134216.png';
import closeIcon from '../../images/layout/close.png';
import tomato from '../../images/layout/chilli-1.png';
import herb from '../../images/layout/herb-1.png';
import pepper from '../../images/layout/pepper-3.png';

import { activeLocale, lang } from "../../language/index";

const header_data = [
	{
		title: lang.MAKE_YOUR_BALANCED_BOWL,
		action: 0,
		link: '/make-balanced-bowl'
	},
	{
		title: lang.WHY_MAGGI,
		action: 1,
		link: '/#why-maggi'
	},
	{
		title: lang.DELICIOUS_RECIPES,
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
		this.setState({ lang: activeLocale });
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

	setLocale = (locale) => {
    if (typeof window !== 'undefined') {
      this.setState({ lang: locale });
      localStorage.setItem('lang', locale);
      window.location.reload();
    }
	}

	changeRoute = (action) => {
		if (action === 0) {
			navigateTo('/make-balanced-bowl');
			return;
		}
		const { scroll, hideMybb } = this.props;
		if (hideMybb) {
			if (action === 1) {
				navigateTo('/#why-maggi');
			} else {
				navigateTo('/#delicious-recipes');
			}
			return;
		}

		scroll(action);
	}

	render() {
		const { isMobile, lang, isShowMenu } = this.state;
		// const { hideMybb } = this.props;
		let menuList = header_data;
		// if (hideMybb) {
		//   menuList = header_data.filter(item => item.action !== 0);
		// }
		return (
			<header>
				<div className="main-header">
					<Link to="/">
						<div className="main-header_logo" />
					</Link>
					<div className="main-header_menu" id="main-header">
						{
							isMobile &&
							<>
								<img src={tomato} alt="tomatto-1" className="tomato-1" />
								{/* <img src={herb} alt="herb-1" className="herb-1"/> */}
								<img src={pepper} alt="pepper-1" className="pepper-1" />
							</>
						}
						{
							!isMobile ?
								<>
									{menuList.map((item, index) => (
										<div className="main-header_menu-item" key={index}>
											<span onClick={() => this.changeRoute(item.action)}>{item.title}</span>
										</div>
									))}
									<div className="main-header_menu-item language">
										<div className={`language-common en ${lang === 'en' ? 'active' : ''}`} onClick={() => this.setLocale('en')}>
											<span>EN</span>
										</div>
										<div className={`language-common bm ${lang === 'bm' ? 'active' : ''}`} onClick={() => this.setLocale('bm')}>
											<span>BM</span>
										</div>

									</div>
								</> :
								<div style={{ height: '60px', zIndex: '10' }}>
									{!isShowMenu &&
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<div className="main-header_menu-item language" style={{ marginRight: '.5em' }}>
												<div className={`language-common en ${lang === 'en' ? 'active' : ''}`} onClick={() => this.setLocale('en')}>
													<span>EN</span>
												</div>
												<div className={`language-common bm ${lang === 'bm' ? 'active' : ''}`} onClick={() => this.setLocale('bm')}>
													<span>BM</span>
												</div>
												{/* <span>{window.innerWidth}</span> */}
											</div>
											<img style={{ cursor: 'pointer' }} src={menuIcon} alt="" width="50" height="50" onClick={() => this.setState({ isShowMenu: true })} />
										</div>
									}
									<div className="mobile-menu" style={isShowMenu ? { height: '100%' } : { height: '0' }}>
										{isShowMenu && <img className="mobile-menu-close-btn" src={closeIcon} alt="" width="50" height="50" onClick={() => this.setState({ isShowMenu: false })} />}
										<div className="mobile-menu-container" style={isShowMenu ? { display: 'block' } : { display: 'none' }}>
											{menuList.map((item, index) => (
												<div className="mobile-menu-item" key={index} onClick={() => this.setState({ isShowMenu: false })}>
													<span onClick={() => this.changeRoute(item.action)}>{item.title}</span>
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
