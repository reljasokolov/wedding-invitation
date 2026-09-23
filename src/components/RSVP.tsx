import { Box, Button, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "../superbase";

const MotionBox = motion(Box);

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Molimo uvedite ime.");
      return;
    }

    if (!attendance) {
      setError("Molimo uvedite da li cete prisustvovati sa nama.");
      return;
    }

    setLoading(true);

    const { error: supabaseError } = await supabase.from("rsvps").insert({
      guest_name: name.trim(),
      attendance,
      guests: attendance === "yes" ? guests : 0,
      message: message.trim() || null,
    });

    setLoading(false);

    if (supabaseError) {
      console.error("SUPABASE ERROR:", supabaseError);
      setError(supabaseError.message);
      return;
    }

    setSubmitted(true);
  };

  return (
    <Box bg="#F4F0E8" px={{ base: 6, md: 12 }} py={{ base: 24, md: 32 }}>
      <Box maxW="650px" mx="auto">
        {!submitted ? (
          <>
            {/* HEADER */}

            <MotionBox
              textAlign="center"
              mb={14}
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
                  Vaš odgovor
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
                  Da li ćete nam se pridružiti?
                </Text>

                <Box width="40px" height="1px" bg="#A88A64" />

                <Text
                  fontSize="11px"
                  lineHeight="1.9"
                  color="#756D63"
                  maxW="430px"
                >
                  Voleli bismo da ovaj poseban dan proslavimo sa vama. Molimo
                  vas da nam potvrdite da li ćete nam se pridružiti.
                </Text>
              </VStack>
            </MotionBox>

            {/* FORM */}

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
            >
              <form onSubmit={handleSubmit}>
                <VStack gap={7}>
                  {/* NAME */}

                  <Box width="100%">
                    <Text
                      fontSize="9px"
                      letterSpacing="0.25em"
                      textTransform="uppercase"
                      color="#756D63"
                      mb={2}
                    >
                      Ime
                    </Text>

                    <Input
                      name="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Uvedite ime"
                      required
                      border="none"
                      borderBottom="1px solid"
                      borderColor="#C8BBAA"
                      borderRadius="0"
                      px={0}
                      height="48px"
                      bg="transparent"
                      fontSize="13px"
                      color="#302C27"
                      _placeholder={{
                        color: "#A9A095",
                      }}
                      _focus={{
                        borderColor: "#A88A64",
                        boxShadow: "none",
                      }}
                    />
                  </Box>

                  {/* ATTENDANCE */}

                  <Box width="100%">
                    <Text
                      fontSize="9px"
                      letterSpacing="0.25em"
                      textTransform="uppercase"
                      color="#756D63"
                      mb={4}
                    >
                      Da li ćete nam se pridružiti?
                    </Text>

                    <VStack align="stretch" gap={3}>
                      <Button
                        type="button"
                        variant="outline"
                        borderRadius="0"
                        borderColor={
                          attendance === "yes" ? "#A88A64" : "#C8BBAA"
                        }
                        bg={attendance === "yes" ? "#E8DED0" : "transparent"}
                        justifyContent="flex-start"
                        height="52px"
                        fontSize="10px"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        fontWeight="400"
                        onClick={() => setAttendance("yes")}
                        _hover={{
                          borderColor: "#A88A64",
                        }}
                      >
                        Da, dolazim!
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        borderRadius="0"
                        borderColor={
                          attendance === "no" ? "#A88A64" : "#C8BBAA"
                        }
                        bg={attendance === "no" ? "#E8DED0" : "transparent"}
                        justifyContent="flex-start"
                        height="52px"
                        fontSize="10px"
                        letterSpacing="0.2em"
                        textTransform="uppercase"
                        fontWeight="400"
                        onClick={() => setAttendance("no")}
                        _hover={{
                          borderColor: "#A88A64",
                        }}
                      >
                        Izvinite, ali nažalost neću doći.
                      </Button>
                    </VStack>
                  </Box>

                  {/* NUMBER OF GUESTS */}

                  {attendance === "yes" && (
                    <Box width="100%">
                      <Text
                        fontSize="9px"
                        letterSpacing="0.25em"
                        textTransform="uppercase"
                        color="#756D63"
                        mb={4}
                      >
                        Broj gostiju
                      </Text>

                      <VStack align="stretch" gap={3}>
                        {[1, 2, 3, 4].map((number) => (
                          <Button
                            key={number}
                            type="button"
                            variant="outline"
                            borderRadius="0"
                            borderColor={
                              guests === number ? "#A88A64" : "#C8BBAA"
                            }
                            bg={guests === number ? "#E8DED0" : "transparent"}
                            justifyContent="flex-start"
                            height="48px"
                            fontSize="10px"
                            letterSpacing="0.2em"
                            textTransform="uppercase"
                            fontWeight="400"
                            onClick={() => setGuests(number)}
                            _hover={{
                              borderColor: "#A88A64",
                            }}
                          >
                            {number} {number === 1 ? "Gost" : "Gosta"}
                          </Button>
                        ))}
                      </VStack>
                    </Box>
                  )}

                  {/* MESSAGE */}

                  <Box width="100%">
                    <Text
                      fontSize="9px"
                      letterSpacing="0.25em"
                      textTransform="uppercase"
                      color="#756D63"
                      mb={2}
                    >
                      Poruka za nas
                    </Text>

                    <Textarea
                      name="message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Ostavi nam kratku porukicu..."
                      border="1px solid"
                      borderColor="#C8BBAA"
                      borderRadius="0"
                      bg="transparent"
                      minH="130px"
                      resize="vertical"
                      fontSize="13px"
                      color="#302C27"
                      _placeholder={{
                        color: "#A9A095",
                      }}
                      _focus={{
                        borderColor: "#A88A64",
                        boxShadow: "none",
                      }}
                    />
                  </Box>

                  {/* ERROR */}

                  {error && (
                    <Text
                      width="100%"
                      textAlign="center"
                      fontSize="11px"
                      color="#9B5C51"
                    >
                      {error}
                    </Text>
                  )}

                  {/* SUBMIT */}

                  <Button
                    type="submit"
                    disabled={loading}
                    borderRadius="0"
                    bg="#302C27"
                    color="#F8F4EC"
                    width="100%"
                    height="56px"
                    fontSize="9px"
                    letterSpacing="0.3em"
                    textTransform="uppercase"
                    fontWeight="400"
                    _hover={{
                      bg: "#A88A64",
                    }}
                  >
                    {loading ? "Sending..." : "Posalji"}
                  </Button>
                </VStack>
              </form>
            </MotionBox>
          </>
        ) : (
          <MotionBox
            textAlign="center"
            py={20}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <VStack gap={5}>
              <Text
                fontSize="10px"
                letterSpacing="0.4em"
                textTransform="uppercase"
                color="#82796E"
              >
                Hvala ti
              </Text>

              <Text
                fontFamily="serif"
                fontSize={{
                  base: "40px",
                  md: "54px",
                }}
                color="#302C27"
              >
                Jedva cekamo da te vidimo.
              </Text>

              <Box width="40px" height="1px" bg="#A88A64" />

              <Text fontSize="11px" color="#756D63">
                Tvoj odgovor je stigao.
              </Text>
            </VStack>
          </MotionBox>
        )}
      </Box>
    </Box>
  );
}
