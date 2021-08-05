
import React from "react";
import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

//import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface ContinentResponseProps {
    id: string;
    name: string;
    urlImg: string;
    title: string;
}
interface ContinentProps {
    continents: ContinentResponseProps[];
}

export default function ContinentsSlide({ continents }: ContinentProps) {

    return (

        <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
            <Swiper

                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: '100%', flex: '1' }}
            >
                {continents.map(continent => (
                    <SwiperSlide key={continent.id} >
                        <Flex
                            w="100%"
                            h="100%"
                            align="center"
                            justify="center"
                            direction="column"
                            bgImage={continent.urlImg}
                            bgPosition="100% 40%"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            textAlign="center"
                        >
                            <Link href={`/continent/${continent.id}`}>
                                <a>
                                    <Heading
                                        fontSize={["3xl", "4xl", "5xl"]}
                                        color="gray.100"
                                        fontWeight="bold">
                                        {continent.name}
                                    </Heading>
                                    <Text
                                        fontWeight="bold"
                                        color="gray.300"
                                        fontSize={["0.8rem", "1xl", "2xl"]}
                                        mt={["2", "4"]}>{continent.title}
                                    </Text>
                                </a>
                            </Link>
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper >
        </Flex >

    )
}