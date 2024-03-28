import CopyRight from "../components/CopyRight";
import SVGLinkedIcon from "../components/SVGLinkedIcon";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default () => {
    return (
        // <!--Footer container-->
        <footer className="flex flex-col items-center bg-gray-800 text-center text-surface text-gray-100">

            <SocialMediaIcons className="pt-9" />
            
            <CopyRight />

        </footer>
    )
}

