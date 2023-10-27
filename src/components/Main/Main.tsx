import { Button, Paper, Stack, styled, TextField } from '@mui/material';
import React, { useState } from 'react';
import { ProductLine } from './ProductLine/ProductLine';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

export function Main() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const updateTodoList = () => {
    const newArray = [...todoList, todo];
    setTodoList(newArray);
    setTodo('');
    console.log(newArray);
  };
  const removeItem = (i: number) => {
    const newArray = [...todoList];
    newArray.splice(i, 1);
    setTodoList(newArray);
    console.log(newArray);
  };
  const setTodoItem = (e: any) => {
    setTodo(e.target.value);
  };
  return (
      <Paper>
        <Stack spacing={2} gap={3}>
          <Stack gap={2} flexDirection={'row'}>
            <TextField
                id="outlined-basic"
                label="Type..."
                variant="outlined"
                value={todo}
                onChange={setTodoItem}
            />
            <Button onClick={updateTodoList} variant="contained">
              Add
            </Button>
          </Stack>

          <Stack spacing={2}>
            {todoList.map((item, index) => (
                <Item
                    key={index}
                    sx={{
                      my: 1,
                      mx: 'auto',
                      p: 2,
                    }}
                >
                  <ProductLine item={item} onRemove={() => removeItem(index)}/>
                </Item>
            ))}
          </Stack>
        </Stack>
      </Paper>
  );
}
