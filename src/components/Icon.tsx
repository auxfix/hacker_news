import styled from 'styled-components';
import { px } from 'styled-minimal';

import { Icons } from 'types';

interface Props {
  name: Icons;
  width?: number;
}

const IconWrapper = styled.svg`
  display: inline-block;
  line-height: 0;

  svg {
    height: auto;
    max-height: 100%;
    width: ${({ width }) => width};
  }
`;

function Icon({ width = 20 }: Props) {
  return (
    <IconWrapper
      height="100%"
      width={px(width)}
    />
  );
}

export default Icon;
