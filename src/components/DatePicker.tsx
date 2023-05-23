import { styled } from "styled-components";
import DayPicker from "./DayPicker";
import MonthPicker from "./MonthPicker";

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.medium};
`;

export default () => {
  return (
    <DateWrapper>
      <DayPicker />
      <MonthPicker />
    </DateWrapper>
  );
};
