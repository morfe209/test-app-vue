import axios from "axios";

const state = {
  listUser: []
};

const getters = {
  allUsers: state => state.listUser
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get("http://localhost:3000/users");
    commit("setUsers", response.data);
  },
  async addUser({ commit }, newUser) {
    const response = await axios.post("http://localhost:3000/users", {
      newUser
    });
    commit("newTodo", response.data);
  },
  async deleteUser({ commit }, id) {
    // await axios.delete(`http://localhost:3000/users/${id}`);
    commit("removeUser", id);
  },
  filterUserByName({ commit }, e) {
    const searchQuery = e.target.value;

    commit("filterUsers", searchQuery);
  },
  async editUser({ commit }, editUser) {
    const response = await axios.put(
      `localhost:3000/users/${editUser.id}`,
      editUser
    );

    console.log(editUser);

    commit("updateUser", editUser);
  }
};

const mutations = {
  setUsers: (state, users) => (state.listUser = users),
  // newUser: (state, user) => state.listUser.unshift(user),
  removeUser: (state, id) =>
    (state.listUser = state.listUser.filter(user => user.id !== id)),
  updateUser: (state, editUser) => {
    const index = state.listUser.findIndex(user => user.id === editUser.id);
    if (index !== -1) {
      state.listUser.splice(index, 1, editUser);
    }
  },
  filterUsers: (state, searchQuery) => {
    state.listUser = state.listUser.filter(
      m => m.name.toUpperCase().indexOf(searchQuery.toUpperCase()) > -1
    );
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
