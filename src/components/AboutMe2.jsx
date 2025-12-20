import { Feature } from "@/components/ui/feature-with-image-comparison";
import profileImg from '../assets/IMG_6628.JPG';

function AboutMe2() {
    return (
        <section id="about-showcase" className="bg-black text-white">
            <Feature
                beforeImage={profileImg}
                afterImage={profileImg}
                badgeText="Showcase"
                title="My Journey"
                description="A glimpse into my creative process and professional work."
            />
        </section>
    );
}

export default AboutMe2;
