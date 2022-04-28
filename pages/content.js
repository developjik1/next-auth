import React from 'react';
import styled from '@emotion/styled';
import { ComonC } from 'common/style';

const CC = styled(ComonC)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = () => {
  return <CC>content</CC>;
};

export default Content;
