import React from "react";
import { Link } from "gatsby";
import { window } from "browser-monads";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import tomato from '../../images/layout/chilli-1.png';
import orange from '../../images/layout/orange.png';
import cup from '../../images/layout/Cup.png';
import herb_2 from '../../images/layout/herb-2.png';
import stroke from '../../images/layout/stroke.png';
import { lang, activeLocale } from "../../language/index";

import "./styles.scss";
import "./step.scss";

const Full_Bowl = () => {
  return (
    <>
      <h1 className="carousel-header">{lang.SERVE_YOUR_FAMILY_WITH_BALANCED_BOWLS}</h1>
      <p style={{ marginBottom: ".5em", padding: "0 3em" }} >
        {lang.CAROUSEL_INSTRUCTION}
      </p>
      <p style={{ fontFamily: 'AvenirNext' }}>{lang.SWIPE_RIGHT}</p>
    </>
  );
};

const Step_1 = () => {
  return (
    <>
      <h1>{lang.STEP_1}</h1>
      <p>{lang.STEP_1_DES}</p>
      <div className="columns steps">
        <span className="steps-equal">=</span>
        <div className="column is-6 step">
          <div className="step-1-1"></div>
        </div>
        <div className="column is-6">
          <div className="step-1-2"></div>
        </div>
      </div>
      <div className="columns is-gapless is-mobile">
        <div className="column is-6">
          <span className="sub-title-custom">1 {lang.FISTFUL}</span>
        </div>
        <div className="column is-6">
          <span className="sub-title-custom">1 {lang.PACKET}</span>
        </div>
      </div>
    </>
  );
};

const Step_2 = () => {
  return (
    <>
      <h1>{lang.STEP_2}</h1>
      <p style={{ padding: ".8em 4em" }}>{lang.STEP_2_DES}</p>
      <div className="columns steps">
        <span className="steps-equal">=</span>
        <div className="column is-6 step">
          <div className="step-2-1"></div>
        </div>
        <div className="column is-6">
          <div className="step-2-2"></div>
        </div>
      </div>
      <div className="columns is-gapless is-mobile">
        <div className="column is-6">
          <span className="sub-title-custom">1 {lang.PALM_SIZE}</span>
        </div>
        <div className="column is-6">
          <span className="sub-title-custom">{lang.PROTEIN}</span>
        </div>
      </div>
    </>
  );
};

const Step_3 = () => {
  return (
    <>
      <h1>{lang.STEP_3}</h1>
      <p style={{ padding: "0 4em" }}>{lang.STEP_3_DES}</p>
      <div className="columns steps mobile-step-3">
        <span style={{ top: '70%' }} className="steps-equal">=</span>
        <div
          className="column is-6 step"
        >
          <div className="step-3-1"></div>
        </div>
        <div className="column is-6">
          <div className="step-3-2"></div>
        </div>
      </div>
      <div className="columns is-gapless is-mobile">
        <div className="column is-6">
          <span className="sub-title-custom">{lang.HANDFUL_1}</span>
        </div>
        <div className="column is-6">
          <span className="sub-title-custom">{lang.VEGETEBLES}</span>
        </div>
      </div>
    </>
  );
};

export default class CarouselSection extends React.PureComponent {
  state = {
    currentSlide: 0,
    isMobile: false,
    lang: 'en'
  };
  next = () => {
    const { currentSlide } = this.state;
    let index = currentSlide + 1;
    if (currentSlide === 3) {
      index = 0;
    }
    this.setState({
      currentSlide: index,
    });
  };

  prev = () => {
    const { currentSlide } = this.state;
    let index = currentSlide - 1;
    if (currentSlide === 0) {
      index = 3;
    }
    this.setState({
      currentSlide: index,
    });
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  componentDidMount() {
    if (window.innerWidth <= 1159) {
      this.setState({
        isMobile: true,
      })
    }
    this.setState({ lang: activeLocale === 'en' ? 'en' : 'bm'});
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
    let isDisplayProtein = false;
    let isDisplayCarbon = false;
    let isDisplayVege = false;
    const { currentSlide, isMobile, lang } = this.state;
    if (currentSlide === 0) {
      isDisplayProtein = true;
      isDisplayCarbon = true;
      isDisplayVege = true;
    } else if (currentSlide === 1) {
      isDisplayCarbon = true;
    } else if (currentSlide === 2) {
      isDisplayProtein = true;
    } else if (currentSlide === 3) {
      isDisplayVege = true;
    }
    console.log(activeLocale, lang);
    return (
      <div className={`main-carousel ${lang === 'bm' ? 'bm-lang' : ''}`} >
        {
          isMobile &&
          <>
            <img src={tomato} alt="tomatto-2" className="tomato-2" />
            <img src={orange} alt="orange" className="orange" />
            <img src={herb_2} alt="herb_2" className="herb_2" />
            <img src={cup} alt="cup" className="cup" />
          </>
        }
        <div className="columns is-gapless custom-mobile">
          <div className="column is-narrow content">
            {
              isMobile ?
              <div className="glass-of-water">
                <img src={stroke} alt="stroke" className="stroke-mobile" />
                <span>{lang.AND_A_GLASS_OF_WATER}</span>
              </div> :
              <div className="glass-of-water">
                <span>{lang.AND_A_GLASS_OF_WATER}</span>
                <div className="stroke"></div>
              </div>
            }
            <div className="main-carousel-balance-bowl columns is-gapless is-mobile">
              <div className="column is-6">
                <div style={{ height: "50%" }}>
                  <div
                    className={`main-carousel-balance-bowl-protein ${
                      isDisplayProtein ? "active" : ""
                    }`}
                  >{isDisplayProtein ? <span>{lang.PROTEIN}</span> : null}</div>
                </div>
                <div style={{ height: "50%" }}>
                  <div
                    className={`main-carousel-balance-bowl-carbohydrates ${
                      isDisplayCarbon ? "active" : ""
                    }`}
                  >{isDisplayCarbon ? <span>{lang.CARBOHYDRATES}</span> : null}</div>
                </div>
              </div>
              <div className="column">
                <div
                  className={`main-carousel-balance-bowl-vegetable ${
                    isDisplayVege ? "active" : ""
                  }`}
                >{isDisplayVege ? <span>{lang.VEGETABLES}</span> : null}</div>
              </div>
              <div className="main-carousel-balance-bowl-full"></div>
            </div>
          </div>
          <div
            className="column"
            style={{ position: "relative" }}
          >
            <div className="main-carousel-step">
              <span
                role="button"
                className="left-arrow"
                onClick={this.prev}
                onKeyDown={this.prev}
              ></span>
              <span
                role="button"
                className="right-arrow"
                onClick={this.next}
                onKeyDown={this.next}
              ></span>
              <div>
                <Carousel
                  autoPlay={false}
                  infiniteLoop
                  interval={4000}
                  statusFormatter={() => ""}
                  showIndicators={false}
                  showArrows={false}
                  showThumbs={false}
                  selectedItem={this.state.currentSlide}
                  onChange={this.updateCurrentSlide}
                >
                  <div key="slide1">
                    <Full_Bowl />
                  </div>
                  <div key="slide2">
                    <Step_1 />
                  </div>
                  <div key="slide3">
                    <Step_2 />
                  </div>
                  <div key="slide4">
                    <Step_3 />
                  </div>
                </Carousel>
                <div className="indicator-wrapper">
                  <span
                    className={`indicator ${
                      currentSlide === 0 ? "active" : ""
                    }`}
                    onClick={() => this.updateCurrentSlide(0)}
                  >
                    •
                  </span>
                  <span
                    className={`indicator ${
                      currentSlide === 1 ? "active" : ""
                    }`}
                    onClick={() => this.updateCurrentSlide(1)}
                  >
                    •
                  </span>
                  <span
                    className={`indicator ${
                      currentSlide === 2 ? "active" : ""
                    }`}
                    onClick={() => this.updateCurrentSlide(2)}
                  >
                    •
                  </span>
                  <span
                    className={`indicator ${
                      currentSlide === 3 ? "active" : ""
                    }`}
                    onClick={() => this.updateCurrentSlide(3)}
                  >
                    •
                  </span>
                </div>
                <p className="description">
                  {lang.SERVE_SIZE_SUGGESTED}{" "}
                  <span onClick={() => { window.open('https://www.maggi.com.my/en/nurturing-a-healthier-future/healthy-eats') }}>{lang.FIND_OUT_MORE}</span>
                </p>
                <Link to="/make-balanced-bowl">
                  <button
                    className="btn btn-primary"
                    style={{ fontSize: "1rem", marginTop: '1em' }}
                  >
                    {lang.MAKE_A_BALANCED_BOWL}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
