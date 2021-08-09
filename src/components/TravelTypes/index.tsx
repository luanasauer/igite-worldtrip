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