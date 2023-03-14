import React from 'react'
import styles from './ListColumn.module.css'


const ListColumn = (props: React.PropsWithChildren) =>{
  return (
      <div className={styles.listColumn}>{props.children}</div>
  )
}

export default ListColumn