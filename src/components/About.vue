<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-4 mt-5">
        <h1>Austin Dye</h1>
        <h4>Software Developer</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          ratione odio? Vel quaerat adipisci ducimus, vero, accusamus harum
          animi facilis quod quos similique doloremque et dignissimos optio
          culpa repellendus voluptate?
        </p>
        <div class="btn text-white border btn-success me-4">
          DOWNLOAD RESUME
        </div>
        <div class="btn text-white border btn-info">CONTACT</div>
      </div>
      <div class="col-md-4 mx-2 mb-5">
        <div class="border rounded-circle p-3 bg-dark">
          <img
            class="rounded-circle w-100 outline shadow-lg"
            alt="100x100"
            src="https://avatars.githubusercontent.com/u/101369015?v=4"
            data-holder-rendered="true"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner rounded">
            <div class="carousel-item active">
              <img
                src="https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/34%20of%20the%20Best%20Website%20Designs%20to%20Inspire%20You%20in%202022-Feb-05-2022-12-30-34-43-AM.jpeg?width=600&name=34%20of%20the%20Best%20Website%20Designs%20to%20Inspire%20You%20in%202022-Feb-05-2022-12-30-34-43-AM.jpeg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block bg-dark">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://colorlib.com/cdn-cgi/image/width=1200,height=927,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/accounting-website-design.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block bg-dark">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://media.graphcms.com/dEkC89MQTGqTLOWSLay9"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block bg-dark">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card my-5">
          <h4 class="bg-warning text-dark rounded-top ps-2">Projects</h4>
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>SCSS</li>
            <li>BootStrap 5</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <div class="card mb-4">
          <h4 class="bg-warning text-dark rounded-top ps-2">Front-End</h4>
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>SCSS</li>
            <li>BootStrap 5</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div class="card">
          <h4 class="bg-primary rounded-top ps-2">Back-End</h4>
          <ul>
            <li>Node.js</li>
            <li>C#</li>
            <li>.NET</li>
            <li>Restful APIs</li>
            <li>mySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div class="card my-4">
          <h4 class="bg-danger rounded-top ps-2">Other</h4>
          <ul>
            <li>MVCS</li>
            <li>SCRUM</li>
            <li>Customer Service</li>
            <li>Professional Communtcation</li>
            <li>Windows</li>
            <li>MacOS</li>
          </ul>
        </div>
        <div class="card my-4">
          <h4 class="bg-info text-dark rounded-top ps-2">Software QA</h4>
          <ul>
            <li>Jira</li>
            <li>Bugzilla</li>
            <li>X-Code</li>
            <li>ADB</li>
            <li>Test Writing</li>
            <li>VR Testing</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
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
