import { styled } from "styled-components";
import Header from "./components/Header";
import DatePicker from "./components/DatePicker";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

const Calendar = styled.div`
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray.medium};
  max-width: 740px;
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
