import styled from "styled-components";

const TransactionHistoryStyled = styled.table`
  width: 320px;
  margin: 10px auto;
  text-align: center;
`;

const TransactionTableHead = styled.thead`
  padding: 20px;
  color: #00000;
  font-size: 20px;
  background-color: #fff;
`;

const TransactionTableHeadRow = styled.td`
  padding: 15px;
`;

export {
  TransactionHistoryStyled,
  TransactionTableHead,
  TransactionTableHeadRow,
};
