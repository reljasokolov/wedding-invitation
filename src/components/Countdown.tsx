import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion.create(Box);

const TARGET_DATE = new Date(2026, 12, 16, 17, 0, 0);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = TARGET_DATE.getTime() - Date.now();
  const remaining = Math.max(0, difference);

  return {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remaining / (1000 * 60)) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

const timeUnits: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "dana" },
  { key: "hours", label: "sati" },
  { key: "minutes", label: "minuta" },
  { key: "seconds", label: "sekundi" },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="#f4f9ff"
      py={{ base: 16, md: 24 }}
      px={4}
    >
      <VStack gap={6} maxW="900px" mx="auto" textAlign="center">
        <Text
          color="#7898b4"
          fontSize="10px"
          letterSpacing="0.3em"
          textTransform="uppercase"
        >
          Odbrojavanje je počelo
        </Text>

        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Text
            fontFamily="serif"
            color="#315777"
            fontSize={{ base: "30px", md: "44px" }}
            lineHeight="1.2"
          >
            Još malo do poletanja!
          </Text>
        </MotionBox>

        <Text
          color="#6483a0"
          fontSize={{ base: "14px", md: "16px" }}
          maxW="500px"
          lineHeight="1.8"
        >
          Mijatov prvi rođendan nam se približava. Spremi se za jedan poseban
          dan!
        </Text>

        <HStack
          gap={{ base: 2, sm: 4, md: 6 }}
          justify="center"
          width="100%"
          flexWrap="wrap"
          pt={3}
        >
          {timeUnits.map(({ key, label }, index) => (
            <MotionBox
              key={key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              bg="white"
              border="1px solid"
              borderColor="#dceaf6"
              borderRadius="16px"
              boxShadow="0 8px 24px rgba(69, 112, 148, 0.07)"
              minW={{ base: "68px", sm: "100px" }}
              px={{ base: 2, sm: 4 }}
              py={{ base: 4, sm: 5 }}
            >
              <Text
                fontFamily="serif"
                fontSize={{ base: "28px", sm: "40px", md: "48px" }}
                lineHeight="1"
                color="#315777"
                fontVariantNumeric="tabular-nums"
              >
                {String(timeLeft[key]).padStart(2, "0")}
              </Text>

              <Text
                mt={3}
                color="#7898b4"
                fontSize={{ base: "9px", sm: "11px" }}
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                {label}
              </Text>
            </MotionBox>
          ))}
        </HStack>

        <Box width="45px" height="1px" bg="#b6cfe3" mt={3} />

        <Text
          fontFamily="serif"
          fontSize="16px"
          fontStyle="italic"
          color="#6483a0"
        >
          Vidimo se na oblacima! ☁️
        </Text>
      </VStack>
    </Box>
  );
}
