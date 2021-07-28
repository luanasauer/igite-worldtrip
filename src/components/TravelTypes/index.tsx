// import { Box, Center, Divider, Flex, Grid, Image, Stack, StackDivider, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

// export default function TravelTypes() {
//     const isMobile = useBreakpointValue({
//         base: false,
//         sm: true
//     })
//     return (
//         <>
//             {isMobile ?
//                 <Center m="20">

//                     < Grid templateColumns="repeat(5, 1fr)" gap={115}  >
//                         <Box align="center" >
//                             <Image src="/images/cocktail.svg" />
//                             <Text m="15" fontSize="24px"  >vida noturna</Text>
//                         </Box>
//                         <Box align="center">
//                             <Image src="/images/surf.svg" />
//                             <Text m="15" fontSize="24px" >praia</Text>
//                         </Box>
//                         <Box align="center" >
//                             <Image src="/images/building.svg" />
//                             <Text m="15" fontSize="24px" >moderno</Text>
//                         </Box>
//                         <Box align="center" >
//                             <Image src="/images/museum.svg" />
//                             <Text m="15" fontSize="24px" >clássico</Text>
//                         </Box>
//                         <Box align="center" >
//                             <Image src="/images/earth.svg" />
//                             <Text m="15" fontSize="24px" >e mais...</Text>
//                         </Box>

//                     </Grid >


//                 </Center> :
//                 <Center>

//                     < Grid templateColumns="repeat(5, 1fr)" gap={115}  >
//                         <Box align="center" >
//                             <Text color="yellow.400" >•</Text>
//                             <Text m="15" fontSize="24px"  >vida noturna</Text>
//                         </Box>
//                         <Box align="center">
//                             <Text color="yellow.400" >•</Text>
//                             <Text m="15" fontSize="24px" >praia</Text>
//                         </Box>
//                         <Box align="center" >
//                             <Text color="yellow.400" >•</Text>
//                             <Text m="15" fontSize="24px" >moderno</Text>
//                         </Box>
//                         <Box align="center" >
//                             <Text color="yellow.400" >•</Text>
//                             <Text m="15" fontSize="24px" >clássico</Text>
//                         </Box>
//                         <Box align="center" >
//                             <Text color="yellow.400" >•</Text>
//                             <Text m="15" fontSize="24px" >e mais...</Text>
//                         </Box>

//                     </Grid >


//                 </Center>


//             }


//             <Center>
//                 <Image src="/images/Divider.svg" />
//             </Center>

//             <Center m="20" >
//                 <Text fontWeight={500} fontSize="36px" align="center">
//                     Vamos nessa?<br />
//                     Então escolha seu continente</Text>
//             </Center>
//         </>

//     )
// }

import { Grid, GridItem } from "@chakra-ui/react";
import Types from "./Types";

export default function TravelTypes() {

    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            w="100%"
            justifyContent="space-between"
            align="center"
            mt={["10", "32"]}
            mx="auto"
            maxWidth="1160px"
            gap={[1, 5]}
        >
            <GridItem>
                <Types icon="cocktail" text="vida noturna" />
            </GridItem>
            <GridItem>
                <Types icon="surf" text="praia" />
            </GridItem>
            <GridItem>
                <Types icon="building" text="moderno" />
            </GridItem>
            <GridItem>
                <Types icon="museum" text="clássico" />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Types icon="earth" text="e mais..." />
            </GridItem>
        </Grid>
    )
}