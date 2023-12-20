const Search = ({ val, onSearch, ...props }) => {
  return (
    <input
      className="form-control m-1"
      value={val}
      onChange={onSearch}
      placeholder="Search recipes by name"
    ></input>
  );
};
export default Search;
