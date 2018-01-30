<template>
<div data-aeris-metadata-ui-card>
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'aeris-metadata-ui-card'
}
</script>
<style>
[data-aeris-metadata-ui-card] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  word-break: break-all;
  width: 16em;
  padding: 1em;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  background: #FEFEFE;
}
</style>
