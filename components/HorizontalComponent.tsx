import React from "react";
import { Box, HStack, ScrollView, Text } from "native-base";
import Image from "next/image";

const List = [
  {
    imageOne: "/images/BuildingLogo.png",
    imageText: "Check the List of States Which Have Eased Restrictions",
  },
  {
    imageOne: "/images/BuildingLogo.png",
    imageText: "Many international destinations open for Indians now",
  },
  {
    imageOne: "/images/BuildingLogo.png",
    imageText: "Safe & comfortable hotels for isolation with all 3 meals",
  },
];
export default function HorizontalComponent(props: any) {
  return (
    <Box mt={3} w="100%">
      {/* @ts-ignore */}
      <ScrollView
        w="100%"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <HStack
          w="100%"
          space={4}
          flexDirection={{ base: "column", lg: "row", md: "row" }}
        >
          {List.map((item, index) => {
            return (
              <Box
                key={index}
                borderRadius={10}
                bg="white"
                w={{ base: "100%", md: "auto" }}
                height={24}
              >
                <HStack w={{ base: "100%", md: "auto" }} px={6} py={4}>
                  <HStack
                    w={{ base: "100%", md: "auto" }}
                    alignItems="center"
                    space={3}
                  >
                    <Image
                      src={item.imageOne}
                      alt="Vercel Logo"
                      width={48}
                      height={48}
                    />
                    <Text
                      noOfLines={2}
                      // textAlign="center"
                      fontWeight="medium"
                      color="coolGray.800"
                      fontSize="sm"
                      flexGrow={1}
                      width="64"
                    >
                      {item.imageText}
                    </Text>
                  </HStack>
                </HStack>
              </Box>
            );
          })}
        </HStack>
      </ScrollView>
    </Box>
  );
}
