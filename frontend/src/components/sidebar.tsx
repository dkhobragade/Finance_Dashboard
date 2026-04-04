import
{
    Box,
    Text,
    Stack,
    Group,
    Divider,
    UnstyledButton,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    faHouse,
    faArrowRightArrowLeft,
    faCreditCard,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
    { label: "Home", icon: faHouse, active: true },
    { label: "Transaction", icon: faArrowRightArrowLeft },
    { label: "Payment", icon: faCreditCard, badge: 12 },
];

const bottomItems = [
    { label: "Log out", icon: faRightFromBracket },
];


const SidebarItem = ( { label, icon, active }: any ) =>
{
    return (
        <UnstyledButton
            style={ {
                width: "100%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: active ? "#eef0ff" : "transparent",
                transition: "0.2s",
            } }
        >
            <Group justify="space-between">
                <Group gap="sm">
                    <FontAwesomeIcon icon={ icon } size="xs" />
                    <Text size="xs">{ label }</Text>
                </Group>
            </Group>
        </UnstyledButton>
    );
};

// Sidebar Component
const Sidebar = () =>
{
    return (
        <Box
            w="100%"
            h="100vh"
            p="xs"
            style={ {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            } }
        >
            <Stack gap="md">
                <Box>
                    <Text size="10px" c="dimmed" mb="xs">
                        MAIN MENU
                    </Text>

                    <Stack gap="xs">
                        { menuItems.map( ( item, i ) => (
                            <SidebarItem key={ i } { ...item } />
                        ) ) }
                    </Stack>
                </Box>

                <Divider />
            </Stack>
            <Stack gap="xs">
                { bottomItems.map( ( item, i ) => (
                    <SidebarItem key={ i } { ...item } />
                ) ) }
            </Stack>
        </Box>
    );
};

export default Sidebar;