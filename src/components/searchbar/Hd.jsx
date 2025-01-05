import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Suggestion from "../suggestion/Suggestion";
import useSearch from "@/src/hooks/useSearch";
import { useNavigate } from "react-router-dom";

function WebSearch() {
    const navigate = useNavigate();
    const {
        isSearchVisible,
        setIsSearchVisible,
        searchValue,
        setSearchValue,
        isFocused,
        setIsFocused,
        debouncedValue,
        suggestionRefs,
        addSuggestionRef,
    } = useSearch();

    const handleSearchClick = () => {
        setIsSearchVisible((prev) => !prev); // Toggle visibility
        if (searchValue.trim() && !isSearchVisible && window.innerWidth > 600) {
            navigate(`/search?keyword=${encodeURIComponent(searchValue)}`);
        }
    };

    return (
        <div className="flex items-center relative w-full">
            {/* Search Icon/Button */}
            <button
                className="bg-white p-2 focus:outline-none flex items-center justify-center"
                onClick={handleSearchClick}
            >
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-black text-lg hover:text-[#ffbade]"
                />
            </button>

            {/* Search Input Box (conditionally rendered) */}
            {isSearchVisible && (
                <div className="flex items-center relative w-full ml-2">
                    <input
                        type="text"
                        className="bg-white px-4 py-2 text-black focus:outline-none w-full rounded-md"
                        placeholder="Search anime..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => {
                            setTimeout(() => {
                                const isInsideSuggestionBox = suggestionRefs.current.some(
                                    (ref) => ref && ref.contains(document.activeElement),
                                );
                                if (!isInsideSuggestionBox) {
                                    setIsFocused(false);
                                }
                            }, 100);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && searchValue.trim()) {
                                navigate(`/search?keyword=${encodeURIComponent(searchValue)}`);
                            }
                        }}
                    />
                    {searchValue.trim() && isFocused && (
                        <div
                            ref={addSuggestionRef}
                            className="absolute z-[100000] top-full w-full"
                        >
                            <Suggestion keyword={debouncedValue} className="w-full" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default WebSearch;
