import { styled } from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IconButton } from "../Common";
import { useCalendarStore } from "../../store/useCalendarStore";

const MonthWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;

  & > * {
    align-self: center;
    justify-content: center;
    text-align: center;
  }

  & > :nth-child(2) {
    grid-column: span 5;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default () => {
  const { dateString, setWeek } = useCalendarStore((state) => ({
    dateString: state.currentDate,
    setWeek: state.setWeek,
  }));
  const date = new Date(dateString);
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return (
    <MonthWrapper>
      <ButtonWrapper>
        <IconButton onClick={() => setWeek("prev")}>
          <FiChevronLeft />
        </IconButton>
      </ButtonWrapper>
      <Text>
        {month} {year}
      </Text>
      <ButtonWrapper>
        <IconButton onClick={() => setWeek("next")}>
          <FiChevronRight />
        </IconButton>
      </ButtonWrapper>
    </MonthWrapper>
  );
};
