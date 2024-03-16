
export class Fetch {
    async fetchData(url:string){
        try {
            const response = await fetch(url)
            return await response.json()
        }catch (error) {
            console.error('error fetch data', error)
            return null
        }
    }
}