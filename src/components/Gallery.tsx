import { useRef, useState, useEffect } from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import baby1 from "../assets/baby1.png";
import baby2 from "../assets/baby2.png";
import baby3 from "../assets/baby3.png";
import baby4 from "../assets/baby4.png";

const MotionBox = motion.create(Box);

const photos = [
  { src: baby1, alt: "Mijat – fotografija 1", rotate: -3 },
  { src: baby2, alt: "Mijat – fotografija 2", rotate: 2 },
  { src: baby3, alt: "Mijat – fotografija 3", rotate: -2 },
  { src: baby4, alt: "Mijat – fotografija 4", rotate: 3 },
];

function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleScroll = () => {
      const cards = gallery.querySelectorAll(".gallery-photo");
      const center = gallery.scrollLeft + gallery.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const cardCenter = element.offsetLeft + element.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    gallery.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => gallery.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPhoto = (index: number) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const cards = gallery.querySelectorAll(".gallery-photo");
    const card = cards[index] as HTMLElement;

    if (card) {
      gallery.scrollTo({
        left: card.offsetLeft - gallery.clientWidth / 2 + card.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="gallery"
      as="section"
      py={{ base: "70px", md: "100px" }}
      bg="transparent"
      overflow="hidden"
    >
      <VStack gap={4} maxW="1200px" mx="auto">
        <Text
          fontSize="11px"
          letterSpacing="0.25em"
          textTransform="uppercase"
          color="#7898b5"
        >
          Naš mali putnik
        </Text>

        <Text
          fontSize={{ base: "30px", md: "46px" }}
          fontWeight="600"
          color="#315777"
          textAlign="center"
          fontFamily="serif"
          px={3}
        >
          Mijatove male avanture ☁️
        </Text>

        <Text
          fontSize="15px"
          color="#71869a"
          textAlign="center"
          maxW="480px"
          lineHeight="1.8"
          px={5}
        >
          Godinu dana osmeha, zagrljaja i najlepših uspomena. Jedva čekamo da
          zajedno proslavimo ovu posebnu avanturu!
        </Text>

        {/* Horizontalna galerija */}
        <Box
          ref={galleryRef}
          w="100%"
          mt="35px"
          overflowX="auto"
          overflowY="hidden"
          px={{ base: "20px", md: "30px" }}
          pb="20px"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <HStack
            align="center"
            gap={{ base: 5, md: 10 }}
            w="max-content"
            mx="auto"
          >
            {photos.map((photo, index) => (
              <MotionBox
                className="gallery-photo"
                key={photo.src}
                flex="0 0 auto"
                width={{
                  base: "calc((100vw - 60px) / 2)",
                  sm: "240px",
                  md: "280px",
                }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                style={{
                  rotate: photo.rotate,
                  scrollSnapAlign: "center",
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: 0,
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                    userSelect: "none",
                  }}
                />
              </MotionBox>
            ))}
          </HStack>
        </Box>

        {/* Elegantne navigacione tačkice */}
        <HStack gap={2} justify="center" mt={1}>
          {photos.map((photo, index) => (
            <Box
              key={photo.src}
              as="button"
              aria-label={`Fotografija ${index + 1}`}
              onClick={() => scrollToPhoto(index)}
              width={activeIndex === index ? "22px" : "6px"}
              height="6px"
              borderRadius="full"
              bg={activeIndex === index ? "#648bad" : "#c6d9e9"}
              transition="all 0.3s ease"
              cursor="pointer"
              border="none"
            />
          ))}
        </HStack>

        <Text
          mt="12px"
          fontSize="10px"
          letterSpacing="0.18em"
          textTransform="uppercase"
          color="#7898b5"
          textAlign="center"
        >
          Prevuci za još fotografija
        </Text>

        <Text
          mt="15px"
          fontSize="14px"
          color="#7898b5"
          fontStyle="italic"
          textAlign="center"
          px={4}
        >
          Svaka velika avantura počinje malim koracima. ✈️
        </Text>
      </VStack>
    </Box>
  );
}

export default Gallery;
