const { createApp } = Vue;

const App = createApp({
  data() {
    return {
      todoList: [],
      newTask: {
        todo: "",
        done: false,
      },
    };
  },

  methods: {
    fetchToDoList() {
      axios.get("../backend/api/get-list.php").then((res) => {
        console.log(res.data);
        this.todoList = res.data;
      });
    },

    addTask() {
      const task = this.newTask;
      this.newTask.todo = "";

      const data = {
        params: {
          newTask,
        },
      };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      axios.post("../backend/api/get-list.php", data, params);
    },
  },

  mounted() {
    this.fetchToDoList();
  },
});
App.mount("#app");
