import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import weddingHero from "../assets/wedding-hero.mp4";

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      bg="#302C27"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* VIDEO */}

      <Box position="absolute" inset="0" width="100%" height="100%">
        <video
          src={weddingHero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      {/* DARK / WARM OVERLAY */}

      <Box position="absolute" inset="0" bg="rgba(35, 29, 24, 0.30)" />

      {/* SOFT GRADIENT */}

      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-b, rgba(30,25,20,0.05), rgba(30,25,20,0.38))"
      />

      {/* CONTENT */}

      <MotionBox
        position="relative"
        zIndex={2}
        color="white"
        textAlign="center"
        px={6}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <VStack gap={5}>
          {/* EYEBROW */}

          <Text
            fontSize="9px"
            letterSpacing="0.45em"
            textTransform="uppercase"
            opacity={0.85}
          >
            Sa zadovoljstvom vas pozivamo da prisustvujete našem venčanju
          </Text>

          {/* NAMES */}

          <Text
            fontFamily="serif"
            fontSize={{
              base: "64px",
              sm: "78px",
              md: "100px",
              lg: "120px",
            }}
            fontWeight="400"
            lineHeight="0.85"
            letterSpacing="-0.04em"
          >
            Marija
            <br />
            <Box
              as="span"
              fontSize={{
                base: "38px",
                md: "52px",
                lg: "62px",
              }}
              fontStyle="italic"
              mx={2}
            >
              &
            </Box>
            <br />
            Damjan
          </Text>

          {/* DIVIDER */}

          <Box width="45px" height="1px" bg="rgba(255,255,255,0.75)" my={2} />

          {/* DATE */}

          <Text
            fontFamily="serif"
            fontSize={{
              base: "20px",
              md: "24px",
            }}
            letterSpacing="0.03em"
          >
            September 12, 2027
          </Text>

          {/* LOCATION */}

          <Text
            fontSize="9px"
            letterSpacing="0.35em"
            textTransform="uppercase"
            opacity={0.85}
          >
            Perla Event · Beograd
          </Text>
        </VStack>
      </MotionBox>

      {/* SCROLL INDICATOR */}

      <MotionBox
        position="absolute"
        bottom="5%"
        left="50%"
        transform="translateX(-50%)"
        zIndex={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
      >
        <Text
          fontSize="8px"
          letterSpacing="0.3em"
          textTransform="uppercase"
          color="white"
          opacity={0.8}
        >
          Prevuci na dole
        </Text>

        <MotionBox
          width="1px"
          height="42px"
          bg="rgba(255,255,255,0.75)"
          transformOrigin="top"
          animate={{
            scaleY: [0.4, 1, 0.4],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </MotionBox>
    </Box>
  );
}
