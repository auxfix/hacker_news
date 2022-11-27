import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container } from 'styled-minimal';

import { appColor, headerHeight, spacer } from 'modules/theme';


import { getNews } from 'feature/news/actions';


import Button from 'components/Button';

const HeaderWrapper = styled.header`
  background-color: #113740;
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  &:before {
    background-color: ${appColor};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;


export default function Header() {
  const dispatch = useDispatch();

  
  const handleUpdateNews= useCallback(
    () => {
        dispatch(getNews());
    },
    [dispatch],
  );

  return (
    <HeaderWrapper data-testid="Header">
      <HeaderContainer>
      <Button onClick={handleUpdateNews}>Get more news</Button> 
      </HeaderContainer>
    </HeaderWrapper>
  );
}
