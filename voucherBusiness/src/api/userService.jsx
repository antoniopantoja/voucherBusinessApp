
import BASE_API from '../apiConfig';

export default {

    getAllproducts: async (id, TokenAccess) => {

        const req = await fetch(`${BASE_API}/allproducts`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, TokenAccess })
        });
        const json = await req.json();
        return json;
    }    
};

