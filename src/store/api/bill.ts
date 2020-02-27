const API_PATH = process.env.REACT_APP_API_PATH;

export const fetchBillsRequest = async () => {
	try {
		const result = await fetch(`${API_PATH}/bills/`);
		const data = await result.json();
		
		return data;
	} catch(e) {
		throw(e);
	}
}

export const removeBillByIdRequest = async (id: string) => {
	try {
		await fetch(`${API_PATH}/bills/${id}`, {
			method: 'PATCH',
		});
	} catch(e) {
		throw(e);
	}
}