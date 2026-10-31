import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import cloudsVideo from "../assets/clouds.mp4";
import plane from "../assets/plane.png";

const MotionBox = motion(Box);

interface AnimatedIntroProps {
  onComplete: () => void;
}

export default function AnimatedIntro({ onComplete }: AnimatedIntroProps) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete();
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <Box position="fixed" inset="0" zIndex={300} overflow="hidden" bg="#B9DDF5">
      {/* MOVING CLOUDS VIDEO */}
      <video
        src={cloudsVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* SOFT BLUE OVERLAY */}
      <Box position="absolute" inset="0" bg="rgba(190, 225, 248, 0.15)" />

      {/* INTRO TEXT */}
      <MotionBox
        position="absolute"
        top="15%"
        left="0"
        width="100%"
        textAlign="center"
        px={5}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Text
          fontSize="11px"
          letterSpacing="0.3em"
          textTransform="uppercase"
          color="#315D7D"
        >
          Spremi se za poletanje!
        </Text>
      </MotionBox>

      {/* AIRPLANE TAKES OFF */}
      <MotionBox
        position="absolute"
        left="50%"
        bottom="-150px"
        width={{ base: "75px", md: "110px" }}
        animate={{
          y: [0, -150, -400, "-120vh"],
        }}
        transition={{
          duration: 4,
          delay: 0.5,
          ease: "easeInOut",
        }}
      >
        <img
          src={plane}
          alt="Avion koji poleće"
          draggable={false}
          style={{
            width: "100%",
            display: "block",
          }}
        />
      </MotionBox>

      {/* FADE OUT */}
      <MotionBox
        position="absolute"
        inset="0"
        bg="#EAF4FC"
        pointerEvents="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{
          duration: 1,
          delay: 5,
        }}
      />
    </Box>
  );
}
