// api handler

interface authParams {
    username: string,
    email: string,
    password: string
}

class AuthServices {
    async registerUser({username, email, password}: authParams){
        const options = {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        }
        try {
            const response = await fetch("/api/v1/auth/register", options);
            if(response.ok){
                const data = await response.json()
                return data;
            }
        } catch (error: any) {
            console.log("AuthServices :: registerUser :: error", error);
        }
    }

    async login({username, email, password}: authParams){
        const options = {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username, email, password})
        }
        try {
            const response = await fetch("/api/v1/auth/login", options)
            if(response.ok){
                const data = await response.json()
                return data;
            }
        } catch (error: any) {
            console.log("AuthServices :: login :: error", error);
        }
    }

    async logout(){
        
    }
}

const authServices = new AuthServices()

export {authServices}