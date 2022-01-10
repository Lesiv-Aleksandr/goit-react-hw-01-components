import styled from "styled-components";

const StatisticsStyled = styled.section`
  width: 320px;
  margin: 10px auto;
`;

const StatisticsTitle = styled.h2`
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  background: #7f7f7f;
  color: #00000;
`;

const StatisticsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export { StatisticsStyled, StatisticsTitle, StatisticsList };
