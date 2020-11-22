<template>
    <div class="hero">
        <h2 class="hero-subtitle">Paso 1 de 2</h2>
        <h1 class="hero-title">Reporta tu asistencia</h1>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdSlTGRb71bUFjlWCIyVFsaMn5yVbiUg7l4CFlv_cmrPM4zJg/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        <Next />
    </div>
</template>

<script>
import Next from "~/components/Next"

export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  },
  components: {
    Next
  }
}
</script>

<style>
.hero {
    text-align: left;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.8;
    padding: 0;
    margin: 0 0 2rem 0;
}
</style>
