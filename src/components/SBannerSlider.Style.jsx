import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
    .slick-slide img {
        width: 100%;
        height: auto;
    }

    .slick-dots {
        bottom: -30px;
    }

    .slick-prev, .slick-next {
        z-index: 1;
    }
`;
