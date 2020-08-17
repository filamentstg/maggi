import React from "react";
import "./styles.scss";
import { window } from "browser-monads";
import baseBox from "../../images/why-maggi/base box.png";
import baseBox2 from "../../images/why-maggi/base box2.png";
import icon1 from "../../images/why-maggi/icon 1.png";
import icon2 from "../../images/why-maggi/icon 2.png";
import convenience from "../../images/why-maggi/convenience icon.png";
import spices from "../../images/layout/spices.png";
import noodles from "../../images/layout/noodles.png";
import { lang, activeLocale } from "../../language/index";

export default class MaggiSectionComponent extends React.PureComponent {
  state = {
    isMobile: false,
    activeLang: 'en'
  };

  componentDidMount() {
    this.setState({ activeLang: activeLocale});
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
    const { isMobile, activeLang } = this.state;
    return (
      <>
        <div className={`why-maggi ${activeLang === 'bm' ? 'bm-lang' : ''}`} id="">
          {
            isMobile &&
            <>
              <img src={spices} alt="spices" className="spices" />
              <img src={noodles} alt="noodles" className="noodles" />
            </>
          }
          <h1>{lang.WHY_MAGGI}</h1>
          <p className="why-maggi-content">
            {lang.WHY_MAGGI_DES_1} <br/>
            {lang.WHY_MAGGI_DES_2}
          </p>
        </div>
        <div className={`columns custom-mobile why-maggi-des ${activeLang === 'bm' ? 'bm-lang' : ''}`} style={{ margin: 0 }}>
          <div
            className="column is-8-desktop is-8-widescreen is-8-fullhd custom-mobile-ingredient"
            style={{ width: "64%", margin: 'auto' }}
          >
            <div className="custom-box">
              <div className="custom-box-item">
                <img src={baseBox} alt="" />
                <div className="box-container">
                  <p className="box-container-header">{lang.SELECTED_INGREDIENT}</p>
                  <div className="columns is-gapless custom-mobile">
                    <div className="column is-6 box-container-content">
                      <img src={icon1} alt="" />
                      <p>
                        {lang.SELECTED_INGREDIENT_DES_1}
                      </p>
                    </div>
                    <div className="column is-6 box-container-content">
                      <img src={icon2} alt="" />
                      <p>
                        {lang.SELECTED_INGREDIENT_DES_2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="column is-4-desktop is-4-widescreen is-4-fullhd convenience"
            style={{ paddingBottom: "1.5em" }}
          >
            <div
              className="custom-box-item right-box"
            >
              <img src={baseBox2} alt="" style={{ height: "100%" }} />
              <div className="box-container">
                <p className="convenience-title" className="box-container-header">
                  {lang.CONVENIENCE}
                </p>
                <div className="box-container-content">
                  <img src={convenience} alt="" style={{ marginTop: "1.5em" }} />
                  <p>{lang.CONVENIENCE_DES}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
