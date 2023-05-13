const app = {
    title : 'Todo List',
    editTask: null,
    tasks: [
        {
            id: 1,
            title: 'Task 1',
            active: false,
        },
        {
            id: 2,
            title: 'Task 2',
            active: false,
        },
        {
            id: 3,
            title: 'Task 3',
            active: true,
        }
    ],
    addTask(){
        if(this.$refs.title.value.trim() === '') return

        this.tasks.push({
            id: this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id )) + 1 : 1,
            title: this.$refs.title.value,
            active: false,
        })

        this.$refs.title.value = ''
    },
    showTask(key){
        this.editTask = key
    },
    closeEdit(){
        this.editTask = null
    },
    updateTask(){
        this.tasks[this.editTask].title = this.$refs.edit_task.value
        this.closeEdit()
    },
    get calculateTasks(){
        let counter = 0
        this.tasks.map(task => {
            counter += !task.active ? 1 : 0
        })

        if(counter == 0 ){
            return '<span>Todas las tareas completadas 😍</span>'
        }

        return `<span>Tareas por realizar ${counter} de ${this.tasks.length} </span>`
    },
    doTask(key){
        this.tasks[key].active = !this.tasks[key].active
    },
    deleteTask(key){
        this.tasks.splice(key,1)
    }
}