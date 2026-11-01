import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import cloud from "../assets/cloud.png";
import invitation from "../assets/listic.png";

const MotionBox = motion.create(Box);

function FlyingCloud({
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
      left={reverse ? "auto" : "-220px"}
      right={reverse ? "-220px" : "auto"}
      width={width}
      pointerEvents="none"
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
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </MotionBox>
  );
}

export default function Hero() {
  return (
    <Box
      minH="100svh"
      position="relative"
      overflow="hidden"
      bg="#eaf5ff"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 8, md: 14 }}
    >
      {/* Svetloplavo nebo */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, #dceeff, #f4f9ff, #e4f2ff)"
      />

      {/* Oblaci u pozadini */}
      <FlyingCloud top="4%" width="170px" duration={46} delay={0} />
      <FlyingCloud top="18%" width="125px" duration={52} delay={-22} reverse />
      <FlyingCloud top="37%" width="155px" duration={48} delay={-12} />
      <FlyingCloud top="59%" width="185px" duration={54} delay={-30} reverse />
      <FlyingCloud top="79%" width="150px" duration={45} delay={-8} />

      {/* Naslov i pozivnica */}
      <MotionBox
        position="relative"
        zIndex={2}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        px={{ base: 2, md: 3 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Text
          fontSize={{ base: "10px", md: "12px" }}
          letterSpacing="0.25em"
          textTransform="uppercase"
          color="#6483a0"
          mb={{ base: 2, md: 3 }}
        >
          Specijalna isporuka
        </Text>

        <Text
          fontFamily="serif"
          fontSize={{ base: "27px", sm: "36px", md: "52px" }}
          lineHeight="1.15"
          color="#315777"
          mb={3}
        >
          Spremni za ukrcavanje?
        </Text>

        <Text
          fontFamily="serif"
          fontSize={{ base: "16px", md: "24px" }}
          color="#587b98"
          maxW="500px"
          mb={{ base: 3, md: 5 }}
        >
          Mijat te zove na svoj prvi rođendan
        </Text>

        {/* Ilustrovana pozivnica */}
        <MotionBox
          width={{
            base: "95%",
            sm: "85%",
            md: "75%",
          }}
          maxW="680px"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.25,
            ease: "easeOut",
          }}
        >
          <img
            src={invitation}
            alt="Mijatova pozivnica za prvi rođendan"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              filter: "drop-shadow(0 12px 22px rgba(61, 89, 112, 0.12))",
            }}
          />
        </MotionBox>
      </MotionBox>

      {/* Indikator za skrolovanje */}
      <MotionBox
        position="absolute"
        bottom="2%"
        left="50%"
        zIndex={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        style={{ x: "-50%" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Text
          fontSize="9px"
          letterSpacing="0.2em"
          textTransform="uppercase"
          color="#6483a0"
          whiteSpace="nowrap"
        >
          Skroluj naniže
        </Text>

        <Box width="1px" height="25px" bg="#7fa9c9" />
      </MotionBox>
    </Box>
  );
}
