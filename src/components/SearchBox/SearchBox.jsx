import React from "react";
import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.containerSearch}>
    <input
      type="text"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      className={styles.input}
    />
    </div>
  );
};

export default SearchBox;