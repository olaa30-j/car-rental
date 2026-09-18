import BlogSection from "../../components/contact/blog/BlogSection";
import PageHeader from "../../components/PageHeader";
import Brands from "../../components/products/Brands";
import ContactItem from "../../components/shared/ContactItem ";
import MainForm from "../../components/shared/form/MainForm";
import { brands } from "../../data/brands";
import { contactData } from "../../data/contactData";

import contactImage from "../../assets/contact/Img.png";

const Contact = () => {
    return (
        <div>
            <PageHeader
                title="Contact Us"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" },
                ]}
            />

            <section className="flex flex-col md:flex-row container gap-4">
                <MainForm textColor="text-white" className="bg-primary lg:w-[35%] md:w-[45%]" />
                <div className="lg:w-[65%] md:w-[55%]">
                    <img
                        src={contactImage}
                        alt="Contact us"
                        className="w-full h-full object-cover rounded-[20px]"
                    />
                </div>
            </section>

            <section className="container">
                <ContactItem
                    items={contactData}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
                />
            </section>

            <BlogSection/>

            <section className="container">
                <Brands brands={brands} />
            </section>
        </div>
    );
};

export default Contact;