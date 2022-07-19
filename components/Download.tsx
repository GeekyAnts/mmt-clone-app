import React from "react";
import {
  Box,
  Divider,
  HStack,
  Text,
  VStack,
  Pressable,
  Input,
  Hidden,
} from "native-base";
import Image from "next/image";

export default function Download(props: any) {
  return (
    <Box
      bg="white"
      py="5"
      w="100%"
      shadow="4"
      pl={6}
      borderRadius={10}
      mx={{ base: 0, md: 4 }}
    >
      <Text
        color="black"
        fontWeight="extrabold"
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        Download App Now !
      </Text>
      <Text color="coolGray.700" fontWeight="semibold" fontSize="xl">
        Get the MakeYourTrip mobile App and Save More!
      </Text>
      <HStack
        w={{ base: "100%", md: "auto" }}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <VStack mt={{ base: 2, md: 6 }}>
          <Text fontSize="xs" color="coolGray.800" fontWeight="semibold">
            8% Off upto Rs 5000 use coupon code WELCOMEMYT on APP
          </Text>
          <Input
            placeholder="Enter Mobile Number"
            InputLeftElement={
              <HStack space="2" pl="2">
                <Image
                  src="/images/india_image.png"
                  alt="indian flag"
                  height={12}
                  width={20}
                />
                <Text fontWeight="semibold" fontSize="xs">
                  +91
                </Text>
              </HStack>
            }
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
        <Hidden from="base" till="md">
          <Divider orientation="vertical" />
        </Hidden>

        <VStack pr={{ base: 0, md: 10 }}>
          <Text mt={{ base: 2, md: 0 }} fontSize="10" fontWeight="semibold">
            MORE WAYS TO GET THE APP
          </Text>
          <HStack space={3}>
            <Image
              src="/images/image_store.png"
              alt="vercel logo"
              width={200}
              height={48}
            />
            <VStack alignItems="center">
              <Image
                src="/images/qrcode.png"
                alt="Vercel Logo"
                width={120}
                height={120}
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
