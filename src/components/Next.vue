<template>
    <div class="next">
       <a href="/conferencia">
          Siguiente
       </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}

</script>

<style>
.next {
  background-color:#1db954;  
  width: 100%;
  border-radius: 4px;
  transition: .2s ease;
}
.next:hover {
  background-color:rgb(26, 126, 61); 
}
@media (max-width: 860px) {
  .next {  
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
}
.next a {
    padding: 1rem;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    color: white;
    font-size: 20px;
}
</style>
