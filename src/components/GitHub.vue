<template>
  <nav class="navbar navbar-expand-lg bg-dark p-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="mdi mdi-github mdi-36px text-white"></i
      ></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 p-0 mt-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Disabled</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Disabled</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Disabled</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Disabled</a>
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
  <div class="row">
    <div class="col-12 d-flex mt-3 mb-3 border-bottom border-dark">
      <div class="container d-flex justify-content-center align-items-baseline">
        <p class="mx-3">
          <i class="mdi mdi-book-open-blank-variant"></i>Overview
        </p>
        <p class="mx-3 p-0 m-0"><i class="mdi mdi-book p-0 m-0"></i>Overview</p>
        <p class="mx-3 p-0 m-0">
          <i class="mdi mdi-application-outline p-0 m-0"></i>Overview
        </p>
        <p class="mx-3 p-0 m-0">
          <i class="mdi mdi-cube-outline p-0 m-0"></i>Overview
        </p>
        <p class="mx-3 p-0 m-0">
          <i class="mdi mdi-star-outline p-0 m-0"></i>Overview
        </p>
      </div>
    </div>
    <div class="col-3 text-center">
      <div class="container position-relative d-flex profile-img">
        <img
          class="rounded-circle w-75 position-absolute"
          alt="100x100"
          src="https://avatars.githubusercontent.com/u/101369015?v=4"
          data-holder-rendered="true"
        />
        <span class="profile-t"
          ><h5 class="text-start p-0 m-0">Austin Dye</h5>
          <p class="text-start p-0 m-0">AustinDye</p></span
        >
      </div>
    </div>
    <div class="col-8 p-0 m-0">
      <div class="row">
        <div class="col-12">
          <div class="info-box card p-2 m-0">
            <p>AustinDye/README.md</p>
            <h1>Hi there 👋 My name is Austin Dye</h1>
            <h4>Male || He/Him || INTP-T</h4>
            <p>
              Interested in: QA Test Automation || Machine Learning || Virtual
              Reality / Augemented Reality Technology || Video Game Development
            </p>
          </div>
        </div>
        <h4>Pinned</h4>
        <div class="col-6 my-2">
          <div class="card p-2">
            <span class="d-flex justify-content-between">
              <h5 class="d-flex">
                <i class="mdi mdi-book mx-1"></i>checkpoint-3-real
                <p class="public-bool my-1 mx-2 fs-6">public</p>
              </h5>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle"></i>CSS</h6>
          </div>
        </div>
        <div class="col-6 my-2">
          <div class="card p-2">
            <span class="d-flex justify-content-between">
              <h5 class="d-flex">
                <i class="mdi mdi-book mx-1"></i>checkpoint-3-real
                <p class="public-bool my-1 mx-2 fs-6">public</p>
              </h5>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle"></i>CSS</h6>
          </div>
        </div>
        <div class="col-6 my-2">
          <div class="card p-2">
            <span class="d-flex justify-content-between">
              <h5 class="d-flex">
                <i class="mdi mdi-book mx-1"></i>checkpoint-3-real
                <p class="public-bool my-1 mx-2 fs-6">public</p>
              </h5>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle"></i>CSS</h6>
          </div>
        </div>
        <div class="col-6">
          <div class="card p-2">
            <span class="d-flex justify-content-between">
              <h5 class="d-flex">
                <i class="mdi mdi-book mx-1"></i>checkpoint-3-real
                <p class="public-bool my-1 mx-2 fs-6">public</p>
              </h5>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle"></i>CSS</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  top: -1.5em;
}
.user-img {
  width: 1.5em;
  height: 1.5em;
  background-color: aquamarine;
  margin-bottom: 0.2em;
}

.card {
  border-color: black;
}

.profile-t {
  padding-top: 95%;
  margin-left: 10%;
}
</style>
