import { Box, Grid, Flex, Text, Divider } from "@mantine/core";

export const Header = () =>
{
    return (
        <Box>
            <Grid p={ 2 }>
                <Grid.Col span={ 3 }>
                    <Text>
                        Welcome back
                    </Text>
                    <Text size="xs" >
                        Welcome to dashboard
                    </Text>

                </Grid.Col>
                <Grid.Col span={ 9 } align="center" >
                    <Flex justify="flex-end" align="center" gap="md">
                        <Box style={ { padding: '5px', backgroundColor: 'ButtonHighlight', borderRadius: "50%" } }>
                            <Text fw={ 700 }>
                                DK
                            </Text>
                        </Box>
                    </Flex>
                </Grid.Col>
            </Grid>
            <Divider color="blue" />
        </Box>
    );
};