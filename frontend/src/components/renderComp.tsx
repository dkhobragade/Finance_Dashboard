import { Box } from "@mantine/core";
import { useStore } from "../store/useStore";
import { Header } from "./header";
import HomePage from "./homePage";
import PaymentPage from "./paymentPage";
import TransactionPage from "./transactionPage";

const RenderComp = () =>
{
    const activePage = useStore( ( s ) => s.activePage );

    return (
        <Box p={ 5 }>
            <Header />
            <br />
            { activePage === "home" && <HomePage /> }
            { activePage === "transaction" && <TransactionPage /> }
            { activePage === "payment" && <PaymentPage /> }
        </Box>
    );
};

export default RenderComp;