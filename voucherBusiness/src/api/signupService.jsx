import BASE_API from '../apiConfig';

export default {

    NewRegister: async (documento, email, nome, uri) => {

        const req = await fetch(`${BASE_API}/users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ documento, email, nome, uri })
        });
        const json = await req.json();
        return json;
    }
};

