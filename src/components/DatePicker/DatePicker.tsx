import { styled } from "styled-components";
import DayPicker from "./DayPicker";
import MonthPicker from "./MonthPicker";

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  padding-left: 3.5rem;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.medium};
  padding-right: 17px;

  @media (min-width: 741px) {
    gap: 1rem;
  }

  @media (pointer: none), (pointer: coarse) {
    padding-right: 0;
  }
`;

export default () => {
  return (
    <DateWrapper>
      <DayPicker />
      <MonthPicker />
    </DateWrapper>
  );
};
