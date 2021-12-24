import React from "react";
import {
  Box,
  HStack,
  Radio,
  VStack,
  Text,
  ScrollView,
  Link,
} from "native-base";
import Image from "next/image";

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
  return (
    <HStack
      space={4}
      bg="white"
      shadow={6}
      mx={40}
      height="20%"
      pl={6}
      borderRadius={8}
      alignItems="start"
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
            >
              <HStack
                _dark={{ bg: { base: "customGray", md: "coolGray.800" } }}
                _light={{ bg: "coolGray.50" }}
                borderRadius={6}
                pb={{ base: 0, md: 4 }}
              >
                <VStack flex={1}>
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
                      height="120"
                      width="120"
                      borderRadius="md"
                    />

                    <VStack mt="2" flex={1}>
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
  );
}
