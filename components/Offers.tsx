import React from "react";
import {
  Box,
  HStack,
  Radio,
  VStack,
  Text,
  Image,
  ScrollView,
} from "native-base";

const reasonList = [
  "I want to change my phone number",
  "I have changed my mind",
  "I have purchased the product elsewhere",
  "Expected delivery time is very long",
  "I want to change address for the order",
  "I want to cancel due to product quality issues",
];
const productList = [
  {
    orderId: "#9726895435345",
    imageUri: "https://wallpaperaccess.com/full/317501.jpg",
    item: "HIGH-VOLTAGE DEALS: End 2021 on a Thrilling Note",
    details:
      "with up to 35% OFF* on flights, hotels, holidays &amp; more + get FREE cancellation.",
    size: "Size : Medium",
    delivery: "Delivery by Mon 27",
    rupeeIcon: "rupee",
    amount: "₹ 1635.00",
    discount: "5%off",
    deleteIcon: "delete-outline",
  },

  {
    orderId: "#9726895435457",
    imageUri: "https://wallpaperaccess.com/full/317501.jpg",
    item: "Validate Your Saved Bank Card(s) Now",
    details:
      "with up to 35% OFF* on flights, hotels, holidays &amp; more + get FREE cancellation.",
    size: "Size : Medium",
    delivery: "Delivery by Mon 27",
    rupeeIcon: "rupee",
    amount: "₹ 3535.00",
    discount: "5%off",
    deleteIcon: "delete-outline",
  },
  {
    orderId: "#9726895435457",
    imageUri: "https://wallpaperaccess.com/full/317501.jpg",
    item: "Validate Your Saved Bank Card(s) Now",
    details: "Skin care, body kit",
    size: "Size : Medium",
    delivery: "Delivery by Mon 27",
    rupeeIcon: "rupee",
    amount: "₹ 3535.00",
    discount: "5%off",
    deleteIcon: "delete-outline",
  },
];
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
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {productList.map((item, index) => {
          return (
            <Box
              mt={{ md: 8, base: 4 }}
              _dark={{ bg: "coolGray.800" }}
              _light={{ bg: "white" }}
              px={{ base: 4, md: 0 }}
              py={{ base: 8, md: 0 }}
              key={index}
              shadow={4}
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
                {/* <VStack justifyContent="center" ml={4} mt={{ base: 0, md: 4 }}>
                  <Radio.Group name="RadioCard">
                    <Radio
                      value="RadioCards"
                      _light={{
                        // @ts-ignore
                        _checked: {
                          _icon: { color: "primary.900" },
                          borderColor: "primary.900",
                        },
                        borderColor: "coolGray.400",
                        _text: { color: "coolGray.500" },
                      }}
                      _dark={{
                        // @ts-ignore
                        _checked: {
                          _icon: { color: "primary.700" },
                          borderColor: "primary.700",
                        },
                        borderColor: "coolGray.400",
                        background: {
                          base: "customGray",
                          md: "coolGray.800",
                        },
                        _text: { color: "coolGray.300" },
                      }}
                      _text={{ fontSize: "sm" }}
                      label="radio"
                    />
                  </Radio.Group>
                </VStack> */}
                <VStack flex={1}>
                  <HStack
                    space="3"
                    alignItems="center"
                    px="3"
                    py="0"
                    mb={{ md: 0, base: 3 }}
                    borderRadius="4"
                  >
                    {/* <Image
                      src=
                      alt="Vercel Logo"
                      width={48}
                      height={48}
                      // @ts-ignore
                    /> */}
                    <Image
                      source={{ uri: item.imageUri }}
                      alt="Alternate Text"
                      height="24"
                      width="20"
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
                        bg="yellow.500"
                      >
                        {item.details}
                      </Text>
                      {/* <Text
                        fontSize="sm"
                        _dark={{ color: "coolGray.400" }}
                        _light={{ color: "coolGray.500" }}
                      >
                        {item.size}
                      </Text> */}
                      {/* <Text
                        fontSize="md"
                        fontWeight="semibold"
                        _dark={{ color: "coolGray.100" }}
                        _light={{ color: "coolGray.700" }}
                        mt="1"
                      >
                        {item.amount}
                      </Text> */}
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
                      T&amp;C's Apply
                    </Text>
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      _dark={{ color: "emerald.500" }}
                      _light={{ color: "emerald.600" }}
                      ml="2"
                    >
                      Explore Now
                    </Text>
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
