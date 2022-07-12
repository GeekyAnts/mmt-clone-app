import { Link, VStack, Text, Box } from "native-base";
import React from "react";
const List = [
  {
    linkType: "PRODUCT OFFERING",
    linkText:
      "Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for SME Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Vande Bharat Mission Flights, Air Bubble Flights, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status",
  },
  {
    linkType: "PRODUCT OFFERING",
    linkText:
      "About Us, Investor Relations, Careers, Corporate Travel, MYT Foundation, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo",
  },
  {
    linkType: "PRODUCT OFFERING",
    linkText:
      "Contact Us, Payment Security, Privacy Policy, User Agreement, Terms of Service, More Offices, Make A Payment, Work From Home",
  },
  {
    linkType: "MORE LINKS",
    linkText:
      "Hotels Discount Coupons, Hotels In Goa, Hotels In Mumbai, Hotels In Mahabaleshwar, Hotels In Matheran, Hotels In Lonavala & Khandala, Hotels In Delhi, Hotels In Shimla, Hotels In Lansdowne, Hotels In Digha, Hotels In Puri, Hotels In Nainital, Hotels In Shirdi, Hotels In Bangalore, Hotels In Mussoorie, Hotels In Manali, Hotels Near Me, Cheap Hotels, Hotels In Jaipur, Hotels In Udaipur, Hotels In Pune, Hotels In Pondicherry, Hotels In Ooty, Hotels In Kodaikanal, Hotels In Darjeeling, Hotels In Chandigarh, Hotels In Mount abu, Hotels In Ahmedabad, Hotels In Kolkata",
  },
  {
    linkType: "IMPORTANT LINKS",
    linkText:
      "Hotels In Jaipur, Hotels In Udaipur, Hotels In Pune, Hotels In Pondicherry, Hotels In Ooty, Hotels In Kodaikanal, Hotels In Darjeeling, Hotels In Chandigarh, Hotels In Mount abu, Hotels In Ahmedabad, Hotels In Kolkata",
  },
];

export default function Hyperlink(props: any) {
  return (
    <Box py="10">
      {List.map((item, index) => {
        return (
          <VStack key={index} mb="5">
            <Text fontSize="10" fontWeight="bold" color="coolGray.800">
              {item.linkType}
            </Text>
            <Link
              mt="1"
              href="https://nativebase.io"
              _text={{
                color: "darkText.200",
                fontSize: "xs",

                textDecorationLine: "none",
              }}
            >
              {item.linkText}
            </Link>
          </VStack>
        );
      })}
    </Box>
  );
}
