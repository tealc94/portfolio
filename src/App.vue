<template>  
  <nav class="menu">
    <router-link class="titre" to="/">Accueil</router-link> |
    <router-link class="titre" :to= "{ path: '/', hash: 'container-quiSuisJe' }" @click.native="navigatePresentation">Présentation</router-link> |
    <router-link class="titre" :to= "{ path: '/', hash: 'container_creaction' }" @click.native="navigateCreation">Mes Créations</router-link> |
    <router-link class="titre" :to= "{ path: '/', hash: 'container_contact' }" @click.native="navigateContact">Contact</router-link>
  </nav>
  
  <router-view />  
  
   <footer>
    <div class="footer_container">
      <div>
        <a target="_blank" href="https://fr.linkedin.com/"><img class="footer_img" src="../src/assets/linkedin.png" alt="image linkedin"/></a>
        <a target="_blank" href="https://github.com/"><img class="footer_img" src="../src/assets/signe-github.png" alt="image github"/></a>
      </div>
      <div>
        <small>Dernière mise à jour le 18/11/2023</small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigatePresentation(){
      this.$router.push({ path: '/' }).then(() => {
        window.location.hash = '#container-quiSuisJe';
      });
    },
    navigateCreation(){
      this.$router.push({ path: '/' }).then(() => {
        window.location.hash = '#container_creaction';
      });
    },
    navigateContact(){
      this.$router.push({ path: '/' }).then(() => {
        window.location.hash = '#container_contact';
      });
    },
    openNewTab(){
      window.open('../public/test.html', '_blank');      
    }
  }  
}

</script>

<style>
/*Style la barre de nav*/
.menu {
  background-color: #383333;
  height: 100%;
  text-align: center;
  padding-top: 20px;
}

.titre:hover{
  text-decoration-line: underline;
}

/*style sur le footer  */
.footer_container {
  background-color: #383333;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
}

.footer_img {
  padding: 5px;
}
</style>
