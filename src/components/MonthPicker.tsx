import { styled } from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IconButton } from "./Common";

const MonthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export default () => {
  return (
    <MonthWrapper>
      <IconButton>
        <FiChevronLeft />
      </IconButton>
      <Text>March 2019</Text>
      <IconButton>
        <FiChevronRight />
      </IconButton>
    </MonthWrapper>
  );
};
