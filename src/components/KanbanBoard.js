import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import AddTaskForm from './AddTaskForm';

const KanbanBoard = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const [searchTerm, setSearchTerm] = useState('');

  const onDragEnd = result => {
    // Handle drag and drop logic here
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="kanban-board">
      <h1>Kanban Board</h1>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <AddTaskForm />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          {['To Do', 'In Progress', 'Peer Review', 'Done'].map(status => (
            <Column key={status} status={status} tasks={filteredTasks.filter(task => task.status === status)} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
