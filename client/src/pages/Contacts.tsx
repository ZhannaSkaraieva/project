import { Container } from "@mui/material";
import React from "react";

export const Contacts = () => {
    return (
        <Container maxWidth={false}
            sx={{
                width: '1366px',
                height: '768px',
                background: 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
            }}>
        <div>
            <h1>Contacts Page</h1>
            <p>This is the contacts page where you can manage your contacts.</p>
        </div></Container>
    );
}