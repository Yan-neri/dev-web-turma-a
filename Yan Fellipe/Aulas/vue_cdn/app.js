const meuAppVue = {
    data() {
        return{
            nome: "Yan",
            idade: 19,
            inputText: "",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");