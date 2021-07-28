import { Flex, Text } from "@chakra-ui/react"

export function ContinentBanner() {

    return (

        <Flex
            w="100%"
            h={["150px", "300px", "500px"]}
            px={["0", "0", "36"]}
            pt={["0", "0", "72"]}
            bgImage="url('./../images/ContinentImage.svg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            align="center"
            justify={["center", "center", "flex-start"]}
        >
            <Text textAlign={["center", "left"]}
                fontSize={["1.75rem", "5xl"]}
                color="gray.100"
                fontWeight="500">Europa</Text>

        </Flex >



    );
}