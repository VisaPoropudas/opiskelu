import { Button, Heading, HStack, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const [showModal, setShowModal] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <>
     {showModal && (
        <Modal isOpen={showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image src={imageSrc} marginBottom={5}/>
            <Text marginBottom={5}>{description}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     )}
    <VStack 
    backgroundColor="#ffffff"
    color="#333333"
    alignItems="flex-start" 
    className="card"
    >
      <Image src={imageSrc}/>
      <VStack
        alignItems="flex-start"
        padding={5}
        spacing={5}
      >
      <Heading fontSize={18}>{title}</Heading>
      <Text>{description}</Text>
      <Text fontWeight={'bold'}>
        <Link href="#" className="bold" onClick={(e) => {e.preventDefault(); setShowModal(true)}}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
      </Text>
      </VStack>
    </VStack>
    </>
  );
};

export default Card;
