/* eslint-disable @typescript-eslint/no-unused-vars */
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import exp from "constants";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { div } from "framer-motion/client";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Home( { setSelectedPage } : Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* IMAGE AND MAIN HEADER*/}
        {/* md:flex applys only when we are at the big screen */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            {/* MAIN HEADER */}
            <div>
                {/* HEADINGS */}
                <div>
                    <div>
                        <div>
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>

                    <p>
                        Unrivaled Gym. Unparalleled Training Fitness Classes.
                    </p>
                </div>  

                {/* actions */}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now!
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>

            {/* IMAGE */}
            <div>
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        </div>

        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="forbes-sponsor" />
                        <img src={SponsorFortune} alt="fortune-sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>;
}

export default Home;