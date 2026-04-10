<template>
    <div>
        <img v-show="isImgVisivel" :src="urlImg" :width="widthImg"/>
        <br>
        <button @click="apareceEsconde(), trocalabel()">{{ nomeBotao }}</button>
    </div>

</template>


<script>
export default{
    name: "ImagemComponent",
    data() {
        return {
            isImgVisivel : false,
            nomeBotao: "Aparecer",
        };
    },
    methods: {
        apareceEsconde(){
            this.isImgVisivel = !this.isImgVisivel;
            this.$emit("visibilidadeImg", this.isImgVisivel)
        },
        trocalabel(){
            if(this.isImgVisivel){
                this.nomeBotao = "Esconder";
            }else{
                this.nomeBotao = "Aparecer";
            }
        },
    },
    props : {
        urlImg: String,
        widthImg: Number,
    },
    emits: ["visibilidadeImg"],
};
</script>

<style scoped>
    img {
        border: 10px solid darkgoldenrod;
        border-radius: 16px;
    
    }
</style>