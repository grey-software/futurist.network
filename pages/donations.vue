<template>
  <div>
    <section id="hero-section" class="f-section">
      <div class="hero">
        <h1 class="hero-heading">Fund the Future</h1>
        <p class="hero-tag">Donate & Support Projects</p>
        <Btn name="Donate" />
      </div>
    </section>
    <section class="container" id="where-money-goes-section">
      <div class="row d-flex flex-wrap pl-5 align-items-center">
        <div class="flex-col pl-5 col-12 col-lg-7">
          <h1 class="hero-heading">Where does the money go?</h1>
          <p class="donate-body">
            Have a certain project you want to support? Make sure to choose the
            option when donating.
          </p>
          <div class="d-flex flex-col flex-sm-row mt-3">
            <div class="mr-3 text-center">
              <svg class="" width="120" height="120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill-opacity="0"
                  stroke="#FE5C26"
                  border-radius="10px"
                />
                <text
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                  fill="#FE5C26"
                  font-size="24px"
                  font-style="bold"
                  dy=".3em"
                >
                  95%
                </text>
              </svg>
            </div>

            <div class="d-flex flex-col">
              <h2 class="breakdown-header">Projects</h2>
              <p class="donate-body">
                95 percent of your donation will go to the project of your
                choice, this will be used to purchase any required equipment,
                research documentation, or materials for testing.
              </p>
            </div>
          </div>
          <div class="d-flex flex-col flex-sm-row mt-3">
            <div class="mr-3 text-center">
              <svg width="120" height="120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill-opacity="0"
                  stroke="#2BACF9"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="#2BACF9"
                  text-anchor="middle"
                  font-size="24px"
                  dy=".3em"
                >
                  5%
                </text>
              </svg>
            </div>

            <div class="d-flex flex-col">
              <h2 class="breakdown-header">Admin Fees</h2>
              <p class="donate-body">
                Static fees: Website hosting, server upkeep costs, Advertisement
                fees
              </p>
              <p class="donate-body">
                Dynamic fees: Merchandise material purchase, outsourcing design,
                etc.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 text-center">
          <img src="/img/where-money-goes.svg" />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.breakdown-header {
  color: white;
}

.percentage-section {
  margin-left: 42px;
}

.donate-body {
  color: #838383;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.96px;
  font-weight: 600;
}

@media (max-width: 576px) {
  img {
    width: 400px;
  }
}
</style>
