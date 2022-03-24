import PropTypes from 'prop-types'
import styles from './Button.module.css' // css can be modulized by React and Component.module.css file.

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
