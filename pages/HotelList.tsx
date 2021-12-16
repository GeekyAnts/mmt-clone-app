import React, { useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Checkbox,
  CheckIcon,
  HStack,
  Icon,
  Image,
  Input,
  Link,
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
      iconName: "taxi",
      iconText: "Cabs",
      as: Fontisto,
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
      px={40}
      py={2}
      bg="white"
      justifyContent="space-between"
    >
      <HStack alignItems="center" space={4}>
        <AspectRatio w={24} ratio={1.66}>
          <Image
            source={{ uri: "images/mmt.png" }}
            alt="NextJS Logo"
            resizeMode="contain"
          />
        </AspectRatio>
        {optionList.map((item, index) => {
          return (
            <VStack key={index} alignItems="center" justifyContent="center">
              <Icon size="5" as={item.as} name={item.iconName} />
              <Text fontSize="sm" textAlign="center">
                {item.iconText}
              </Text>
            </VStack>
          );
        })}
      </HStack>
      <HStack>
        <VStack alignItems="center">
          <Box width={40}>
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
            <AspectRatio w={24} ratio={1.66}>
              <Image
                source={{ uri: "images/loginLogo.png" }}
                alt="NextJS Logo"
                resizeMode="contain"
              />
            </AspectRatio>
            <Text color="coolGray.800" fontSize="sm" fontWeight="medium">
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
      px={40}
      py={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack space={4}>
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

      <Button
        variant="unstyled"
        _text={{ color: "white", fontSize: "md", fontWeight: "bold" }}
        bg="#008CFF"
        // bg={{
        //   // @ts-ignore
        //   linearGradient: {
        //     colors: ["lightBlue.300", "violet.800"],
        //     start: [0, 0],
        //     end: [1, 0],
        //   },
        // }}
        borderRadius="lg"
        onPress={() => {
          console.log("hello");
        }}
      >
        Search
      </Button>
    </HStack>
  );
}
function HotelInformation(props: any) {
  let [service, setService] = React.useState("");
  return (
    <Box bg="#CFE5FA" px={40} py={5} flex={1}>
      <HStack justifyContent="space-between">
        <VStack>
          <HStack alignItems="center">
            <Link
              href="https://nativebase.io"
              _text={{
                color: "#008CFF",
                fontSize: "xs",
                fontWeight: "bold",
                textDecorationLine: "none",
              }}
            >
              Home
            </Link>
            <Icon as={EvilIcons} name="chevron-right" size="4" />
            <Text fontSize="xs" color="coolGray.500" fontWeight="medium">
              Hotels and more in Goa
            </Text>
          </HStack>
          <Text fontWeight="bold" color="coolGray.800" fontSize="4xl" mt={16}>
            Hotels, Villas, Apartments and more in Goa
          </Text>
          <HStack alignItems="center">
            <HStack alignItems="center">
              <Text fontSize="sm" color="coolGray.800" fontWeight="semibold">
                Sort By:
              </Text>
              <Select
                selectedValue={service}
                borderColor="#CFE5FA"
                minWidth="100"
                placeholder="POPULARITY"
                color="#008CFF"
                _selectedItem={{
                  bg: "red.200",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="Popularity" value="currency" />
                <Select.Item label="Price-High to Low" value="currency" />
                <Select.Item label="Price-Low to High" value="currency" />
                <Select.Item label="UserRating-High to Low" value="currency" />
              </Select>
            </HStack>
            <HStack space={2} alignItems="center">
              <Text>|</Text>
              <Text color="coolGray.500" fontWeight="medium">
                Showing 1530 properties in Goa
              </Text>
            </HStack>
          </HStack>
        </VStack>
        <VStack space={10}>
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            height={24}
            width={80}
          />

          <Input
            InputLeftElement={
              <Icon
                pl={1}
                as={AntDesign}
                name="search1"
                size="5"
                _light={{ color: "coolGray.500" }}
                _dark={{ color: "coolGray.500" }}
              />
            }
            _hover={{ bg: "white" }}
            _focus={{ bg: "white" }}
            bg="white"
            color="coolGray.500"
            fontSize="md"
            flex={1}
            borderWidth={0}
            outline="none"
            placeholder="Search Locality and Property"
          />
        </VStack>
      </HStack>
    </Box>
  );
}

function Filters(props: any) {
  const filterType = [
    {
      filterType: "Free Cancellation, Zero Payment Now",
      numberAviable: "(0)",
    },
    {
      filterType: "Safe and Hygienic Stays",
      numberAviable: "(83)",
    },
    {
      filterType: "EMI Deals Available",
      numberAviable: "(2)",
    },
    {
      filterType: "Free Breakfast",
      numberAviable: "(123)",
    },
    {
      filterType: "Free Cancellation",
      numberAviable: "(20)",
    },
  ];
  const filterPrice = [
    {
      priceRange: "₹ 148 - ₹ 2000",
      numberAviable: "(230)",
    },
    {
      priceRange: "₹ 2000 - ₹ 4000",
      numberAviable: "(300)",
    },
    {
      priceRange: "₹ 4000 - ₹ 10500",
      numberAviable: "(120)",
    },
    {
      priceRange: "₹ 10500 - ₹ 30000",
      numberAviable: "(40)",
    },
    {
      priceRange: "₹ 30000+",
      numberAviable: "(32)",
    },
  ];
  const Locality = [
    {
      place: "North Goa",
    },
    {
      place: "South Goa",
    },
    {
      place: "Calangute",
    },
    {
      place: "Baga",
    },
    {
      place: "Candolim",
    },
    {
      place: "Anjuna",
    },
  ];

  const otherArea = [
    {
      place: "Margao",
    },
    {
      place: "Vasco",
    },
    {
      place: "Agonda",
    },
    {
      place: "Varca",
    },
  ];
  return (
    <HStack px={40}>
      <VStack mt={5} flex={2} bg="blue.500">
        <Text fontSize="lg" color="coolGray.800" fontWeight="semibold">
          Select Filters
        </Text>
        <VStack mt={5}>
          <Text fontSize="md" color="coolGray.800" fontWeight="medium">
            Popular Filters
          </Text>
          <VStack mt={2} space={1}>
            {filterType.map((item, index) => {
              return (
                <HStack key={index} alignItems="center">
                  {item.numberAviable == "0" ? (
                    <>
                      <Checkbox value="checkbox" color="#9ca3af">
                        {item.filterType}
                      </Checkbox>
                      <Text color="#9ca3af">{item.numberAviable}</Text>
                    </>
                  ) : (
                    <>
                      <Checkbox value="checkbox">{item.filterType}</Checkbox>
                      <Text>{item.numberAviable}</Text>
                    </>
                  )}
                </HStack>
              );
            })}
          </VStack>
        </VStack>
        <Link
          mt={1}
          href="https://nativebase.io"
          _text={{
            color: "#008CFF",
            fontSize: "xs",
            fontWeight: "bold",
            textDecorationLine: "none",
          }}
        >
          See 4 more
        </Link>
        <VStack mt={5}>
          <Text fontSize="md" color="coolGray.800" fontWeight="medium">
            Price
          </Text>
          <VStack mt={2} space={1}>
            {filterPrice.map((item, index) => {
              return (
                <HStack key={index} alignItems="center" space={1}>
                  {item.numberAviable == "0" ? (
                    <>
                      <Checkbox value="checkbox" color="#9ca3af">
                        {item.priceRange}
                      </Checkbox>
                      <Text color="#9ca3af">{item.numberAviable}</Text>
                    </>
                  ) : (
                    <>
                      <Checkbox value="checkbox">{item.priceRange}</Checkbox>
                      <Text>{item.numberAviable}</Text>
                    </>
                  )}
                </HStack>
              );
            })}
          </VStack>
        </VStack>
        <Text fontSize="md" color="coolGray.800" fontWeight="medium">
          Your Budget
        </Text>
        <Text fontSize="md" color="coolGray.800" fontWeight="medium">
          Locality
        </Text>
        {Locality.map((item, index) => {
          return (
            <Checkbox value="checkbox" key={index}>
              {item.place}
            </Checkbox>
          );
        })}
        <Text fontSize="md" color="coolGray.800" fontWeight="medium">
          Other Areas
        </Text>
        {otherArea.map((item, index) => {
          return (
            <Checkbox value="checkbox" key={index}>
              {item.place}
            </Checkbox>
          );
        })}
      </VStack>
      <VStack flex={5} bg="red.500" mt={5}>
        <Text color="coolGray.800" fontSize="3xl" fontWeight="bold">
          Recommended for You
        </Text>
        <Box
          borderWidth={1}
          borderColor="coolGray.400"
          borderRadius="sm"
          width="100%"
          bg="yellow.500"
        >
          <Text>fvlkjerlg</Text>
          <Text>fvlkjerlg</Text>
          <Text>fvlkjerlg</Text>
          <Text>fvlkjerlg</Text>
          <Text>fvlkjerlg</Text>
          <Text>fvlkjerlg</Text>
          <Text>fvlkjerlg</Text>
        </Box>
      </VStack>
    </HStack>
  );
}
export default function Hotel(props: any) {
  return (
    <VStack>
      <ScrollView>
        <Header />
        <Search />
        <HotelInformation />
        <Filters />
      </ScrollView>
    </VStack>
  );
}
