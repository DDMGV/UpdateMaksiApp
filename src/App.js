import React, {useState, useEffect, useMemo} from "react";
import './styles/App.css';
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import axios from "axios";
import UserFilter from "./components/UserFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useUsers} from './hooks/useUsers';

function App() {
	const [users, setUsers] = useState([])
	const [checkedUserIds, setCheckedUserIds] = useState([])
	const [removed, setRemoved] = useState(false)
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)

	const checkUser = ({checked, user}) => {
		let newCheckedUserIds;
		if (checked) 
			newCheckedUserIds = [...checkedUserIds, user.id];
		else 
			newCheckedUserIds = checkedUserIds.filter(id => user.id !== id)
		setCheckedUserIds(newCheckedUserIds);
	}

	useEffect( () => {
		fetchUsers()
	}, [])

	const createUser = (newUser) => {
		setUsers( [...users, newUser])
		setModal( false)
	}

	async function fetchUsers() {
		const response = await axios.get( 'http://jsonplaceholder.typicode.com/users')
		setUsers(response.data)
	}

	const removeUsers = (user) => {
		setUsers(users.filter(user => !checkedUserIds.includes(user.id) ))
		setCheckedUserIds([]);
		setRemoved(false);
	}


	let userList = undefined;
	if (users && users.length > 0) {
		userList = <UserList 
						users={users}
						onChange={checkUser} 
						showCheckboxes={removed}
					/>
	}

	let removeAction = undefined;
	if (removed) {
		removeAction = (
			<div>
				<MyButton 
					onClick={() => {setRemoved(false)}}
				>
					Отмена
				</MyButton>
				<MyButton
					onClick={() => {removeUsers()}}
				>
					Удалить
				</MyButton>
			</div>
		)
	}
	else {
		removeAction = <MyButton onClick={() => {setRemoved(true)}}>
							Удалить
						</MyButton>
	}

	return (
		<div className="App">

			<div className="button" style={{marginTop: 30}} onClick={() => setModal( true)}>
			<span>Создать пользователя</span> 
			</div>
			<MyModal visible={modal} setVisible={setModal}>
				<UserForm create={createUser}/>
			</MyModal>

			<hr style={{margin: '15px 0'}}/>
			<div className="list-actions">
				<UserFilter 
					filter={filter} 
					setFilter={setFilter}
					className="list-actions-filter"
				/>	
				<div
					className="list-actions-remove"
				>
					{removeAction}	
				</div>
			</div>
			<h1 style={{textAlign: 'center'}}>
                {users.length > 0 ? 'Список пользователей' : 'Пользователи не найдены'} 
            </h1>
			{userList}
		</div>
	);
}

export default App;
