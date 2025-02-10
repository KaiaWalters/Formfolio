import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, styled,ThemeProvider} from '@mui/material';
import {Link} from 'react-router-dom';

const CustomButton = styled(Button)(({theme}) => ({
    background: theme.palette.secondary.main,
    color: 'Black',
    fontWeight:'Bold',
    textShadow:'1px 1px 2px rgb(150, 220, 60)',
    borderRadius:'8px',
    borderColor:'white',
    padding:'16px',
    '&:hover': {
        background: theme.palette.primary.main,
      },
}))

interface CustomButtonStyledProps {
    title: string;
    to: string;
}

const CustomButtonStyled = ({title, to}:CustomButtonStyledProps) => {
  return (
        <Link to={to} style={{textDecoration: 'none'}}>
            <CustomButton variant="contained" color='secondary'>
                {title}
            </CustomButton>
        </Link>
  );
};

export default CustomButtonStyled;