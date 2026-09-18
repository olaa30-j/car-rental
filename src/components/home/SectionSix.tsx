/* =========================================================
   Import Images
========================================================= */
import PhonesImage from '../../assets/home/sec_six/mobile.png';
import DownloadAppLinks from '../shared/DownloadAppLinks';

const SectionSix = () => {
    return (
        <div className="w-full bg-white py-16 overflow-hidden">
            <div className="mx-auto px-[80px]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left Side: Text & Buttons */}
                    <div className="flex flex-col w-full lg:w-1/2 lg:max-w-xl max-w-5xl mx-auto">
                        {/* Heading */}
                        <h2 className="text-[#1a1a1a] leading-[1.1] mb-8 lg:max-w-[250px]">
                            Download
                            mobile app
                        </h2>

                        {/* Description */}
                        <p className="text-black/60 leading-relaxed mb-10 lg:max-w-[500px]">
                            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
                            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
                            aliquet cras hendrerit enim condimentum. Condimentum interdum
                            risus bibendum urna
                        </p>

                        {/* App Store Buttons */}
                        <div>
                            <DownloadAppLinks variant="row" custom_gap="40px" />
                        </div>
                    </div>

                    {/* Right Side: Phone Mockups */}
                    <div className="relative w-full lg:w-1/2 flex justify-start lg:justify-end items-center lg:items-start mt-12 lg:mt-0">
                        <img
                            src={PhonesImage}
                            alt="Mobile App Preview"
                            className="
                                relative
                                z-[1]
                                -right-1/5
                                w-full 
                                max-w-[267px] 
                                max-h-[440px] 
                                object-contain 
                                select-none
                            "
                        />

                        <img
                            src={PhonesImage}
                            alt="Mobile App Preview"
                            className="
                                relative
                                z-[0]
                                top-1/10
                                -translate-y-1/10
                                w-full 
                                max-w-[267px] 
                                max-h-[540px] 
                                object-contain 
                                select-none
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSix;