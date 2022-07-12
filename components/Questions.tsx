import React from "react";
import { Box, Stack, Text, VStack } from "native-base";
import { AntDesign, FontAwesome } from "@native-base/icons";

export default function Questions(pros: any) {
  return (
    <Box bg="slateYellow.200" alignItems="center" px="8">
      <Box py={16} width="100%" maxW="1200">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          space={{ base: "12", md: "16", lg: "32" }}
          mb={{ base: "4", md: "12" }}
        >
          <Box flex="1">
            <Text
              fontSize="md"
              fontWeight="bold"
              color="black"
              mb="6"
              letterSpacing="0.019"
            >
              Q - How do I make a flight booking on MakeMyTrip?
            </Text>
            <Text flex="1" fontSize="xs" color="darkText.200">
              A: You can book a flight on MakeMyTrip in five easy steps: Head
              over to the MakeMyTrip flight booking page, Enter your departure
              and arrival destinations, Select your air travel dates, Choose
              from our wide range of flights based on your airfare preferences,
              Click on ‘Book Now’ and your air flight booking is done.
              Alternatively, you can also use the MakeMyTrip app for your flight
              ticket booking. Download the MakeMyTrip app, Put in the details
              i.e. date of journey, departure and arrival destinations, travel
              class of your choice, Select on your best comfortable option and
              click on 'Book Now'.
            </Text>
          </Box>
          <Box flex="1">
            <Text
              fontSize="md"
              fontWeight="bold"
              color="black"
              mb="6"
              letterSpacing="0.019"
            >
              Q - Can I avail domestic flight offers on MakeMyTrip?
            </Text>
            <Text fontSize="xs" color="darkText.200">
              A: Of course, you can. While making domestic flight bookings, you
              can avail any special offer that is active at that time. In
              accordance with the offer selected, a listing of eligible flights
              would show up on your screen. You can then apply the price filter
              and click on the downwards arrow, following which budget-friendly
              flights would start showing up in ascending order from the top
              (lowest price on top).
            </Text>
          </Box>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          space={{ base: "12", md: "16", lg: "32" }}
        >
          <Box flex="1">
            <Text
              fontSize="md"
              fontWeight="bold"
              color="black"
              mb="6"
              letterSpacing="0.019"
            >
              Q - How can I avail budget air tickets on MakeMyTrip?
            </Text>
            <Text flex="1" fontSize="xs" color="darkText.200">
              A: It’s super-easy to avail budget airfare while booking your
              flight tickets on MakeMyTrip. Just select the ‘Price’ filter once
              the available flight options are displayed and adjust according to
              your convenience. On the MakeMyTrip app, you can select the
              downward arrow, which will show the lowest airfare at the top and
              continue downward in ascending order.
            </Text>
          </Box>
          <Box flex="1">
            <Text
              fontSize="md"
              fontWeight="bold"
              color="black"
              mb="6"
              letterSpacing="0.019"
            >
              Q - Why could I not avail the flight booking offers at the time of
              checkout?
            </Text>
            <Text fontSize="xs" color="darkText.200">
              A: MakeMyTrip makes use of a world-class real-time reservation
              database to list airfare and availability. As dynamic changes in
              airfare take place, or the available flight tickets sell out, the
              database reflects the changes in real-time. Hence, we suggest, you
              double-check online flight booking prices when purchasing flight
              tickets, as the airfare might have been dynamically updated since
              you first selected the air travel dates or planned your itinerary.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
