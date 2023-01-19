<template>
    <div>make your predictions!</div>
    <GamesList v-bind:games="games"/>
</template>

<script>
    import Axios from 'axios'
    import GamesList from "./Games/GamesList.vue"
    import {StaticTeamData} from "../staticTeamData.js"
    const NHL_URI = "https://statsapi.web.nhl.com"

    export default {
    name: "MainPage",
    data() {
        return {
            games: []
        };
    },
    methods: {
        processGamesResponse(gamesData) {
            gamesData.forEach(e => {
                this.processGame(e.link);
            });
        },
        processGame(gameLink) {
            Axios.get(NHL_URI + gameLink)
                .then((response) => {
                const game = this.parseGame(response.data);
                this.games.push(game);
                this.games.sort((a, b) => new Date(a.startTime) - new Date(b.startTime))
            })
                .catch((error) => {
                console.error(error);
            });
        },
        parseGame(response) {
            let game = {
                id: response.gamePk,
                status: response.gameData.status.abstractGameState,
                startTime: response.gameData.datetime.dateTime,
                currentPeriod: response.liveData.linescore.currentPeriod,
                currentPeriodTimeLeft: response.liveData.linescore.currentPeriodTimeRemaining,
                teams: {
                    away: this.initTeam(response.liveData.boxscore.teams.away),
                    home: this.initTeam(response.liveData.boxscore.teams.home),
                }
            };

            if (game.teams.away.goals > game.teams.home.goals){
                game.teams.away.win = true;
            }else if (game.teams.away.goals < game.teams.home.goals){
                game.teams.home.win = true;
            }

            return game;
        },
        initTeam(teamData) {
            return {
                name: teamData.team.name,
                id: teamData.team.id,
                win: false,
                selected: false,
                goals: teamData.teamStats.teamSkaterStats.goals,
                staticData: teamData.team.id in StaticTeamData ? 
                    StaticTeamData[teamData.team.id] :
                    StaticTeamData[0]
            };
        }
    },
    created() {
        Axios.get(NHL_URI + "/api/v1/schedule")
            .then((response) => {
            this.processGamesResponse(response.data.dates[0].games);
        })
            .catch((error) => {
            console.error(error);
        });
    },
    components: { GamesList }
}
</script>
