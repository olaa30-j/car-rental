import type { FC } from 'react'
import BgImage1 from '../../assets/shared/banners/sec-1.png'
import BgImage2 from '../../assets/home/main/car.png'
import MainForm from './MainForm'

const MainSection: FC = () => {
  return (
    <div className="relative overflow-hidden section_style rounded-[40px] bg-primary min-h-[660px]">
      {/* Background Image 1 — centered, full width & height */}
      <img
        src={BgImage1}
        alt=""
        className="
          pointer-events-none
          absolute
          inset-0
          w-full
          h-full
          object-cover
          select-none
          z-[0]
        "
      />

      {/* Background Image 2 — centered, 698 x 418 */}
      <img
        src={BgImage2}
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[698px]
          h-[418px]
          object-contain
          select-none
          z-[1]
        "
      />

      {/* Foreground content */}
      <div className="relative z-10 h-full flex justify-center items-center lg:flex-row flex-col mx-auto gap-[44px]">
        <div className='text-white lg:w-2/3'>
          <h1>Experience the road like never before</h1>
          <p className='max-w-[464px] py-[27px]' style={{paddingBlock:'27px'}}>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>

          <button className='bg-secondary button_style' style={{paddingInline:'28px'}}>View all cars</button>
        </div>
        <div className='lg:w-1/3 md:w-2/3 w-full'>
          <MainForm className='bg-white'/>
        </div>
      </div>
    </div>
  )
}

export default MainSection