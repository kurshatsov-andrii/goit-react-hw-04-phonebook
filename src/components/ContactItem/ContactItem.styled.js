import { styled } from 'styled-components';

export const ContactItemEl = styled('li')({
  width: '400px',
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  padding: '10px 10px 10px 0',
  position: 'relative',
  overflow: 'hidden',
});

export const ButtonDelete = styled('span')({
  color: '#000',
  textAlign: 'center',
  fontWeight: '600',
  'button:hover &': {
    color: '#fff',
  },
});

export const ContactData = styled('p')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingRight: '20px',
  justifyContent: 'space-between',
  position: 'relative',
});

export const ContactName = styled('span')({
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.4',
});
export const ContactNumber = styled('span')({
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.4',
});

export const ContactDelete = styled('button')({
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  borderRadius: '10px',
  position: 'relative',
  width: '150px',
  height: '40px',
  cursor: 'pointer',
  overflow: 'hidden',
  border: '1px solid #404040',

  '&, & span': {
    transition: 'transform 0.3s, background 0.3s',
  },

  '&:hover': {
    background: '#404040',
  },
  '&:active': {
    border: '1px solid #2e8644',
  },

  '&::before': {
    display: 'none',
    content: '"Delete"',
    color: '#bbb',
    opacity: '0',
    transitionDuration: '0.3s',
    fontSize: '2px',
  },
});
