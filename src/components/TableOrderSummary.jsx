import React from "react";
import {Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";

class TableOrderSummary extends React.Component{

    render() {
        return(
            <Box style={{width:"fit-content",borderColor:"black",boxShadow:"inherit",borderBlockColor:"black"}}>
                <div><p style={{float:"left"}}>Email</p></div>
                <div><p style={{float:"left"}}> Name</p></div>
                <div><p style={{float:"right"}}>OrderId</p></div>
            </Box>

        )
    }

}
export default TableOrderSummary;