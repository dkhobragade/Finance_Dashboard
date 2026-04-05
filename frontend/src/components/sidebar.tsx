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
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useMantineTheme } from "@mantine/core";


const Sidebar = () =>
{
    const logout = useStore( ( s ) => s.logout );
    const isAdmin = useStore( ( s ) => s.isAdmin );
    const colorScheme = useStore( ( s ) => s.colorScheme );
    const toggleColorScheme = useStore( ( s ) => s.toggleColorScheme );
    const theme = useMantineTheme();

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
                    backgroundColor: isActive ? theme.colors.blue[ 0 ] : "transparent",
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

    const filteredMenuItems = menuItems.filter( ( item ) =>
    {
        if ( item.value === "payment" && !isAdmin ) return false;
        return true;
    } );

    return (
        <Box
            w="100%"
            h="100%"
            p="xs"
            style={ {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "100%",
            } }
        >
            <Stack gap="md">
                <Box>
                    <Text size="10px" c="dimmed" mb="xs">
                        MAIN MENU
                    </Text>

                    <Stack gap="xs">
                        { filteredMenuItems.map( ( item, i ) => (
                            <SidebarItem key={ i } { ...item } />
                        ) ) }
                    </Stack>
                </Box>

                <Divider />
            </Stack>

            <Stack gap="xs">
                <UnstyledButton
                    onClick={ toggleColorScheme }
                    style={ { padding: "5px" } }
                >
                    <Group gap="sm">
                        <FontAwesomeIcon
                            icon={ colorScheme === "dark" ? faSun : faMoon }
                            size="xs"
                        />
                        <Text size="xs">
                            { colorScheme === "dark" ? "Light Mode" : "Dark Mode" }
                        </Text>
                    </Group>
                </UnstyledButton>

                { bottomItems.map( ( item, i ) => (
                    <UnstyledButton
                        key={ i }
                        onClick={ logout }
                        style={ { padding: "5px" } }
                    >
                        <Group gap="sm">
                            <FontAwesomeIcon icon={ item.icon } size="xs" />
                            <Text size="xs">{ item.label }</Text>
                        </Group>
                    </UnstyledButton>
                ) ) }
            </Stack>
        </Box>
    );
};


export default Sidebar;