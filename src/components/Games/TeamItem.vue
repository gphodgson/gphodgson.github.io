<template>
    <div class="team-img" v-on:click="$emit('attempt-selection', team.id)">
        <span v-if="finished || inGame && !scoreSide" class="score">{{ team.goals }}</span>
        <img v-bind:src="require(`../../../res/${team.staticData.img}`)"
             v-bind:class="{selected: this.selected, predicted: this.predicted}"
             />
        <span v-if="finished || inGame && scoreSide" class="score">{{ team.goals }}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    props:[
        "team",
        "finished",
        "inGame",
        "selected",
        "predicted",
        "scoreSide"
    ],
}
</script>

<style scoped>
    .team-img{
        display:flex;
        align-items: center;
    }
    img{
        width:100px;
        padding: 5px
    }
    .score{
        margin:10px;
        font-size: 3em;
    }
    .selected{
        border: 2px solid rgb(0, 0, 0);
        border-radius: 5%;
    }

    .predicted{
        border: 3px solid rgb(51, 133, 255);
        border-radius: 5%;
    }

</style>