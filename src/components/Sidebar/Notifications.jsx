// import React from "react";
import {
  Box,
  Flex,
Avatar,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { AboutLogo } from "../../assets/constants"; // Replace with actual photo import

const Notifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip
        hasArrow
        label={"About"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems="center"
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
			<AboutLogo/>
          <Box display={{ base: "none", md: "block" }}>About Me</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg="black" border="1px solid gray" width='800px'>
          <ModalHeader>About the Creator</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <Flex flexDirection="column" alignItems="center" mb={5}>
			<Avatar size="lg" src={"/sai.png"} mb={2} />

              <Box textAlign="center">
                <p>
				Hi!👋🏻 I&apos;m Sai Mahendra, I am a learner .
                </p><br></br>
                <p> My hobbies are watching anime and coding web apps and solving programming problems
                  
                </p>
                <br></br>
                <p> also i enjoy creating meaningful and user-friendly experiences.
                  Feel free to connect with me on social media!</p>
              </Box>
            </Flex>

            <Flex w="full" justifyContent="flex-end">
              <Button ml="auto" size="sm" my={4} onClick={onClose}>
                Close
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Notifications;
