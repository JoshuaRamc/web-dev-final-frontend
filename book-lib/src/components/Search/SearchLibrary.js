import React, { useState } from "react";
import Card from "./BookCard";
import axios from "axios";
import './styles.css';
const SearchLibrary = () => {
	const [search, setSearch] = useState("");
	const [bookData, setData] = useState([]);
	const searchBook = (evt) => {
		axios
			.get(
				"https://www.googleapis.com/books/v1/volumes?q=" +
					search +
					"&key=AIzaSyAGX87cdFiNL82Y2_Ez1zuDXnrm-y53Cto" +
					"&maxResults=40"
			)
			.then((res) => setData(res.data.items))
			.catch((err) => console.log(err));
	};
	return (
		<>
			<div className='header-search'>
				<div className='row1'>
					<h1>Book Finder</h1>
				</div>
				<div className='row2'>
					<div className='search'>
						<input
							type='text'
							placeholder='Enter Your Book Name'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button onClick={searchBook}>Search</button>
					</div>
					<img src='./images/bg2.png' alt='' />
				</div>
			</div>

			<div className='container'>{<Card book={bookData} />}</div>
		</>
	);
};
export default SearchLibrary;
