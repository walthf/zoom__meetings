<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h2 class="hero-subtitle">Paso 2 de 2</h2>
        <h1 class="contact-title">Disfruta tu reunión</h1>
        <p>Recuerda mantener tu micrófono en silencio, solamente actívalo cuando vayas a comentar. Para iniciar Zoom y entrar a la conferencia haz click en el botón.</p>
        <a href="/conferencia" class="entrar">
          Entrar a la conferencia
       </a>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
.hero-subtitle {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.8;
    padding: 0;
    margin: 0 0 2rem 0;
    opacity: 0.6;
}
.entrar {
  background-color:#1db954;  
  border-radius: 4px;
  transition: .2s ease;
  padding: 1rem;
  font-size: 20px;
  color: white;
  text-decoration: none;
  display: inline-block;
}

.entrar:hover {
  background-color:rgb(26, 126, 61); 
}

p { 
  line-height: 1.8rem;
  margin-bottom: 2rem;;
}

.contact-header {
  padding: 8rem 0 8rem 0;
}
.contact-title {
  font-size: 3rem;
  margin: 0 0 2rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

