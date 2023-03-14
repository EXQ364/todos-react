import classnames from 'classnames'
import React from 'react'
import { ITodo } from '../../types/interfaces'
import styles from './TodoCard.module.css'

interface ITodoCard{
    todo: ITodo
}

const TodoCard= (props: React.PropsWithChildren<ITodoCard>) => {
    const todo = {...props.todo};
    return (
        <div className={classnames(styles.todoCard,
            todo.completed === true ? styles.done : styles.undone
        )} > {todo.title}</ div>
    )
}

export default TodoCard