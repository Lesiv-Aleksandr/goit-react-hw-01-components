import styled from "styled-components";

const FriendListItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 2px solid #a5a5a5;
  }
`;

const AvatarImg = styled.img`
  display: block;
  width: 48px;
  height: auto;
`;

const IsOnlineIndicator = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => `${!isOnline ? "red" : "green"}}`};
`;

const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export { FriendListItemStyled, AvatarImg, IsOnlineIndicator, FriendName };
