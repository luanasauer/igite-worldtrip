import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Grid, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";


interface MostVisitedCitiesProps {
    id: number,
    name: string,
    country: string,
    image: string,
    countryIcon: string
}
interface ContinentSectionProps {

    description: string
    countries: number,
    languages: number,
    mostVisitedCities: MostVisitedCitiesProps[]
}
export function ContinentSection({ description, countries, languages, mostVisitedCities }: ContinentSectionProps) {
    return (
        <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]}>
            <Text
                fontSize={["lg", "xl", "xl", "2xl"]}
                color="gray.700"
                textAlign="justify"
            >
                {description}
            </Text>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        {countries}
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        países
                    </Text>
                </Flex>

                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        {languages}
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        linguas
                    </Text>
                </Flex>

                <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                    <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                        {mostVisitedCities.length}
                    </Heading>
                    <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                        cidades +100
                        <Tooltip
                            label="Cidades mais populares no ranking mundial de 100."
                            closeOnClick={false}
                            bg="light.500"
                            color="dark.300"
                            border="1px"
                            borderColor="highlight.400"
                            mt="0.625rem"
                            w="14.375rem"
                        >
                            <Icon
                                as={InfoOutlineIcon}
                                h={{ base: '.625rem', sm: '1rem' }}
                                w={{ base: '.625rem', sm: '1rem' }}
                                ml={{ base: '.312rem', sm: '.5rem' }}
                                cursor="pointer"
                                color="gray.400" />
                        </Tooltip>
                    </Text>
                </Flex>
            </Flex>
        </Grid >
    )
}