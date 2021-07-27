import { Box, Center, Divider, Flex, Grid, Image, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";

export default function TravelTypes() {
    return (
        <>

            <Center m="20">
                < Grid templateColumns="repeat(5, 1fr)" gap={115}  >
                    <Box align="center" >
                        <Image src="/images/cocktail.svg" />
                        <Text m="15" fontSize="24px"  >vida noturna</Text>
                    </Box>
                    <Box align="center">
                        <Image src="/images/surf.svg" />
                        <Text m="15" fontSize="24px" >praia</Text>
                    </Box>
                    <Box align="center" >
                        <Image src="/images/building.svg" />
                        <Text m="15" fontSize="24px" >moderno</Text>
                    </Box>
                    <Box align="center" >
                        <Image src="/images/museum.svg" />
                        <Text m="15" fontSize="24px" >clássico</Text>
                    </Box>
                    <Box align="center" >
                        <Image src="/images/earth.svg" />
                        <Text m="15" fontSize="24px" >e mais...</Text>
                    </Box>

                </Grid >


            </Center>

            <Center>
                <Image src="/images/Divider.svg" />
            </Center>

            <Center m="20" >
                <Text fontWeight={500} fontSize="36px" align="center">
                    Vamos nessa?<br />
                    Então escolha seu continente</Text>
            </Center>
        </>

    )
}