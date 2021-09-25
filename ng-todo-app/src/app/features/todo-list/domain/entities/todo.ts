export class Todo {
    id: number
    text: string
    status: boolean
    static count = 0

    constructor(text: string, id: number=Todo.count++,  status: boolean=false){
        this.id = id
        this.text = text
        this.status = status
    }

    static mapJson(json):Todo{
        return new Todo(json.id, json.text, json.status)
    }

}