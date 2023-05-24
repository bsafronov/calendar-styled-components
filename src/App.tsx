import { styled } from "styled-components";
import Header from "./components/Header/Header";
import Journal from "./components/Journal/Journal";
import Footer from "./components/Footer/Footer";
import DatePicker from "./components/DatePicker/DatePicker";

const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray.medium};
  max-width: 740px;

  @media (min-width: 741px) {
    margin: auto;
    margin-top: 2rem;
    max-height: 90vh;
  }
`;

export default () => {
  return (
    <Calendar>
      <Header />
      <DatePicker />
      <Journal />
      <Footer />
    </Calendar>
  );
};
