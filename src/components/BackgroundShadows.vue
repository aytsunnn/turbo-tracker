<template>
  <div class="bg-shadows">
    <div
      v-for="(circle, i) in circles"
      :key="i"
      class="shadow-circle"
      :style="circleStyle(circle)"
    />
  </div>
</template>

<script setup lang="ts">
type Circle = {
  x: number
  y: number
  w: number
  h: number
  color: string
  opacity: number
  blur: number
}

const props = defineProps<{
  circles: Circle[]
  offsetX?: number
  offsetY?: number
}>()

const circleStyle = (c: Circle) => ({
  left: `${c.x - (props.offsetX ?? 0)}px`,
  top: `${c.y - (props.offsetY ?? 0)}px`,
  width: `${c.w}px`,
  height: `${c.h}px`,
  background: c.color,
  opacity: c.opacity,
  filter: `blur(${c.blur}px)`,
})
</script>

<style scoped>
.bg-shadows {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.shadow-circle {
  position: absolute;
  border-radius: 50%;
}
</style>
