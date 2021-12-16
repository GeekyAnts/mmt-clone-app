import React from "react";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
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
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
//   colors: ["#091B30", "#FEFBF4"],

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};
export default function HomePage() {
  const [tabName, setTabName] = React.useState("Login");
  return (
    <NativeBaseProvider config={config}>
      <Box
        h="100%"
        shadow={4}
        flexGrow={1}
        bg={{
          linearGradient: {
            colors: ["red.100", "red.900"],
            //   colors: ["#091B30", "#FEFBF4"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
      >
        <VStack>
          <HStack
            pl={{ base: 4, md: 10, lg: 20 }}
            pt={{ base: 4 }}
            space={{ base: 40, md: 40, lg: 40 }}
            alignItems={{ lg: "center" }}
            _light={{
              bg: "white",
              borderColor: "coolGray.200",
            }}
            flexWrap="wrap"
            width="100%"
          >
            <Image />
            {/* <Logo /> */}
            <HStack
              justifyContent="space-between"
              pt={2}
              px={{ base: 4, md: 4, lg: 10 }}
              flexWrap="wrap"
              w={{ base: "60%", md: "60%", lg: "40%" }}
            >
              <Pressable
                p="2"
                px="0"
                pb="4"
                pr="10"
                // @ts-ignore
                onPress={() => {
                  setTabName("Login");
                }}
                borderBottomWidth="3px"
                _light={{
                  borderBottomColor:
                    tabName == "Login" ? "#fd2578" : "coolGray.50",
                }}
                _dark={{
                  borderBottomColor:
                    tabName == "Login" ? "primary.700" : "customGray",
                }}
              >
                <VStack>
                  <Text
                    fontWeight="medium"
                    _light={{
                      color: tabName == "Login" ? "#fd2578" : "coolGray.900",
                    }}
                    _dark={{
                      color:
                        tabName == "Login" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    Introducing myBiz
                  </Text>
                  <Text
                    fontSize="sm"
                    _light={{
                      color:
                        tabName == "Address" ? "coolGray.500" : "coolGray.400",
                    }}
                    _dark={{
                      color:
                        tabName == "Address" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    MakeMyTrip for Bussiness
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                p="2"
                pr="4"
                pb="4"
                // @ts-ignore
                onPress={() => {
                  setTabName("Address");
                }}
                borderBottomWidth="3px"
                _light={{
                  borderBottomColor:
                    tabName == "Address" ? "#fd2578" : "coolGray.50",
                }}
                _dark={{
                  borderBottomColor:
                    tabName == "Address" ? "primary.700" : "customGray",
                }}
              >
                <VStack>
                  <Text
                    fontWeight="medium"
                    _light={{
                      color: tabName == "Address" ? "#fd2578" : "coolGray.900",
                    }}
                    _dark={{
                      color:
                        tabName == "Address" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    My Trips
                  </Text>
                  <Text
                    fontSize="sm"
                    _light={{
                      color:
                        tabName == "Address" ? "coolGray.500" : "coolGray.400",
                    }}
                    _dark={{
                      color:
                        tabName == "Address" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    Manage your
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                p="2"
                pb="4"
                pr="4"
                // @ts-ignore
                onPress={() => {
                  setTabName("Payment");
                }}
                borderBottomWidth="3px"
                _light={{
                  borderBottomColor:
                    tabName == "Payment" ? "#fd2578" : "coolGray.50",
                }}
                _dark={{
                  borderBottomColor:
                    tabName == "Payment" ? "primary.700" : "customGray",
                }}
              >
                <Text
                  fontWeight="medium"
                  _light={{
                    color: tabName == "Payment" ? "#fd2578" : "coolGray.900",
                  }}
                  _dark={{
                    color:
                      tabName == "Payment" ? "coolGray.50" : "coolGray.400",
                  }}
                >
                  3 - Payment
                </Text>
              </Pressable>
            </HStack>
          </HStack>
          {/* {tabName == "Login" ? <OrderInit /> : null}
        {tabName == "Address" ? <OrderAddress /> : null}
        {tabName == "Payment" ? <OrderPayment /> : null} */}
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
