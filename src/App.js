import React, { Component } from 'react';

import './normalize.css';
import './App.css';
import Todo from './to-do-list/to-do.js';

const taskData = [
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
];


class App extends Component {
    constructor() {
        super();

        this.deleteSingleTask = this.deleteSingleTask.bind(this);
        this.deleteCheckedTasks = this.deleteCheckedTasks.bind(this);
        this.toggleCheckedStatus = this.toggleCheckedStatus.bind(this);

        this.state = {
            tasks: taskData
        }
    }

    /**
     * Delete a singular task
     * @param {Number} taskId - ID number of the task
     * todo: Improve confirmation messaging and use a modal not window.confirm
     */
    deleteSingleTask(taskId) {
        if (window.confirm('Are you sure you sure?')) {
            this.setState((state) => {
                return {
                    tasks: state.tasks.filter((loopedTask) => loopedTask.id !== taskId)
                }
            })
        }
    }

    /**
     * Deletes all tasks that are checked
     * todo: Improve confirmation messaging and use a modal not window.confirm
     */
    deleteCheckedTasks() {
        if (window.confirm('Are you sure you sure?')) {
            this.setState((state) => {
                return {
                    tasks: state.tasks.filter((loopedTask) => !loopedTask.checked)
                }
            });
        }
    }

    /**
     * Toggles the checked state of a task
     * @param {Number} taskId - ID number of a task
     */
    toggleCheckedStatus(taskId) {
        const updatedTasks = [...this.state.tasks];

        updatedTasks.forEach((loopedTask) => {
            if (loopedTask.id === taskId) {
                loopedTask.checked = !loopedTask.checked;
            }
        });

        this.setState({
            tasks: updatedTasks
        })
    }

    render() {
        return (
            <div className="container">
                <Todo tasks={this.state.tasks}
                      deleteSingleTask={this.deleteSingleTask}
                      deleteCheckedTasks={this.deleteCheckedTasks}
                      checkboxChange={this.toggleCheckedStatus} />
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
