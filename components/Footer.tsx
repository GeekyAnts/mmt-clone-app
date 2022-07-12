import React from "react";
import { Box, HStack, Icon, Link, Stack, Text, VStack } from "native-base";
import { AntDesign, FontAwesome } from "@native-base/icons";

export default function Footer(pros: any) {
  return (
    <Box bg="black" alignItems="center" px="8">
      <Box py={16} width="100%" maxW="1200">
        <Stack
          direction={{ base: "column", sm: "row" }}
          space="6"
          justifyContent="space-between"
        >
          <HStack space="9" alignItems="center">
            <Link href="https://twitter.com/nativebase">
              <Icon as={AntDesign} name="twitter" color="white" size={7} />
            </Link>
            <Link href="https://www.facebook.com/nativebaseio/">
              <Icon as={FontAwesome} name="facebook" color="white" size={7} />
            </Link>
          </HStack>
          <VStack alignItems={{ base: "start", sm: "end" }}>
            <Text color="white" fontWeight="bold" fontSize="md" lineHeight="xs">
              © 2021 MAKEYOURTRIP PVT. LTD.
            </Text>
            <Text color="white" fontSize="sm">
              Country <Text fontWeight="semibold">India USA UAE</Text>
            </Text>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
}
