<template>
  <nav class="navbar navbar-expand-lg bg-dark p-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="mdi mdi-github mdi-36px text-white"></i
      ></a>
      <div
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"
          ><i class="mdi mdi-menu text-white fs-1"></i
        ></span>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 p-0 mt-2 bg-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Pull Requests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Issues</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Marketplace</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Explore</a>
          </li>
        </ul>
        <span
          ><i class="mdi mdi-bell-outline text-white fs-5 mx-3"></i>
          <i class="mdi mdi-plus text-white fs-5"
            ><i class="mdi mdi-chevron-down text-white p-0 m-0"></i></i
          ><img
            class="rounded-circle user-img ms-2"
            alt="100x100"
            src="https://avatars.githubusercontent.com/u/101369015?v=4"
            data-holder-rendered="true"
          />
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.profile-img {
  top: -3em;
}
.user-img {
  width: 1.5em;
  height: 1.5em;
  background-color: aquamarine;
  margin-bottom: 0.2em;
}

.card {
  border-color: black;
  background-color: #161b22;
  border-color: rgba(170, 170, 170, 0.255);
}

.profile-t {
  padding-top: 95%;
  margin-left: 10%;
}

.profile-nav {
  border-bottom: rgba(255, 255, 255, 0.135) 1px solid;
}
</style>
