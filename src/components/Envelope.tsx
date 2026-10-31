import { useEffect, useRef, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

import envelopeImage from "../assets/envelope-1.png";
import cloudImage from "../assets/cloud.png";
import envelopeRive from "../assets/envelope.riv";

const MotionBox = motion.create(Box);

interface EnvelopeProps {
  onComplete: () => void;
}

function FlyingCloud({
  top,
  delay,
  duration,
  width,
}: {
  top: string;
  delay: number;
  duration: number;
  width: string;
}) {
  return (
    <MotionBox
      position="absolute"
      top={top}
      left="-30%"
      width={width}
      zIndex={0}
      pointerEvents="none"
      animate={{ x: ["0vw", "140vw"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Image src={cloudImage} width="100%" opacity={0.75} />
    </MotionBox>
  );
}

export default function Envelope({ onComplete }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const startedRef = useRef(false);
  const completedRef = useRef(false);

  const { RiveComponent, rive } = useRive({
    src: envelopeRive,
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    onStop: () => {
      if (startedRef.current && !completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
    },
  });

  useEffect(() => {
    if (isOpening && rive && !startedRef.current) {
      startedRef.current = true;
      rive.play("Timeline 1");
    }
  }, [isOpening, rive]);

  const handleOpen = () => {
    if (startedRef.current || isOpening) return;
    setIsOpening(true);
  };

  return (
    <Box
      minH="100svh"
      width="100%"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, #dceeff, #f4f9ff, #e4f2ff)"
    >
      <FlyingCloud top="12%" delay={0} duration={48} width="180px" />
      <FlyingCloud top="28%" delay={12} duration={55} width="140px" />
      <FlyingCloud top="72%" delay={5} duration={52} width="200px" />

      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={1}
        px={4}
      >
        {!isOpening && (
          <Text
            color="#6686a5"
            fontSize={{ base: "sm", md: "md" }}
            letterSpacing="0.18em"
            textTransform="uppercase"
            mb={{ base: 5, md: 7 }}
            textAlign="center"
          >
            Specijalna isporuka
          </Text>
        )}

        <Box
          width="min(90vw, 750px)"
          aspectRatio="1280 / 823"
          position="relative"
          flexShrink={0}
          mx="auto"
        >
          {!isOpening && (
            <Image
              src={envelopeImage}
              alt="Koverta"
              position="absolute"
              top="5%"
              left={0}
              width="100%"
              height="100%"
              objectFit="fill"
              display="block"
              cursor="pointer"
              draggable={false}
              onClick={handleOpen}
            />
          )}

          {isOpening && (
            <Box
              position="absolute"
              top="41.5%"
              left="48.5%"
              width="150%"
              height="110%"
              transform="translate(-50%, -50%) scale(1.2)"
              transformOrigin="center center"
            >
              <RiveComponent
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </Box>
          )}
        </Box>

        {!isOpening ? (
          <Text
            mt={{ base: 5, md: 7 }}
            color="#6686a5"
            fontSize={{ base: "sm", md: "md" }}
            letterSpacing="0.08em"
            textAlign="center"
          >
            Klikni da otvoriš
          </Text>
        ) : (
          <Text
            mt={{ base: 4, md: 7 }}
            color="#6686a5"
            fontSize={{ base: "sm", md: "md" }}
            letterSpacing="0.08em"
            textAlign="center"
          >
            Spremi se za poletanje...
          </Text>
        )}
      </Box>
    </Box>
  );
}
