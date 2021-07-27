import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({


    components: {
        Divider: {



            // 2. We can add a new button size or extend existing
            sizes: {
                xl: {
                    h: "56px",
                    fontSize: "lg",
                    px: "32px",

                },
            },
        },
    },


    colors: {

        gray: {
            "700": "#47585B",
            "500": "#999999",
            "400": "rgba(153, 153, 153, 0.5)",
            "300": "#DADADA",
            "100": "#F5F8FA"


        }
    },

    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },

    styles: {
        global: {
            body: {

                //bg: 'gray.900',
                //color: 'gray.50'
            }
        }
    }
})