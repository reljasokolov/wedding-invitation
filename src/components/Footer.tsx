import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Footer() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="#cdc3a1"
      color="#F7F3EA"
      py={{ base: 12, md: 16 }}
      px={6}
    >
      {/* SOFT LIGHT */}

      <Box
        position="absolute"
        inset="0"
        bgGradient="
          radial(
            circle at 50% 0%,
            rgba(255,255,255,0.16),
            transparent 55%
          )
        "
      />

      {/* SUBTLE SEA SHAPE */}

      <Box
        position="absolute"
        width="700px"
        height="300px"
        borderRadius="50%"
        bg="rgba(255,255,255,0.035)"
        left="50%"
        top="-210px"
        transform="translateX(-50%)"
      />

      <VStack position="relative" zIndex={1} gap={0} textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Text
            fontFamily="serif"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="400"
            letterSpacing="-0.02em"
          >
            Relja & Ana
          </Text>
        </MotionBox>

        <Text
          mt={3}
          fontSize="9px"
          letterSpacing="0.28em"
          textTransform="uppercase"
          opacity={0.8}
        >
          September 12 · 2027
        </Text>

        <Box width="30px" height="1px" bg="rgba(247,243,234,0.55)" my={5} />

        <Text
          fontSize="8px"
          letterSpacing="0.25em"
          textTransform="uppercase"
          opacity={0.7}
        >
          Mallorca · Spain
        </Text>
      </VStack>
    </Box>
  );
}
