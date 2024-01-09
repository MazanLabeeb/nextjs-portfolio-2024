import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello I'm
          <br />
          Mazan Labeeb
        </SectionTitle>
        <SectionText style={{ paddingBottom: 0 }}>
          A full stack MERN developer and JavaScript enthusiast with more than 5
          years' work experience <br />
          Contact me on <strong>UPWORK</strong> for hiring and a possible
          collaboration.
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
