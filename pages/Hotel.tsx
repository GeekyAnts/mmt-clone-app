import React, { useState } from "react";
import {
  Box,
  Center,
  CheckIcon,
  Divider,
  HStack,
  Icon,
  Link,
  NativeBaseProvider,
  Pressable,
  Select,
  Text,
  Tooltip,
  VStack,
} from "native-base";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Footer from "../components/Footer";
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
      position="sticky"
      top={0}
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

function MainPageBanner(props: any) {
  return (
    <VStack w="100%" h={500} zIndex={-1}>
      <Box>
        <Image
          // @ts-ignore
          position="absolute"
          src="/images/hotel1.jpeg"
          alt="Vercel Logo"
          top="0"
          right="0"
          left="0"
          bottom="0"
          zIndex={-1}
          width="100%"
          height={500}
        />
        <Pressable
          mt={2}
          rounded="full"
          bg="#09223D"
          px={4}
          py={2}
          position="absolute"
          top={80}
          left={48}
          // @ts-ignore
          onPress={() => {
            console.log("hello");
          }}
        >
          <HStack alignItems="center" space={2}>
            <Icon as={EvilIcons} name="camera" size="6" color="#EEB971" />
            <Text color="white" fontWeight="bold" fontSize="sm">
              VIEW ALL PHOTOS
            </Text>
          </HStack>
        </Pressable>
        <HStack
          alignItems="center"
          position="absolute"
          top={2}
          right={0}
          left={48}
        >
          <Pressable
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <Text color="white" fontSize="md" fontWeight="medium">
              Home
            </Text>
          </Pressable>
          <Icon as={EvilIcons} name="chevron-right" size="4" color="white" />
          <Pressable
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <Text color="white" fontSize="md" fontWeight="medium">
              Hotels In Goa
            </Text>
          </Pressable>
          <Icon as={EvilIcons} name="chevron-right" size="4" color="white" />
          <Pressable
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <Text color="white" fontSize="md" fontWeight="medium">
              Resorts In Goa
            </Text>
          </Pressable>
          <Icon as={EvilIcons} name="chevron-right" size="4" color="white" />
          <Text color="white" fontSize="md" fontWeight="bold">
            The Lalit Golf & Spa Resort
          </Text>
        </HStack>
        <HStack
          px={48}
          py={2}
          justifyContent="space-between"
          alignItems="center"
          bg="#292524"
          position="absolute"
          bottom={0}
          right={0}
          left={0}
        >
          <VStack py="2" mt={2}>
            <HStack alignItems="center" space={2}>
              <Text color="coolGray.50" fontWeight="bold" fontSize="3xl">
                The Lalit Golf & Spa Resort
              </Text>
              <Icon as={Entypo} name="star" color="white" size="5" />
              <Icon as={Entypo} name="star" color="white" size="5" />
              <Icon as={Entypo} name="star" color="white" size="5" />
              <Icon as={Entypo} name="star" color="white" size="5" />
              <Icon as={Entypo} name="star" color="white" size="5" />
            </HStack>
            <Divider width={20} bg="#EEB971" rounded="lg" />
            <HStack mt={2} alignItems="center" space={2}>
              <Center
                bg="coolGray.50"
                borderColor="#EEB971"
                borderWidth={1}
                rounded="lg"
                px={2}
                _text={{
                  color: "#EEB971",
                  fontWeight: "medium",
                  fontSize: "md",
                }}
              >
                MMT LUXE
              </Center>
              <Text color="white" fontWeight="semibold" fontSize="sm">
                Plush Goa Resort Offering Scenic Arabian Sea Views
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
}
function HotelCard(props: any) {
  return (
    <VStack alignItems="end" position="sticky" top={20} px={24}>
      <Box
        bg="white"
        borderRadius="md"
        shadow={4}
        width={96}
        flex={1}
        p={4}
        mt={2}
      >
        <VStack>
          <Image
            src="/images/hotel7.jpeg"
            alt="MakeMyTrip Logo"
            width={120}
            height={200}
          />
          <Pressable
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <Text
              fontWeight="semibold"
              color="coolGray.800"
              fontSize="md"
              mt={3}
            >
              Garden View Suite - Twin with Balcony...
            </Text>
          </Pressable>
          <HStack alignItems="center" justifyContent="space-between" mt={3}>
            <VStack space={1}>
              <HStack alignItems="center" space={1}>
                <Icon as={Ionicons} name="ios-people-sharp" size="4" />
                <Text fontSize="xxs" fontWeight="medium" color="coolGray.500">
                  For 2 Adults
                </Text>
              </HStack>
              <Pressable>
                <HStack alignItems="center" space={1}>
                  <Icon as={Entypo} name="cross" size="4" color="red.500" />
                  <Text color="red.500" fontSize="xxs" fontWeight="semibold">
                    Non Refundable
                  </Text>
                </HStack>
              </Pressable>
              <HStack alignItems="center" space={1}>
                <Icon as={AntDesign} name="check" size="4" />
                <Text fontSize="xxs" fontWeight="medium" color="coolGray.500">
                  Room with Breakfast
                </Text>
              </HStack>
            </VStack>
            <VStack alignItems="end" mt={1}>
              <Text fontSize={10} fontWeight="normal" color="coolGray.400">
                Per Night
              </Text>
              <Text
                textDecorationLine="line-through"
                fontSize="md"
                color="coolGray.400"
                fontWeight="normal"
              >
                ₹9998
              </Text>
              <Tooltip label="per night" openDelay={500}>
                <Text fontSize="md" color="coolGray.800" fontWeight="bold">
                  ₹10540
                </Text>
              </Tooltip>
              <Text fontSize={10} fontWeight="semibold" color="coolGray.400">
                + ₹ 2,640 taxes & fees
              </Text>
              <Text fontSize={10} fontWeight="semibold" color="red.500">
                Saving ₹ 659
              </Text>
            </VStack>
          </HStack>
          <Pressable
            mt={3}
            // @ts-ignore
            onPress={() => {
              console.log("hello");
            }}
          >
            <HStack alignItems="center">
              <Text color="#008CFF" fontWeight="medium" fontSize="sm">
                VIEW OTHER ROOMS
              </Text>
              <Icon
                as={Entypo}
                name="chevron-small-down"
                size="5"
                color="#008CFF"
              />
            </HStack>
          </Pressable>
          <NativeBaseProvider config={config}>
            <Pressable
              mt={5}
              // @ts-ignore
              onPress={() => {
                console.log("hello");
              }}
            >
              <Box
                height={12}
                rounded="md"
                alignItems="center"
                justifyContent="center"
                width="100%"
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
                  BOOK THIS NOW
                </Text>
              </Box>
            </Pressable>
          </NativeBaseProvider>
        </VStack>
      </Box>
      <Box bg="#CDFCE8" borderRadius="md" shadow={4} width={96} p={1} mt={2}>
        <HStack alignItems="center" space={2}>
          <Icon as={MaterialIcons} name="local-offer" size="5" />
          <VStack>
            <Text fontWeight="semibold" color="coolGray.800" fontSize="sm">
              Save INR 555 more
            </Text>
            <HStack alignItems="center" space={1}>
              <Link
                href="https://nativebase.io"
                _text={{
                  color: "#008CFF",
                  fontSize: "xs",
                  fontWeight: "bold",
                  textDecorationLine: "none",
                }}
              >
                LOGIN
              </Link>
              <Text color="coolGray.800" fontSize="xs">
                & use wallet balance for booking
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
}
function Rating(props: any) {
  return (
    <HStack alignItems="center" mt={10} space={10} px={48} zIndex={-1}>
      <HStack alignItems="center" space={2}>
        <Center bg="#37D18F" p={2} rounded="md">
          <VStack alignItems="center">
            <Text fontWeight="bold" color="white" fontSize="md">
              3.8
            </Text>
            <Text fontWeight="normal" color="white" fontSize="xs">
              Out of 5
            </Text>
          </VStack>
        </Center>
        <VStack>
          <Text color="coolGray.800" fontWeight="semibold" fontSize="md">
            Rated Good
          </Text>
          <Link
            href="https://nativebase.io"
            _text={{
              color: "#008CFF",
              fontSize: "xs",
              fontWeight: "bold",
              textDecorationLine: "none",
            }}
          >
            Based on 3393 Ratings
          </Link>
        </VStack>
      </HStack>
      <HStack alignItems="center" space={2}>
        <Image
          src="/images/hotel5.jpeg"
          alt="MakeMyTrip Logo"
          width={40}
          height={40}
        />
        <VStack>
          <Text color="coolGray.800" fontWeight="bold" fontSize="lg">
            Palolem
          </Text>
          <Link
            href="https://nativebase.io"
            _text={{
              color: "#008CFF",
              fontSize: "xs",
              fontWeight: "bold",
              textDecorationLine: "none",
            }}
          >
            View On Map
          </Link>
        </VStack>
      </HStack>
    </HStack>
  );
}

function BestOfLuxury(props: any) {
  const Luxury = [
    {
      imageOne: "/images/hotel1.jpeg",
      imageTwo: "/images/hotel2.jpeg",
      subText: "International Standard Golf Course",
    },
    {
      imageOne: "/images/hotel1.jpeg",
      imageTwo: "/images/hotel2.jpeg",
      subText: "Pool with Sunken Poolside Bar",
    },
    {
      imageOne: "/images/hotel1.jpeg",
      imageTwo: "/images/hotel2.jpeg",
      subText: "Al fresco Dining by the Sea",
    },
  ];
  return (
    <VStack px={48} mt={10} zIndex={-1}>
      <Text color="coolGray.800" fontSize="2xl" fontWeight="semibold">
        Discover the Best of Luxury
      </Text>
      <Divider width={20} bg="#EEB971" rounded="lg" />
      <HStack mt={7} space={6}>
        {Luxury.map((item, index) => {
          return (
            <Pressable key={index}>
              <Box
                borderWidth={4}
                borderColor="red.500"
                borderRadius="lg"
                height={210}
                width={230}
                bg="#26242485"
                opacity={0.6}
                alignItems="center"
                justifyContent="center"
              >
                <Center
                  borderWidth={2}
                  borderColor="white"
                  p="3"
                  rounded="full"
                >
                  <Image
                    src={item.imageOne}
                    alt="Vercel Logo"
                    width={64}
                    height={64}
                    // @ts-ignore
                    borderRadius={20}
                  />
                </Center>
                <Text textAlign="center" color="white" fontWeight="semibold">
                  {item.subText}
                </Text>

                {/* <Image
                src={item.imageOne}
                alt="Vercel Logo"
                width={200}
                height={270}
                // @ts-ignore
                borderRadius={20}
              /> */}
              </Box>
            </Pressable>
          );
        })}
      </HStack>
    </VStack>
  );
}
function HighLight(props: any) {
  const HighlistList = [
    {
      iconName: "thumbs-up",
      supportText: "500+ guests like you rated their stay Very Good",
      as: Entypo,
    },
    {
      iconName: "calendar",
      supportText: "Perfect for one-night stay!",
      as: AntDesign,
    },
    {
      iconName: "ios-people-outline",
      supportText: "A couple-friendly property",
      as: Ionicons,
    },
    {
      iconName: "check",
      supportText: "Select rooms have private pool",
      as: EvilIcons,
    },
    {
      iconName: "check",
      supportText: "Play a round at the resort's 9-hole golf course",
      as: EvilIcons,
    },
    {
      iconName: "emoji-food-beverage",
      supportText:
        "Amazing breakfast! Guests like food quality, variety and service",
      as: MaterialIcons,
    },
  ];
  return (
    <VStack px={48} mt={6} zIndex={-1}>
      <Text color="coolGray.800" fontSize="2xl" fontWeight="semibold">
        Property Highlights
      </Text>
      <Divider width={20} bg="#EEB971" rounded="lg" />
      <Box
        borderWidth={1}
        borderColor="coolGray.800"
        width="62%"
        borderRadius={5}
        mt={6}
        pb={4}
      >
        <HStack
          alignItems="center"
          alignContent="space-evenly"
          space={16}
          alignSelf="center"
          mt={2}
        >
          <VStack alignItems="center" space={1}>
            <Text color="coolGray.800" fontWeight="semibold">
              Private Beach
            </Text>
            <Link
              href="https://nativebase.io"
              _text={{
                color: "#008CFF",
                fontSize: "xs",
                fontWeight: "bold",
                textDecorationLine: "none",
              }}
            >
              272 Reviews
            </Link>
          </VStack>
          <Divider orientation="vertical" />
          <VStack alignItems="center" space={1}>
            <Text color="coolGray.800" fontWeight="semibold">
              Nightlife
            </Text>
            <Link
              href="https://nativebase.io"
              _text={{
                color: "#008CFF",
                fontSize: "xs",
                fontWeight: "bold",
                textDecorationLine: "none",
              }}
            >
              22 Reviews
            </Link>
          </VStack>
          <Divider orientation="vertical" />
          <VStack alignItems="center" space={1}>
            <Text color="coolGray.800" fontWeight="semibold">
              Distance from Beach
            </Text>
            <Link
              href="https://nativebase.io"
              _text={{
                color: "#008CFF",
                fontSize: "xs",
                fontWeight: "bold",
                textDecorationLine: "none",
              }}
            >
              272 Reviews
            </Link>
          </VStack>
        </HStack>
        <Divider mt={2} />
        <VStack space={3} px={9} mt={3}>
          {HighlistList.map((item, index) => {
            return (
              <HStack alignItems="center" key={index} space={2}>
                <Icon size="5" as={item.as} name={item.iconName} />
                <Text fontSize="xs" color="coolGray.500">
                  {item.supportText}
                </Text>
              </HStack>
            );
          })}
        </VStack>
        <Link
          px={9}
          mt={4}
          href="https://nativebase.io"
          _text={{
            color: "#008CFF",
            fontSize: "xs",
            fontWeight: "bold",
            textDecorationLine: "none",
          }}
        >
          VIEW ALL HIGHLIGHTS
        </Link>
      </Box>
    </VStack>
  );
}

export default function Hotel(props: any) {
  return (
    <VStack>
      <Header />
      <Search />
      <MainPageBanner />
      <HotelCard />
      <Rating />
      <BestOfLuxury />
      <HighLight />
      <Footer />
    </VStack>
  );
}
