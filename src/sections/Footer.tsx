import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYouTube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#162121] text-[#bcbcbc] text-md text-center py-10">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-1 before:bottom-0 before:blur before:w-full before:h-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute ">
          <Image src={Logo} height={40} alt="Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-10">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-10">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYouTube />
        </div>
        <p className="mt-10">&copy; Tribe, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
