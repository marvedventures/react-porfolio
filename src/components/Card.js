import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box maxW="md" backgroundColor="white" borderRadius="lg">
      <Image borderRadius="lg" src={imageSrc} />
      <VStack alignItems="flex-start" p="4" color="black">
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="gray">
          {description}
        </Text>
        <HStack>
          <Heading size="sm">See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
