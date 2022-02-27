import { useMemo } from "react";

const extractCompareFunction = (sortField) => {
	switch (sortField) {
		case 'id':
			return (userA, userB) => {
				if (userA.id > userB.id) 
					return 1
				if (userA.id < userB.id) 
					return -1
				return 0;
			}
		case 'zipcode':
			return (userA, userB) => {
				let variantA = userA.address[sortField].match(/\d{5}/);
				let variantB = userB.address[sortField].match(/\d{5}/);
				if (variantA > variantB) 
					return 1
				if (variantA < variantB) 
					return -1
				return 0;
			}
		default:
			return (userA, userB) => {
				let variantA = userA[sortField];
				let variantB = userB[sortField];
				return variantA.localeCompare(variantB);
			}
	}
}

export const useSortedUsers = (users, sort) => {

	const sortedUsers = useMemo( () => {
		if(!sort) 
			return users;
		const compare = extractCompareFunction(sort);
		return [...users].sort( (userA, userB) => {
			return compare(userA, userB);
		})
	}, [sort, users])
		
	return sortedUsers;
}

export const useUsers = (users, sort, query) => {
	const sortedUsers = useSortedUsers(users, sort);

	const sortedAndSearchedUsers = useMemo( () => {
			return sortedUsers.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedUsers])

	return sortedAndSearchedUsers;
}