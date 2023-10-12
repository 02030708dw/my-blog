<template>
  <img class="avatar-container" :src="url" :style="{width:daxiao+'px',height:daxiao+'px'}" alt="">
</template>

<script>
export default {
  props:{
    url: {
      type:String,
      required:true,
    },
    daxiao:{
      type:Number,
      default:150,
    }
  }
}
</script>

<style scoped>
.avatar-container{
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
</style>