import { Box, Grid, Flex, Text, Divider } from "@mantine/core";
import { useStore } from "../store/useStore";

export const Header = () =>
{
    const activePage = useStore( ( s ) => s.activePage );
    const isAdmin = useStore( ( s ) => s.isAdmin ); // 👈 get role

    const renderCurrentPageName = () =>
    {
        if ( activePage === "payment" )
        {
            return "payment";
        } else if ( activePage === "transaction" )
        {
            return "transaction";
        }
        return "dashboard";
    };

    return (
        <Box>
            <Grid p={ 2 }>
                <Grid.Col span={ 3 }>
                    <Text>Welcome back</Text>
                    <Text size="xs" fw={ 700 }>
                        Welcome to { renderCurrentPageName() }
                    </Text>
                </Grid.Col>

                <Grid.Col span={ 9 } align="center">
                    <Flex justify="flex-end" align="center" gap="md">
                        <Box
                            style={ {
                                padding: "5px",
                                backgroundColor: "ButtonHighlight",
                                borderRadius: "50%",
                            } }
                        >
                            <Text fw={ 700 }>
                                { isAdmin ? "AD" : "NU" }
                            </Text>
                        </Box>
                    </Flex>
                </Grid.Col>
            </Grid>
            <Divider color="blue" />
        </Box>
    );
};