<template>
  <nav class="navbar navbar-expand-lg bg-dark p-0">
    <div class="container-fluid px-2">
      <a class="navbar-brand" href="https://github.com/AustinDye/"
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
                class="form-control p-0 mt-2 fs-6"
                type="search"
                placeholder=" Search or jump to.. ."
                aria-label="Search"
              />
            </form>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://github.com/pulls"
              >Pull Requests</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://github.com/issues"
              >Issues</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://github.com/marketplace"
              >Marketplace</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="https://github.com/explore"
              >Explore</a
            >
          </li>
        </ul>
        <span
          ><i class="mdi mdi-bell-outline text-white fs-5 mx-2"></i>
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
  <div class="row git-font g-0 p-3">
    <div class="col-12">
      <div class="d-sm none d-md-block d-lg-none">
        <div class="d-flex">
          <img
            class="rounded-circle w-25 h-25"
            alt="100x100"
            src="https://avatars.githubusercontent.com/u/101369015?v=4"
            data-holder-rendered="true"
          />
          <span class="ms-4"
            ><h5 class="text-start p-0 m-0">Austin Dye</h5>
            <p class="text-start p-0 m-0">AustinDye</p></span
          >
        </div>
      </div>
    </div>
    <div
      class="col-12 d-flex mb-4 mt-2 profile-nav sticky-top d-none d-md-flex"
    >
      <div
        class="container d-flex justify-content-center align-items-baseline overflow-scroll pt-2"
      >
        <a class="mx-1 p-1 m-0 text-white">
          <i class="mdi mdi-book-open-blank-variant d-none d-md-inline"></i
          >Overview
        </a>
        <div class="d-flex">
          <a
            class="p-1 m-0 text-white"
            href="https://github.com/AustinDye?tab=repositories"
          >
            <i class="mdi mdi-book p-0 m-0 d-none d-md-inline"></i>Repositories
          </a>
          <p
            class="bg-dark text-light rounded-pill py-0 px-2 me-2"
            style="min-width: 20px"
          >
            43
          </p>
        </div>

        <a
          class="mx-1 p-1 m-0 text-white"
          href="https://github.com/AustinDye?tab=projects&type=beta"
        >
          <i class="mdi mdi-application p-0 m-0 d-none d-md-inline"></i>Projects
        </a>
        <a
          class="mx-1 p-1 m-0 text-white"
          href="https://github.com/AustinDye?tab=packages"
        >
          <i class="mdi mdi-cube-outline p-0 m-0 d-none d-md-inline"></i
          >Packages
        </a>
        <a
          class="mx-1 p-1 m-0 text-white"
          href="https://github.com/AustinDye?tab=stars"
        >
          <i class="mdi mdi-star-outline p-0 m-0 d-none d-md-inline"></i>Stars
        </a>
      </div>
    </div>
    <!--aahhhhh-->

    <div
      class="col-12 d-flex mb-4 mt-2 profile-nav sticky-top d-flex d-md-none"
    >
      <div class="container d-flex align-items-baseline overflow-scroll pt-2">
        <a class="mx-1 p-1 m-0 text-white">
          <i class="mdi mdi-book-open-blank-variant d-none d-md-inline"></i
          >Overview
        </a>
        <div class="d-flex">
          <a
            class="p-1 m-0 text-white"
            href="https://github.com/AustinDye?tab=repositories"
          >
            <i class="mdi mdi-book p-0 m-0 d-none d-md-inline"></i>Repositories
          </a>
          <p
            class="bg-dark text-light rounded-pill py-0 px-2 me-2"
            style="min-width: 20px"
          >
            43
          </p>
        </div>

        <a
          class="mx-1 p-1 m-0 text-white"
          href="https://github.com/AustinDye?tab=projects&type=beta"
        >
          <i class="mdi mdi-application p-0 m-0 d-none d-md-inline"></i>Projects
        </a>
        <a
          class="mx-1 p-1 m-0 text-white"
          href="https://github.com/AustinDye?tab=packages"
        >
          <i class="mdi mdi-cube-outline p-0 m-0 d-none d-md-inline"></i
          >Packages
        </a>
        <a
          class="mx-1 p-1 m-0 text-white"
          href="https://github.com/AustinDye?tab=stars"
        >
          <i class="mdi mdi-star-outline p-0 m-0 d-none d-md-inline"></i>Stars
        </a>
      </div>
    </div>

    <!--aahhhhh---->

    <div class="col-lg-3 mb-5 ps-5 d-none d-lg-flex">
      <div class="position-relative profile-img">
        <div class="position-absolute">
          <img
            class="rounded-circle w-100"
            alt="100x100"
            src="https://avatars.githubusercontent.com/u/101369015?v=4"
            data-holder-rendered="true"
          />
        </div>
        <div class="profile-text">
          <h1 class="fs-2 m-0 p-0">Austin Dye</h1>
          <h5 class="m-0 p-0 mb-4">AustinDye</h5>
          <span class="d-flex">
            <p>
              <i class="mdi mdi-account-multiple-outline pe-2"></i
              ><b>1</b> follower
            </p>
            <div class="mdi mdi-circle-small p-1"></div>
            <p><b>4</b> following</p></span
          >

          <i class="mdi mdi-link-variant pe-2"></i
          ><a class="">aupredye@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-12 my-2">
          <div class="info-box card p-3 m-0">
            <p>AustinDye/README.md</p>
            <h1>Hi there 👋 My name is Austin Dye</h1>
            <h4>Male || He/Him || INTP-T</h4>
            <p>
              Interested in: QA || Virtual Reality / Augemented Reality
              Technology || Video Game Development || Web Development
            </p>
            <h5 class="mt-3 mx-4">-Links-</h5>
            <ul class="mt-3">
              <li class="d-flex">
                <a href="https://www.codewars.com/users/AustinDye">CodeWars</a>
              </li>
              <li class="d-flex">
                <a href="https://www.linkedin.com/in/austin-dye-03464199/"
                  >LinkedIn</a
                >
              </li>
              <li class="d-flex">
                <a
                  href="https://learn.unity.com/u/5d5b6908edbc2a002489e7a4?tab=profile"
                  >Unity Learn</a
                >
              </li>
              <li class="d-flex">
                <a href="https://austindye.github.io/WIP-Portfolio/#/"
                  >Portfolio</a
                >
              </li>
            </ul>
          </div>
        </div>
        <h4>Pinned</h4>
        <div class="col-md-6 my-2">
          <div class="card p-3">
            <span class="d-flex justify-content-between">
              <a class="d-flex">
                <i class="mdi mdi-book mx-1"></i>checkpoint-3-real
              </a>
              <p class="public-bool my-1 fs-6">public</p>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle text-info"></i>CSS</h6>
          </div>
        </div>
        <div class="col-md-6 my-2">
          <div class="card p-3">
            <span class="d-flex justify-content-between">
              <a
                class="d-flex"
                href="https://github.com/AustinDye/clicker-game"
              >
                <i class="mdi mdi-book mx-1"></i>clicker-game
              </a>
              <p class="public-bool my-1 fs-6">public</p>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle text-danger"></i>HTML</h6>
          </div>
        </div>
        <div class="col-md-6 my-2">
          <div class="card p-3">
            <span class="d-flex justify-content-between">
              <a
                class="d-flex"
                href="https://github.com/AustinDye/WIP-Portfolio"
              >
                <i class="mdi mdi-book mx-1"></i>WIP-Portfolio
              </a>
              <p class="public-bool my-1 fs-6">public</p>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle text-success"></i>Vue</h6>
          </div>
        </div>
        <div class="col-md-6 my-2">
          <div class="card p-3">
            <span class="d-flex justify-content-between">
              <a class="d-flex" href="https://github.com/ZacGamble/Ectogram">
                <i class="mdi mdi-book mx-1"></i>Ectogram
              </a>
              <p class="public-bool my-1 fs-6">public</p>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle text-info"></i>CSS</h6>
          </div>
        </div>
        <div class="col-md-6 my-2">
          <div class="card p-3">
            <span class="d-flex justify-content-between">
              <a class="d-flex" href="https://github.com/AustinDye/scurvy-dogs">
                <i class="mdi mdi-book mx-1"></i>scurvy-dogs
              </a>
              <p class="public-bool my-1 fs-6">public</p>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle text-info"></i>CSS</h6>
          </div>
        </div>
        <div class="col-md-6 my-2">
          <div class="card p-3">
            <span class="d-flex justify-content-between">
              <a
                class="d-flex"
                href="https://github.com/AustinDye/Keepr-BootCamp-Final"
              >
                <i class="mdi mdi-book mx-1"></i>Keepr-BootCamp-Final
              </a>
              <p class="public-bool my-1 fs-6">public</p>
              <i class="mdi mdi-dots-grid"></i
            ></span>
            <h6 class="p-1"><i class="mdi mdi-circle text-primary"></i>C#</h6>
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
  top: -3em;
  z-index: 3;
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
  z-index: 2;
  background-color: #161b22;
}

input {
  background-color: #161b22;
}

.profile-text {
  padding-top: 37vh;
  z-index: 0;
}

.git-font {
  font-size: 1.5em;
}
</style>
