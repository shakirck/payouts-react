const Search = (props: SearchProps) => {
  const placeholder = props.placeholder ?? "Search";
  const searchClassname = props.backgroundClass?"search search-background-grey":"search";
  return (
    <div className="search-container">
      <form action="" className="search-form">
        <div className={searchClassname}>
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="search"
            className="search-input"
            placeholder={placeholder}
          />
        </div>
      </form>
    </div>
  );
};
export default Search;

type SearchProps = {
  placeholder?: string;
  backgroundClass?: boolean;
};
