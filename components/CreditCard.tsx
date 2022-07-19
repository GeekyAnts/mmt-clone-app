import React from "react";
import { Box, HStack, Icon, Pressable, Text, VStack } from "native-base";
import Image from "next/image";
import { MaterialIcons } from "@native-base/icons";

const List1 = [
  {
    imageTwo: "/images/card.png",
    imageText: "Credit Card",
    subtext: "Compare & apply for the best credit cards in India.",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
    borderçolor: "#F1F199",
  },
  {
    imageTwo: "/images/person.png",
    imageText: "Travel Loan",
    subtext: "Get upto ₹1 lakh limit & pay back in flexible EMIs.",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
    borderçolor: "#FFCBCA",
  },
  {
    imageTwo: "/images/person2.png",
    imageText: "Personal Loan",
    subtext: "Get approval for upto ₹3000 at low rates.",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
    borderçolor: "#3AE5E0",
  },
];

export default function CreditCard(props: any) {
  return (
    <HStack
      w="100%"
      alignItems="center"
      space={{ lg: 4, md: 3 }}
      flexDirection={{ md: "column", lg: "row" }}
      // px={{ base: 4, md: 0 }}
      justifyContent="space-between"
    >
      {List1.map((item, index) => {
        return (
          <Pressable
            w={{ base: "100%", md: "auto" }}
            key={index}
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
            mt={{ base: 4, md: 0 }}
          >
            <Box
              borderColor={item.borderçolor}
              borderTopWidth={1}
              borderRightWidth={1}
              borderBottomWidth={1}
              borderLeftWidth={20}
              bg="white"
              py={3}
              borderRadius="md"
            >
              <HStack alignItems="center">
                <Image
                  src={item.imageTwo}
                  // @ts-ignore
                  zIndex={1}
                  alt="Vercel Logo"
                  width={48}
                  height={48}
                />
                <VStack space={1}>
                  <Text
                    color="coolGray.800"
                    fontWeight="semibold"
                    fontSize="sm"
                  >
                    {item.imageText}
                  </Text>
                  <Text color="coolGray.400" fontWeight="normal" fontSize="xs">
                    {item.subtext}
                  </Text>
                </VStack>
                <Icon
                  as={item.as}
                  name={item.iconName}
                  color="#008BFF"
                  size={7}
                />
              </HStack>
            </Box>
          </Pressable>
        );
      })}
    </HStack>
  );
}
