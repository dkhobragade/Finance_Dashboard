import
{
    Box,
    Text,
    Stack,
    Group,
    TextInput,
    NumberInput,
    Button,
    Avatar,
    ScrollArea,
} from "@mantine/core";
import { useState } from "react";
import { recentContacts } from "../data/data";
import { useStore } from "../store/useStore";
import { useMantineTheme } from "@mantine/core";

const PaymentPage = () =>
{
    const [ selectedUser, setSelectedUser ] = useState<any>( null );
    const [ amount, setAmount ] = useState<number | string>( "" );
    const [ success, setSuccess ] = useState( "" );
    const theme = useMantineTheme();

    const addTransaction = useStore( ( s ) => s.addTransaction );

    const handleSend = () =>
    {
        if ( !selectedUser || !amount ) return;

        const newTxn = {
            id: Date.now(),
            name: selectedUser.name,
            time: "Just now",
            amount: -Number( amount ),
        };

        addTransaction( newTxn );

        setSuccess( `Sent $${ amount } to ${ selectedUser.name }` );

        setAmount( "" );
        setSelectedUser( null );

        setTimeout( () =>
        {
            setSuccess( "" );
        }, 3000 );
    };

    return (
        <Box p="md">
            <Text fw={ 700 } mb="md">
                Send Money
            </Text>

            <Group align="flex-start" grow>
                <Box p="md" bd={ `1px solid ${ theme.colors.gray[ 3 ] }` } bdrs={ 10 }>
                    <Stack>
                        <Text size="sm" fw={ 600 }>
                            Transfer Details
                        </Text>

                        { selectedUser && (
                            <Group>
                                <Avatar src={ selectedUser.avatar } />
                                <Text size="sm">{ selectedUser.name }</Text>
                            </Group>
                        ) }

                        <TextInput
                            label="Recipient Email"
                            placeholder="Enter email"
                            value={ selectedUser?.email || "" }
                            onChange={ ( e ) =>
                                setSelectedUser( {
                                    ...selectedUser,
                                    email: e.currentTarget.value,
                                } )
                            }
                        />

                        <NumberInput
                            label="Amount"
                            placeholder="Enter amount"
                            value={ amount }
                            onChange={ setAmount }
                            min={ 0 }
                        />

                        <Button onClick={ handleSend } fullWidth>
                            Send Money
                        </Button>

                        { success && (
                            <Text size="xs" c="green" ta="center">
                                { success }
                            </Text>
                        ) }
                    </Stack>
                </Box>

                <Box p="md" bd={ `1px solid ${ theme.colors.gray[ 3 ] }` } bdrs={ 10 } w={ 250 }>
                    <Text size="sm" fw={ 600 } mb="sm">
                        Recent Contacts
                    </Text>

                    <ScrollArea h={ 250 }>
                        <Stack gap="xs">
                            { recentContacts.map( ( user ) => (
                                <Group
                                    key={ user.id }
                                    p={ 5 }
                                    style={ {
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                    } }
                                    onClick={ () => setSelectedUser( user ) }
                                    onMouseEnter={ ( e ) =>
                                        ( e.currentTarget.style.background = "#f5f6ff" )
                                    }
                                    onMouseLeave={ ( e ) =>
                                        ( e.currentTarget.style.background = "transparent" )
                                    }
                                >
                                    <Avatar src={ user.avatar } size="sm" />
                                    <Box>
                                        <Text size="xs" fw={ 500 }>
                                            { user.name }
                                        </Text>
                                        <Text size="xs" c="dimmed">
                                            { user.email }
                                        </Text>
                                    </Box>
                                </Group>
                            ) ) }
                        </Stack>
                    </ScrollArea>
                </Box>
            </Group>
        </Box>
    );
};

export default PaymentPage;