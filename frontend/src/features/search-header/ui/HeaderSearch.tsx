import { useHeaderSearch } from '../model'

export function HeaderSearch() {
  const { open, query, setQuery, inputRef, handleIconClick, handleSubmit } =
    useHeaderSearch()

  return (
    <>
      <div
        data-id="search-expander"
        className="header-controls-pic header-controls-search"
        onClick={handleIconClick}
        role="button"
        aria-label="Поиск"
      />
      <form
        data-id="search-form"
        className={`header-controls-search-form form-inline${open ? '' : ' invisible'}`}
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          className="form-control"
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  )
}
