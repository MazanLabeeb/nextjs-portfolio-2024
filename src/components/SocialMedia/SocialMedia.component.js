import { SocialContainer, SocialIcons } from "./SocialMedia.styles";
import { AiFillGithub } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

export default function SocialMedia({ inFooter }) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://www.upwork.com/freelancers/mazanlabeeb"
        title="Hire me on Upwork"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiUpwork size="3rem" />
      </SocialIcons>

      <SocialIcons
        href="https://github.com/mazanlabeeb"
        title="Visit my github profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </SocialContainer>
  );
}
