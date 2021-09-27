export class Todo {
    id: number
    text: string
    status: boolean

    constructor(text: string, id: number=0,  status: boolean=false){
        this.id = id
        this.text = text
        this.status = status
    }

    static mapJson(json):Todo{
        return new Todo(json.text, json.id, json.status)
    }

}