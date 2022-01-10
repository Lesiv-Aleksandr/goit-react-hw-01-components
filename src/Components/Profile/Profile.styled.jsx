import styled from "styled-components";

const ProfileAllStyled = styled.div`
  width: 320px;
  margin: 10px auto;
  background-color: #7f7f7f;
`;

const ProfileDescription = styled.div`
  padding: 20px 12px;
  text-align: center;
`;

const ProfileAvatar = styled.img`
  display: block;
  width: 70%;
  height: auto;
  margin: 0 auto 20px;
  border-radius: 50%;
`;

const ProfileName = styled.p`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const ProfileTag = styled.p`
  margin-bottom: 12px;
  font-size: 20px;
  color: #000000;
`;

const ProfileLocation = styled.p`
  font-size: 20px;
  color: #000000;
`;

const ProfileStats = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  list-style: none;
`;

const ProfileStatsLabel = styled.span`
  font-size: 15px;
  color: #00000;
`;

const ProfileStatsQuantity = styled.span`
  color: #00000;
  font-weight: 700;
`;

const ProfileStatsItem = styled.li`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px;
  background-color: #f3f6f9;
  }
`;

export {
  ProfileAllStyled,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsLabel,
  ProfileStatsQuantity,
  ProfileStatsItem,
};
