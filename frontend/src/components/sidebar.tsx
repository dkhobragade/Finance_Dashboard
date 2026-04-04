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
import { bottomItems, menuItems } from "../helper/helper";
import { useStore } from "../store/useStore";


const Sidebar = () =>
{


    const SidebarItem = ( { label, icon, value }: any ) =>
    {
        const activePage = useStore( ( s ) => s.activePage );
        const setActivePage = useStore( ( s ) => s.setActivePage );

        const isActive = activePage === value;


        return (
            <UnstyledButton
                onClick={ () => setActivePage( value ) }
                style={ {
                    width: "100%",
                    padding: "5px",
                    borderRadius: "10px",
                    backgroundColor: isActive ? "#eef0ff" : "transparent",
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