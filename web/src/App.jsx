import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskForm, TaskList, Navbar } from './components';
import { Container } from '@mui/material';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Container>
                <Routes>
                    <Route path='/' element={<TaskList />} />
                    <Route path='/tasks/new' element={<TaskForm />} />
                    <Route path='/tasks/:id/edit' element={<TaskForm />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}
