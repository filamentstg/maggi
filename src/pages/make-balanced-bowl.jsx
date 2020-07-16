import Layout from "../components/layout/layout-mbb";
import SEO from "../components/layout/seo";
import React, { Component } from "react";
import { MAKE_BALANCEC_BOWL_LANG as lang } from "../language/en";
import MbbStepOne from "../components/mbb-steps/mbb-stepone";
import MbbStepTwo from "../components/mbb-steps/mbb-steptwo";
import MbbStepThree from "../components/mbb-steps/mbb-stepthree";
import MbbStepFinal from "../components/mbb-steps/mbb-final";
import WarningModal from "../components/mbb-steps/warning-modal";
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
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="7" cy="7" r="7" fill="black" />
                      <path
                        d="M9 2.07193V3.65853H8.09141C7.37951 3.65853 7.24654 4.01315 7.24654 4.52394V5.65976H8.94222L8.71665 7.43867H7.24654V12H5.47566V7.43867H4V5.65976H5.47566V4.34971C5.47566 2.82926 6.37277 2 7.68064 2C8.3055 2 8.84369 2.04808 9 2.07193Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.33274 7C9.33274 5.71492 8.2845 4.66667 6.99942 4.66667C5.71434 4.66667 4.66609 5.71492 4.66609 7C4.66609 8.28508 5.71434 9.33333 6.99942 9.33333C8.2845 9.33333 9.33274 8.28508 9.33274 7ZM10.5904 7C10.5904 8.98683 8.98624 10.591 6.99942 10.591C5.01259 10.591 3.40843 8.98683 3.40843 7C3.40843 5.01317 5.01259 3.40901 6.99942 3.40901C8.98624 3.40901 10.5904 5.01317 10.5904 7ZM11.5751 3.26318C11.5751 3.72809 11.2012 4.10142 10.7368 4.10142C10.2725 4.10142 9.89857 3.72751 9.89857 3.26318C9.89857 2.79884 10.2725 2.42493 10.7368 2.42493C11.2012 2.42493 11.5751 2.79884 11.5751 3.26318ZM6.99942 1.25768C5.97859 1.25768 3.79109 1.17543 2.87059 1.54001C2.55151 1.66776 2.31468 1.82235 2.06851 2.06851C1.82235 2.31468 1.66718 2.55151 1.54001 2.87059C1.17543 3.79109 1.25768 5.97859 1.25768 6.99942C1.25768 8.02025 1.17543 10.2077 1.54001 11.1282C1.66776 11.4473 1.82235 11.6842 2.06851 11.9303C2.31468 12.1765 2.55151 12.3317 2.87059 12.4588C3.79109 12.8234 5.97859 12.7412 6.99942 12.7412C8.02025 12.7412 10.2077 12.8234 11.1282 12.4588C11.4473 12.3311 11.6842 12.1765 11.9303 11.9303C12.1765 11.6842 12.3317 11.4473 12.4588 11.1282C12.8234 10.2077 12.7412 8.02025 12.7412 6.99942C12.7412 5.97859 12.8234 3.79109 12.4588 2.87059C12.3311 2.55151 12.1765 2.31468 11.9303 2.06851C11.6842 1.82235 11.4473 1.66718 11.1282 1.54001C10.2077 1.17543 8.02025 1.25768 6.99942 1.25768ZM13.9994 7C13.9994 7.966 14.0087 8.92324 13.9539 9.88924C13.8991 11.0104 13.6441 12.0038 12.824 12.824C12.0038 13.6441 11.0104 13.8996 9.88924 13.9539C8.92324 14.0087 7.966 13.9994 7 13.9994C6.034 13.9994 5.07675 14.0087 4.11076 13.9539C2.98959 13.8991 1.99618 13.6441 1.17602 12.824C0.355851 12.0038 0.100352 11.0104 0.0461019 9.88924C-0.00873131 8.92324 0.000601997 7.966 0.000601997 7C0.000601997 6.034 -0.00873131 5.07675 0.0461019 4.11076C0.100935 2.98959 0.355851 1.99618 1.17602 1.17602C1.99618 0.355851 2.98959 0.100352 4.11076 0.0461019C5.07675 -0.00873128 6.034 0.00060199 7 0.00060199C7.966 0.00060199 8.92324 -0.00873128 9.88924 0.0461019C11.0104 0.100935 12.0038 0.355851 12.824 1.17602C13.6441 1.99618 13.8996 2.98959 13.9539 4.11076C14.0087 5.07675 13.9994 6.034 13.9994 7Z"
                        fill="black"
                      />
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
