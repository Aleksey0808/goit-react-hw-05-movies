import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  display: flex;
  padding: 0px 0px 30px;
`;

export const Item = styled.div`
  width: 100%;
  margin: 0 20px 20px 0;
  border-radius: 10px;
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
    rgb(9 30 66 / 8%) 0px 0px 0px 1px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;
