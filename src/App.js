import React, { Component } from 'react';

import './normalize.css';
import './App.css';
import Todo from './to-do-list/to-do.js';


class App extends Component {
    constructor() {
        super();

        this.deleteTask = this.deleteTask.bind(this);
        this.getTaskIndex = this.getTaskIndex.bind(this);
        this.toggleCheckedStatus = this.toggleCheckedStatus.bind(this);

        this.state = {
            tasks: [
                {
                    checked: false,
                    completed: false,
                    name: 'First Example Task',
                    id: 1847369
                },
                {
                    checked: true,
                    completed: false,
                    name: 'Second Example Task',
                    id: 7305738
                },
                {
                    checked: false,
                    completed: true,
                    name: 'A Completed Task',
                    id: 1109343
                },
                {
                    checked: false,
                    completed: false,
                    name: 'Generic Task',
                    id: 9376680
                }
            ]
        }
    }

    /**
     * Delete the requested task
     * @param {Number} taskId - ID number of the task
     */
    deleteTask(taskId) {
        const updatedTasks = [...this.state.tasks];

        updatedTasks.splice(this.getTaskIndex('id', taskId), 1);

        this.setState({
            tasks: updatedTasks
        });
    }

    /**
     * Returns the index of the task with the id matching taskId.
     * @returns {number} - The index of the provided task
     */
    getTaskIndex(key, value) {
        if (key === 'id' && isNaN(value)) {
            throw Error(`number expected but ${typeof value} given`);
        }

        const tasks = this.state.tasks;

        for(let i = 0; i < tasks.length; i++) {
            console.log(tasks[i][key], value);
            if (tasks[i][key] === value) {
                console.log('Matching');
                return i;
            }
        }

        throw Error(`Task ID ${value} not found`);
    }

    toggleCheckedStatus(taskId) {
        const updatedTasks = [...this.state.tasks];

        // todo: Toggle checked status

        this.setState({
            tasks: updatedTasks
        })
    }

    render() {
        return (
            <div className="container">
                <Todo tasks={this.state.tasks} delete={this.deleteTask} checkboxChange={this.toggleCheckedStatus} />
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
