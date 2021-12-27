import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  HStack,
  Icon,
  Pressable,
  Select,
  Text,
  VStack,
} from "native-base";
import {
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Image from "next/image";
export default function Header(props: any) {
  let [service, setService] = React.useState("");

  return (
    <HStack
      pt={2}
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
            <Text color="coolGray.200" fontSize="sm" fontWeight="semibold">
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
            <Text color="coolGray.200" fontSize="sm" fontWeight="semibold">
              Manage your bookings
            </Text>
          </VStack>
        </HStack>
        <HStack
          borderRadius="lg"
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
        <HStack
          borderRadius="lg"
          alignItems="center"
          p={2}
          bg="black"
          opacity={0.8}
        >
          <Image
            src="/images/flag.png"
            alt="Vercel Logo"
            width={12}
            height={12}
          />
          <Text color="white" fontWeight="semibold" fontSize="sm">
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
      </HStack>
      {/* <HStack>
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
      </HStack> */}
    </HStack>
  );
}
