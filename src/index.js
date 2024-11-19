//import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';


const element = ( <section className="todoapp">
  <NewTaskForm />
  <section className="main">
    <TaskList />
    <Footer />
  </section>
</section>);

createRoot(document.querySelector('#root')).render(element)
