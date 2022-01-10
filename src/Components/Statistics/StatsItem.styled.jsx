import styled from "styled-components";

const StatsItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: calc(100% / 5);
  padding: 10px;
 
  background-color: #f7f7f7;
  }
  

`;

const StatsItemLabel = styled.span`
  font-size: 15px;
`;
const StatsItemPercentage = styled.span`
  font-size: 20px;
`;

export { StatsItemStyled, StatsItemLabel, StatsItemPercentage };
