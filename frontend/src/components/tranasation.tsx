import
{
    Box,
    Divider,
    Group,
    ScrollArea,
    Stack,
    Text,
} from "@mantine/core";
import { useStore } from "../store/useStore";

const TransactionItem = ( { name, time, amount }: any ) =>
{
    return (
        <Group justify="space-between">
            <Stack gap={ 0 }>
                <Text fw={ 600 } size="xs">
                    { name }
                </Text>
                <Text size="xs" c="dimmed">
                    { time }
                </Text>
            </Stack>

            <Text fw={ 600 } size="xs" c={ amount < 0 ? "red" : "green" }>
                { amount < 0 ? "-" : "+" }${ Math.abs( amount ).toFixed( 2 ) }
            </Text>
        </Group>
    );
};

const Transaction = () =>
{
    const transactions = useStore( ( s ) => s.transactions ); // ✅ FIX

    return (
        <Box w="100%" p={ 10 } bdrs={ 10 } bd="1px solid #e5e5e5">
            <Text size="xs" fw={ 700 }>
                Recent Transaction
            </Text>

            <Divider my="xs" />

            <ScrollArea
                p={ 10 }
                h={ 300 }
                mt="xs"
                scrollbarSize={ 2 }
                scrollHideDelay={ 0 }
            >
                <Stack>
                    { transactions.length > 0 ? (
                        transactions.map( ( txn ) => (
                            <TransactionItem key={ txn.id } { ...txn } />
                        ) )
                    ) : (
                        <Text size="xs" c="dimmed" ta="center">
                            No transactions yet
                        </Text>
                    ) }
                </Stack>
            </ScrollArea>
        </Box>
    );
};

export default Transaction;