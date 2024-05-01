import Hero from "@/components/Hero.jsx";
import Stats from "@/components/Stats";
import HowWorks from "@/components/HowWorks";
import FeaturedProject from "@/components/FeaturedProject";
import Contacts from "@/components/Contacts";
import Brands from "./Brands";

const Page = () => {
    return (
        <>
            <Hero/>
            <Brands/>
            <HowWorks/>
            <Stats/>
            <FeaturedProject/>
            <Contacts/>
            

        </>
    );
};

export default Page;