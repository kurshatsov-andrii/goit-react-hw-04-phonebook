import { Form } from 'formik';
import { styled } from 'styled-components';

export const FormStyled = styled(Form)({
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
  border: '1px solid #404040',
  borderRadius: '10px',
  padding: '20px',
  marginTop: '20px',
});

export const ButtonSubmit = styled('button')({
  marginTop: '10px',
  borderRadius: '10px',
  position: 'relative',
  width: '150px',
  height: '40px',
  cursor: 'pointer',
  alignItems: 'center',
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
});

export const ButtonText = styled('span')({
  color: '#000',
  textAlign: 'center',
  fontWeight: '600',
  'button:hover &': {
    color: '#fff',
  },
});

export const InputBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const ErrorMessageStyled = styled('div')({
  display: 'inline-block',
  fontSize: '12px',
  color: '#955',
});
