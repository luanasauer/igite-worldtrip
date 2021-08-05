
import { Box, Center, Text } from "@chakra-ui/react"
import React from "react";
import { useEffect, useState } from "react";
import Banner from "../components/Banner"
import ContinentsSlide from "../components/ContinentsSlide";
import TravelTypes from "../components/TravelTypes"
import { api } from "../services/api";

interface ContinentResponseProps {
  id: string;
  name: string;
  urlImg: string;
  title: string;

}
export default function Home() {

  const [continents, setContinents] = useState<ContinentResponseProps[]>([]);

  useEffect(() => {
    api.get<ContinentResponseProps[]>('continents').then(response => {
      setContinents(response.data);
    });
  }, []);


  return (
    <>

      <Banner></Banner>
      <TravelTypes></TravelTypes>
      <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.700" my={["9", "20"]} />
      <Center m="20" >
        <Text fontWeight={500} fontSize="36px" align="center">
          Vamos nessa?<br />
          Então escolha seu continente

        </Text>
      </Center>

      <ContinentsSlide

        continents={continents} />

    </>
  )
}
