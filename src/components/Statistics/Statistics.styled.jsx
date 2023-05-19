import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
`;

export const StatisticsListWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

export const StatisticsItem = styled.li`
  font-size: 20px;
`;
