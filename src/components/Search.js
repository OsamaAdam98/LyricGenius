import React, {useState} from "react";
import {withRouter} from "react-router-dom";

function Search(props) {
	const [searchState, setSearchState] = useState("");

	const direction = `/inquiry/${searchState}`;

	const handleChange = (event) => {
		const {value} = event.target;
		setSearchState(value);
	};

	const handleSubmit = (event) => {
		if (searchState.trim()) props.history.push(direction);
		else {
			event.preventDefault();
		}
	};

	return (
		<React.Fragment>
			<form className="form-inline" onSubmit={handleSubmit}>
				<input
					className={`form-control mr-sm-2`}
					type="search"
					placeholder="Search.."
					value={searchState}
					onChange={handleChange}
				/>
				<button
					onClick={handleSubmit}
					className={`form-control btn btn-outline-light`}
				>
					Search
				</button>
			</form>
		</React.Fragment>
	);
}

export default withRouter(Search);
