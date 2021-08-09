import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Cities from "../../components/Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentSection } from "../../components/ContinentSection";
import { api } from "../../services/api";

interface MostVisitedCitiesProps {
    id: number,
    name: string,
    country: string,
    image: string,
    countryIcon: string
}

interface ContinentProps {
    data: {
        id: string,
        name: string,
        title: string,
        urlImg: string;
        description: string,
        countries: number,
        languages: number,
        mostVisitedCities: MostVisitedCitiesProps[]
    }
}


export default function Continent({ data }: ContinentProps) {
    return (
        <Flex w="100%" direction="column" align="center" justify="center" marginBottom="8">

            <ContinentBanner name={data.name} urlImg={data.urlImg} />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
                <ContinentSection
                    mostVisitedCities={data.mostVisitedCities}
                    countries={data.countries}
                    languages={data.languages}
                    description={data.description} />

                <Cities
                    mostVisitedCities={data.mostVisitedCities} />
            </Flex>
        </Flex >
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await api.get('/continents')
    const continents = response.data

    const paths = continents.map((continent) => ({
        params: { id: continent.id }
    }))
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params;
    const { data } = await api.get(`/continents/${id}`);

    console.log(data)
    return {
        props: {
            data
        }
    }
}