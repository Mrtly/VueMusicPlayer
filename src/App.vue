<template>
  <div id="app">
     <header>tunesss</header>
  <main>
    <section class="player">
      <h2 class="title"> {{ current.title }} <span>{{ current.artist }}</span></h2>
      <div class="control">
        <button class="prev"> Previous</button>
        <button class="paus" v-if="!isPlaying"> Play</button>
        <button class="play" v-else> Pause</button>
        <button class="next"> Next</button>

      </div>
    </section>
  </main>
  </div>
</template>

<script>
 
export default {
  name: 'app', 
  data() { //this is like useState
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {title: 'the richest man in Babylon',
        artist: 'Thievery Corporation',
        src: require('./assets/the_richest_man_in_babylon.mp3')
        },
        {title: 'until the morning',
        artist: 'Thievery Corporation',
        src: require('./assets/until_the_morning-troni.mp3')
        }
      ],
      player: new Audio()
    }
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    this.player.play();
  }
}
</script>

<style>

</style>
