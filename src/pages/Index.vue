<template>
  <Layout>
    <div class="container">
      <Hero />
      <Next />
    </div>

  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  },
  methods: {
    redirect(){
    	window.location.replace("https://reuniones.onrender.com/")
    }
  },
  mounted(){
   this.redirect();
  }
}
</script>
