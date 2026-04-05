import { Box, Container, Grid } from "@mantine/core"
import StartBox from "./startBox"
import Tranasation from "./tranasation"
import CreditScore from "./creditScore"
import IncomeExpense from "./incomeExpense"
import { summaryData } from "../data/data"

const HomePage = () =>
{
    return <Container strategy="block" w="100%" h="100%" size="100%"
        style={ { borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px' } }
    >
        <Box>
            <Grid>
                <Grid.Col span={ 9 }>
                    <Grid>
                        { summaryData.map( ( item, index ) => (
                            <Grid.Col span={ 4 } key={ index }>
                                <StartBox { ...item } />
                            </Grid.Col>
                        ) ) }

                        <IncomeExpense />
                    </Grid>
                </Grid.Col>
                <Grid.Col span={ 3 }>
                    <Grid>
                        <Tranasation />
                        <CreditScore />
                    </Grid>
                </Grid.Col>
            </Grid>
        </Box>
    </Container>


}

export default HomePage