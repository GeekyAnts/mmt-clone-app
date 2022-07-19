import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";

import { useRouter } from "next/router";

const List = [
  {
    imageOne: "/images/goa.jpeg",
    mainText: "Discover by Brands",
    linkText: "Taj,Marriot,Oberoi,Hyatt & More",
  },
  {
    imageOne: "/images/goa.jpeg",
    mainText: "Luxe Villas",
    linkText: "Premium Villas with Superlative Experience",
  },
  {
    imageOne: "/images/goa.jpeg",
    mainText: "Discover by Themes",
    linkText: "Explore Luxury Stays based on your interest",
  },
];

export default function MMTLuxe(props: any) {
  const router = useRouter();
  return (
    <Pressable
      //@ts-ignore
      onPress={() => {
        console.log("hello");
      }}
      w="100%"
    >
      <Box
        px={{ base: 4, md: 4 }}
        bg="coolGray.100"
        p={4}
        flex={1}
        borderRadius={10}
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack space={{ md: 2 }} width={{ base: "100%", md: "40%" }}>
            <Text color="coolGray.800" fontSize={10} fontWeight="extrabold">
              INTRODUCING
            </Text>
            <Text color="#E1BE5A" fontWeight="bold" fontSize="2xl">
              MYT Luxe
            </Text>
            <Text color="#E1BE5A" fontWeight="bold" fontSize="2xl">
              Selections
            </Text>
            <Text fontSize="sm" fontWeight="bold" color="coolGray.800">
              Escape to the epitome of luxury, packed with signature amenities
            </Text>
            <Button
              width="30%"
              variant="unstyled"
              bg="#E1BE5A"
              rounded="full"
              //@ts-ignore
              onPress={() => {
                console.log("hello");
              }}
              my={{ base: 1, md: 0 }}
            >
              Learn More
            </Button>
          </VStack>
          <HStack
            alignItems="center"
            space={5}
            width={{ base: "100%", md: "60%" }}
            flexWrap="wrap"
            mt={{ base: 2, md: 0 }}
          >
            {List.map((item, index) => {
              return (
                <Box
                  width={{ base: "100%", md: 200 }}
                  // width={{ base: "350", md: 200 }}
                  height="250"
                  bg="white"
                  key={index}
                  borderRadius={10}
                  shadow={4}
                >
                  <VStack
                    alignItems="center"
                    justifyContent="center"
                    space={1}
                    width={{ base: "100%", md: 200 }}
                  >
                    <Pressable
                      // @ts-ignore
                      onPress={() => {
                        router.push("/HotelList");
                      }}
                      width={{ base: "100%", md: 200 }}
                    >
                      <Image
                        borderTopRadius={10}
                        src={item.imageOne}
                        alt="Vercel Logo"
                        // width={{ base: "350", md: 200 }}
                        width={{ base: "100%", md: 200 }}
                        height="150"
                      />
                    </Pressable>
                    <Text fontSize="md" fontWeight="bold" color="coolGray.800">
                      {item.mainText}
                    </Text>
                    <Text
                      color="coolGray.800"
                      fontSize="xs"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      {item.linkText}
                    </Text>
                  </VStack>
                </Box>
              );
            })}
          </HStack>
        </HStack>
      </Box>
    </Pressable>
  );
}
