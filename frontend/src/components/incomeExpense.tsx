import { LineChart } from "@mantine/charts";
import { incomeExpensedata } from "../data/data";
import { Box, Text, SegmentedControl, Group } from "@mantine/core";
import { useState } from "react";

const IncomeExpense = () =>
{
    const [ filter, setFilter ] = useState( "7d" );

    const getFilteredData = () =>
    {
        if ( filter === "7d" ) return incomeExpensedata.slice( -7 );
        if ( filter === "month" ) return incomeExpensedata;
        return incomeExpensedata;
    };

    return (
        <Box w="100%" bd="1px solid #e5e5e5" p={ 10 } bg="white" bdrs={ 10 }>
            <Group justify="space-between" mb="xs">
                <Text fw={ 600 } size="xs" >Income vs Expense</Text>
                <SegmentedControl
                    size="xs"
                    value={ filter }
                    onChange={ setFilter }
                    data={ [
                        { label: "7 Days", value: "7d" },
                        { label: "Month", value: "month" },
                    ] }
                />
            </Group>

            <LineChart
                h={ 300 }
                data={ getFilteredData() }
                dataKey="date"
                curveType="natural"
                withDots={ false }
                tickLine="none"
                withYAxis
                withLegend
                valueFormatter={ ( value ) => `$${ value }` }
                legendProps={ { verticalAlign: "top", height: 40 } }
                series={ [
                    { name: "income", color: "green.6" },
                    { name: "expense", color: "red.6" },
                ] }
            />
        </Box>
    );
};

export default IncomeExpense;