import { useHeaderSearch } from '../model'
import { Input } from '../../../shared/ui/input'
import styles from './HeaderSearch.module.css'

export function HeaderSearch() {
  const { open, query, setQuery, inputRef, handleIconClick, handleSubmit } =
    useHeaderSearch()

  return (
    <>
      <div
        data-id="search-expander"
        className={styles.icon}
        onClick={handleIconClick}
        role="button"
        aria-label="Поиск"
      />
      <form
        data-id="search-form"
        className={`${styles.form} ${open ? '' : styles.formHidden}`}
        onSubmit={handleSubmit}
      >
        <Input
          ref={inputRef}
          className={styles.input}
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  )
}
