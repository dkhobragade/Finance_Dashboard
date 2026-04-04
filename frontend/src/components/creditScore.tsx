import { DonutChart } from "@mantine/charts";
import { Box, Text, Stack } from "@mantine/core";
import { creditData } from "../data/data";

const CreditScore = () =>
{
    return (
        <Box
            bdrs={ 20 }
            p={ 10 }
            w="100%"
            h={ 150 }
            bd="1px solid #e5e5e5"
            style={ {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
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
            <Text size="xs" fw={ 700 }>
                Credit Score
            </Text>
            <Stack align="center" gap={ 4 }>
                <DonutChart
                    data={ creditData }
                    thickness={ 18 }
                    // tooltipDataSource="segment"
                    paddingAngle={ 2 }
                    startAngle={ 180 }
                    endAngle={ 0 }
                    chartLabel={ 900 }
                />
            </Stack>
        </Box>
    );
};

export default CreditScore;