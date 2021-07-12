import { createStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { IToDo } from "@/types";

export default createStore({
  state: {
    tasks: [] as IToDo[],
  },
  mutations: {
    insertTask (state, task: IToDo) {
      state.tasks.push(task);
    },
    removeTask(state, taskId: IToDo['id']){
      const taskIndex = state.tasks.findIndex(
        (task: IToDo) => task.id === taskId,
      );
      if(taskIndex >= 0){
        state.tasks.splice(taskIndex, 1);
      }
    },
    updateTask(state, taskDetails: {id: IToDo['id'], status: IToDo['status']}){
      const taskIndex = state.tasks.findIndex(
        (task: IToDo) => task.id === taskDetails.id,
      );
      if(taskIndex >= 0){
        state.tasks[taskIndex].status = taskDetails.status;
      }
    }
  },
  actions: {
    getTasks(context){
      axios.get<IToDo[]>('tasks').then((res) => {
        const tasks = res.data.filter(task => task.status !== 'canceled');
        tasks.forEach(task => {
        context.commit('insertTask',task);
        });
      });
    },
    insertTask (context,taskName: string) {
      
      const newTask = {
        id: uuidv4(),
        title: taskName,
        status: 'waiting'
      }

      axios.post('tasks', newTask).then(() => {
        context.commit('insertTask',newTask);
      });
    },
    deleteTask(context, taskId: IToDo['id']) {

      axios
        .patch(`tasks/${taskId}`, {
          status: 'canceled',
        })
        .then(() => {
          context.commit('removeTask', taskId);
        });
    },
    updateTask(context, task: {taskId: string, isCompleted: boolean}) {
      const taskStatus = task.isCompleted ? 'completed' : 'waiting';
      
      axios.patch(`tasks/${task.taskId}`, {
        status: taskStatus,
      }).then(() => {
        const taskDetails = {
          id: task.taskId,
          status: taskStatus
        };
        context.commit('updateTask', taskDetails);
      });
    },
  },
  modules: {},
});
