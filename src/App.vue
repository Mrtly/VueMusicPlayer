<template>
  <div id="app">
     <header>tunesss</header>
  <main>
    <section class="player">
      <h2 class="title"> {{ current.title }} - <span>{{ current.artist }}</span></h2>
      <div class="control">
        <button class="prev"> Previous</button>
        <button class="paus" v-if="!isPlaying" @click="play"> Play</button>
        <button class="play" v-else @click="pause"> Pause</button>
        <button class="next"> Next</button>
      </div>
    </section>
    <section class="playlist">
      <h4> playlist </h4>
      <button v-for="song in songs" 
      :key="song.src" 
      @click="play(song)" 
      :class="(song.src == current.src) ? 'song playing' : 'song'">
      {{ song.title }} - {{ song.artist }}
      </button>
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
        {title: 'The richest man in Babylon',
        artist: 'Thievery Corporation',
        src: require('./assets/the_richest_man_in_babylon.mp3')
        },
        {title: 'Until the morning',
        artist: 'Thievery Corporation',
        src: require('./assets/until_the_morning.mp3')
        }
      ],
      player: new Audio()
    }
  },
  methods: {
    play(song){
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
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
