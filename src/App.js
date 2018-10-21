import React, { Component } from 'react';

import './normalize.css';
import './App.css';
import Todo from './to-do-list/to-do.js';


class App extends Component {
    constructor() {
        super();

        this.deleteTask = this.deleteTask.bind(this);
        this.toggleCheckedStatus = this.toggleCheckedStatus.bind(this);

        this.state = {
            tasks: {
                1: {
                    checked: false,
                    completed: false,
                    name: 'First Example Task',
                    id: 1847369
                },
                2: {
                    checked: true,
                    completed: false,
                    name: 'Second Example Task',
                    id: 7305738
                },
                3: {
                    checked: false,
                    completed: true,
                    name: 'A Completed Task',
                    id: 1109343
                },
                4: {
                    checked: false,
                    completed: false,
                    name: 'Generic Task',
                    id: 9376680
                }
            }
        }
    }

    /**
     * Delete the requested task
     * @param {Number} taskObjectKey - The key referring to the task to delete
     */
    deleteTask(taskObjectKey) {
        const updatedTasks = {...this.state.tasks};
        delete updatedTasks[taskObjectKey];
        this.setState({
            tasks: updatedTasks
        })
    }

    toggleCheckedStatus(taskObjectKey) {
        console.log('CHECKED - TODO');

        const updatedTasks = {...this.state.tasks};
        updatedTasks[taskObjectKey].checked = !updatedTasks[taskObjectKey].checked;

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
