import React from "react";
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
  IconButton,
  Input,
  Textarea,
  Table,
  Tbody,
  Tr,
  Td,
  Center,
} from "@chakra-ui/react";
import { Cont } from "../../assets/constants";
import { FaLinkedin, FaGithub, FaYoutube,FaInstagram } from "react-icons/fa";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSendMessage = () => {
    // Implement logic to send a message (e.g., using an API or server-side functionality)
    console.log("Message sent!");
    onClose(); // Close the modal after sending the message
  };

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
          <Cont />
          <Box display={{ base: "none", md: "block" }}>Contact Me</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg="black" border="1px solid gray" width="800px">
          <ModalHeader >My Social Media Links</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex flexDirection="column" alignItems="center" mb={5}>
              <Flex alignItems="center" justifyContent="center" mb={4}>
                <IconButton
                  as="a"
                  href="https://www.linkedin.com/in/bejawada-sai-mahendra-b18289212/" target="_blank"
                  icon={<FaLinkedin />}
                  aria-label="LinkedIn"
                  mr={2}
                />
                <IconButton
                  as="a"
                  href="https://github.com/sunstromium" target="_blank"
                  icon={<FaGithub />}
                  aria-label="GitHub"
                  mr={2}
                />
                <IconButton
                  as="a"
                  href="https://www.youtube.com/channel/UCpibsNt_1x_BWeAg2w0pZpw" target="_blank"
                  icon={<FaYoutube />}
                  aria-label="YouTube" mr={2}
                />
				<IconButton
  as="a"
  href="https://www.instagram.com/sai_mahendra_bejawada/" // Replace with the actual Instagram link
  target="_blank"
  icon={<FaInstagram />}
  aria-label="Instagram"
/>
              </Flex>

              {/* Contact Form */}
              <form>
                <Table variant="simple" size="lg">
                  <Tbody>
                    <Tr>
                      <Td>Your Name:</Td>
                      <Td>
                        <Input type="text" id="username" name="username" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Your Email:</Td>
                      <Td>
                        <Input type="email" id="email" name="email" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Your Message:</Td>
                      <Td>
                        <Textarea id="message" name="message" rows="4" placeholder="well it won't send any messegs i am gonna add functinalities later" />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>

                <Button type="button" onClick={handleSendMessage} mt={4} mx="auto">
  Send Message
</Button>

              </form>
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

export default About;
