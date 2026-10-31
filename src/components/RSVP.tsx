import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { supabase } from "../superbase";
import cloud from "../assets/cloud.png";

const MotionBox = motion.create(Box);

function FlyingCloud({
  top,
  width,
  duration,
  delay,
  reverse = false,
}: {
  top: string;
  width: string;
  duration: number;
  delay: number;
  reverse?: boolean;
}) {
  return (
    <MotionBox
      position="absolute"
      top={top}
      left={reverse ? "auto" : "-220px"}
      right={reverse ? "-220px" : "auto"}
      width={width}
      pointerEvents="none"
      zIndex={0}
      initial={{ x: 0 }}
      animate={{
        x: reverse ? ["0vw", "-125vw"] : ["0vw", "125vw"],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <img
        src={cloud}
        alt=""
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </MotionBox>
  );
}

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
  const [guests, setGuests] = useState(1);
  const [guestNames, setGuestNames] = useState([""]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGuestCount = (number: number) => {
    setGuests(number);

    setGuestNames((previous) => {
      const updated = [...previous];

      while (updated.length < number) {
        updated.push("");
      }

      return updated.slice(0, number);
    });
  };

  const handleGuestName = (index: number, value: string) => {
    setGuestNames((previous) => {
      const updated = [...previous];
      updated[index] = value;
      return updated;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!attendance) {
      setError("Molimo izaberite da li dolazite.");
      return;
    }

    if (attendance === "yes") {
      const emptyNames = guestNames.some((name) => !name.trim());

      if (emptyNames) {
        setError("Molimo unesite imena svih gostiju.");
        return;
      }
    }

    setLoading(true);

    try {
      const names =
        attendance === "yes" ? guestNames.map((name) => name.trim()) : [];

      const { error: supabaseError } = await supabase.from("rsvps").insert({
        guest_name: attendance === "yes" ? names[0] : "Bez dolaska",
        attendance,
        guests: attendance === "yes" ? guests : 0,
        guest_names: names,
        message: message.trim() || null,
      });

      if (supabaseError) {
        console.error("SUPABASE ERROR:", supabaseError);
        setError("Došlo je do greške. Pokušajte ponovo.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Proverite internet konekciju i pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      minH="100svh"
      bgGradient="linear(to-b, #dceeff, #f4f9ff, #e4f2ff)"
      px={{ base: 5, md: 8 }}
      py={{ base: 20, md: 28 }}
    >
      {/* Flying clouds */}
      <FlyingCloud top="8%" width="140px" duration={48} delay={-10} />

      <FlyingCloud top="25%" width="110px" duration={55} delay={-30} reverse />

      <FlyingCloud top="55%" width="160px" duration={50} delay={-20} />

      <FlyingCloud top="78%" width="125px" duration={58} delay={-35} reverse />

      {/* RSVP CONTENT */}
      <Box maxW="600px" mx="auto" position="relative" zIndex={2}>
        {!submitted ? (
          <>
            {/* HEADER */}
            <MotionBox
              textAlign="center"
              mb={{ base: 10, md: 14 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <VStack gap={4}>
                <Text
                  fontSize="10px"
                  letterSpacing="0.3em"
                  textTransform="uppercase"
                  color="#7898b5"
                >
                  Vaš odgovor
                </Text>

                <Text
                  fontFamily="serif"
                  fontSize={{ base: "34px", md: "48px" }}
                  fontWeight="400"
                  color="#315777"
                  lineHeight="1.2"
                >
                  Da li nam se pridružuješ?
                </Text>

                <Box width="45px" height="1px" bg="#91b4d2" />

                <Text
                  fontSize="13px"
                  lineHeight="1.9"
                  color="#71869a"
                  maxW="420px"
                >
                  Voleli bismo da ovaj poseban dan proslavimo zajedno sa vama.
                  Molimo vas da nam potvrdite svoj dolazak.
                </Text>
              </VStack>
            </MotionBox>

            {/* FORM CARD */}
            <MotionBox
              bg="rgba(255,255,255,0.78)"
              border="1px solid rgba(255,255,255,0.95)"
              borderRadius="28px"
              p={{ base: 5, md: 9 }}
              boxShadow="0 15px 45px rgba(81,125,160,0.10)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit}>
                <VStack gap={7} align="stretch">
                  {/* ATTENDANCE */}
                  <Box>
                    <Text
                      fontSize="10px"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="#587b98"
                      mb={4}
                    >
                      Da li ćeš nam se pridružiti?
                    </Text>

                    <VStack gap={3}>
                      <Button
                        type="button"
                        width="100%"
                        height="58px"
                        borderRadius="14px"
                        border="1px solid"
                        borderColor={
                          attendance === "yes" ? "#6d9cbd" : "#d4e4f1"
                        }
                        bg={attendance === "yes" ? "#dceeff" : "white"}
                        color="#315777"
                        justifyContent="flex-start"
                        px={5}
                        fontSize="12px"
                        fontWeight="500"
                        onClick={() => {
                          setAttendance("yes");
                          setError("");
                        }}
                        _hover={{ bg: "#e4f2ff" }}
                      >
                        ♡　 Da, dolazim!
                      </Button>

                      <Button
                        type="button"
                        width="100%"
                        height="58px"
                        borderRadius="14px"
                        border="1px solid"
                        borderColor={
                          attendance === "no" ? "#6d9cbd" : "#d4e4f1"
                        }
                        bg={attendance === "no" ? "#dceeff" : "white"}
                        color="#587b98"
                        justifyContent="flex-start"
                        px={5}
                        fontSize="12px"
                        fontWeight="400"
                        onClick={() => {
                          setAttendance("no");
                          setError("");
                        }}
                        _hover={{ bg: "#e4f2ff" }}
                      >
                        ☁　 Nažalost, ne mogu da dođem.
                      </Button>
                    </VStack>
                  </Box>

                  {/* NUMBER OF GUESTS */}
                  {attendance === "yes" && (
                    <MotionBox
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.35 }}
                      overflow="hidden"
                    >
                      <Text
                        fontSize="10px"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        color="#587b98"
                        mb={3}
                      >
                        Broj gostiju
                      </Text>

                      <HStack gap={2}>
                        {[1, 2, 3, 4].map((number) => (
                          <Button
                            key={number}
                            type="button"
                            flex="1"
                            height="48px"
                            borderRadius="12px"
                            border="1px solid"
                            borderColor={
                              guests === number ? "#6d9cbd" : "#d4e4f1"
                            }
                            bg={guests === number ? "#dceeff" : "white"}
                            color="#315777"
                            onClick={() => handleGuestCount(number)}
                            _hover={{ bg: "#e4f2ff" }}
                          >
                            {number}
                          </Button>
                        ))}
                      </HStack>

                      {/* GUEST NAMES */}
                      <VStack align="stretch" gap={4} mt={6}>
                        <Text
                          fontSize="10px"
                          letterSpacing="0.2em"
                          textTransform="uppercase"
                          color="#587b98"
                        >
                          Imena gostiju
                        </Text>

                        {guestNames.map((guestName, index) => (
                          <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Text fontSize="11px" color="#7898b5" mb={2}>
                              Gost {index + 1}
                            </Text>

                            <Input
                              value={guestName}
                              onChange={(e) =>
                                handleGuestName(index, e.target.value)
                              }
                              placeholder={`Ime i prezime gosta ${index + 1}`}
                              required
                              border="1px solid #d4e4f1"
                              borderRadius="12px"
                              bg="white"
                              height="48px"
                              px={4}
                              fontSize="13px"
                              color="#315777"
                              _placeholder={{ color: "#a1b3c3" }}
                              _focus={{
                                borderColor: "#789fbe",
                                boxShadow: "none",
                              }}
                            />
                          </MotionBox>
                        ))}
                      </VStack>
                    </MotionBox>
                  )}

                  {/* MESSAGE */}
                  <Box>
                    <Text
                      fontSize="10px"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color="#587b98"
                      mb={3}
                    >
                      Poruka za nas
                      <Text as="span" color="#9aafc1" ml={2}>
                        (opciono)
                      </Text>
                    </Text>

                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ostavi nam neku lepu porukicu..."
                      border="1px solid #d4e4f1"
                      borderRadius="12px"
                      bg="white"
                      minH="110px"
                      resize="vertical"
                      fontSize="13px"
                      color="#315777"
                      _placeholder={{ color: "#a1b3c3" }}
                      _focus={{
                        borderColor: "#789fbe",
                        boxShadow: "none",
                      }}
                    />
                  </Box>

                  {/* ERROR */}
                  {error && (
                    <Text textAlign="center" fontSize="12px" color="#b45e65">
                      {error}
                    </Text>
                  )}

                  {/* SUBMIT */}
                  <Button
                    type="submit"
                    disabled={loading}
                    width="100%"
                    height="55px"
                    borderRadius="14px"
                    bg="#315777"
                    color="white"
                    fontSize="10px"
                    letterSpacing="0.2em"
                    fontWeight="500"
                    _hover={{
                      bg: "#456f94",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                  >
                    {loading ? "Šaljem odgovor..." : "Pošalji odgovor"}
                  </Button>
                </VStack>
              </form>
            </MotionBox>
          </>
        ) : (
          /* SUCCESS MESSAGE */
          <MotionBox
            textAlign="center"
            py={16}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <VStack gap={5}>
              <Text
                fontSize="10px"
                letterSpacing="0.3em"
                textTransform="uppercase"
                color="#7898b5"
              >
                Hvala ti!
              </Text>

              <Text
                fontFamily="serif"
                fontSize={{ base: "36px", md: "48px" }}
                color="#315777"
              >
                {attendance === "yes"
                  ? "Jedva čekamo da se vidimo!"
                  : "Nedostajaćeš nam!"}
              </Text>

              <Box width="45px" height="1px" bg="#91b4d2" />

              <Text fontSize="13px" color="#71869a">
                Tvoj odgovor je uspešno zabeležen.
              </Text>
            </VStack>
          </MotionBox>
        )}
      </Box>
    </Box>
  );
}
