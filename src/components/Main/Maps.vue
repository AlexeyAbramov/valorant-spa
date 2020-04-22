<template>
  <div class="maps">
    <h3 class="content-title">
      Valorant Maps
    </h3>
    <ul>
      <li>
        <img src="../../img/Maps/Bind.jpg" alt="" />
        <p>Bind</p>
      </li>
      <li>
        <img src="../../img/Maps/Haven.jpg" alt="" />
        <p>Haven</p>
      </li>
      <li>
        <img src="../../img/Maps/Split.jpg" alt="" />
        <p>Split</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  position: absolute;
  z-index: 0;
  bottom: 0;
  width: 100%;

  font-weight: bold;
  text-align: center;

  color: #999ba4;
  background-color: transparent;
}
p::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 240px;
  z-index: -1;
  left: 0;
  bottom: -16px;
  background: linear-gradient(0deg, #000, transparent);
}
p:hover {
  color: #000;
}
p:hover::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 300px;
  z-index: -1;
  left: 0;
  bottom: -16px;
  background: rgb(249, 247, 251);
  background: linear-gradient(
    0deg,
    rgba(249, 247, 251, 0.6418942577030813) 0%,
    rgba(239, 237, 241, 0.4150035014005602) 31%,
    rgba(73, 73, 74, 0.3085609243697479) 83%,
    rgba(19, 19, 19, 0.10968137254901966) 100%
  );
}
ul {
  display: flex;
  flex-wrap: wrap;

  padding-right: 150px;
}
li {
  position: relative;
  overflow: hidden;

  width: 17%;
  height: 300px;
  min-width: 200px;
  margin: 15px 0 0 30px;

  border-radius: 5px;
  border: 1px solid #ff465457;
}

li:hover {
  cursor: pointer;
}
img {
  position: absolute;
  z-index: 0;
  width: 300%;
  left: -50px;

  background-color: transparent;
}
</style>
