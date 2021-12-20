import React from "react";
import {
  AntDesign,
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
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
            bgColor="white"
            height="64"
            width="80%"
            alignSelf="center"
            borderRadius="md"
            zIndex="8"
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
                <HStack>
                  <Text fontWeight="bold" fontSize="xs">
                    International Flights
                  </Text>
                  <Divider orientation="vertical" width="1"></Divider>
                  <Text fontWeight="bold" fontSize="xs">
                    International Flights
                  </Text>
                  <Divider orientation="vertical" width="1"></Divider>
                </HStack>
              </HStack>
            </VStack>
            {/* <Header /> */}
          </Box>
          {/* {tabName == "Login" ? <OrderInit /> : null}
        {tabName == "Address" ? <OrderAddress /> : null}
        {tabName == "Payment" ? <OrderPayment /> : null} */}
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
