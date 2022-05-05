import { useState } from 'react'
import styles from './Header.module.scss'

function Header() {
  const [searchValue, setSearchValue] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    
    setSearchValue(event.target.value)
  }

  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.brand}>Anime</span>
          <input className={styles.search} type="text" placeholder="Search..." value={searchValue} onChange={handleChange} />
          <ul className={styles.menu}>
            <li>
              <a href="https://">Navegar</a>
            </li>
            <li>
              <a href="https://">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default  Header