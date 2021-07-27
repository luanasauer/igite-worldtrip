import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";


export function ContinentSection() {
    return (
        <Flex>
            <Container>
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia,
                a Europa geralmente divide-se da
                Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
                o Cáucaso, e o mar Negro a sudeste
            </Container>
            {/* <Container maxW="xl" centerContent>
                <Box padding="4" bg="gray.100" maxW="3xl">
                    There are many benefits to a joint design and development system. Not only
                    does it bring benefits to the design team.
                </Box>
            </Container> */}


            < Grid templateColumns="repeat(3, 1fr)" gap={115}  >
                <Box align="center" >
                    <Text m="15" fontSize="24px"  >50</Text>
                    <Text m="15" fontSize="24px"  >países</Text>
                </Box>
                <Box align="center">

                    <Text m="15" fontSize="24px" >60</Text>
                    <Text m="15" fontSize="24px"  >linguas</Text>

                </Box>
                <Box align="center">
                    <Text m="15" fontSize="24px"  >27</Text>
                    <Text m="15" fontSize="24px" >cidades</Text>
                </Box>


            </Grid >


        </Flex>
    )
}