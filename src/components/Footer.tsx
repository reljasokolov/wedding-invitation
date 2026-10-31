import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import cloud from "../assets/cloud.png";
import boardingPass from "../assets/boardingPass.png";

const MotionBox = motion.create(Box);

function FooterCloud({
  top,
  width,
  duration,
  delay,
  reverse = false,
}: {
  top: string;
  width: string;
  duration: number;
  delay: number;
  reverse?: boolean;
}) {
  return (
    <MotionBox
      position="absolute"
      top={top}
      left={reverse ? "auto" : "-200px"}
      right={reverse ? "-200px" : "auto"}
      width={width}
      pointerEvents="none"
      zIndex={0}
      initial={{ x: 0 }}
      animate={{
        x: reverse ? ["0vw", "-125vw"] : ["0vw", "125vw"],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <img
        src={cloud}
        alt=""
        style={{
          width: "100%",
          display: "block",
        }}
      />
    </MotionBox>
  );
}

export default function Footer() {
  return (
    <Box
      as="footer"
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-b, #e4f2ff, #dceeff)"
      px={5}
      pt={{ base: 20, md: 28 }}
      pb={{ base: 8, md: 10 }}
    >
      {/* Flying clouds */}
      <FooterCloud top="12%" width="140px" duration={48} delay={-12} />

      <FooterCloud top="40%" width="110px" duration={55} delay={-25} reverse />

      <FooterCloud top="75%" width="150px" duration={50} delay={-8} />

      {/* Footer content */}
      <VStack
        position="relative"
        zIndex={2}
        maxW="700px"
        mx="auto"
        gap={5}
        textAlign="center"
      >
        <Text
          fontSize="10px"
          letterSpacing="0.3em"
          textTransform="uppercase"
          color="#7898b5"
        >
          Kraj naše male avanture
        </Text>

        <Text
          fontFamily="serif"
          fontSize={{ base: "32px", md: "46px" }}
          color="#315777"
          lineHeight="1.2"
        >
          Hvala što ste deo naše priče!
        </Text>

        <Box width="45px" height="1px" bg="#91b4d2" />

        <Text fontSize="14px" color="#587b98" lineHeight="1.9" maxW="440px">
          Radujemo se što ćemo ovaj poseban dan podeliti sa vama.
          <br />
          Volimo vas i jedva čekamo da se vidimo!
        </Text>

        {/* Boarding pass */}
        <MotionBox
          width="100%"
          maxW="480px"
          mt={5}
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          whileHover={{ y: -5, rotate: 1 }}
        >
          <img
            src={boardingPass}
            alt="Mijatov boarding pass"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 12px 20px rgba(49, 87, 119, 0.15))",
            }}
          />
        </MotionBox>

        <Text
          mt={4}
          fontFamily="serif"
          fontSize={{ base: "22px", md: "27px" }}
          color="#315777"
        >
          Ne zaboravite svoj boarding pass!
        </Text>

        <Text fontSize="12px" color="#7898b5" letterSpacing="0.05em">
          Vidimo se na letu za Mijatov prvi rođendan! ✈️
        </Text>

        <Box width="100%" height="1px" bg="#bfd5e7" mt={10} />

        <Text fontSize="10px" color="#8ba5bb" letterSpacing="0.15em">
          SA LJUBAVLJU, MIJAT I PORODICA ♡
        </Text>
      </VStack>
    </Box>
  );
}
