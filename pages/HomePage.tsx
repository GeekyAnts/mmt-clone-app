import React from "react";
import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  useColorModeValue,
  NativeBaseProvider,
  Radio,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import FlightList from "../components/FlightList";
import Footer from "../components/Footer";

//   colors: ["#091B30", "#FEFBF4"],

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

export default function HomePage() {
  const [tabName, setTabName] = React.useState("Login");
  return (
    <NativeBaseProvider config={config}>
      <Box
        h="60%"
        shadow={4}
        // flexGrow={1}
        bg={{
          linearGradient: {
            colors: ["#071323", "#144478"],
            //   colors: ["#091B30", "#FEFBF4"],
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
                      <Box pt={10} width="12%">
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
                    {/* <Icon as="MaterialCommunityIcons" name="alien" /> */}
                  </HStack>
                </HStack>
              </HStack>
              {/* </Box> */}
            </VStack>
          </Box>
        </VStack>
      </Box>
      <FlightList />
      <Footer />
    </NativeBaseProvider>
  );
}
