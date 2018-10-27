import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'
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

        return tasks.map((task) => {
            const completedClass = task.completed ? styles.isCompleted : '';
            const taskId = task.id;

            return (
                <div className={`${styles.task} ${completedClass}`} key={taskId}>
                    <label className={styles.hiddenLabel} htmlFor={taskId} />
                    <div className={styles.checkbox}>
                        <input id={taskId}
                               type="checkbox"
                               onChange={() => this.props.checkboxChange(taskId)}
                               checked={task.checked} />
                    </div>
                    <div className={styles.name}>{task.name}</div>
                    <div className={styles.delete} onClick={() => this.props.deleteSingleTask(taskId)}>X</div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <CSSTransitionGroup
                    transitionName="slide"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {this.renderTasks()}
                </CSSTransitionGroup>

                <button onClick={this.props.deleteCheckedTasks}>Remove</button>
            </div>
        )
    }
}

/**
 * Define prop types
 */
Todo.propTypes = {
    tasks: PropTypes.array.isRequired
};


export default Todo;