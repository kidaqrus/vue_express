<template>
  <!-- begin header -->
  <div>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">My lesson list</h1>
          <h2
            class="subtitle"
          >Affordable courses to attain your full potentials 😃</h2>
        </div>
      </div>
    </section>
    <!-- end header -->
    <!-- begin main content -->
    <section class="main-content">
      <div class="container">
        <h1 class="title has-text-centered">Available Courses</h1>
        <div class="columns is-multiline">
          <div class="column is-half" v-for="lesson in lessons" :key="lesson.id">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title is-centered">Subject: {{ lesson.topic }}</p>
              </header>
              <p class="card-header-title is-centered">Location: {{lesson.location}}</p>
              <p class="card-header-title is-centered">Price: {{lesson.price}}</p>
              
              <footer class="card-footer">
                
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end main content -->
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  },
  async asyncData(context) {
    try {
      return await fetch("http://127.0.0.1:9000/api/lessons")
        .then(res => res.json())
        .then(data => {
          return { lessons: data };
        });
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
  },
  data() {
    return {
      lessons: []
    };
  }
};
</script>