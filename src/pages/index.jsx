import React, { createRef } from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import CarouselSection from "../components/carousel/carousel";
import MaggiSection from "../components/maggi-section/MaggiSection";
import DeliciousRecipes from "../components/delicious-recipes/DeliciousRecipesComponent";
import ScrollToTop from "../components/layout/scrollToTop";
import AOS from "aos";
import { window } from "browser-monads";
import "aos/dist/aos.css";
class IndexPage extends React.Component {
  state = {
    isMobile: false,
  };

  maggi  = createRef();
  delecious = createRef();

  componentDidMount() {
    AOS.init({
      offset: 600,
      duration: 600,
    });
    const {location} = this.props;
    if(location.hash === '#why-maggi') {
      setTimeout(() => {
        window.scroll({
          left: 0,
          top: this.maggi.current.offsetTop,
        })
      }, 300);
    } else if (location.hash === '#delicious-recipes') {
      setTimeout(() => {
        window.scroll({
          left: 0,
          top: this.delecious.current.offsetTop,
        })
      }, 300);

    }
  }
  componentDidUpdate() {
    AOS.refresh();

  }

  handleScroll = (action) => {
    let offset = 0;
    if(action === 1) {
      offset = this.maggi.current.offsetTop;
    } else if (action === 2) {
      offset = this.delecious.current.offsetTop;
    }
    window.scroll({
      behavior: 'smooth',
      top: offset,
      left: 0,
    })
  }

  render() {
    return (
      <Layout scrollEvent={this.handleScroll}>
        <SEO title="Home" />
        <div
          data-aos="zoom-in"
          data-aos-offset="0"
          data-aos-anchor-placement="top-bottom"
          data-aos-mirror="true"
        >
          <CarouselSection />
        </div>
        <div ref={this.maggi}>
          <div data-aos="fade-up" data-aos-offset="0">
            <MaggiSection />
          </div>
        </div>
        <div ref={this.delecious}>
          <DeliciousRecipes  />
        </div>
        <ScrollToTop />
      </Layout>
    );
  }
}
export default IndexPage;
