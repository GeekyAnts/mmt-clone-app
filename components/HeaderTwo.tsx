import React, { useState } from "react";
import { HStack, Icon, Pressable, Text, VStack } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import Image from "next/image";
export default function Header(props: any) {
  let [service, setService] = React.useState("");

  return (
    <HStack
      alignItems="center"
      pr={{ lg: 40, md: 10 }}
      pl={{ lg: 20, md: 6 }}
      justifyContent="space-between"
    >
      <Image
        src="/images/christmas_logo.png"
        alt="MakeMyTrip Logo"
        width="200"
        height={64}
      />
      <HStack alignItems="center">
        <HStack
          px={2}
          space={2}
          borderLeftWidth={1}
          borderLeftStyle="dashed"
          borderLeftColor="coolGray.300"
        >
          <Image
            src="/images/mmtbiz.png"
            alt="MakeMyTrip Logo"
            width={32}
            height={24}
          />
          <VStack>
            <Text color="white" fontSize="md" fontWeight="semibold">
              Introducing myBiz
            </Text>
            <Text color="coolGray.200" fontSize={10} fontWeight="semibold">
              MakeMyTrip for Business
            </Text>
          </VStack>
        </HStack>
        <HStack
          px={2}
          space={2}
          borderLeftWidth={1}
          borderLeftStyle="dashed"
          borderLeftColor="coolGray.300"
        >
          <Image
            src="/images/mmtbag.png"
            alt="MakeMyTrip Logo"
            width={32}
            height={19}
          />
          <VStack>
            <Text color="white" fontSize="md" fontWeight="semibold">
              My Trips
            </Text>
            <Text color="coolGray.200" fontSize={10} fontWeight="semibold">
              Manage your bookings
            </Text>
          </VStack>
        </HStack>
        <Pressable
          // @ts-ignore
          onPress={() => {
            console.log("hello");
          }}
        >
          <HStack
            borderRadius="md"
            alignItems="center"
            p={2}
            bg={{
              // @ts-ignore
              linearGradient: {
                colors: ["#008CFF", "#0a488a"],
                start: [0, 0],
                end: [0, 0],
              },
            }}
          >
            <Image
              src="/images/Loginlogo2.png"
              alt="Vercel Logo"
              width={24}
              height={24}
            />
            <Text color="white" fontWeight="semibold" fontSize="sm">
              Login or Create Account
            </Text>
            <Icon
              ml={4}
              as={EvilIcons}
              name="chevron-down"
              color="white"
              fontWeight="bold"
              size="6"
            />
          </HStack>
        </Pressable>
        <Pressable
          // @ts-ignore
          onPress={() => {
            console.log("hello");
          }}
        >
          <HStack
            borderRadius="md"
            alignItems="center"
            p={2}
            bg="#2C3644"
            opacity={0.8}
          >
            <Image
              src="/images/flag.png"
              alt="Vercel Logo"
              width={12}
              height={12}
            />
            <Text color="coolGray.50" fontWeight="semibold" fontSize="sm">
              IN | ENG | INR
            </Text>
            <Icon
              ml={4}
              as={EvilIcons}
              name="chevron-down"
              color="white"
              fontWeight="bold"
              size="6"
            />
          </HStack>
        </Pressable>
      </HStack>
    </HStack>
  );
}
