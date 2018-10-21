import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './todo.module.css';

/**
 * To do list, consists of a wrapper, heading (list name) and tasks
 */
class Todo extends Component {
    constructor() {
        super();

        this.renderTasks = this.renderTasks.bind(this);
    }

    /**
     * Renders the tasks.
     * @returns {*}
     */
    renderTasks() {
        const tasks = this.props.tasks;

        return Object.keys(tasks).map((loopedTaskObjectKey) => {

            const task = tasks[loopedTaskObjectKey];
            const completedClass = task.completed ? styles.isCompleted : '';

            return (
                <div className={`${styles.task} ${completedClass}`} key={task.id}>
                    <label className={styles.hiddenLabel} htmlFor={task.id} />
                    <div className={styles.checkbox}><input id={task.id} type="checkbox" onChange={() => this.props.checkboxChange(loopedTaskObjectKey)} checked={task.checked} /></div>
                    <div className={styles.name}>{task.name}</div>
                    <div className={styles.delete} onClick={() => this.props.delete(loopedTaskObjectKey)}>X</div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.renderTasks()}
            </div>
        )
    }
}

/**
 * Define prop types
 */
Todo.propTypes = {
    tasks: PropTypes.object.isRequired
};


export default Todo;