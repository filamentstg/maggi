import Layout from "../components/layout/layout-mbb";
import SEO from "../components/layout/seo";
import React, { Component } from "react";
import { renderToString } from "react-dom/server";

import { MAKE_BALANCEC_BOWL_LANG as lang } from "../language/en";
import MbbStepOne from "../components/mbb-steps/mbb-stepone";
import MbbStepTwo from "../components/mbb-steps/mbb-steptwo";
import MbbStepThree from "../components/mbb-steps/mbb-stepthree";
import MbbStepFinal from "../components/mbb-steps/mbb-final";
import WarningModal from "../components/mbb-steps/warning-modal";
import MbbResultPic from "../components/mbb-steps/mbb-result-pic";
import ShareButton from "../components/share-button/ShareButtonComponent";
import { html2png } from "../util/png-convert";

import bgImage from "../images/make-balanced-bowl/mbb-bg-1.jpg";
import bgImageLarge from "../images/make-balanced-bowl/final/bg-op.jpg";

const STEPS = [
  {
    id: 0,
    text: lang.INSTRUCTION,
  },
  {
    id: 1,
    text: lang.STEP_1,
    options: [{}],
    min: 1,
    max: 1,
  },
  {
    id: 2,
    text: lang.STEP_2,
    min: 1,
    max: 2,
  },
  {
    id: 3,
    text: lang.STEP_3,
    min: 1,
    max: 2,
  },
  {
    id: 4,
    text: lang.FINISH,
  },
];

export default class MakeBalancedBowlPage extends Component {
  state = {
    activeStep: {
      id: 0,
      selectedItem: {
        1: [],
        2: [],
        3: [],
      },
    },
    waringModalVisible: false,
    warningModalMes: "",
  };
  setTooltip = (event) => {
    const tt = event.currentTarget.getElementsByClassName("st-tooltip")[0];
    tt.classList.add("display-block");

    setTimeout(() => {
      tt.classList.remove("display-block");
    }, 1000);
  };
  onSelectStep1 = (index, event) => {
    // this.updateActiveStep(1, index);
    const { activeStep } = this.state;
    activeStep.selectedItem[1] = [index];
    this.setState({
      activeStep: activeStep,
    });
    this.setTooltip(event);
  };
  onSelectStep2 = (index, event) => {
    this.updateActiveStep(2, index);
    this.setTooltip(event);
  };
  onSelectStep3 = (index, event) => {
    this.updateActiveStep(3, index);
    this.setTooltip(event);
  };
  updateActiveStep = (step, stepIndex) => {
    const { activeStep } = this.state;
    let selection = activeStep.selectedItem[step];
    const index = selection.indexOf(stepIndex);
    if (index == -1) {
      if (selection.length >= 2) {
        this.openWarningModal(lang.MAX_WARNING);
        return;
      }
      selection.push(stepIndex);
    } else {
      selection.splice(index, 1);
    }
    activeStep.selectedItem[step] = selection;
    this.setState({
      activeStep: activeStep,
    });
    console.log(this.state);
  };

  nextStep = () => {
    const { activeStep } = this.state;
    const min = (STEPS.find((it) => it.id === activeStep.id) || {}).min;
    if (
      min &&
      activeStep.selectedItem[activeStep.id] &&
      activeStep.selectedItem[activeStep.id].length < min
    ) {
      this.openWarningModal(lang.MIN_WARNING);
      return;
    }
    activeStep.id = activeStep.id + 1;
    this.setState({
      activeStep: activeStep,
    });
  };
  backStep = () => {
    const { activeStep } = this.state;
    activeStep.id = activeStep.id - 1;
    this.setState({
      activeStep: activeStep,
    });
  };
  makeNewBowl = () => {
    const activeStep = {
      id: 0,
      selectedItem: {
        1: [],
        2: [],
        3: [],
      },
    };
    this.setState({
      activeStep: activeStep,
    });
  };
  openWarningModal = (mess) => {
    this.setState({
      waringModalVisible: true,
      warningModalMes: mess,
    });
  };
  closeWarningModal = () => {
    this.setState({
      waringModalVisible: false,
    });
  };

  saveResultPic = () => {
    const htmlRl = renderToString(
      <MbbResultPic
        lang={lang}
        selection={this.state.activeStep.selectedItem}
      />
    );
    html2png(htmlRl);
    console.log("rel: ", htmlRl);
  };

  renderStep(step) {
    switch (step) {
      case 0:
        return (
          <div className="step-0">
            <div className="step-dt-header">{lang.INTRO_TITLE}</div>
            <h2 className="mbb-sub-title">{lang.INTRO_BIG_TITLE}</h2>
            <p className="step-des">{lang.INTRO_DES}</p>
            <button className="btn btn-primary" onClick={this.nextStep}>
              {lang.START_NOW}
            </button>
            <p className="caption one-line">{lang.INTRO_HINT}</p>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="step-dt-header">{lang.STEP1_TITLE}</div>
            <MbbStepOne
              lang={lang}
              selection={this.state.activeStep.selectedItem["1"]}
              selectHandle={this.onSelectStep1}
            />
            <div className="">
              <button className="btn mr-10" onClick={this.backStep}>
                {lang.BACK}
              </button>
              <button className="btn btn-primary" onClick={this.nextStep}>
                {lang.NEXT}
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="step-dt-header">{lang.STEP2_TITLE}</div>
            <MbbStepTwo
              lang={lang}
              selection={this.state.activeStep.selectedItem["2"]}
              selectHandle={this.onSelectStep2}
            />
            <div className="">
              <button className="btn mr-10" onClick={this.backStep}>
                {lang.BACK}
              </button>
              <button className="btn btn-primary" onClick={this.nextStep}>
                {lang.NEXT}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="step-dt-header">{lang.STEP3_TITLE}</div>
            <MbbStepThree
              lang={lang}
              selection={this.state.activeStep.selectedItem["3"]}
              selectHandle={this.onSelectStep3}
            />
            <div className="">
              <button className="btn mr-10" onClick={this.backStep}>
                {lang.BACK}
              </button>
              <button className="btn btn-primary" onClick={this.nextStep}>
                {lang.NEXT}
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <MbbStepFinal
              lang={lang}
              selection={this.state.activeStep.selectedItem}
            />
            <div className="final-action">
              <button className="btn btn-primary" onClick={this.makeNewBowl}>
                {lang.MAKE_NEW_BALANCED_BOWl}
              </button>
              <div className="share-btn-gr">
                <span>{lang.SHARE_RECIPE}</span>
                <div>
                  <ShareButton />
                  <span title="" onClick={this.saveResultPic}>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>Save Your Maggi balanced bowl"</title>
                      <path d="M27.844 11.252c-0.101-4.022-3.389-7.252-7.433-7.252-2.369 0-4.477 1.109-5.839 2.835-0.764-0.987-1.959-1.624-3.303-1.624-2.307 0-4.176 1.871-4.176 4.179 0 0.201 0.015 0.399 0.043 0.592-0.351-0.063-0.711-0.098-1.080-0.098-3.344-0-6.054 2.712-6.054 6.058s2.71 6.058 6.054 6.058h2.868l7.078 7.328 7.078-7.328 3.484-0c3.004-0.006 5.438-2.444 5.438-5.451 0-2.565-1.771-4.716-4.156-5.296zM16 26l-6-6h4v-6h4v6h4l-6 6z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
  render() {
    return (
      <>
        <Layout bg={this.state.activeStep.id === 4 ? bgImageLarge : bgImage}>
          <SEO title={lang.MAKE_A_BALANCED_BOWL} />
          <div className="mbb-main-content">
            <div className="step-content-wrapper">
              <div className="step-header">
                <h1 className="title">{lang.MAKE_YOUR_BALANCED_BOWL}</h1>
                <ul>
                  {STEPS.map((item) => (
                    <li
                      key={item.id}
                      className={
                        this.state.activeStep.id === item.id ? "active" : ""
                      }
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={"step-content __" + this.state.activeStep.id}>
                {this.renderStep(this.state.activeStep.id)}
                {[1, 2, 3].indexOf(this.state.activeStep.id) > -1 ? (
                  <div className="hover-hint">
                    <img
                      src={require("../images/make-balanced-bowl/hint.png")}
                      alt=""
                    />
                    <span>{lang.HOVER_HINT}</span>
                  </div>
                ) : null}
              </div>
            </div>
            {this.state.waringModalVisible ? (
              <WarningModal
                message={this.state.warningModalMes}
                closeModal={this.closeWarningModal}
              />
            ) : null}
          </div>
        </Layout>
      </>
    );
  }
}
