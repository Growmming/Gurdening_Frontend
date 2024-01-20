import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const SBannerCont = () => {
    const images = [
        { url: "https://i.pinimg.com/564x/f5/8d/97/f58d971ac306d460248a4874f161d95a.jpg" },
        { url: "https://i.pinimg.com/564x/f5/8d/97/f58d971ac306d460248a4874f161d95a.jpg" },
        { url: "https://i.pinimg.com/564x/f5/8d/97/f58d971ac306d460248a4874f161d95a.jpg" },
    ];

    return (
        <div>
            <SimpleImageSlider
                width={450}
                height={275}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={5.0}
            />
        </div>
    );
};

export default SBannerCont;
