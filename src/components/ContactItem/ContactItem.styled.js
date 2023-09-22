import { styled } from 'styled-components';

export const ContactItemEl = styled('li')({
  width: '400px',
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  padding: '10px 10px 10px 0',
  position: 'relative',
  overflow: 'hidden',

  // '&:hover': {
  //   boxShadow: 'inset 0 0 8px 1px #454545',
  // },
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

  // '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   top: '50%',
  //   right: '0px',
  //   height: '80%',
  //   width: '1px',
  //   background: '#000',

  //   transform: 'translateY(-50%)',
  // },
  // '&::after': {
  //   content: '""',
  //   position: 'absolute',
  //   bottom: '-35%',
  //   left: '0',
  //   width: '100%',
  //   height: '2px',
  //   border: 'none',
  //   borderRadius: '4px',

  //   transform: 'translateX(-99%)',
  //   transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  //   background: '#000',
  //   boxShadow: '0 1px 0 0 #454545',
  // },
  // 'li:hover &::after': {
  //   transform: 'translateX(0%)',
  // },
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
  // width: '28px',
  // height: '28px',
  // borderRadius: '10%',
  // backgroundColor: 'transparent',
  // border: 'transparent',
  // fontWeight: '600',
  // display: 'flex',

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
  // transitionDuration: '0.3s',
  // overflow: 'hidden',
  // position: 'relative',

  // '& > svg': {
  //   fontSize: '16px',
  //   width: '24px',
  //   height: '24px',
  //   fill: '#955',
  //   transitionDuration: '0.3s',
  // },

  // '&:hover': {
  //   width: '90px',
  //   borderRadius: '50px',
  //   transitionDuration: '0.3s',
  //   backgroundColor: 'rgb(255, 69, 69)',
  //   alignItems: 'center',
  // },

  // '&:hover svg': {
  //   fill: '#bbb',
  //   transitionDuration: '0.3s',
  //   transform: 'rotate(360deg)',
  // },

  '&::before': {
    display: 'none',
    content: '"Delete"',
    color: '#bbb',
    opacity: '0',
    transitionDuration: '0.3s',
    fontSize: '2px',
  },

  // '&:hover::before': {
  //   display: 'block',
  //   paddingRight: '5px',
  //   fontSize: '13px',
  //   opacity: '1',
  //   transform: 'translateY(0px)',
  //   transitionDuration: '0.3s',
  // },
});
