import { styled } from "styled-components";
import Header from "./components/Header/Header";
import Journal from "./components/Journal/Journal";
import Footer from "./components/Footer/Footer";
import DatePicker from "./components/DatePicker/DatePicker";
import { useEffect } from "react";

const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(var(--vh, 1vh) * 100);
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray.medium};
  max-width: 740px;

  @media (min-width: 741px) {
    margin: auto;
    margin-top: 2rem;
    max-height: 90vh;
  }
`;

const resizeListener = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export default () => {
  useEffect(() => {
    resizeListener();
    window.addEventListener("resize", resizeListener);
    window.addEventListener("orientationchange", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("orientationchange", resizeListener);
    };
  }, []);

  return (
    <Calendar>
      <Header />
      <DatePicker />
      <Journal />
      <Footer />
    </Calendar>
  );
};
