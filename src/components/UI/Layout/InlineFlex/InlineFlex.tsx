import React from 'react'
import styles from './InlineFlex.module.css'

interface IInlineFlexProp {
  style?: React.CSSProperties
}

const InlineFlex = (props: React.PropsWithChildren<IInlineFlexProp>) => {
  return (
    <div style={props.style}
      className={styles.inlineFlex__wrapper}>
      {props.children}
    </div>
  )
}

export default InlineFlex