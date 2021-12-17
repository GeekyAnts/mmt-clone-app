import React, { useState } from "react";
import {
  Box,
  Center,
  Checkbox,
  CheckIcon,
  Divider,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Select,
  Text,
  VStack,
} from "native-base";
import {
  AntDesign,
  EvilIcons,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Image from "next/image";
const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};
function Header(props: any) {
  let [service, setService] = React.useState("");
  const optionList = [
    {
      iconName: "plane",
      iconText: "Flight",
      as: SimpleLineIcons,
    },
    {
      iconName: "md-business",
      iconText: "Hotels",
      as: Ionicons,
    },
    {
      iconName: "home-city-outline",
      iconText: "HomeStays",
      as: MaterialCommunityIcons,
    },
    {
      iconName: "airballoon-outline",
      iconText: "Holiday Packages",
      as: MaterialCommunityIcons,
    },
    {
      iconName: "train-outline",
      iconText: "Trains",
      as: Ionicons,
    },
    {
      iconName: "bus-outline",
      iconText: "Buses",
      as: Ionicons,
    },
    {
      iconName: "car",
      iconText: "Cabs",
      as: Ionicons,
    },
    {
      iconName: "passport",
      iconText: "Visa",
      as: MaterialCommunityIcons,
    },
  ];
  return (
    <HStack
      alignItems="center"
      px={48}
      py={4}
      bg="white"
      justifyContent="space-between"
    >
      <HStack alignItems="center" space={5}>
        <Image
          src="/images/mmtLogo.png"
          alt="MakeMyTrip Logo"
          width={72}
          height={32}
        />
        {optionList.map((item, index) => {
          return (
            <VStack key={index} alignItems="center" justifyContent="center">
              <Icon size="5" as={item.as} name={item.iconName} />
              <Text fontSize="xs" color="coolGray.500" textAlign="center">
                {item.iconText}
              </Text>
            </VStack>
          );
        })}
      </HStack>
      <HStack>
        <VStack alignItems="center">
          <Box width={20}>
            <Select
              selectedValue={service}
              dropdownOpenIcon={<Icon as={Ionicons} name="home" />}
              borderColor="white"
              placeholder="INR"
              _selectedItem={{
                bg: "red.200",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="INR-Indian Rupee" value="currency" />
              <Select.Item label="USD-US Dollor" value="currency" />
              <Select.Item label="GBP-British Pound" value="currency" />
              <Select.Item label="YN-Japanese YEN" value="currency" />
              <Select.Item label="EUR-European Euro" value="currency" />
              <Select.Item label="ASD-Austrailian Dollor" value="currency" />
            </Select>
          </Box>
        </VStack>
        <Pressable>
          <HStack space={2} alignItems="center">
            <Image
              src="/images/LoginLogo.png"
              alt="Vercel Logo"
              width={40}
              height={40}
            />
            <Text color="coolGray.800" fontSize="sm" fontWeight="semibold">
              Login or Create Account
            </Text>
          </HStack>
        </Pressable>
      </HStack>
    </HStack>
  );
}
function Search(props: any) {
  const information = [
    {
      mainText: "CITY, AREA OR PROPERTY",
      subText: "Goa,India",
    },
    {
      mainText: "CHECK-IN:",
      subText: "Thu, 16 Dec 2021",
    },
    {
      mainText: "CHECK-OUT:",
      subText: "Fri, 17 Dec 2021",
    },
    {
      mainText: "ROOMS & GUESTS",
      subText: "1 Room, 2 Adults",
    },
  ];
  return (
    <HStack
      bg="#09223D"
      px={48}
      py={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack space={4} alignItems="center">
        {information.map((item, index) => {
          return (
            <HStack key={index}>
              <Pressable bg="coolGray.600" px={2} py={1} borderRadius="sm">
                <VStack>
                  <Text fontSize="xs" color="#008CFF" fontWeight="medium">
                    {item.mainText}
                  </Text>
                  <Text fontSize="md" color="white" fontWeight="normal">
                    {item.subText}
                  </Text>
                </VStack>
              </Pressable>
            </HStack>
          );
        })}
      </HStack>
      <HStack>
        <NativeBaseProvider config={config}>
          <Pressable
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <Box
              height={12}
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
              width={32}
              bg={{
                // @ts-ignore
                linearGradient: {
                  colors: ["#008CFF", "#0a488a"],
                  start: [0, 0],
                  end: [0, 0],
                },
              }}
            >
              <Text color="white" fontWeight="medium" fontSize="md">
                SEARCH
              </Text>
            </Box>
          </Pressable>
        </NativeBaseProvider>
      </HStack>
    </HStack>
  );
}
function HotelBanner(props: any) {
  return (
    <Image
      position="absolute"
      zIndex="-1"
      src="/images/Hotel3.jpeg"
      alt="Alternate Text"
      size="xl"
      width="100%"
      height={500}
    />
  );
}
export default function Hotel(props: any) {
  return (
    <ScrollView>
      <Header />
      <Search />
      <HotelBanner />
    </ScrollView>
  );
}
