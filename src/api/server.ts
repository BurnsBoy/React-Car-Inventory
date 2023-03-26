const token = '47662da35bf42af05b9280593bbbe36d0e2acab28f563e5a'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://tame-aquatic-eagle.glitch.me/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'       
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://tame-aquatic-eagle.glitch.me/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'       
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://tame-aquatic-eagle.glitch.me/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',   
                'x-access-token': `Bearer ${token}`,  
                'Access-Control-Allow-Origin': '*'        
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },

    delete: async (id:string) => {
        console.log(`Deleting ${id}`);
        const response = await fetch(`https://tame-aquatic-eagle.glitch.me/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',   
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'                 
            }
        })
        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }
        return;
    }
}