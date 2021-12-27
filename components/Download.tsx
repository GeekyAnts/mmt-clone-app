import React from "react";
import {
  Box,
  Divider,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
  Pressable,
  Input,
} from "native-base";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Image from "next/image";

export default function Download(props: any) {
  return (
    <Box
      bg="white"
      py="5"
      w="100%"
      px={{ lg: 40 }}
      mt={4}
      //   alignItems={"center"}
    >
      <Text color="black" fontWeight="extrabold" fontSize="4xl">
        Download App Now !
      </Text>
      <Text color="coolGray.700" fontWeight="semibold" fontSize="xl">
        Get the MakeMyTrip mobile App and Save More!
      </Text>
      <HStack alignItems="center" justifyContent="space-between">
        <VStack mt={6}>
          <Text fontSize="xs" color="coolGray.800" fontWeight="semibold">
            8% Off upto Rs 5000 use coupon code WELCOMEMMT on APP
          </Text>
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            // InputLeftElement={
            //   <HStack>
            //     <Icon as={FontAwesome5} name="flag-usa" />
            //   </HStack>
            // }
            placeholder="Enter Mobile Number"
            InputRightElement={
              <Pressable
                p="2"
                borderWidth="1"
                borderColor="#46A0FF"
                // @ts-ignore
                onPress={() => {
                  console.log("hello");
                }}
              >
                <Text color="#46A0FF" fontWeight="semibold" fontSize="sm">
                  GET APP LINK
                </Text>
              </Pressable>
            }
          />
        </VStack>
        <Divider orientation="vertical" />
        <VStack>
          <Text>MORE WAYS TO GET THE APP</Text>
          <HStack space={3} alignItems="unset">
            <VStack space={2}>
              <Image
                src="/images/appstore.png"
                alt="Vercel Logo"
                width={64}
                height={48}
              />
              <Image
                src="/images/playstore.png"
                alt="Vercel Logo"
                width={40}
                height={64}
              />
            </VStack>
            <VStack alignItems="center">
              <Image
                src="/images/qrcode.png"
                alt="Vercel Logo"
                width={64}
                height={96}
              />
              <Text fontSize="10" color="black" fontWeight="semibold">
                Scan QR
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
