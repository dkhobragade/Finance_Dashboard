import
{
    Table,
    Group,
    Text,
    Box,
    ScrollArea,
    SimpleGrid,
} from "@mantine/core";
import { transactions } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../store/useStore";
import { SegmentedControl } from "@mantine/core";

const TransactionPage = () =>
{
    const filter = useStore( ( s ) => s.filter );
    const setFilter = useStore( ( s ) => s.setFilter );

    const totalIncome = transactions
        .filter( ( t ) => t.amount > 0 )
        .reduce( ( acc, t ) => acc + t.amount, 0 );

    const totalExpense = transactions
        .filter( ( t ) => t.amount < 0 )
        .reduce( ( acc, t ) => acc + t.amount, 0 );

    const filteredTransactions = transactions.filter( ( txn ) =>
    {
        if ( filter === "income" ) return txn.amount > 0;
        if ( filter === "expense" ) return txn.amount < 0;
        return true;
    } );

    const rows = filteredTransactions.map( ( txn ) =>
    {
        const isIncome = txn.amount > 0;

        return (
            <Table.Tr key={ txn.id }>
                <Table.Td>
                    <Group gap="sm">
                        <Box p={ 2 } bdrs={ 50 } bg={ isIncome ? "green.1" : "red.1" }>
                            <FontAwesomeIcon
                                icon={ isIncome ? faArrowUp : faArrowDown }
                                color={ isIncome ? "green" : "red" }
                                size="xs"
                            />
                        </Box>

                        <Box>
                            <Text size="sm" fw={ 500 }>{ txn.name }</Text>
                            <Text size="xs" c="dimmed">{ txn.time }</Text>
                        </Box>
                    </Group>
                </Table.Td>

                <Table.Td>
                    <Text size="sm" c="dimmed">
                        { isIncome ? "Income" : "Expense" }
                    </Text>
                </Table.Td>

                <Table.Td>
                    <Text fw={ 600 } c={ isIncome ? "green" : "red" }>
                        { isIncome ? "+" : "-" }${ Math.abs( txn.amount ).toFixed( 2 ) }
                    </Text>
                </Table.Td>
            </Table.Tr>
        );
    } );

    return (
        <Box p="md">

            <SimpleGrid cols={ 2 } mb="md">
                <Box
                    p="md"
                    bdrs={ 10 }
                    bd="1px solid #e5e5e5"
                    style={ {
                        cursor: 'pointer',
                        transition: "all 0.25s ease",
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
                        <Text size="sm" fw={ 700 } >Total Income</Text>
                        <FontAwesomeIcon icon={ faArrowUp } color="green" />
                    </Group>

                    <Text fw={ 700 } size="lg" mt="xs" c="green">
                        ${ totalIncome.toLocaleString() }
                    </Text>
                </Box>

                <Box
                    p="md"
                    bdrs={ 10 }
                    bd="1px solid #e5e5e5"
                    style={ {
                        cursor: 'pointer',
                        transition: "all 0.25s ease",
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
                        <Text size="sm" fw={ 700 }>Total Expense</Text>
                        <FontAwesomeIcon icon={ faArrowDown } color="red" />
                    </Group>

                    <Text fw={ 700 } size="lg" mt="xs" c="red">
                        ${ Math.abs( totalExpense ).toLocaleString() }
                    </Text>
                </Box>
            </SimpleGrid>

            <Group justify="space-between" mb="md">
                <Text fw={ 700 }>Transactions</Text>

                <SegmentedControl
                    size="xs"
                    value={ filter }
                    onChange={ ( value: any ) => setFilter( value ) }
                    data={ [
                        { label: "All", value: "all" },
                        { label: "Income", value: "income" },
                        { label: "Expense", value: "expense" },
                    ] }
                />
            </Group>
            <ScrollArea>
                <Table highlightOnHover withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Details</Table.Th>
                            <Table.Th>Type</Table.Th>
                            <Table.Th>Amount</Table.Th>
                        </Table.Tr>
                    </Table.Thead>

                    <Table.Tbody>{ rows }</Table.Tbody>
                </Table>
            </ScrollArea>
        </Box>
    );
};

export default TransactionPage;