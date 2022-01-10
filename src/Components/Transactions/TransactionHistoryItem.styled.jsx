import styled from "styled-components";

const TransactionTableRow = styled.tr`
  background-color: #fff;
  border: 1px solid black;
`;

const TransactionType = styled.td`
  padding: 10px;
  text-align: left;
  text-transform: capitalize;
`;
const TransactionAmount = styled.td`
  padding: 10px;
  text-align: right;
  padding-right: 24px;
`;
const TransactionCurrency = styled.td`
  padding: 10px;
`;

export {
  TransactionTableRow,
  TransactionType,
  TransactionAmount,
  TransactionCurrency,
};
