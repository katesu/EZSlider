<template>
  <Carousel
    v-bind:autoplay="true"
    v-bind:loop="true"
    v-bind:autoplay-timeout="5000"
    v-bind:per-page="1"
    v-bind:mouse-drag="true"
    v-bind:pagination-enabled="false"
  >
    <Slide v-for="(item, index) in displayBanner" v-bind:key="item[index]">
      <img
        v-bind:src="item.imagePath"
        style="width: 100%; margin-bottom: -0.5rem"
        v-on:click="item.onClick()"
      />
    </Slide>
  </Carousel>
</template>

<script setup>
import { ref } from 'vue';
import { Carousel, Slide } from 'vue-carousel';

const props = defineProps({
  bannerData: Array,
});
const displayBanner = props.bannerData.map((item) =>{
  return {
    isShow: true,
    imagePath: getBannerPath(item.a, item.b),
    onClick: () => {
      console.log('click bannarA');
    },
  }

})

;

const getBannerPath = (filePath, fallBackFilePath) => {
  const bannerPath = isBannerExist(folder, filePath)
    ? filePath
    : fallBackFilePath;
  return require(`${bannerPath}`);
};

const isBannerExist = (filePath) => {
  try {
    // test if file exists
    require(`${filePath}`);
    return true;
  } catch (e) {
    return false;
  }
};
</script>

<style scoped>
button {
  width: 200px;
  height: 50px;
}
</style>
