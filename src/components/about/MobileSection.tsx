import HexPatternImage from '../../assets/shared/banners/mobile.png';
import DownloadAppLinks from '../shared/DownloadAppLinks';
import PhonesImage from '../../assets/home/sec_six/mobile.png';

const MobileSection = () => {
    return (
        <div className="relative rounded-[32px] bg-primary min-h-[444px] flex items-center w-full md:px-[72px] px-[32px] mt-[150px] pb-16 lg:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mx-auto lg:mx-0">
                {/* =====================================================
                    Left — Image (top-aligned on mobile, centered on lg)
                ===================================================== */}
                <div>
                    <img
                        src={PhonesImage}
                        alt="Mobile App Preview"
                        className="
                        w-full
                        max-w-[267px]
                        max-h-[540px]
                        object-contain
                        select-none
                        relative
                        z-10
                        -mt-16 sm:-mt-24 lg:-mt-40 
                        lg:ml-20 mx-auto
                    "
                    />
                </div>
                <div>
                    {/* Hexagon Pattern Background Overlay */}
                    <img
                        src={HexPatternImage}
                        alt="hex images"
                        className="
                            absolute 
                            right-0
                            -translate-x-0
                            top-[40px]
                            w-[600px]
                            h-auto 
                            object-cover 
                            opacity-90 
                            pointer-events-none 
                            select-none 
                            z-[0]
                            hidden lg:block
                        "
                    />
                    <div className="relative z-[1]">
                        {/* Heading */}
                        <span className='text-white mb-6 uppercase'>Download our app</span>
                        <h2 className="text-white leading-[1.15]">
                            Download our app
                        </h2>

                        {/* Description */}
                        <p className="text-white/80 text-base lg:text-lg max-w-[600px] leading-relaxed py-[40px]">
                            Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam eget urna fusce vulputate at risus
                        </p>

                        <DownloadAppLinks variant="row" custom_gap="40px" colorVariant="light"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSection