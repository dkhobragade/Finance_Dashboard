import { Container } from "@mantine/core"
import { Header } from "./header"

const Main = () =>
{
    return <Container strategy="block" w="100%" h="100vh" size="100%" color="red" bg="red"
        style={ { borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px' } }
    >
        <Header />
    </Container>


}

export default Main