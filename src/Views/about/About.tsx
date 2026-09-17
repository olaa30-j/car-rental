import AboutFeaturesSection from '../../components/about/feature/AboutFeaturesSection'
import ReviewsSection from '../../components/about/review/ReviewsSection'
import VideoPlayer from '../../components/about/VideoPlayer'
import PageHeader from '../../components/PageHeader'
import videoPoster from "../../assets/home/sec_two/image.png";
import StatsSection from '../../components/about/stats/StatsSection';
import UnlockMemoriesSection from '../../components/about/memories/unlockMemoriesSection';
import FaqSection from '../../components/about/faq/FaqSection';
import BookingSection from '../../components/about/BookingSection';

const About = () => {
    return (
        <div>
            <PageHeader
                title="About Us"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" },
                ]}
            />

            <AboutFeaturesSection />

            <div className='pt-[var(--section-padding)]'>
                <VideoPlayer videoId="D7tit_JZKvk" poster={videoPoster} />
            </div>

            <StatsSection />

            <UnlockMemoriesSection />

            <ReviewsSection />

            <FaqSection />

            <section className="container mx-auto">
                <BookingSection />
            </section>
        </div>
    )
}

export default About