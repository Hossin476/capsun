import React, { useState } from "react";
import heroImage from "/hero.jpeg"; // Default image
import hatImage from "/hat.svg"; // hadi dyal test

const CapSunSection = () => {
    const [heroImageSrc, setHeroImageSrc] = useState(heroImage);

    // Function to handle image click
    const handleImageClick = (imageUrl) => {
        setHeroImageSrc(imageUrl);
    };

    return (
        <div className="text-white p-10" id="capsun">
            <h1 className="text-3xl font-bold text-white mb-10 leading-7">Capsun</h1>
            <div className="grid grid-cols-2 grid-rows-5 gap-5">
                <div className="row-span-5">
                    <div className="grid grid-cols-3 grid-rows-6 gap-4">
                        {/* Thumbnail Image 1 */}
                        <div
                            className="row-span-2 w-full h-36 bg-white rounded-md cursor-pointer"
                            style={{
                                backgroundImage: `url(${heroImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            onClick={() => handleImageClick(heroImage)} // Set to hero image URL
                        >
                            1
                        </div>

                        {/* Thumbnail Image 2 */}
                        <div
                            className="row-span-2 col-start-1 row-start-3 w-full h-full bg-white rounded-md cursor-pointer"
                            style={{
                                backgroundImage: `url(${hatImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            onClick={() => handleImageClick(hatImage)}
                        >
                            2
                        </div>

                        {/* Thumbnail Image 3 */}
                        <div
                            className="row-span-2 col-start-1 row-start-5 w-full h-full bg-white rounded-md cursor-pointer"
                            style={{
                                backgroundImage: `url(${heroImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            onClick={() => handleImageClick(heroImage)}
                        >
                            3
                        </div>

                        {/* Big Image Area */}
                        <div
                            className="col-span-2 row-span-6 col-start-2 row-start-1 w-full h-full bg-white rounded-md"
                            style={{
                                backgroundImage: `url(${heroImageSrc})`, // Use state for big image
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            4
                        </div>
                    </div>
                </div>
                <div className="row-span-5">
                    <h2 className="text-xl font-medium text-[#D9D9D9] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <p className="text-md font-light text-[#737373] mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        tincidunt, enim sed aliquam iaculis, turpis orci tincidunt tellus,
                        in scelerisque est lacus ac magna. Nunc fringilla blandit
                        condimentum.
                    </p>

                    <p className="text-md font-light text-[#737373] mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        tincidunt, enim sed aliquam iaculis, turpis orci tincidunt tellus,
                        in scelerisque est lacus ac magna. Nunc fringilla blandit
                        condimentum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CapSunSection;