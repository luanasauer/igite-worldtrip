import { Flex, Text } from "@chakra-ui/react"

export function Banner() {

    return (

        <Flex
            w="100%"
            h="500px"
            align="center"
            // justify="center"
            //  direction="column"
            bgImage="url('./../images/ContinentImage.svg')"
            //bgPosition="100% 100%"
            //bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="right"
        >
            <Text fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Europa</Text>


        </Flex >


    );
}