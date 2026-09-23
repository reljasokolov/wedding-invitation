import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const events = [
  {
    time: "13:00",
    title: "Crkveno venčanje",
    description:
      "Pred Bogom i pred našim najmilijima izgovorićemo svoje zavete i započeti naše zajedničko putovanje.",
  },
  {
    time: "16:00",
    title: "Opštinsko venčanje",
    description:
      "Još jedan poseban trenutak koji ćemo podeliti sa našom porodicom i prijateljima.",
  },
  {
    time: "17:00",
    title: "Doček gostiju",
    description:
      "Uz dobrodošlicu, osmehe i čašu pića počinjemo naše zajedničko slavlje.",
  },
  {
    time: "18:00",
    title: "Prvi ples",
    description:
      "Naš prvi ples kao supružnika i trenutak koji ćemo zauvek pamtiti.",
  },
  {
    time: "18:30",
    title: "Zabava počinje",
    description:
      "Muzika, ples i dobro raspoloženje — vreme je da zajedno proslavimo naš dan.",
  },
];

function ScheduleItem({
  time,
  title,
  description,
  index,
}: {
  time: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <MotionBox
      width="100%"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "75px 1fr",
          md: "120px 1fr",
        }}
        gap={{ base: 5, md: 10 }}
        alignItems="start"
      >
        {/* TIME */}

        <Text
          fontFamily="serif"
          fontSize={{
            base: "20px",
            md: "25px",
          }}
          color="#A88A64"
          pt={1}
        >
          {time}
        </Text>

        {/* CONTENT */}

        <Box
          borderLeft="1px solid"
          borderColor="#CFC3B2"
          pl={{ base: 5, md: 8 }}
          pb={{ base: 12, md: 14 }}
          position="relative"
        >
          {/* DOT */}

          <Box
            position="absolute"
            left="-5px"
            top="7px"
            width="9px"
            height="9px"
            borderRadius="full"
            bg="#A88A64"
          />

          <VStack align="flex-start" gap={3}>
            <Text
              fontFamily="serif"
              fontSize={{
                base: "27px",
                md: "34px",
              }}
              fontWeight="400"
              color="#302C27"
            >
              {title}
            </Text>

            <Text fontSize="11px" lineHeight="1.9" color="#756D63" maxW="470px">
              {description}
            </Text>
          </VStack>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function Schedule() {
  return (
    <Box bg="#F4F0E8" px={{ base: 6, md: 12 }} py={{ base: 24, md: 32 }}>
      <Box maxW="850px" mx="auto">
        {/* HEADER */}

        <MotionBox
          textAlign="center"
          mb={{ base: 16, md: 20 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap={4}>
            <Text
              fontSize="9px"
              letterSpacing="0.4em"
              textTransform="uppercase"
              color="#82796E"
            >
              Naš dan
            </Text>

            <Text
              fontFamily="serif"
              fontSize={{
                base: "38px",
                md: "52px",
              }}
              fontWeight="400"
              color="#302C27"
            >
              Dan za pamćenje
            </Text>

            <Box width="40px" height="1px" bg="#A88A64" />

            <Text fontSize="11px" lineHeight="1.8" color="#756D63" maxW="430px">
              Od prvog susreta do poslednjeg plesa, evo kako ćemo zajedno
              provesti naš poseban dan.
            </Text>
          </VStack>
        </MotionBox>

        {/* TIMELINE */}

        <VStack gap={0} align="stretch">
          {events.map((event, index) => (
            <ScheduleItem
              key={event.time}
              time={event.time}
              title={event.title}
              description={event.description}
              index={index}
            />
          ))}
        </VStack>

        {/* END */}

        <MotionBox
          textAlign="center"
          mt={4}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <HStack justify="center" gap={4}>
            <Box width="35px" height="1px" bg="#C8BBAA" />

            <Text fontFamily="serif" fontSize="18px" color="#A88A64">
              ✦
            </Text>

            <Box width="35px" height="1px" bg="#C8BBAA" />
          </HStack>
        </MotionBox>
      </Box>
    </Box>
  );
}
