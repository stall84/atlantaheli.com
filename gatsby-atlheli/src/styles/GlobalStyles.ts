import { createGlobalStyle } from 'styled-components';

// Image Assets
import Heli1 from '../assets/images/Heli1.svg'

const GlobalStyles = createGlobalStyle`

// Root Level variables and styling baselines
    :root {
        --orange: #FF2E00;
        --black: #2E2E2E;
        --yellow: #F8FF00;
        --white: #FFFFFF;
        --blue: #0700FF;
        --grey: #8D9AA6;
    }

    html {
        font-size: 10px;
        background-image: url(${Heli1});
        background-size: 150px;
        background-attachment: fixed;
        color: var(--black); 
    }

    body {
        font-size: 2rem;
    }

    img {
        max-width: 100%;
    }




  
`;


export default GlobalStyles;