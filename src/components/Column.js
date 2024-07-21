import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Column = ({ status, tasks }) => (
  <div className="column">
    <h2>{status}</h2>
    <Droppable droppableId={status}>
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="task-list">
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default Column;
