import React from "react";
import { Box, HStack, Icon, Pressable, Text, VStack } from "native-base";
import Image from "next/image";
import { MaterialIcons } from "@expo/vector-icons";

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
    subtext: "Get approval for upto ₹30000 at low rates.",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
    borderçolor: "#3AE5E0",
  },
  {
    imageTwo: "/images/person.png",
    imageText: "Travel Offers",
    subtext: "Get Travel offers for upto ₹30000 ",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
    borderçolor: "#FFCBCA",
  },
];

export default function CreditCard(props: any) {
  return (
    <HStack alignItems="center" width="100%" mx={40} space={7} mt={5}>
      {List1.map((item, index) => {
        return (
          <Pressable
            key={index}
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <Box
              borderColor={item.borderçolor}
              borderTopWidth={1}
              borderRightWidth={1}
              borderBottomWidth={1}
              borderLeftWidth={20}
              bg="white"
              py={3}
            >
              <HStack alignItems="center" space={1}>
                <Image
                  src={item.imageTwo}
                  // @ts-ignore
                  zIndex={1}
                  alt="Vercel Logo"
                  width={48}
                  height={48}
                  // @ts-ignore
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
