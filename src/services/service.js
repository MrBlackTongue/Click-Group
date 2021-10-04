export default class Service {

    _apiBase = 'http://185.246.64.43:8080'

    getResource  = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json()
    }

    getAllPlants = async () => {
        const res = await this.getResource(`/input/rest/filter/plants`)
        return res
    }

    getAllTasks = async () => {
        const res = await this.getResource(`/input/rest/filter/tasks`)
        return res
    }

}