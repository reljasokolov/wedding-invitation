import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const questions = [
  {
    question: "U koliko sati treba da stignem?",
    answer:
      "Molimo vas da stignete oko 15 minuta pre početka ceremonije, kako bismo svi bili spremni i udobno smešteni pre nego što počnemo.",
  },
  {
    question: "Da li postoji dress code?",
    answer:
      "Voleli bismo da se obučete elegantno za ovu posebnu priliku. Zamislite lagan, elegantan i bezvremenski stil.",
  },
  {
    question: "Da li mogu da povedem pratnju?",
    answer:
      "Na pozivnici će biti naznačen broj mesta rezervisanih za vas. Ukoliko imate bilo kakvih pitanja, slobodno nam se javite.",
  },
  {
    question: "Da li su deca pozvana?",
    answer:
      "Volimo vaše mališane. Molimo vas da proverite pozivnicu ili nam se javite ukoliko niste sigurni da li su deca uključena.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <Box borderTop="1px solid" borderColor="#CFC3B2">
      <Box
        as="button"
        width="100%"
        py={6}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        textAlign="left"
        cursor="pointer"
        bg="transparent"
        border="none"
        onClick={onClick}
        _hover={{
          color: "#A88A64",
        }}
      >
        <Text
          fontFamily="serif"
          fontSize={{
            base: "18px",
            md: "21px",
          }}
          fontWeight="400"
          color="inherit"
        >
          {question}
        </Text>

        <Text fontSize="22px" fontWeight="300" color="#A88A64" lineHeight="1">
          {isOpen ? "−" : "+"}
        </Text>
      </Box>

      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionBox
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            overflow="hidden"
          >
            <Text
              pb={7}
              maxW="650px"
              fontSize="11px"
              lineHeight="1.9"
              color="#756D63"
            >
              {answer}
            </Text>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box bg="#EAE3D8" px={{ base: 6, md: 12 }} py={{ base: 24, md: 32 }}>
      <Box maxW="850px" mx="auto">
        {/* HEADER */}

        <MotionBox
          textAlign="center"
          mb={{ base: 14, md: 20 }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <VStack gap={4}>
            <Text
              fontSize="9px"
              letterSpacing="0.4em"
              textTransform="uppercase"
              color="#82796E"
            >
              Dobro je znati
            </Text>

            <Text
              fontFamily="serif"
              fontSize={{
                base: "40px",
                md: "54px",
              }}
              fontWeight="400"
              color="#302C27"
            >
              Često postavljana pitanja
            </Text>

            <Box width="40px" height="1px" bg="#A88A64" />

            <Text fontSize="11px" lineHeight="1.9" color="#756D63" maxW="430px">
              Nekoliko odgovora na pitanja koja možda imate pre nego što nam se
              pridružite.
            </Text>
          </VStack>
        </MotionBox>

        {/* QUESTIONS */}

        <MotionBox
          borderBottom="1px solid"
          borderColor="#CFC3B2"
          initial={{
            opacity: 0,
            y: 25,
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
          {questions.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleQuestion(index)}
            />
          ))}
        </MotionBox>

        {/* CONTACT */}

        <MotionBox
          textAlign="center"
          mt={14}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <HStack justify="center" gap={4}>
            <Box width="30px" height="1px" bg="#C8BBAA" />

            <Text fontFamily="serif" fontSize="17px" color="#A88A64">
              ✦
            </Text>

            <Box width="30px" height="1px" bg="#C8BBAA" />
          </HStack>

          <Text mt={5} fontSize="10px" color="#82796E">
            Imate još neko pitanje? Slobodno nam se javite.
          </Text>
        </MotionBox>
      </Box>
    </Box>
  );
}
