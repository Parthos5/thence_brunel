import React, { useState } from "react";
import "./Home.css";
import Carousel from "react-simply-carousel";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import statImg from "../../assets/statImg.png";
import rocketIcon from "../../assets/rocketIcon.png";
import sparkleIcon from "../../assets/sparkleIcon.png";
import rightArrowIcon from "../../assets/rightArrowIcon.png";
import unionArrowIcon from "../../assets/unionArrowIcon.png";
import QnaComp from "../../Components/QnaComp/QnaComp";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      text: "Enhance fortune 50 company's insights teams research capabilities",
    },
    {
      text: "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      text: "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      text: "Enhance fortune 50 company’s insights teams research capabilities",
    },
  ];

  const qna = [
    {
      question: "Do you offer freelancers?",
      answer:
        "Yes, our platform provides a diverse range of freelancers with various skill sets to meet your project needs.",
    },
    {
      question:
        "What's the guarantee that I will be satisfied with the hired talent?",
      answer:
        "We offer a satisfaction guarantee with a refund or replacement policy if the hired talent does not meet your expectations.",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Why should I not go to an agency directly?",
      answer:
        "Our platform offers competitive rates, a wide selection of freelancers, and flexible hiring arrangements, which agencies may not provide.",
    },
    {
      question: "Who can help me pick a right skillset and duration for me?",
      answer:
        "Our customer support team can assist you in selecting the right skillset and determining the appropriate duration for your project.",
    },
  ];
  return (
    <div>
      <MainNavbar />

      {/* Hero Section Starts */}
      <div className="heroSect">
        <div className="heroHead">
          <div className="graceText">Success Stories</div>
          <div className="heroHeadMain">
            Every success journey we've encountered.
          </div>
        </div>

        <div className="subHeroDiv">
          <div className="subHeroStats">
            <img src={statImg} className="statImg" alt="" />
            <div className="staffDep">
              <img src={rocketIcon} className="rocketIcon" alt="" />
              <div className="staffHead">
                <h2>10 days</h2>
                <p>Staff Deployment</p>
              </div>
            </div>
            <div className="clientExpense">
              <div className="clientMoney">
                <h1>$0.5</h1>
                <p>MILLION</p>
              </div>
              <div className="clientDesc">
                Reduced client expenses by saving on hiring and employee costs.
              </div>
            </div>

            <div className="projectExpense">
              <div className="projectMoney">
                <img src={sparkleIcon} alt="" className="sparkleIcon" />
                <h1>40%</h1>
              </div>
              <div className="projectDesc">
                Reduced client expenses by saving on hiring and employee costs.
              </div>
            </div>
          </div>
          <div className="subHeroExplore">
            <div className="carouselDiv">
              <Carousel
                containerProps={{
                  style: {
                    width: "85%",
                    justifyContent: "space-between",
                    userSelect: "none",
                    marginLeft: "3.5vw",
                  },
                }}
                preventScrollOnSwipe
                swipeTreshold={60}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                  style: {
                    background: "white",
                  },
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                  children: ">",
                  style: {
                    display: "none", // Hide forward arrow
                  },
                }}
                backwardBtnProps={{
                  children: "<",
                  style: {
                    display: "none", // Hide backward arrow
                  },
                }}
                dotsNav={{
                  show: true,
                  style: {
                    position: "absolute", // Positioning the dots absolutely to control their location
                    bottom: "5px", // Decrease the gap between the carousel and the dots
                    left: "10%", // Align the dots slightly to the left
                    width: "80%", // Adjust the width to center the dots within the modified left alignment
                    display: "flex", // Use flexbox to align items
                    justifyContent: "flex-start", // Align items to the start of the flex container
                    paddingLeft: "20px", // Add some padding to the left for additional margin
                  },
                  itemBtnProps: {
                    style: {
                      height: 10, // Smaller dot size
                      width: 10, // Smaller dot size
                      borderRadius: "50%",
                      border: 0,
                      background: "#E4E3E3", // Default dot color
                      margin: "0 2px", // Reduce space between dots
                    },
                  },
                  activeItemBtnProps: {
                    style: {
                      height: 10, // Smaller dot size
                      width: 10, // Smaller dot size
                      borderRadius: "50%",
                      border: 0,
                      background: "green", // Active dot color
                      margin: "0 2px", // Reduce space between dots
                    },
                  },
                }}
                itemsToShow={2}
                speed={400}
                centerMode
              >
                {slides.map((slide, index) => (
                  <div
                    style={{
                      background: "white", // Background color of the slide
                      width: 360,
                      height: 300,
                      border: "30px solid white",
                      lineHeight: "normal", // Changed from a fixed line height to normal
                      boxSizing: "border-box",
                      fontWeight: "600",
                      fontSize: "30px",
                      overflow: "hidden", // Ensures content does not overflow
                      textOverflow: "ellipsis", // Adds an ellipsis if text overflows
                      whiteSpace: "normal", // Allows text to wrap
                      padding: "10px", // Adds padding inside the box
                      textAlign: "left", // Align text to the left
                    }}
                    key={index}
                  >
                    {slide.text}
                  </div>
                ))}
              </Carousel>
            </div>
            <button className="exploreBtn">
              Explore More <img src={rightArrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* Hero Section Ends */}

      <div className="qnaContainer">
        <div className="qnaDiv">
          <div className="qnaHeadDiv">
            <div className="qnaHead">
              <p>What's on your mind</p>
              <h1>Ask Questions</h1>
            </div>
            <img src={unionArrowIcon} className="unionArrowIcon" alt="" />
          </div>
          <div className="qnaList">
            {qna.map((q, index) => (
              <QnaComp key={index} question={q.question} answer={q.answer} />
            ))}
          </div>
        </div>
      </div>

      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}
