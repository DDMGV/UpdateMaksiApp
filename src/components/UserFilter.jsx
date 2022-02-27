import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/select/MySelect";

const UserFilter = ({filter, setFilter}) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={e => {
					console.log({
						filter,
						val: e.target.value
					});
					setFilter({...filter, query: e.target.value})
				}}
				placeholder="Поиск пользователя"
			/>
			<MySelect
				value={filter.sort}
				onChange={val => {setFilter ({...filter, sort: val})}}
				options={[
					{value: 'id', name: 'По ID', dafault: true},
					{value: 'name', name: "По ФИО"},
					{value: 'phone', name: "По индексу"}, 
					{value: 'zipcode', name: "Под адресу"}
				]}
			/>
		</div>
	);
};

export default UserFilter;