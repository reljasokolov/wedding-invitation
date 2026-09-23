import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";

const MotionBox = motion(Box);

const photos = [
  {
    src: gallery1,
    alt: "Wedding moment",
    className: "large",
  },
  {
    src: gallery2,
    alt: "Wedding details",
    className: "small",
  },
  {
    src: gallery3,
    alt: "Mediterranean landscape",
    className: "small",
  },
  {
    src: gallery4,
    alt: "Wedding celebration",
    className: "wide",
  },
  {
    src: gallery5,
    alt: "Wedding evening",
    className: "portrait",
  },
];

export default function Gallery() {
  return (
    <Box
      bg="#EAE3D8"
      px={{ base: 6, md: 10, lg: 16 }}
      py={{ base: 24, md: 32 }}
      overflow="hidden"
    >
      <Box maxW="1250px" mx="auto">
        {/* HEADER */}

        <MotionBox
          textAlign="center"
          mb={{ base: 16, md: 24 }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <VStack gap={4}>
            <Text
              fontSize="9px"
              letterSpacing="0.4em"
              textTransform="uppercase"
              color="#82796E"
            >
              Nekoliko uspomena
            </Text>

            <Text
              fontFamily="serif"
              fontSize={{
                base: "40px",
                md: "56px",
              }}
              fontWeight="400"
              color="#302C27"
            >
              Trenuci koje volimo
            </Text>

            <Box width="40px" height="1px" bg="#A88A64" />

            <Text fontSize="11px" lineHeight="1.9" color="#756D63" maxW="420px">
              Zbirka malih trenutaka koji su nas doveli dovde i uspomena koje
              jedva čekamo da stvorimo zajedno sa vama.
            </Text>
          </VStack>
        </MotionBox>

        {/* GALLERY */}

        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "1.15fr 0.85fr",
          }}
          gridTemplateRows={{
            base: "auto",
            md: "300px 300px",
          }}
          gap={{ base: 5, md: 6 }}
        >
          {/* LARGE IMAGE */}

          <MotionBox
            gridRow={{ base: "auto", md: "1 / 3" }}
            overflow="hidden"
            position="relative"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              width="100%"
              height="100%"
              minH={{ base: "500px", md: "626px" }}
              objectFit="cover"
              transition="transform 1.2s ease"
              _hover={{
                transform: "scale(1.04)",
              }}
            />
          </MotionBox>

          {/* TOP RIGHT */}

          <MotionBox
            overflow="hidden"
            initial={{
              opacity: 0,
              y: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              width="100%"
              height="100%"
              minH="300px"
              objectFit="cover"
              transition="transform 1.2s ease"
              _hover={{
                transform: "scale(1.04)",
              }}
            />
          </MotionBox>

          {/* BOTTOM RIGHT */}

          <MotionBox
            overflow="hidden"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
          >
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              width="100%"
              height="100%"
              minH="300px"
              objectFit="cover"
              transition="transform 1.2s ease"
              _hover={{
                transform: "scale(1.04)",
              }}
            />
          </MotionBox>
        </Box>

        {/* SECOND ROW */}

        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "1.5fr 0.7fr",
          }}
          gap={{ base: 5, md: 6 }}
          mt={{ base: 5, md: 6 }}
        >
          {/* WIDE IMAGE */}

          <MotionBox
            overflow="hidden"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <Image
              src={photos[3].src}
              alt={photos[3].alt}
              width="100%"
              height={{
                base: "300px",
                md: "420px",
              }}
              objectFit="cover"
              transition="transform 1.2s ease"
              _hover={{
                transform: "scale(1.04)",
              }}
            />
          </MotionBox>

          {/* PORTRAIT */}

          <MotionBox
            overflow="hidden"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
          >
            <Image
              src={photos[4].src}
              alt={photos[4].alt}
              width="100%"
              height={{
                base: "420px",
                md: "420px",
              }}
              objectFit="cover"
              transition="transform 1.2s ease"
              _hover={{
                transform: "scale(1.04)",
              }}
            />
          </MotionBox>
        </Box>

        {/* FOOT NOTE */}

        <MotionBox
          textAlign="center"
          mt={{ base: 16, md: 20 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <Text
            fontFamily="serif"
            fontSize="18px"
            fontStyle="italic"
            color="#82796E"
          >
            And this is only the beginning.
          </Text>
        </MotionBox>
      </Box>
    </Box>
  );
}
