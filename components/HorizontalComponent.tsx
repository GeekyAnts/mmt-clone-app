import React from "react";
import { Box, HStack, ScrollView, Text } from "native-base";
import Image from "next/image";

const List = [
  {
    imageOne: "/images/BuildingLogo.png",
    imageText: "Check the List of States Which Have Eased Travel Restrictions",
  },
  {
    imageOne: "/images/BuildingLogo.png",
    imageText: "Many international destinations open for Indians now",
  },
  {
    imageOne: "/images/BuildingLogo.png",
    imageText:
      "Safe & comfortable hotels for isolation with all 3 meals included",
  },
];
export default function HorizontalComponent(props: any) {
  return (
    <Box mx={40} mt={3}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack alignItems="center" space={10}>
          {List.map((item, index) => {
            return (
              <Box shadow={5} key={index} borderRadius={10} bg="white">
                <HStack space={10} px={3} py={4}>
                  <HStack alignItems="center" space={2}>
                    <Image
                      src={item.imageOne}
                      alt="Vercel Logo"
                      width={48}
                      height={48}
                      // @ts-ignore
                    />
                    <Text
                      textAlign="center"
                      fontWeight="medium"
                      color="coolGray.800"
                      fontSize="sm"
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
