import { useState } from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import envelopeBg from "../assets/envelope.png";

const MotionBox = motion(Box);

interface EnvelopeProps {
  onComplete: () => void;
}

export default function Envelope({ onComplete }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    setTimeout(() => {
      onComplete();
    }, 2200);
  };

  return (
    <Box
      position="fixed"
      inset="0"
      bg="#F4F0E8"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      zIndex={100}
    >
      <Box
        position="absolute"
        inset="0"
        bgImage={`url(${envelopeBg})`}
        bgSize="cover"
        backgroundPosition="center"
        bgRepeat="no-repeat"
        opacity={0.3}
      />
      {/* TOP LABEL */}
      <AnimatePresence>
        {!isOpening && (
          <MotionBox
            position="absolute"
            top="9%"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
          >
            <Text
              fontSize="10px"
              letterSpacing="0.45em"
              textTransform="uppercase"
              color="#6F685E"
            >
              Pozivamo te na naše venčanje
            </Text>
          </MotionBox>
        )}
      </AnimatePresence>

      {/* ENVELOPE */}
      <MotionBox
        position="relative"
        width={{ base: "330px", md: "500px" }}
        height={{ base: "220px", md: "330px" }}
        style={{ perspective: 1400 }}
        animate={
          isOpening
            ? {
                y: 80,
                scale: 1.06,
              }
            : {
                y: 0,
                scale: 1,
              }
        }
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* SHADOW */}
        <Box
          position="absolute"
          bottom="-35px"
          left="7%"
          width="86%"
          height="30px"
          borderRadius="50%"
          bg="rgba(50, 43, 35, 0.13)"
          filter="blur(22px)"
        />

        {/* PAPER */}
        <MotionBox
          position="absolute"
          top="8%"
          left="8%"
          width="84%"
          height="84%"
          bg="#FCFAF5"
          zIndex={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 8px 30px rgba(0,0,0,0.07)"
          animate={
            isOpening
              ? {
                  y: "-62%",
                  scale: 1.04,
                }
              : {
                  y: "0%",
                  scale: 1,
                }
          }
          transition={{
            duration: 1.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <VStack gap={3}>
            <Text
              fontFamily="serif"
              fontSize={{ base: "26px", md: "38px" }}
              fontWeight="400"
              letterSpacing="0.08em"
              color="#302C27"
            >
              Marija & Damjan
            </Text>

            <Text
              fontSize="9px"
              letterSpacing="0.32em"
              textTransform="uppercase"
              color="#756D63"
            >
              September 12, 2027
            </Text>
          </VStack>
        </MotionBox>

        {/* ENVELOPE BASE */}
        <Box
          position="absolute"
          inset="0"
          bg="#E8E0D3"
          border="1px solid #CFC3B2"
          zIndex={3}
          boxShadow="0 25px 70px rgba(0,0,0,0.10)"
        />

        {/* LEFT FOLD */}
        <Box
          position="absolute"
          inset="0"
          zIndex={4}
          clipPath="polygon(0 0, 50% 50%, 0 100%)"
          bg="#DED4C6"
        />

        {/* RIGHT FOLD */}
        <Box
          position="absolute"
          inset="0"
          zIndex={4}
          clipPath="polygon(100% 0, 50% 50%, 100% 100%)"
          bg="#D9CDBD"
        />

        {/* BOTTOM FOLD */}
        <Box
          position="absolute"
          inset="0"
          zIndex={5}
          clipPath="polygon(0 100%, 50% 49%, 100% 100%)"
          bg="#E2D8CA"
        />

        {/* TOP FLAP */}
        <MotionBox
          position="absolute"
          inset="0"
          zIndex={7}
          bg="#EAE2D6"
          clipPath="polygon(0 0, 50% 52%, 100% 0)"
          transformOrigin="top center"
          animate={{
            rotateX: isOpening ? -180 : 0,
          }}
          transition={{
            duration: 1.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        />

        {/* INNER FLAP SHADOW */}
        <MotionBox
          position="absolute"
          inset="0"
          zIndex={6}
          clipPath="polygon(0 0, 50% 52%, 100% 0)"
          bg="#D6CABA"
          animate={{
            opacity: isOpening ? 0 : 1,
          }}
          transition={{
            duration: 0.35,
            delay: 0.9,
          }}
        />

        {/* CENTERED WAX SEAL */}
        <MotionBox
          position="absolute"
          inset="0"
          zIndex={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          pointerEvents="none"
          animate={{
            opacity: isOpening ? 0 : 1,
            scale: isOpening ? 0.65 : 1,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <Box
            width={{ base: "48px", md: "58px" }}
            height={{ base: "48px", md: "58px" }}
            borderRadius="50%"
            bg="#9F8060"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#F8F3EA"
            fontFamily="serif"
            fontSize={{ base: "12px", md: "14px" }}
            letterSpacing="0.08em"
            border="2px solid rgba(255,255,255,0.18)"
            boxShadow="0 6px 18px rgba(0,0,0,0.16)"
          >
            M&D
          </Box>
        </MotionBox>
      </MotionBox>

      {/* OPEN BUTTON */}
      <AnimatePresence>
        {!isOpening && (
          <MotionBox
            position="absolute"
            bottom="9%"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            <Button
              variant="plain"
              onClick={handleOpen}
              fontSize="10px"
              letterSpacing="0.3em"
              textTransform="uppercase"
              fontWeight="400"
              color="#4E4840"
              _hover={{
                color: "#9F8060",
              }}
            >
              Otvori!
            </Button>
          </MotionBox>
        )}
      </AnimatePresence>

      {/* TRANSITION */}
      <AnimatePresence>
        {isOpening && (
          <MotionBox
            position="fixed"
            inset="0"
            bg="#F4F0E8"
            zIndex={200}
            pointerEvents="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.55,
              duration: 0.7,
            }}
          />
        )}
      </AnimatePresence>
    </Box>
  );
}
