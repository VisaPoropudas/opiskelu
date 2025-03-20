import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Visa!";
const bio1 = "A SW developer";
const bio2 = "with over 20 years of experience";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar name="Visa Poropudas" src="https://i.pravatar.cc/150?img=7"></Avatar>
      <p>{greeting}</p>
      <Heading justifyItems={'center'}>
        <p>{bio1}</p>
        <p>{bio2}</p>
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
