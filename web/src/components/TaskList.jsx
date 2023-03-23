import { Button, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskList() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    const loadTask = async () => {
        try {
            const res = await fetch('http://localhost:4000/tasks');
            const data = await res.json();
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    const hadleDelete = async id => {
        try {
            await fetch(`http://localhost:4000/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // loadTask();
            setTasks(tasks.filter(item => item.od !== id));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadTask();
    }, []);

    return (
        <>
            <h1>Task list</h1>
            {tasks.map(item => (
                <Card key={item.od} style={{ marginBottom: '.7rem', backgroundColor: '#1e272e' }}>
                    <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ color: 'white' }}>
                            <Typography>{item.title}</Typography>
                            <Typography>{item.description}</Typography>
                        </div>
                        <div>
                            <Button variant='contained' color='inherit' onClick={() => navigate(`/tasks/${item.od}/edit/`)}>
                                Edit
                            </Button>
                            <Button
                                variant='contained'
                                color='warning'
                                onClick={() => hadleDelete(item.od)}
                                style={{ marginLeft: '.5rem' }}
                            >
                                Delete
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}
