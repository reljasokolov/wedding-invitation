import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import venueImage from "../assets/venue.jpg";

const MotionBox = motion(Box);

export default function Venue() {
  return (
    <Box
      bg="#EAE3D8"
      px={{ base: 6, md: 12 }}
      py={{ base: 24, md: 32 }}
      overflow="hidden"
    >
      <Box
        maxW="1200px"
        mx="auto"
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          lg: "1.15fr 0.85fr",
        }}
        gap={{ base: 12, lg: 20 }}
        alignItems="center"
      >
        {/* IMAGE */}

        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Box
            position="relative"
            p={{ base: 2, md: 3 }}
            border="1px solid"
            borderColor="#C8BBAA"
          >
            <Box overflow="hidden" aspectRatio="1.15">
              <Image
                src={venueImage}
                alt="Wedding venue"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>

            <Box
              position="absolute"
              top="-1px"
              right="-1px"
              width="55px"
              height="55px"
              borderTop="1px solid"
              borderRight="1px solid"
              borderColor="#A88A64"
            />

            <Box
              position="absolute"
              bottom="-1px"
              left="-1px"
              width="55px"
              height="55px"
              borderBottom="1px solid"
              borderLeft="1px solid"
              borderColor="#A88A64"
            />
          </Box>
        </MotionBox>

        {/* CONTENT */}

        <MotionBox
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            gap={6}
          >
            <Text
              fontSize="9px"
              letterSpacing="0.4em"
              textTransform="uppercase"
              color="#82796E"
            >
              Mesto venčanja
            </Text>

            <Text
              fontFamily="serif"
              fontSize={{
                base: "38px",
                md: "52px",
              }}
              fontWeight="400"
              lineHeight="1"
              color="#302C27"
            >
              Perla
              <br />
              Event
            </Text>

            <Box width="40px" height="1px" bg="#A88A64" />

            <Text fontSize="11px" lineHeight="1.9" color="#6F685E" maxW="420px">
              Mesto gde ćemo sa našim najdražima proslaviti ljubav, zajedništvo
              i početak jednog novog poglavlja.
            </Text>

            <VStack gap={1} align={{ base: "center", lg: "flex-start" }}>
              <Text
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color="#302C27"
              >
                Perla
              </Text>

              <Text
                fontSize="10px"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color="#82796E"
              >
                Beograd · Srbija
              </Text>
            </VStack>

            <Button
              variant="outline"
              borderRadius="0"
              borderColor="#A88A64"
              color="#4E4840"
              fontSize="9px"
              letterSpacing="0.25em"
              textTransform="uppercase"
              fontWeight="400"
              px={8}
              py={6}
              _hover={{
                bg: "#A88A64",
                color: "#F8F4EC",
              }}
            >
              Pronadji na mapi
            </Button>
          </VStack>
        </MotionBox>
      </Box>
    </Box>
  );
}
