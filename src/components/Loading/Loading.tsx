import {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";

const Loading: FC = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , paddingTop: 20}}>
            <CircularProgress/>
        </Box>
    );
};

export {Loading};