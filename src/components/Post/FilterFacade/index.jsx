import Filter from "../Filter";
import Sort from "../Sort";
import classModule from "./index.module.css";
export default function FilterFacade({
  sort,
  sortValue,
  filter,
  filterChanged,
}) {
  return (
    <div className={classModule["filter__wrapper"]}>
      <Sort value={sortValue} valueChanged={sort}></Sort>
      <Filter value={filter} valueChanged={filterChanged}></Filter>
    </div>
  );
}
