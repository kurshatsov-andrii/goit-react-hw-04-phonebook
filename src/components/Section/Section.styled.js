import { styled } from 'styled-components';

export const Section = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  '& h2': {
    marginBottom: '20px',
    letterSpacing: '0.9px',
  },
});
