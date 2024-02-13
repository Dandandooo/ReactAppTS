import * as React from "react";

import { OrdersTable, Header} from "../components";

function Orders() {
    return (
        <div>
            <Header />
            <div style={{marginTop: "100px"}}>
                <OrdersTable />
            </div>
        </div>
    );
}

export default Orders;