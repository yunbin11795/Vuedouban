<template>
    <div class="show" >
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<style scoped>
  .show .content{
    display: flex;
    align-items: center;
    height: 100%;
    flex-flow: row wrap;
    justify-content: space-around;
    padding-bottom: 16px;
  }
  .show:after{
    content: '';
    display: block;
    height: 24px;
    background: #f4f4f4;
  }
  .show .title h3{
    display: flex;
    height: 78px;
    font-size: 28px;
    font-weight: bold;
    justify-content: flex-start;
    align-items: center;
  }
</style>
