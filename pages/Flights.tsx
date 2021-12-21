import React from "react";
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  NativeBaseProvider,
  Radio,
} from "native-base";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import CreditCard from "../components/CreditCard";
import DestinationList from "../components/DestinationList";
import HorizontalComponent from "../components/HorizontalComponent";
import MMTLuxe from "../components/MmtLuxe";
const fareType = [
  { type: "Regular Fares" },
  { type: "Armed Forces Fares" },
  { type: "Student Fares" },
  { type: "Senior Citizen Fares" },
  { type: "Double Seat Fares" },
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

export default function Flights(props: any) {
  return (
    <NativeBaseProvider config={config}>
      <Box
        h="30%"
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
            px={40}
            borderRadius={10}
            zIndex={1}
            bg="white"
            alignSelf="center"
            py="4"
          >
            <HStack justifyContent="space-evenly" alignItems="center" space="5">
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

            {/* <Header /> */}
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
              <Box
                borderRadius="lg"
                borderWidth="1"
                borderColor="coolGray.500"
                px="5"
              >
                <HStack width="100%">
                  <HStack width="50%">
                    <VStack borderRightWidth="1" borderColor="coolGray.500">
                      <Text>FROM</Text>
                      <Text>Delhi</Text>
                      <Text>DEL,Delhi Airport India</Text>
                    </VStack>
                    <VStack borderRightWidth="1" borderColor="coolGray.500">
                      <Text>TO</Text>
                      <Text>Banglore</Text>
                      <Text>BLR, Kempegowda International Airport India</Text>
                    </VStack>
                  </HStack>
                  <HStack width="50%">
                    <VStack
                      width="30%"
                      borderRightWidth="1"
                      borderColor="coolGray.500"
                    >
                      <HStack>
                        <Text>DEPARTURE</Text>
                        <Icon
                          size="md"
                          as={AntDesign}
                          name="arrowright"
                          color="white"
                        />
                      </HStack>
                      <HStack>
                        {" "}
                        <Text>9 </Text> <Text>Jan'22</Text>
                      </HStack>
                      <Text>Sunday</Text>
                    </VStack>
                    <VStack
                      width="30%"
                      borderRightWidth="1"
                      borderColor="coolGray.500"
                    >
                      <HStack>
                        <Text>DEPARTURE</Text>
                        <Icon
                          size="md"
                          as={AntDesign}
                          name="arrowright"
                          color="white"
                        />
                      </HStack>
                      <Text lineHeight="16">
                        Tap to add a return date for bigger discounts
                      </Text>
                    </VStack>
                    <VStack width="40%">
                      <HStack>
                        <Text>TRAVELLERS &amp; CLASS</Text>
                        <Icon
                          size="md"
                          as={AntDesign}
                          name="arrowright"
                          color="white"
                        />
                      </HStack>
                      <HStack>
                        {" "}
                        <Text>9 </Text> <Text>Jan'22</Text>
                      </HStack>
                      <Text>Sunday</Text>
                    </VStack>
                  </HStack>
                </HStack>
              </Box>
              <HStack justifyContent="space-between">
                <Radio.Group
                  defaultValue="1"
                  size="sm"
                  name="exampleGroup"
                  flexDirection="row"
                >
                  {fareType.map((item, index) => {
                    return (
                      <Box pt={10} width="12%" key={index}>
                        <Radio
                          _text={{
                            mx: 2,
                            fontWeight: "bold",
                            fontSize: "xs",
                          }}
                          colorScheme="green"
                          value="1"
                          icon={
                            <Icon
                              as={<MaterialCommunityIcons name="alien" />}
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
                <HStack justifyContent="center" alignItems="center" pt={10}>
                  <Text fontWeight="bold" fontSize="xs" textAlign="center">
                    Trending Searches:
                  </Text>
                  <HStack>
                    <Text fontWeight="bold" fontSize="xs" color="#4A4A4A">
                      {" "}
                      Banglore
                    </Text>
                    <Icon as={<MaterialCommunityIcons name="alien" />} />
                  </HStack>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
      <Box bg="coolGray.200">
        <VStack space={5}>
          <Explore />
          <MMTLuxe />
          <HorizontalComponent />
          <CreditCard />
          <DestinationList />
        </VStack>
      </Box>
      <Footer />
    </NativeBaseProvider>
  );
}
