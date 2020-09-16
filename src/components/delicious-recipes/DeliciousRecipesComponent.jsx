import React from "react";
import { Link } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import { window } from "browser-monads";
import "./styles.scss";
import { lang, activeLocale } from "../../language/index";

import base1 from "../../images/delicious-recipes/Kari-Bowl.png";
import base2 from "../../images/delicious-recipes/Ayam-Bowl.png";
import base3 from "../../images/delicious-recipes/Tomyum-Bowl.png";

import line from "../../images/delicious-recipes/line.png";
import line2 from "../../images/delicious-recipes/line2.png";
import line3 from "../../images/delicious-recipes/line3.png";

import palm from "../../images/make-balanced-bowl/final/palmful.png";
import handful from "../../images/make-balanced-bowl/final/handful.png";
import fistful from "../../images/make-balanced-bowl/final/fistful.png";

import noddle_1 from "../../images/make-balanced-bowl/step1/1.png";
import noddle_2 from "../../images/make-balanced-bowl/step1/2.png";
import noddle_3 from "../../images/make-balanced-bowl/step1/3.png";

import chicken from "../../images/make-balanced-bowl/step2/2.png";

import egg from "../../images/make-balanced-bowl/step2/3.png";
import prawn from "../../images/make-balanced-bowl/step2/4.png";
import squid from "../../images/make-balanced-bowl/step2/5.png";

import mustard from "../../images/make-balanced-bowl/step3/1.png";
import carrot from "../../images/make-balanced-bowl/step3/2.png";
import bokchoi from "../../images/make-balanced-bowl/step3/4.png";
import cauliflower from "../../images/make-balanced-bowl/step3/3.png";
import mushroom from "../../images/make-balanced-bowl/step3/10.png";

import herb_2 from '../../images/layout/herb-2.png';
import tomato from '../../images/layout/chilli-1.png';
import herb_3 from '../../images/layout/herb-1.png';
import pepper_1 from '../../images/layout/pepper-1.png';
import pepper_2 from '../../images/layout/pepper-3.png';

import Calories from "./component/calories/CaloriesComponent";
import AOS from "aos";

const curry_carbohydrates = {
  header: `url(${line})`,
  left_image: `url(${fistful})`,
  right_image: `url(${noddle_1})`,
  left_title: lang.AFISTFUL,
  right_title: lang.CURRY_DES,
  header_title: lang.CARBOHYDRATES,
  color: "#AF3837",
};

const curry_protein = {
  header: `url(${line})`,
  left_image: `url(${palm})`,
  right_image_1: `url(${chicken})`,
  right_image_2: `url(${egg})`,
  left_title: lang.A_PALM_SIZE,
  right_title_1: lang.CHICKEN_BREAST_1,
  right_title_2: lang.HARD_BOIL_EGG,
  header_title: "Protein",
  color: "#AF3837",
};

const curry_vegetables = {
  header: `url(${line})`,
  left_image: `url(${handful})`,
  right_image_1: `url(${mustard})`,
  right_image_2: `url(${carrot})`,
  left_title: lang.HANDFUL,
  right_title_1: lang.SAWI,
  right_title_2: lang.CARROT,
  right_title_3: lang.CARROT_SUB,
  header_title: lang.VEGETABLES,
  color: "#AF3837",
};

const chicken_carbohydrates = {
  header: `url(${line2})`,
  left_image: `url(${fistful})`,
  right_image: `url(${noddle_2})`,
  left_title: lang.AFISTFUL,
  right_title: lang.CHICKEN_DES,
  header_title: lang.CARBOHYDRATES,
  color: "#7DA03E",
};

const chicken_protein = {
  header: `url(${line2})`,
  left_image: `url(${palm})`,
  right_image_1: `url(${chicken})`,
  right_image_2: `url(${egg})`,
  left_title: lang.A_PALM_SIZE,
  right_title_1: lang.CHICKEN_BREAST_2,
  right_title_2: lang.HARD_BOIL_EGG,
  header_title: lang.PROTEIN,
  color: "#7DA03E",
};

const chicken_vegetables = {
  header: `url(${line2})`,
  left_image: `url(${handful})`,
  right_image_1: `url(${bokchoi})`,
  right_image_2: `url(${carrot})`,
  left_title: lang.HANDFUL,
  right_title_1: lang.BOK_CHOY,
  right_title_2: lang.CARROT_2,
  right_title_3: lang.CARROT_2_SUB,
  header_title: lang.VEGETABLES,
  color: "#7DA03E",
};

const tomyum_carbohydrates = {
  header: `url(${line3})`,
  left_image: `url(${fistful})`,
  right_image: `url(${noddle_3})`,
  left_title: lang.AFISTFUL,
  right_title: lang.TOM_YAM_DES,
  header_title: lang.CARBOHYDRATES,
  color: "#5E3266",
};

const tomyum_protein = {
  header: `url(${line3})`,
  left_image: `url(${palm})`,
  right_image_1: `url(${prawn})`,
  right_image_2: `url(${squid})`,
  left_title: lang.A_PALM_SIZE,
  right_title_1: lang.PRAWN,
  right_title_2: lang.SQUID,
  header_title: lang.PROTEIN,
  color: "#5E3266",
};

const tomyum_vegetables = {
  header: `url(${line3})`,
  left_image: `url(${handful})`,
  right_image_1: `url(${cauliflower})`,
  right_image_2: `url(${mushroom})`,
  left_title: lang.HANDFUL,
  right_title_1: lang.CAULIFLOWER,
  right_title_2: lang.STRAW_MUSHROOM,
  header_title: lang.VEGETABLES,
  color: "#5E3266",
};

export default class DeliciousRecipiesComponent extends React.PureComponent {
  state = {
    isMobile: false,
    currentSlide: 0,
    activeLang: 'en'
  };

  componentDidMount() {
    this.setState({ activeLang: activeLocale });
    AOS.init({
      offset: 0,
      duration: 600,
    });
    if (window.innerWidth <= 1159) {
      this.setState({
        isMobile: true
      })
    }
    window.addEventListener('resize', () => {
      if(window.innerWidth <= 1159) {
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
  componentDidUpdate() {
    AOS.refresh();
  }

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

  render() {
    const { isMobile, activeLang} = this.state;
    const hideArrowBtn = window.innerWidth < 400 ? true : false;
    return (
      <>
        <div data-aos="fade-up" data-aos-offset="0" className={`delicious-recipes ${activeLang === 'bm' ? 'bm-lang' : ''}`} id="">
          {
            isMobile &&
            <>
              <img src={tomato} alt="tomato" className="tomato_3" />
              <img src={herb_2} alt="herb_2" className="herb_3" />
              <img src={pepper_1} alt="pepper_1" className="pepper-2" />
              <img src={pepper_2} alt="herb_2" className="pepper-3" />
              <img src={herb_3} alt="herb_2" className="herb-4" />
            </>
          }
          <h1>{lang.DELICIOUS_RECIPES}</h1>
          {
            !isMobile ?
              <div className="columns custom-row">
                <div data-aos="zoom-out-right" data-aos-offset="120" className="column is-4" style={{ position: "relative" }}>
                  <div className="delicious-recipes_kari-box">
                    <div className="delicious-recipes-header">
                      <span>{lang.CURRY_DES}</span>
                      <h1>{lang.CURRY}</h1>
                    </div>
                    <Calories data={curry_carbohydrates} />
                    <Calories data={curry_protein} multiple />
                    <Calories data={curry_vegetables} multiple />
                  </div>
                  <img className="delecious-bowl" src={base1} alt="" />
                </div>
                <div data-aos="zoom-out-up" data-aos-offset="120" className="column is-4" style={{ position: "relative" }}>
                  <div className="delicious-recipes_ayam-box">
                    <div className="delicious-recipes-header">
                      <span>{lang.CHICKEN_DES}</span>
                      <h1>{lang.CHICKEN}</h1>
                    </div>
                    <Calories data={chicken_carbohydrates} />
                    <Calories data={chicken_protein} multiple />
                    <Calories data={chicken_vegetables} multiple />
                  </div>
                  <img className="delecious-bowl" src={base2} alt="" />
                </div>
                <div data-aos="zoom-out-left" data-aos-offset="120" className="column is-4" style={{ position: "relative" }}>
                  <div className="delicious-recipes_tomyum-box">
                    <div className="delicious-recipes-header">
                      <span>{lang.TOM_YAM_DES}</span>
                      <h1>{lang.TOM_YAM}</h1>
                    </div>
                    <Calories data={tomyum_carbohydrates} />
                    <Calories data={tomyum_protein} multiple />
                    <Calories data={tomyum_vegetables} multiple />
                  </div>
                  <img className="delecious-bowl" src={base3} alt="" />
                </div>
              </div> :
              <div className="mobile-recipes">
                {
                  !hideArrowBtn &&
                  <>
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
                  </>
                }
                <Carousel
                  autoPlay={false}
                  swipeable
                  infiniteLoop
                  statusFormatter={() => ""}
                  showIndicators={false}
                  showArrows={false}
                  showThumbs={false}
                  selectedItem={this.state.currentSlide}
                  onChange={this.updateCurrentSlide}
                >
                  <div key="slide1" className="mobile-recipes-box">
                    <div className="delicious-recipes_kari-box">
                      <div className="delicious-recipes-header">
                        <span>{lang.CURRY_DES}</span>
                        <h1>{lang.CURRY}</h1>
                      </div>
                      <Calories data={curry_carbohydrates} />
                      <Calories data={curry_protein} multiple />
                      <Calories data={curry_vegetables} multiple />
                    </div>
                    <img className="delecious-bowl" src={base1} alt="" />
                  </div>
                  <div key="slide2" className="mobile-recipes-box">
                    <div className="delicious-recipes_ayam-box">
                      <div className="delicious-recipes-header">
                        <span>{lang.CHICKEN_DES}</span>
                        <h1>{lang.CHICKEN}</h1>
                      </div>
                      <Calories data={chicken_carbohydrates} />
                      <Calories data={chicken_protein} multiple />
                      <Calories data={chicken_vegetables} multiple />
                    </div>
                    <img className="delecious-bowl" src={base2} alt="" />
                  </div>
                  <div key="slide3" className="mobile-recipes-box">
                    <div className="delicious-recipes_tomyum-box">
                      <div className="delicious-recipes-header">
                        <span>{lang.TOM_YAM_DES}</span>
                        <h1>{lang.TOM_YAM}</h1>
                      </div>
                      <Calories data={tomyum_carbohydrates} />
                      <Calories data={tomyum_protein} multiple />
                      <Calories data={tomyum_vegetables} multiple />
                    </div>
                    <img className="delecious-bowl" src={base3} alt="" />
                  </div>
                </Carousel>
              </div>
          }
          <Link to="/make-balanced-bowl">
            <button className="btn btn-primary button-responsive">
              {lang.CUSTOMMIZE_YOUR_BALANCED_BOWL}
            </button>
          </Link>
        </div>
      </>
    );
  }
}
