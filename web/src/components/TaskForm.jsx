import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function TaskForm() {
    const navigation = useNavigate();
    const params = useParams();

    const [task, setTask] = useState({
        title: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);

    const handleChange = env => {
        const { name, value } = env.target;
        setTask({ ...task, [name]: value });
    };

    const loadTask = async id => {
        const res = await fetch(`http://localhost:4000/tasks/${id}`);
        const data = await res.json();
        setTask({ title: data.title, description: data.description });
        setEditing(true);
    };

    const handleSubmit = async env => {
        try {
            env.preventDefault();
            setLoading(true);

            if (editing)
                await fetch(`http://localhost:4000/tasks/${params.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(task),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            else
                await fetch('http://localhost:4000/tasks', {
                    method: 'POST',
                    body: JSON.stringify(task),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

            setLoading(false);
            navigation('/');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) loadTask(params.id);
    }, []);

    return (
        <Grid container alignItems='center' justifyContent='center' direction='column'>
            <Grid item xs={3}>
                <Card sx={{ mt: 5 }} style={{ backgroundColor: '#1e272e', margin: '.5rem 0' }}>
                    <Typography variant='5' textAlign='center' color='white'>
                        {editing ? 'Edit' : 'Create'} Task
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant='filled'
                                label='Write your title'
                                sx={{ display: 'block', margin: '.5rem 0' }}
                                inputProps={{ style: { color: 'white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}
                                onChange={handleChange}
                                name='title'
                                value={task.title}
                            />
                            <TextField
                                variant='filled'
                                label='Write your description'
                                multiline
                                rows={4}
                                sx={{ display: 'block', margin: '.5rem 0' }}
                                inputProps={{ style: { color: 'white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}
                                onChange={handleChange}
                                name='description'
                                value={task.description}
                            />
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                disabled={loading || !task.title || !task.description}
                            >
                                {loading ? <CircularProgress color='inherit' size={23} /> : editing ? 'Edit' : 'Save'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
