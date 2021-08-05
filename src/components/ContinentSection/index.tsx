import { Flex, Grid, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface ContinentSectionProps {

    description: string
    countries: number,
    languages: number,
}
export function ContinentSection({ description, countries, languages }: ContinentSectionProps) {
    return (
        <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]}>
            <Text
                fontSize={["lg", "xl", "xl", "2xl"]}
                color="gray.700"
                textAlign="justify"
            >
                {description}
            </Text>

            {/* < Grid templateColumns="repeat(3, 1fr)" gap={115}  >
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


            </Grid > */}
            <Flex alignItems="center" justifyContent="space-between">
                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        {countries}
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        Países
                    </Text>
                </Flex>

                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        {languages}
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        Linguas
                    </Text>
                </Flex>

                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        27
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        cidades +100

                        <Popover>
                            <PopoverTrigger>
                                {/* <span> */}
                                <Icon
                                    cursor="pointer"
                                    as={RiInformationLine}
                                    ml="1"
                                    color="gray.400"
                                    w={["10px", "16px"]}
                                    h={["10px", "16px"]} />
                                {/* </span> */}
                            </PopoverTrigger>
                            <PopoverContent bg="gray.700" color="yellow.400">
                                <PopoverArrow bg="gray.700" />
                                <PopoverCloseButton />
                                <PopoverBody fontWeight="400" fontSize="lg">Alvorada, Porto Alegre, Canoas</PopoverBody>
                            </PopoverContent>
                        </Popover>

                    </Text>
                </Flex>

            </Flex>


        </Grid >
    )
}