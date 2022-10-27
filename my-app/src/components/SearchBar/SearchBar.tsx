import {
	SearchBarContainer,
	SearchBarIcon,
	SearchBarInput,
} from "./SearchBar.styles";

type SearchBarProps = {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.setSearchTerm(event.target.value);
	};
	return (
		<SearchBarContainer>
			<SearchBarIcon />
			<SearchBarInput
				type='text'
				placeholder='Search a Contact'
				value={props.searchTerm}
				onChange={(event) => handleChange(event)}
			/>
		</SearchBarContainer>
	);
};

export default SearchBar;
