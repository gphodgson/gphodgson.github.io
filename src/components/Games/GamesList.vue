<template>
    <div class="games">
        <div v-bind:key="game.id" v-for="game in games">
            <GameItem v-bind:game="game"/>
        </div>
    </div>
</template>

<script>
import GameItem from "./GameItem.vue";

export default {

    name: "GamesList",
    components: {
        GameItem
    },
    props:["games"]

}
</script>