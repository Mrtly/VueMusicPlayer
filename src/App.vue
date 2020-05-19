<template>
  <div id="app">   
  <main>
    <div class="header">
       <h3>tunesss</h3>
       <p>icon</p>
     </div>
    <section class="player">
      <h2 class="title"> {{ current.title }} - <span>{{ current.artist }}</span></h2>
      <div class="control">
        <button class="prev" @click="prev"> previous </button>
        <button class="paus" v-if="!isPlaying" @click="play"> play</button>
        <button class="play" v-else @click="pause"> pause</button>
        <button class="next" @click="next"> next </button>
      </div>
    </section>
    <section class="playlist">
      <h4> playlist </h4>
      <li v-for="song in songs" 
      :key="song.src" 
      @click="play(song)" 
      :class="(song.src == current.src) ? 'song playing' : 'song'">
      <button>{{ song.title }} - {{ song.artist }}</button>
      </li>
    </section>
    <img :src="current.image" /> 
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
        src: require('./assets/the_richest_man_in_babylon.mp3'),
        image: "https://picsum.photos/300/?random=1"
        },
        {title: 'Until the morning',
        artist: 'Thievery Corporation',
        src: require('./assets/until_the_morning.mp3'),
        image: "https://picsum.photos/300/?random=2"
        }
      ],
      player: new Audio(),

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
     next () {
      this.index++;
      if (this.index > this.songs.legth -1) {
        this.index = 0
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    }, 
    prev () {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.legth - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    this.player.play();
  }
}
</script>

<style lang="scss">
$lilac: #785589;
$yolk: #fac748;
$lapis: #1561a8;
$off-white: #f2f4f5;
$raisin: #272727;

*{
  margin: 0;
  padding: 0;
}
body {
  font-size: 1.2em
}
</style>
