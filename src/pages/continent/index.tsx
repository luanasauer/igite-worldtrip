import { Box } from "@chakra-ui/react"
import Cities from "../../components/Cities"
import { ContinentBanner } from "../../components/ContinentBanner"
import { ContinentSection } from "../../components/ContinentSection"


export default function Continent() {

    return (
        <Box>
            <ContinentBanner></ContinentBanner>
            <ContinentSection />
            <Cities></Cities>
        </Box>

    )

}

