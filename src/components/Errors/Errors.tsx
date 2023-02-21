import {FC} from 'react';
import {Button} from "@mui/material";

interface IProps {
    errors: any
}

const Errors: FC<IProps> = ({errors}) => {
    const error = (): void => {
        alert('info for developer console.log(errors)')
        console.log(errors)
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 20
        }}>
            <h4>{errors?.status_message}</h4>
            <Button onClick={error} variant="outlined" color="error">
                Error
            </Button>
        </div>
    );
};

export {Errors};