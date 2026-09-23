import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

const weddingDate = new Date("2027-09-12T16:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeUnit({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  return (
    <MotionBox
      textAlign="center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        delay,
      }}
    >
      <Text
        fontFamily="serif"
        fontSize={{
          base: "42px",
          sm: "50px",
          md: "64px",
        }}
        fontWeight="400"
        lineHeight="1"
        color="#302C27"
      >
        {String(value).padStart(2, "0")}
      </Text>

      <Text
        mt={3}
        fontSize="8px"
        letterSpacing="0.3em"
        textTransform="uppercase"
        color="#82796E"
      >
        {label}
      </Text>
    </MotionBox>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      bg="#F4F0E8"
      px={{ base: 6, md: 12 }}
      py={{ base: 24, md: 32 }}
      position="relative"
      overflow="hidden"
    >
      <VStack gap={12}>
        {/* HEADER */}

        <MotionBox
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap={4}>
            <Text
              fontSize="12px"
              letterSpacing="0.4em"
              textTransform="uppercase"
              color="#82796E"
            >
              ODBROJAVANJE POČINJE
            </Text>

            <Box width="35px" height="1px" bg="#A88A64" />
          </VStack>
        </MotionBox>

        {/* COUNTDOWN */}

        <HStack
          width="100%"
          maxW="700px"
          justify="center"
          gap={{
            base: 5,
            sm: 8,
            md: 14,
          }}
          align="flex-start"
        >
          <TimeUnit value={timeLeft.days} label="Dana" delay={0} />

          <Text
            fontFamily="serif"
            fontSize={{
              base: "25px",
              md: "35px",
            }}
            color="#B5A99A"
            mt={1}
          >
            :
          </Text>

          <TimeUnit value={timeLeft.hours} label="Sati" delay={0.1} />

          <Text
            fontFamily="serif"
            fontSize={{
              base: "25px",
              md: "35px",
            }}
            color="#B5A99A"
            mt={1}
          >
            :
          </Text>

          <TimeUnit value={timeLeft.minutes} label="Minuta" delay={0.2} />

          <Text
            fontFamily="serif"
            fontSize={{
              base: "25px",
              md: "35px",
            }}
            color="#B5A99A"
            mt={1}
          >
            :
          </Text>

          <TimeUnit value={timeLeft.seconds} label="Sekundi" delay={0.3} />
        </HStack>

        {/* DATE */}

        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <Text
            fontSize="9px"
            letterSpacing="0.25em"
            textTransform="uppercase"
            color="#91887C"
            textAlign="center"
          >
            September 12 · 2027 · Beograd
          </Text>
        </MotionBox>
      </VStack>
    </Box>
  );
}
