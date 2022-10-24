import { useState } from "react";
import {
	SearchBarContainer,
	SearchBarIcon,
	SearchBarInput,
} from "./SearchBar.styles";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<SearchBarContainer>
			<SearchBarIcon />
			<SearchBarInput
				type='text'
				placeholder='Search'
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			/>
		</SearchBarContainer>
	);
};

export default SearchBar;
