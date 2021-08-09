
import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

interface MostVisitedCitiesProps {
    id: number,
    name: string,
    country: string,
    image: string,
    countryIcon: string
}
interface CitiesProps {
    mostVisitedCities: MostVisitedCitiesProps[]
}


export default function Cities({ mostVisitedCities }: CitiesProps) {
    return (
        <>
            <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
            <Grid
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={['20px', '45px']}
                alignItems="center"
                justifyContent="center"
                px={["30px", "0"]}>
                {mostVisitedCities.map(city => (
                    <City
                        id={city.id}
                        name={city.name}
                        country={city.country}
                        countryIcon={city.countryIcon}
                        image={city.image}
                    />
                ))}
            </Grid>
        </>
    )
}