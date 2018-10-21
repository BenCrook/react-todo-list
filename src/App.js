import React, { Component } from 'react';
import cloneDeep from 'lodash.clonedeep';

import './normalize.css';
import './App.css';
import Todo from './to-do-list/to-do.js';


class App extends Component {
    constructor() {
        super();

        this.deleteTask = this.deleteTask.bind(this);
        this.toggleCheckedStatus = this.toggleCheckedStatus.bind(this);

        this.state = {
            todos: [
                {
                    name: 'Ben\'s To Do List',
                    id: 'bens-list',
                    tasks: [
                        {
                            checked: false,
                            completed: false,
                            id: 1,
                            name: 'First Example Task'
                        },
                        {
                            checked: true,
                            completed: false,
                            id: 2,
                            name: 'Second Example Task'
                        },
                        {
                            checked: false,
                            completed: true,
                            id: 3,
                            name: 'A Completed Task'
                        }
                    ]
                },
                {
                    name: 'A Different Task List',
                    id: 'second-task-list',
                    tasks: [
                        {
                            checked: false,
                            completed: false,
                            id: 4,
                            name: 'Single Task'
                        }
                    ]
                }
            ]
        }
    }

    /**
     * Delete a task
     * @param {string} taskListId - Task list ID
     * @param {Number} taskId - The task ID
     */
    deleteTask(taskListId, taskId) {
        // Deep clone todos to avoiding directly mutating state
        const todos = cloneDeep(this.state.todos);

        // Filter out the task that should be removed
        const updatedTodos = todos.map((loopedTaskList) => {
            if (loopedTaskList.id === taskListId) {
                loopedTaskList.tasks = loopedTaskList.tasks.filter((loopedTask) => loopedTask.id !== taskId);
            }
            return loopedTaskList;
        });

        this.setState({
            todos: updatedTodos
        });
    }

    toggleCheckedStatus(tasklistId, taskId) {
        //todo: implement checked functionality
        console.log('CHECKED - TODO');
    }

    render() {
        return (
            <div className="container">
                <Todo data={this.state.todos} delete={this.deleteTask} checkboxChange={this.toggleCheckedStatus} />
                <ul>
                    <li>Container: To-do list</li>
                    <li>Component: To-do entry</li>
                    <ul>
                        <li>Component: To-do checkbox</li>
                        <li>Component: To-do text</li>
                        <li>Component: to-do delete</li>
                    </ul>
                    <li>Functionality: Multi-select</li>
                    <li>Functionality: Drag/Move</li>
                </ul>
            </div>
        );
    }
}

export default App;
