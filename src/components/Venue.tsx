import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import cloud from "../assets/cloud.png";

const MotionBox = motion.create(Box);

export default function Venue() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="#eaf5ff"
      py={{ base: 16, md: 24 }}
      px={4}
    >
      {/* Dekorativni oblačići */}
      <Box
        position="absolute"
        top="8%"
        left="-35px"
        width="150px"
        opacity={0.7}
        pointerEvents="none"
      >
        <img src={cloud} alt="" style={{ width: "100%", display: "block" }} />
      </Box>

      <Box
        position="absolute"
        bottom="5%"
        right="-35px"
        width="180px"
        opacity={0.6}
        pointerEvents="none"
      >
        <img src={cloud} alt="" style={{ width: "100%", display: "block" }} />
      </Box>

      <VStack gap={7} maxW="760px" mx="auto" position="relative">
        <MotionBox
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Text
            fontSize="10px"
            letterSpacing="0.3em"
            textTransform="uppercase"
            color="#6483a0"
            mb={3}
          >
            Naša destinacija
          </Text>

          <Text
            fontFamily="serif"
            fontSize={{ base: "34px", md: "48px" }}
            color="#315777"
            lineHeight="1.2"
          >
            Gde se ukrcavamo?
          </Text>

          <Text mt={3} color="#6483a0" fontSize={{ base: "14px", md: "16px" }}>
            Čekamo te da zajedno proslavimo Mijatov prvi rođendan.
          </Text>
        </MotionBox>

        {/* Kartica lokacije */}
        <MotionBox
          width="100%"
          maxW="560px"
          bg="#fffdf8"
          border="1px solid"
          borderColor="#dce8f1"
          borderRadius="24px"
          p={{ base: 6, md: 10 }}
          textAlign="center"
          boxShadow="0 16px 45px rgba(57, 94, 125, 0.10)"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Box
            width="58px"
            height="58px"
            mx="auto"
            mb={5}
            borderRadius="full"
            bg="#e5f1fb"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="27px">📍</Text>
          </Box>

          <Text
            fontFamily="serif"
            fontSize={{ base: "27px", md: "34px" }}
            color="#315777"
            lineHeight="1.2"
          >
            Princ Restoran
          </Text>

          <Text
            mt={2}
            fontSize="11px"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#7898b4"
          >
            Mala sala
          </Text>

          <Box width="45px" height="1px" bg="#b6cfe3" mx="auto" my={6} />

          <VStack gap={3}>
            <HStack justify="center" gap={2}>
              <Text color="#6483a0" fontSize="15px">
                Ivana Milutinovića 28, Niš, Srbija
              </Text>
            </HStack>

            <HStack justify="center" gap={5} flexWrap="wrap">
              <Text color="#6483a0" fontSize="14px">
                📅 16. decembar
              </Text>
              <Text color="#6483a0" fontSize="14px">
                🕔 17:00
              </Text>
            </HStack>
          </VStack>

          <Box
            as="button"
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/Lc9e4LnLasoVgQbS6",
                "_blank",
                "noopener,noreferrer",
              )
            }
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            mt="28px"
            px="28px"
            py="12px"
            bg="#315777"
            color="white"
            borderRadius="full"
            fontSize="12px"
            letterSpacing="0.08em"
            fontWeight="500"
            cursor="pointer"
            transition="all 0.25s ease"
            _hover={{
              bg: "#426f94",
              transform: "translateY(-2px)",
            }}
          >
            Pronađi nas na mapi ↗
          </Box>
        </MotionBox>

        <Text
          fontFamily="serif"
          fontStyle="italic"
          color="#6483a0"
          fontSize="17px"
          textAlign="center"
        >
          Radujemo se što ćemo slaviti zajedno! ☁️
        </Text>
      </VStack>
    </Box>
  );
}
