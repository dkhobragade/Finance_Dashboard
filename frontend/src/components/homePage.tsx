import { Box, Container, Grid } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import StartBox from "./startBox"
import Tranasation from "./tranasation"
import CreditScore from "./creditScore"
import IncomeExpense from "./incomeExpense"
import { summaryData } from "../data/data"

const HomePage = () =>
{
    const isMobile = useMediaQuery( '(max-width: 768px)' );

    return <Container strategy="block" w="100%" h="100%" size="100%"
        style={ { borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px' } }
    >
        <Box>
            <Grid>
                <Grid.Col span={ isMobile ? 12 : 9 }>
                    <Grid>
                        { summaryData.map( ( item, index ) => (
                            <Grid.Col span={ isMobile ? 12 : 4 } key={ index }>
                                <StartBox { ...item } />
                            </Grid.Col>
                        ) ) }

                        <Grid.Col span={ 12 }>
                            <IncomeExpense />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={ isMobile ? 12 : 3 }>
                    <Grid>
                        <Grid.Col span={ 12 }>
                            <Tranasation />
                        </Grid.Col>
                        <Grid.Col span={ 12 }>
                            <CreditScore />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Box>
    </Container>


}

export default HomePage