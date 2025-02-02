import { Search } from "lucide-react";
import Form from "next/form";
import { Button } from "./ui/button";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action="/" className="search-form">
            <input
                name="query"
                className="search-input"
                placeholder="Search Startups"
                defaultValue={query}
            />
            <div className="flex gap-2">
                {query && <SearchFormReset />}
                <button type="submit" className="search-btn">
                    <Search className="size-5 text-white" />
                </button>
            </div>
        </Form>
    );
};
export default SearchForm;
