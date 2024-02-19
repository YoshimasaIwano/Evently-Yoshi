import { useContext } from "react";
import { SearchConditionsContext } from "../../contexts/SearchConditionsContext";

export const useSearchConditions = () => {
    return useContext(SearchConditionsContext)
}