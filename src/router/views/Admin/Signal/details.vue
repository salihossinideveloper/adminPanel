<template>
  <main-layout>
    <div class="d-flex flex-wrap signals signals-details w-100">
      <fieldset class="w-100">
        <legend>سیگنال فروش</legend>
        <div class="d-flex flex-wrap w-100">
          <div class="col-12 col-lg-7 col-xl-8">
            <div class="border-bottom border-bottom-color-blue-38">
              <h4 class="color-black-2 font-size-20 fw-bold border-bottom border-bottom-color-blue-8 pb-2 d-inline-flex pe-3">
                صرافی ها</h4>
              <ul class="d-flex flex-wrap px-0 mt-2">
                <li class="pe-2 mb-2">
                  <button type="button"
                          class="btn btn-success border-radius-15 fw-bold py-1 px-3 color-green-1 bgc-green-3 border border-color-green-1">
                    بایننس
                  </button>
                </li>
                <li class="pe-2 mb-2">
                  <button type="button"
                          class="btn btn-secondary border-radius-15 fw-bold py-1 px-3 color-gray-5 bgc-white border border-color-gray-5 color-white-hover">
                    کوکوین
                  </button>
                </li>
                <li class="pe-2 mb-2">
                  <button type="button"
                          class="btn btn-secondary border-radius-15 fw-bold py-1 px-3 color-gray-5 bgc-white border border-color-gray-5 color-white-hover">
                    کوینکس
                  </button>
                </li>
              </ul>
            </div>
            <div class="border-bottom border-bottom-color-blue-38 pt-3">
              <h4 class="color-black-2 font-size-20 fw-bold border-bottom border-bottom-color-blue-8 pb-2 d-inline-flex pe-3">
                تست</h4>
              <ul class="d-flex flex-column px-0 mt-2">
                <li class="pe-2 mb-1">
                  <span class="pe-2 font-size-16 color-black">بسته شدن:</span>
                  <span class="pe-2 font-size-16 color-black">_____</span>
                </li>
                <li class="pe-2 mb-1">
                  <span class="pe-2 font-size-16 color-black">باز شدن:</span>
                  <span class="pe-2 font-size-16 color-black">_____</span>
                </li>
                <li class="pe-2 mb-1">
                  <span class="pe-2 font-size-16 color-black">ارسال سیگنال:</span>
                  <span class="pe-2 font-size-16 color-black">_____</span>
                </li>
              </ul>
            </div>
            <div class="pt-3">
              <h4 class="color-black-2 font-size-20 fw-bold border-bottom border-bottom-color-blue-8 pb-2 d-inline-flex pe-3">
                جزیئات سیگنال</h4>
              <ul class="d-flex flex-column px-0 mt-2 table border border-color-blue-41 border-radius-12 overflow-hidden">
                <li class="d-flex item">
                  <div class="d-flex flex-fill col-6 border-l">
                    <span class="col-6 color-black-2 font-size-16">محدوده ورود</span>
                    <span class="col-6 color-gray-3 font-size-16">تست</span>
                  </div>
                  <div class="d-flex flex-fill col-6">
                    <span class="col-6 color-black-2 font-size-16">مقدار سفارش</span>
                    <span class="col-6 color-gray-3 font-size-16">تست</span>
                  </div>
                </li>
                <li class="d-flex item">
                  <div class="d-flex flex-fill col-6 border-l">
                    <span class="col-6 color-black-2 font-size-16">حد ضرر</span>
                    <span class="col-6 color-red-1 font-size-16">$1,000</span>
                  </div>
                  <div class="d-flex flex-fill col-6">
                    <span class="col-6 color-black-2 font-size-16">درصد از پرتفو</span>
                    <span class="col-6 color-gray-3 font-size-16">1.5%</span>
                  </div>
                </li>
                <li class="d-flex item">
                  <div class="d-flex flex-fill col-6 border-l">
                    <span class="col-6 color-black-2 font-size-16">حد سود اول</span>
                    <span class="col-6 color-green-2 font-size-16">$1,000</span>
                  </div>
                  <div class="d-flex flex-fill col-6">
                    <span class="col-6 color-black-2 font-size-16">R/R</span>
                    <span class="col-6 color-gray-3 font-size-16">1.5</span>
                  </div>
                </li>
                <li class="d-flex item">
                  <div class="d-flex flex-fill col-6 border-l">
                    <span class="col-6 color-black-2 font-size-16">حد سود دوم</span>
                    <span class="col-6 color-gray-3 font-size-16">$1,000</span>
                  </div>
                  <div class="d-flex flex-fill col-6">
                    <span class="col-6 color-black-2 font-size-16">مدت سیگنال</span>
                    <span class="col-6 color-gray-3 font-size-16">1 روز</span>
                  </div>
                </li>
                <li class="d-flex item">
                  <div class="d-flex flex-fill col-6 border-l">
                    <span class="col-6 color-black-2 font-size-16">حد سود سوم</span>
                    <span class="col-6 color-gray-3 font-size-16">$1,000</span>
                  </div>
                  <div class="d-flex flex-fill col-6">
                    <span class="col-6 color-black-2 font-size-16">میزان ریسک</span>
                    <span class="col-6 color-gray-3 font-size-16">بالا</span>
                  </div>
                </li>
                <li class="d-flex item">
                  <div class="d-flex flex-fill col-6 border-l">
                    <span class="col-6 color-black-2 font-size-16">‌بازدهی</span>
                    <span class="col-6 color-green-2 font-size-16 fw-bold">12%</span>
                  </div>
                  <div class="d-flex flex-fill col-6">
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-5 col-xl-4 px-0 px-md-4 d-flex flex-column">
            <div class="signal-analysis d-flex flex-column position-relative bgc-blue-40 box-shadow-1 border-radius-10 px-4 py-3 w-100 overflow-hidden">
              <div class="icon-bg position-absolute">
                <i class="icon-font-ellipse-6 position-absolute color-blue-26-10"></i>
              </div>
              <div class="d-flex flex-column position-relative z-1">
                <h4 class="font-size-20 color-black-2 fw-bold mx-auto">تحلیلگر سیگنال</h4>
                <div class="image mx-auto rounded-circle overflow-hidden">
                  <img src="@/assets/images/users/avatar-1.jpg" class="w-100 h-100" alt="">
                </div>
                <span class="font-size-14 color-black-2 fw-bold mx-auto pt-2">محمد بیگی</span>
                <div class="d-flex align-items-center justify-content-evenly mt-2">
                  <div class="d-flex align-items-center justify-content-center pb-1 mb-1">
                    <i class="icon-font-score icon font-size-22 icon-color-gradiant-blue fw-bold"></i>
                    <span class="color-blue-4 font-size-16 px-2"> امتیاز: 240 </span>
                  </div>
                  <div class="d-flex align-items-center justify-content-center pb-1 mb-1">
                    <i class="icon-font-user-level icon font-size-22 icon-color-gradiant-blue fw-bold"></i>
                    <span class="color-blue-4 font-size-16 px-2"> رتبه: 12 </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="signal-chart d-flex flex-column position-relative bgc-blue-40 box-shadow-1 border-radius-10 px-4 py-3 w-100 mt-5 mb-3">
              <h4 class="color-black-2 font-size-20 fw-bold border-bottom border-bottom-color-blue-8 pb-2 d-inline-flex pe-3"> نمودار سیگنال</h4>
              <div class="chart position-relative">
                <div class="chart-line">
                  <svg class="w-100" viewBox="0 0 354 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.454415" x2="0.454415" y2="307.034" stroke="#AAA6A6" stroke-width="0.908829"/>
                    <path d="M354 308.405L0.00094986 308.405" stroke="#AAA6A6" stroke-width="0.908829"/>
                    <line x1="17.9227" y1="318" x2="17.9227" y2="307.035" stroke="#AAA6A6" stroke-width="1.81766"/>
                    <line x1="115.837" y1="318" x2="115.837" y2="307.035" stroke="#AAA6A6" stroke-width="1.81766"/>
                    <line x1="213.751" y1="318" x2="213.751" y2="307.035" stroke="#AAA6A6" stroke-width="1.81766"/>
                    <line x1="311.665" y1="318" x2="311.665" y2="307.035" stroke="#AAA6A6" stroke-width="1.81766"/>
                  </svg>
                </div>
                <div class="chart-items d-flex flex-column justify-content-center position-absolute">
                  <div class="item d-flex justify-content-center">
                    <div class="border-bottom border-bottom-color-gray-21 bgc-red-4-7" style="width: 50%;height: 47px"></div>
                    <div class="d-flex align-items-end px-2 hidden">
                      <i class="icon-font-arrow-right font-size-6 color-green-8"></i>
                      <span class="font-size-12 text-nowrap px-2 step fw-bold">نقطه ورود 3</span>
                    </div>
                  </div>
                  <div class="item d-flex justify-content-center">
                    <div class="border-bottom border-bottom-color-gray-21 bgc-red-5" style="width: 50%;height: 47px"></div>
                    <div class="d-flex align-items-end px-2 hidden">
                      <i class="icon-font-arrow-right font-size-6 color-green-8"></i>
                      <span class="font-size-12 text-nowrap px-2 step fw-bold">نقطه ورود 3</span>
                    </div>
                  </div>
                  <div class="item d-flex justify-content-center">
                    <div class="border-bottom border-bottom-color-gray-21 bgc-green-5-7" style="width: 50%;height: 47px"></div>
                    <div class="d-flex align-items-end px-2">
                      <i class="icon-font-arrow-right font-size-6 color-green-8"></i>
                      <span class="font-size-12 text-nowrap px-2 step fw-bold">نقطه ورود 3</span>
                    </div>
                  </div>
                  <div class="item d-flex justify-content-center">
                    <div class="border-bottom border-bottom-color-gray-21 bgc-green-6" style="width: 50%;height: 47px"></div>
                    <div class="d-flex align-items-end px-2">
                      <i class="icon-font-arrow-right font-size-6 color-green-8"></i>
                      <span class="font-size-12 text-nowrap px-2 step fw-bold">نقطه ورود 2</span>
                    </div>
                  </div>
                  <div class="item d-flex justify-content-center">
                    <div class="border-bottom border-bottom-color-gray-21 bgc-green-7-7" style="width: 50%;height: 47px"></div>
                    <div class="d-flex align-items-end px-2">
                      <i class="icon-font-arrow-right font-size-6 color-green-8"></i>
                      <span class="font-size-12 text-nowrap px-2 step fw-bold">نقطه ورود 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </main-layout>
</template>

<script>
export default {
  name: "details"
}
</script>

<style scoped>

</style>