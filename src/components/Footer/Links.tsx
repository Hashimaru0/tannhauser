import TwitterIcon from "../../svgs/twitter_icon.svg";
import LinkedinIcon from "../../svgs/linkedin_icon.svg";
import DiscordIcon from "../../svgs/discord_icon.svg";
import YoutubeIcon from "../../svgs/youtube_icon.svg";

const LinkGroup = ({
  title,
  links,
  titleButton,
}: {
  title: string;
  links: string[];
  titleButton: boolean;
}) => {
  return (
    <div className="grow shrink basis-0">
      <div
        className={`font-bold ${
          titleButton && "hover:opacity-50 cursor-pointer"
        } transition`}
      >
        {title}
      </div>
      {links.map((link) => (
        <div
          key={link}
          className="text-xs mt-1 opacity-30 hover:opacity-80 transition cursor-pointer"
        >
          {link}
        </div>
      ))}
    </div>
  );
};

const Links = () => {
  return (
    <div className="border-t border-white/70">
      <div className="max-w-[65rem] px-8 py-[4rem] mx-auto">
        <div className="flex justify-center lg:justify-between">
          <div>
            <LinkGroup title="CONTACT US" links={[""]} titleButton={true} />
          </div>
          <div className="hidden lg:flex gap-10 w-[40rem]">
            <LinkGroup
              title="LAUNCH"
              links={[
                "LOTUS",
                "HORIZON",
                "NEBUCHADNEZZAR",
                "STARLINER",
                "FALCON 0",
              ]}
              titleButton={false}
            />
            <LinkGroup
              title="SPACE SYSTEMS"
              links={[
                "PHOTON",
                "SATELLITE COMPONENTS",
                "RADIOS",
                "SPACE SOFTWARE",
                "SEPARATION SYSTEMS",
                "SOLAR SOLUTIONS",
              ]}
              titleButton={false}
            />
            <LinkGroup
              title="ABOUT"
              links={["ABOUT US", "TEAM", "COMMUNITY", "GALLERY"]}
              titleButton={false}
            />
            <LinkGroup
              title="MISSIONS"
              links={["UPCOMING MISSIONS", "COMPLETED MISSIONS", "CAPSTONE"]}
              titleButton={false}
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-between mt-10">
          <div className="flex gap-3 self-start">
            <div className="border p-2 rounded-full hover:bg-white/20 cursor-pointer transition">
              <img src={TwitterIcon} width={20} alt="Twitter" />
            </div>
            <div className="border p-2 rounded-full hover:bg-white/20 cursor-pointer transition">
              <img src={LinkedinIcon} width={20} alt="Linkedin" />
            </div>
            <div className="border p-2 rounded-full hover:bg-white/20 cursor-pointer transition">
              <img src={DiscordIcon} width={20} alt="Discord" />
            </div>
            <div className="border p-2 rounded-full hover:bg-white/20 cursor-pointer transition">
              <img src={YoutubeIcon} width={20} alt="Youtube" />
            </div>
          </div>
          <div className="hidden lg:flex gap-10 w-[40rem]">
            <LinkGroup
              title="CAREERS"
              links={[
                "JOIN THE TEAM",
                "SCHOLARSHIPS",
                "EDUCATION",
                "INTERNSHIPS",
              ]}
              titleButton={false}
            />
            <LinkGroup title="INVESTORS" links={[""]} titleButton={true} />
            <LinkGroup title="NEWS" links={[""]} titleButton={true} />
            <LinkGroup title="SHOP" links={[""]} titleButton={true} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10">
          <div className="text-2xl sm:text-2xl">Tannhäuser</div>
          <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-0 lg:gap-10">
            <div className="text-xs mt-1 opacity-30 hover:opacity-80 transition cursor-pointer">
              TERMS & CONDITIONS
            </div>
            <div className="text-xs mt-1 opacity-30 hover:opacity-80 transition cursor-pointer">
              PRIVACY POLICY
            </div>
            <div className="text-xs mt-10 lg:mt-1 opacity-30">
              ©2022 TANNHÄUSER IN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
