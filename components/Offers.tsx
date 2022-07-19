import React from "react";
import {
  Box,
  HStack,
  Radio,
  VStack,
  Text,
  ScrollView,
  Link,
  Pressable,
  Divider,
  Hidden,
  Image,
} from "native-base";
// import Image from "next/image";

const productList = [
  {
    imageUri: "/images/hotel5.jpeg",
    item: "HIGH-VOLTAGE DEALS: End 2021 on a Thrilling Note",
    details:
      "with up to 35% OFF* on flights, hotels, holidays &amp; more + get FREE cancellation.",
    linkText: "T&C Applied",
    OfferText: "Explore More",
  },

  {
    imageUri: "/images/hotel3.jpeg",
    item: "Validate Your Saved Bank Card(s) Now",
    details:
      "from Bangalore. Offer valid on select routes for travel from 16th Dec to 10th Jan.",
    linkText: "T&C Applied",
    OfferText: "Explore More",
  },
  {
    imageUri: "/images/hotel6.jpeg",
    item: "Validate Your Saved Bank Card(s) Now",
    details:
      "Give travel gift cards to your loved ones for their #2022TravelGoals.",
    linkText: "T&C Applied",
    OfferText: "Explore More",
  },
];
export default function Offers() {
  const [tabName, setTabName] = React.useState("All Offers");
  return (
    <VStack w="100%" bg="white" shadow={6} borderRadius={10}>
      <HStack
        w="100%"
        borderTopRadius={10}
        px={6}
        alignItems="center"
        space={4}
        pt={{ base: 2, md: 5 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight={{ base: "xl", md: "extraBold" }}
          color="coolGray.700"
        >
          Offers
        </Text>
        <HStack
          px={{ base: 4, md: 4 }}
          pt={{ base: 0, md: 2 }}
          space={{ base: 0, md: 4 }}
          borderBottomWidth={1}
          borderBottomColor="coolGray.300"
          w={{ base: "100%", md: "auto" }}
          flexWrap="wrap"
        >
          <Pressable
            px="2"
            // @ts-ignore
            onPress={() => {
              setTabName("All Offers");
            }}
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              _light={{
                color: tabName == "All Offers" ? "#0A8CFF" : "#4A4A4A",
              }}
              _dark={{
                color: tabName == "All Offers" ? "coolGray.50" : "coolGray.400",
              }}
            >
              All Offers
            </Text>
            <Box mt="2">
              <Divider
                py="0.5"
                _light={{
                  bg: {
                    base: tabName == "All Offers" ? "#0A8CFF" : "white",
                    md: tabName == "All Offers" ? "#0A8CFF" : "white",
                  },
                }}
                _dark={{
                  bgColor: {
                    base:
                      tabName == "All Offers" ? "primary.700" : "coolGray.900",
                  },
                }}
              />
            </Box>
          </Pressable>
          <Pressable
            px="2"
            //@ts-ignore
            onPress={() => {
              setTabName("Bank Offers");
            }}
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              _light={{
                color: tabName == "Bank Offers" ? "#0A8CFF" : "#4A4A4A",
              }}
              _dark={{
                color:
                  tabName == "Bank Offers" ? "coolGray.50" : "coolGray.400",
              }}
            >
              Bank Offers
            </Text>
            <Box mt="2">
              <Divider
                py="0.5"
                _light={{
                  bg: {
                    base: tabName == "Bank Offers" ? "#0A8CFF" : "white",
                    md: tabName == "Bank Offers" ? "#0A8CFF" : "white",
                  },
                }}
                _dark={{
                  bgColor: {
                    base:
                      tabName == "Bank Offers" ? "primary.700" : "coolGray.900",
                  },
                }}
              />
            </Box>
          </Pressable>
          <Pressable
            //@ts-ignore
            onPress={() => {
              setTabName("Domastic Flight");
            }}
            px="2"
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              _light={{
                color: tabName == "Domastic Flight" ? "#0A8CFF" : "#4A4A4A",
              }}
              _dark={{
                color:
                  tabName == "Domastic Flight" ? "coolGray.50" : "coolGray.400",
              }}
            >
              Domestic Flights
            </Text>
            <Box mt="2">
              <Divider
                py="0.5"
                _light={{
                  bg: {
                    base: tabName == "Domastic Flight" ? "#0A8CFF" : "white",
                    md: tabName == "Domastic Flight" ? "#0A8CFF" : "white",
                  },
                }}
                _dark={{
                  bgColor: {
                    base:
                      tabName == "Domastic Flight"
                        ? "primary.700"
                        : "coolGray.900",
                  },
                }}
              />
            </Box>
          </Pressable>
          <Pressable
            px="2"
            //@ts-ignore
            onPress={() => {
              setTabName("International Flight");
            }}
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              _light={{
                color:
                  tabName == "International Flight" ? "#0A8CFF" : "#4A4A4A",
              }}
              _dark={{
                color:
                  tabName == "International Flight"
                    ? "coolGray.50"
                    : "coolGray.400",
              }}
            >
              International Flight
            </Text>
            <Box mt="2">
              <Divider
                py="0.5"
                _light={{
                  bg: {
                    base:
                      tabName == "International Flight" ? "#0A8CFF" : "white",
                    md: tabName == "International Flight" ? "#0A8CFF" : "white",
                  },
                }}
                _dark={{
                  bg:
                    tabName == "International Flight"
                      ? "primary.700"
                      : "coolGray.900",
                }}
              />
            </Box>
          </Pressable>
          <Hidden from="base" till="md">
            <Pressable
              px="2"
              //@ts-ignore
              onPress={() => {
                setTabName("More");
              }}
            >
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="medium"
                _light={{
                  color: tabName == "More" ? "#0A8CFF" : "#4A4A4A",
                }}
                _dark={{
                  color: tabName == "More" ? "coolGray.50" : "coolGray.400",
                }}
              >
                More
              </Text>
              <Box mt="2">
                <Divider
                  py="0.5"
                  _light={{
                    bg: {
                      base: tabName == "More" ? "#0A8CFF" : "white",
                      md: tabName == "More" ? "#0A8CFF" : "white",
                    },
                  }}
                  _dark={{
                    bg: tabName == "More" ? "primary.700" : "coolGray.900",
                  }}
                />
              </Box>
            </Pressable>
          </Hidden>
        </HStack>
      </HStack>
      {tabName == "All Offers" ||
      "Bank Offers" ||
      "Domestic Flight" ||
      "International Flight" ||
      "More" ? (
        <HStack
          w="100%"
          bg="white"
          space={4}
          px={4}
          alignItems="start"
          borderBottomRadius={10}
        >
          {/* @ts-ignore */}
          <ScrollView
            width="100%"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {productList.map((item, index) => {
              return (
                <Box
                  _dark={{ bg: "coolGray.800" }}
                  _light={{ bg: "white" }}
                  px={{ base: 4, md: 0 }}
                  py={{ base: 8, md: 2 }}
                  key={index}
                  borderRadius={6}
                  my={8}
                  mx={4}
                  //w={{ base: "420", md: "auto" }}
                >
                  <HStack
                    _dark={{ bg: { base: "customGray", md: "coolGray.800" } }}
                    _light={{ bg: "coolGray.50" }}
                    borderRadius={6}
                    pb={{ base: 0, md: 4 }}
                    //w={{ base: "420", md: "auto" }}
                  >
                    <VStack>
                      <HStack
                        space="3"
                        alignItems="center"
                        px="3"
                        py="0"
                        borderRadius="4"
                      >
                        <Image
                          src={item.imageUri}
                          alt="Alternate Text"
                          height={{ base: "85", md: "120" }}
                          width={{ base: "85", md: "120" }}
                          //@ts-ignore
                          borderRadius="md"
                        />

                        <VStack mt="2" w={{ base: "300", md: "auto" }}>
                          <Text
                            fontSize="md"
                            fontWeight="bold"
                            _dark={{ color: "coolGray.50" }}
                            _light={{ color: "coolGray.800" }}
                          >
                            {item.item}
                          </Text>
                          <Text
                            fontSize="sm"
                            _dark={{ color: "coolGray.400" }}
                            _light={{ color: "coolGray.500" }}
                            maxWidth="80%"
                          >
                            {item.details}
                          </Text>
                        </VStack>
                      </HStack>
                      <HStack
                        flex={1}
                        mx={{ md: 3, base: 3 }}
                        alignItems="center"
                        justifyContent="space-between"
                        pt={{ base: 3, md: 4 }}
                        mb={2}
                        borderRadius="4"
                      >
                        <Text
                          flex={1}
                          fontSize="xs"
                          _dark={{ color: "coolGray.400" }}
                          _light={{ color: "coolGray.800" }}
                        >
                          {item.linkText}
                        </Text>
                        <Link
                          mt={1}
                          href="https://nativebase.io"
                          _text={{
                            _dark: { color: "emerald.500" },
                            _light: { color: "emerald.600" },
                            fontSize: "xs",
                            fontWeight: "bold",
                            textDecorationLine: "none",
                          }}
                        >
                          {item.OfferText}
                        </Link>
                      </HStack>
                    </VStack>
                  </HStack>
                </Box>
              );
            })}
          </ScrollView>
        </HStack>
      ) : null}
    </VStack>
  );
}
