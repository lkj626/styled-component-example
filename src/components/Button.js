import React from 'react';
import styled ,{ css } from 'styled-components';
import { darken, lighten } from 'polished';


const colorStyles = css`

    ${({theme, color}) =>{
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover{
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
            ${props => 
            props.outline &&
            css`
                color: ${selected};
                background: none;
                border: 1px solid ${selected};
                &:hover {
                    background: ${selected};
                    color: white;
                }
            `
            }
            `;
    }}`;


const sizes={
    large:{
        height: '3rem',
        fontSize: '1.25rem'
    },
    medium:{
        height: '2.25rem',
        fontSize: '1rem'
    },
    small:{
        height: '1.75rem',
        fontSize: '0.875rem'
    }
}


const sizeStyles = css`
    /* 크키 */
    ${({size}) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}





/*
    ${props =>
    props.size === 'large' &&
    css`
        height: 3rem;
        font-size: 1.25rem;
    `
    }

    ${props =>
        props.size === 'medium' &&
    css`
        height: 2.25rem;
        font-size: 1rem;
    `
    }

    ${props =>
        props.size === 'small' &&
    css`
        height: 1.75rem;
        font-size: 0.875rem;
    `
    }
    */
`;


const fullWidthStyles =css`
    ${props => 
    props.fullwidth && 
    css`
        width: 100%;
        justify-content: center;

        & + & {
            margin-left: 0;
            margin-top: 1rem;
        }
    `
    }
`;
const StyledButton = styled.button`
    /* 공통스타일 */
    display: inline-flexbox;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    


   
    & + & {
        margin-left: 1rem;
    }

    ${colorStyles}
    ${sizeStyles} 
    ${fullWidthStyles}
     
`;



/*
    background: ${props => props.theme.palette.blue};
    &:hover{
        background: ${props => lighten(0.1, props.theme.palette.blue)};
    }
    &:active {
        background: ${props => darken(0.1, props.theme.palette.blue)};
    }
*/
    
    /* 기타 */
  
function Button({children, color, size, outline, fullwidth, ...rest}) {
    return (
        <StyledButton 
            color={color}
            fullwidth={fullwidth} 
            outline={outline} 
            size={size} 
            {...rest}
        >
            {children} 
        </StyledButton>
    );
}

Button.defaultProps={
    color:'blue',
    size: 'medium'
}
export default Button;