
import React, { useRef, useState } from "react";
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
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


export default function ContinetsSlide() {

    return (

        <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
            <Swiper

                navigation={true}
                pagination={{ clickable: true }}
                style={{ width: '100%', flex: '1' }}
            >

                <SwiperSlide>América do Norte</SwiperSlide>
                <SwiperSlide>América do Sul</SwiperSlide>
                <SwiperSlide>Ásia</SwiperSlide>
                <SwiperSlide>África</SwiperSlide>
                <SwiperSlide>Oceania</SwiperSlide>
                <SwiperSlide >
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('./../images/ContinentImage.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href="/continent">
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>Teste</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper >
        </Flex >

    )
}