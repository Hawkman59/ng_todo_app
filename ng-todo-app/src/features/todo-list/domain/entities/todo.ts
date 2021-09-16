export class Todo {
    static id: number
    text: string
    status: boolean

    constructor(text: string){
        Todo.id++
        this.text = text
        this.status = false
    }

}