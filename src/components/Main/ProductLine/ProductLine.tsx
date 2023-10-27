import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

interface IProps {
    item: string;
    onRemove: () => void;
}

export function ProductLine({ item, onRemove }: IProps) {
    return (
        <Stack gap={2} flexDirection={'row'} justifyContent={'space-between'}>
            <Typography>{item}</Typography>
            <Button variant="contained" color="error" onClick={onRemove}>
                Remove
            </Button>
        </Stack>
    );
}
