<template>
  <div class="search">
    <h2 class="title">指南列表</h2>
    <div class="search-box">
      <Input class="search" search placeholder="Enter something..." />
    </div>
    <div class="list">
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  /* background-color: orange; */
}
.title {
  height: 40px;
  color: #000000;
  text-align: left;
  padding: 10px 20px;
}
.search-box {
  width: 100%;
  height: 40px;
  padding-right: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.search-box .search {
  width: 300px;
}
</style>