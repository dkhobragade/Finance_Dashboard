import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Group, Text } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

const StartBox = ( { title, amount, change, icon }: any ) =>
{
    const theme = useMantineTheme();

    return (
        <Box
            h={ 120 }
            w="100%"
            p={ 12 }
            bdrs={ 10 }
            style={ {
                border: `1px solid ${ theme.colors.gray[ 3 ] }`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
                cursor: "pointer",
            } }
            onMouseEnter={ ( e ) =>
            {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.08)";
            } }
            onMouseLeave={ ( e ) =>
            {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
            } }
        >
            <Group justify="space-between">
                <Group gap="xs">
                    <Box p={ 6 } bdrs={ 50 } bg="gray.1">
                        <FontAwesomeIcon icon={ icon } />
                    </Box>
                    <Text size="sm">{ title }</Text>
                </Group>
            </Group>

            <Group justify="space-between" align="center">
                <Text fw={ 700 } size="lg">
                    ${ amount.toLocaleString() }
                </Text>

                <Box
                    px={ 6 }
                    py={ 2 }
                    bdrs={ 6 }
                    bg={ change >= 0 ? "green.1" : "red.1" }
                >
                    <Text size="xs" c={ change >= 0 ? "green" : "red" }>
                        { change >= 0 ? "+" : "" }
                        { change }% last month
                    </Text>
                </Box>
            </Group>
        </Box>
    );
};

export default StartBox;