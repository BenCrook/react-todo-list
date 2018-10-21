import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './todo.module.css';

/**
 * To do list, consists of a wrapper, heading (list name) and tasks
 */
class Todo extends Component {
    constructor() {
        super();

        this.renderTodos = this.renderTodos.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
    }

    /**
     * Renders the to-do markup, returns false if there are no tasks in the task list
     * @returns {*}
     */
    renderTodos() {
        return this.props.data.map((todo) => {
            // Only render if tasks exist
            if (todo.tasks.length) {
                return (
                    <div className={styles.tasks} key={todo.id}>
                        <h2>{todo.name}</h2>
                        {this.renderTasks(todo.tasks, todo.id)}
                    </div>
                )
            }

            return false;
        })
    }

    /**
     * Renders the tasks.
     * @param {Array} tasks - An array of tasks consisting of 'completed', 'id' and 'name'
     * @param {string} taskListId - Task list ID
     * @returns {*}
     */
    renderTasks(tasks, taskListId) {
        return tasks.map((task) => {
            const completedClass = task.completed ? styles.isCompleted : '';
            return (
                <div className={`${styles.task} ${completedClass}`} key={task.id}>
                    <label className={styles.hiddenLabel} htmlFor={task.id} />
                    <div className={styles.checkbox}><input id={task.id} type="checkbox" onChange={this.props.checkboxChange} checked={task.checked} /></div>
                    <div className={styles.name}>{task.name}</div>
                    <div className={styles.delete} onClick={() => this.props.delete(taskListId, task.id)}>X</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

/**
 * Define prop types
 */
Todo.propTypes = {
    data: PropTypes.array.isRequired
};


export default Todo;