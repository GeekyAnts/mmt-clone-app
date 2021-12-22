import React from "react";
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  NativeBaseProvider,
  Radio,
  Pressable,
} from "native-base";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import CreditCard from "../components/CreditCard";
import DestinationList from "../components/DestinationList";

import Hyperlink from "../components/Hyperlink";

import Offers from "../components/Offers";
const fareType = [
  { type: "Regular Normal Fares", bgColor: "#80C6FF" },
  { type: "Armed Forces Fares", bgColor: "#F2F2F2" },
  { type: "Collage Student Fares", bgColor: "#F2F2F2" },
  { type: "Senior Citizen Fares", bgColor: "#F2F2F2" },
  { type: "Double Seat Fares", bgColor: "#F2F2F2" },
];
const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

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
const Searches = [
  {
    from: "Mumbai",
    to: "Patna",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
  },
  {
    from: "Delhi",
    to: "Goa",
    iconName: "arrow-right-alt",
    as: MaterialIcons,
  },
];

export default function Flights(props: any) {
  return (
    <NativeBaseProvider config={config}>
      <Box
        h="23%"
        shadow={4}
        bg={{
          linearGradient: {
            colors: ["#071323", "#144478"],
            start: [0, 0],
            end: [0, 1],
          },
        }}
      >
        <VStack>
          <Header />
          <Box
            shadow="4"
            position="absolute"
            top={24}
            mx={20}
            borderRadius={10}
            zIndex={1}
            bg="white"
            alignSelf="center"
            alignItems="center"
            py="4"
            flexGrow={1}
            width="40%"
          >
            <HStack justifyContent="space-evenly" flexGrow={1} width="100%">
              {optionList.map((item, index) => {
                return (
                  <VStack
                    key={index}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon size="5" as={item.as} name={item.iconName} />
                    <Text fontSize="xs" color="coolGray.500" textAlign="center">
                      {item.iconText}
                    </Text>
                  </VStack>
                );
              })}
            </HStack>
          </Box>
          <Box
            bgColor="white"
            height="64"
            width="80%"
            alignSelf="center"
            borderRadius="md"
            zIndex="-1"
            px={8}
            mt={20}
          >
            <VStack>
              <HStack justifyContent="space-between">
                <Radio.Group
                  defaultValue="1"
                  size="sm"
                  name="exampleGroup"
                  flexDirection="row"
                  pt={10}
                >
                  <Radio
                    _text={{
                      mx: 2,
                      fontWeight: "bold",
                      fontSize: "xs",
                    }}
                    colorScheme="green"
                    value="1"
                    icon={<Icon as={<MaterialCommunityIcons name="alien" />} />}
                    my={1}
                  >
                    ONEWAY
                  </Radio>
                  <Radio
                    _text={{
                      mx: 2,
                      fontWeight: "bold",
                      fontSize: "xs",
                    }}
                    colorScheme="red"
                    value="2"
                    icon={<Icon as={<MaterialCommunityIcons name="fire" />} />}
                    my={1}
                  >
                    ROUNDTRIP
                  </Radio>
                  <Radio
                    colorScheme="warning"
                    _text={{
                      mx: 2,
                      fontWeight: "bold",
                      fontSize: "xs",
                    }}
                    value="3"
                    icon={
                      <Icon
                        as={<MaterialCommunityIcons name="exclamation" />}
                      />
                    }
                    my={1}
                  >
                    MULTICITY
                  </Radio>
                </Radio.Group>
                <HStack justifyContent="center" alignItems="center" pt={10}>
                  <Text fontWeight="bold" fontSize="xs" textAlign="center">
                    International Flights |
                  </Text>

                  <Text fontWeight="bold" fontSize="xs" color="#4A4A4A">
                    {" "}
                    Domestic Flights |
                  </Text>
                </HStack>
              </HStack>
              <Box borderRadius="lg" borderWidth="1" borderColor="coolGray.500">
                <HStack>
                  <HStack
                    width="50%"
                    borderRightWidth="1"
                    borderColor="coolGray.500"
                  >
                    <VStack
                      borderRightWidth="1"
                      borderColor="coolGray.500"
                      px="5"
                    >
                      <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                        FROM
                      </Text>
                      <Text color="black" fontSize="lg" fontWeight="bold">
                        Delhi
                      </Text>
                      <Text color="black" fontSize="xs" fontWeight="bold">
                        DEL,Delhi Airport India
                      </Text>
                    </VStack>
                    <VStack px={5}>
                      <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                        TO
                      </Text>
                      <Text color="black" fontSize="lg" fontWeight="bold">
                        Banglore
                      </Text>
                      <Text
                        lineHeight="20px"
                        color="black"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        BLR, Kempegowda International Airport India
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack width="50%">
                    <VStack
                      width="30%"
                      borderRightWidth="1"
                      borderColor="coolGray.500"
                      pl={5}
                    >
                      <HStack justifyContent="unset" alignItems="center">
                        <Text
                          color="#4A4A4A"
                          fontSize="xs"
                          fontWeight="bold"
                          pb={1}
                        >
                          DEPERATURE
                        </Text>
                        <Icon
                          size="sm"
                          as={MaterialIcons}
                          name="keyboard-arrow-down"
                          color="black"
                          mb={1}
                        />
                      </HStack>

                      <Text
                        lineHeight="16"
                        color="#4A4A4A"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        Tap to add a return date for bigger discounts
                      </Text>
                    </VStack>
                    <VStack
                      width="30%"
                      borderRightWidth="1"
                      borderColor="coolGray.500"
                      pl={5}
                    >
                      <HStack justifyContent="unset" alignItems="center">
                        <Text
                          color="#4A4A4A"
                          fontSize="xs"
                          fontWeight="bold"
                          pb={1}
                        >
                          RETURN
                        </Text>
                        <Icon
                          size="sm"
                          as={MaterialIcons}
                          name="keyboard-arrow-down"
                          color="black"
                          mb={1}
                        />
                      </HStack>

                      <Text
                        lineHeight="16"
                        color="#4A4A4A"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        Tap to add a return date for bigger discounts
                      </Text>
                    </VStack>
                    <VStack width="40%" pl={5}>
                      <HStack alignItems="center">
                        <Text color="#4A4A4A" fontSize="xs" fontWeight="bold">
                          TRAVELLERS &amp; CLASS
                        </Text>
                        <Icon
                          size="sm"
                          as={MaterialIcons}
                          name="keyboard-arrow-down"
                          color="black"
                          mb={1}
                        />
                      </HStack>
                      <HStack space={1} alignItems="center">
                        {" "}
                        <Text color="black" fontSize="lg" fontWeight="bold">
                          2
                        </Text>{" "}
                        <Text color="#4A4A4A" fontSize="md" fontWeight="bold">
                          Travellers
                        </Text>
                      </HStack>
                      <Text color="#4A4A4A" fontSize="sm" fontWeight="medium">
                        Economy/Premium Economy
                      </Text>
                    </VStack>
                  </HStack>
                </HStack>
              </Box>
              <HStack justifyContent="space-between" alignItems="center">
                <HStack alignItems="center">
                  <Text fontWeight="medium" color="coolGray.400" fontSize="xs">
                    Select Fare Type:
                  </Text>

                  <Radio.Group
                    defaultValue="1"
                    size="sm"
                    name="exampleGroup"
                    flexDirection="row"
                  >
                    {fareType.map((item, index) => {
                      return (
                        <Box
                          mt={5}
                          width="16%"
                          key={index}
                          px={1}
                          bg={item.bgColor}
                          borderRadius={10}
                          mx={1}
                        >
                          <Radio
                            _text={{
                              mx: 2,
                              fontWeight: "bold",
                              fontSize: "xs",
                            }}
                            value="1"
                            icon={
                              <Icon
                                as={<AntDesign name="check" color="#098BFF" />}
                              />
                            }
                            my={1}
                          >
                            {item.type}
                          </Radio>
                        </Box>
                      );
                    })}
                  </Radio.Group>
                </HStack>

                <HStack
                  justifyContent="center"
                  alignItems="center"
                  pt={10}
                  space={2}
                >
                  <Text fontWeight="bold" fontSize="xs" textAlign="center">
                    Trending Searches:
                  </Text>
                  <HStack space={3} alignItems="center">
                    {Searches.map((item, index) => {
                      return (
                        <Pressable
                          key={index}
                          borderRadius="md"
                          px="1"
                          bg="#F2F2F2"
                          // @ts-ignore
                          onPress={() => {
                            console.log("hello");
                          }}
                        >
                          <HStack alignItems="center" space={2}>
                            <Text
                              fontSize={10}
                              color="coolGray.400"
                              fontWeight="normal"
                            >
                              {item.from}
                            </Text>
                            <Icon
                              as={item.as}
                              name={item.iconName}
                              color="#098BFF"
                              size={6}
                            />
                            <Text
                              fontSize={10}
                              color="coolGray.400"
                              fontWeight="normal"
                            >
                              {item.to}
                            </Text>
                          </HStack>
                        </Pressable>
                      );
                    })}
                  </HStack>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </VStack>
        <NativeBaseProvider config={config}>
          <Pressable
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <Box
              position="absolute"
              top={-20}
              bottom={0}
              alignSelf="center"
              height={12}
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
              width={40}
              bg={{
                // @ts-ignore
                linearGradient: {
                  colors: ["#008CFF", "#0a488a"],
                  start: [0, 0],
                  end: [0, 0],
                },
              }}
            >
              <Text color="white" fontWeight="bold" fontSize="md">
                SEARCH
              </Text>
            </Box>
          </Pressable>
        </NativeBaseProvider>
        <HStack alignItems="center" space={1} justifyContent="center">
          <Icon
            as={FontAwesome}
            name="angle-double-down"
            color="coolGray.200"
            size={7}
          />
          <Text color="white" fontWeight="bold" fontSize="xs">
            Explore More
          </Text>
          <Icon
            as={FontAwesome}
            name="angle-double-down"
            color="coolGray.200"
            size={7}
          />
        </HStack>
      </Box>

      <Box bg="coolGray.200">
        <VStack space={5}>
          <Explore />
          <Offers />
          <CreditCard />
          <DestinationList />
          <Hyperlink />
        </VStack>
      </Box>
      <Footer />
    </NativeBaseProvider>
  );
}
