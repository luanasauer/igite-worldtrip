
import { Box, Center, Text } from "@chakra-ui/react"
import Banner from "../components/Banner"
import ContinetsSlide from "../components/ContinentsSlide"
import TravelTypes from "../components/TravelTypes"

export default function Home() {
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
      <ContinetsSlide></ContinetsSlide>

    </>
  )
}
