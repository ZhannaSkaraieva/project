import { Box } from "@mui/material";
import React from "react";
import { LogoGroup } from "./logogroup";

export const Header: any = () => {
    return (
        <Box component="section"
            sx={{
                width: '1366px',
                height: '74px',
            }}>
            <LogoGroup/>
        </Box>
    )
}