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

const displayBanner = [
  {
    isShow: true,
    imagePath: getBannerPath('bannarA', `bannarA_EN.png``bannarA_EN.png`),
    onClick: () => {
      console.log('click bannarA');
    },
  },
];

const getBannerPath = (folder, fileName, fallBackFileName) => {
  const bannerName = isBannerExist(folder, fileName)
    ? fileName
    : fallBackFileName;
  return require(`@/assets/images/banners/${folder}/${bannerName}`);
};

const isBannerExist = (folder, fileName) => {
  try {
    // test if file exists
    require(`@/assets/images/banners/${folder}/${fileName}`);
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
