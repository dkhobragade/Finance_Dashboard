import
{
    Box,
    Button,
    TextInput,
    PasswordInput,
    Text,
    Stack,
    Divider,
    Image,
} from "@mantine/core";
import { useState } from "react";
import { useStore } from "../store/useStore";
import googleIcon from "../../public/google.jpg";

const LoginPage = () =>
{
    const login = useStore( ( s ) => s.login );

    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ error, setError ] = useState( "" );

    const handleLogin = ( e?: any ) =>
    {
        if ( e ) e.preventDefault();

        if ( !email || !password )
        {
            setError( "Email and Password cannot be empty" );
            return;
        }

        if ( email === "admin@gmail.com" )
        {
            login( true );
        } else
        {
            login( false );
        }

        setError( "" );
    };

    return (
        <Box
            h="100vh"
            style={ {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            } }
        >
            <form onSubmit={ handleLogin }>
                <Stack w={ 300 } gap="md">
                    <Box>
                        <Text fw={ 700 } size="lg">
                            Welcome back 👋
                        </Text>
                        <Text size="sm" c="dimmed">
                            Start managing your finances faster and better
                        </Text>
                    </Box>

                    <TextInput
                        size="xs"
                        label="Email"
                        placeholder="Enter email"
                        value={ email }
                        onChange={ ( e ) => setEmail( e.currentTarget.value ) }
                    />

                    <PasswordInput
                        size="xs"
                        label="Password"
                        placeholder="Enter password"
                        value={ password }
                        onChange={ ( e ) => setPassword( e.currentTarget.value ) }
                    />

                    { error && (
                        <Text size="xs" c="red">
                            { error }
                        </Text>
                    ) }

                    <Button size="xs" fullWidth type="submit">
                        Login
                    </Button>

                    <Divider my="xs" label="or" labelPosition="center" />

                    <Button
                        size="xs"
                        leftSection={ <Image src={ googleIcon } w={ 20 } h={ 20 } /> }
                        fullWidth
                        variant="default"
                    >
                        Google
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default LoginPage;