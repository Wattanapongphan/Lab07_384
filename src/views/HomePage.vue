<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";


// Variables

const travellist = ref([
  { name: 'ท่าช้าง', price: 80, size: { s: 80, m: 150, l: 200 }, img: "https://www.tripgether.com/wp-content/uploads/tripgetter/thachang_3-1.jpg" },
  { name: 'GoodViews', price: 120, size: { s: 120, m: 180, l: 250 }, img:"https://www.chillnaid.com/wp-content/uploads/2017/08/P8220053-1024x768.jpg" },
  { name: 'RiverSide', price: 150, size: { s: 150, m: 190, l: 300 }, img:"https://www.topchiangmai.com/wp-content/uploads/2016/01/The-Riverside-1.jpg" },
  { name: 'WarmUp', price: 100, size: { s: 100, m: 200, l: 500 }, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkSQx5MhvO5ZpYUqco6vovsnBY5_qyH6LezGb2B0hJg&s" },
  { name: 'ตะวันแดง', price: 90, size: { s: 90, m: 250, l: 700 }, img:"https://img.wongnai.com/p/1920x0/2019/05/03/fa5644c7136f4eaf853f2d01e765cc98.jpg"},
  { name: 'Amazon', price: 12, size: { s: 80, m: 100, l: 150 }, img:"https://www.brandbuffet.in.th/wp-content/uploads/2021/10/Cafe-Amazon-BE-Cover-1.jpg"}
]);

// Store booking data
const bookingList = ref([]);

// Function to add bookings
function addBooking(name) {
  bookingList.value.push(name);
}
function cancelBooking(index) {
  if (index >= 0 && index < bookingList.value.length) {
    bookingList.value.splice(index, 1);
  }
}
</script>

<script>
export default {
  // ...
  methods: {
    async goToDetail() {
      await this.$router.push("/detail");
    },
  },
};
</script>

<template>
<div class="bg-body-secondary"> 
  <nav class="navbar bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand">CoffeeShop</a>
    <li class="nav-item">
          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            แสดงรายละเอียด
          </button>
    </li>
  </div>
</nav><br>

<div class="container text-center">
  <div class="row">
    <div class="col-4 mb-3" v-for="(item, index) in travellist" :key="index">
      <div class="card h-100" style="width: 19rem;">
        <div class="card-img-container">
          <img v-if="item.img" :src="item.img" class="card-img-top mx-auto">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">ราคา (Size: S - {{ item.size.s }}, M - {{ item.size.m }}, L - {{ item.size.l }})</p>
          <div class="input-group mb-3 d-flex justify-content-center">
            <button class="btn btn-primary mx-2" @click="addBooking(item.name)">จองโต๊ะ</button>
            <RouterLink :to="{name: 'detail' , params: {id : index}}" class="btn btn-primary">รายละเอียด</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">รายการจอง</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <table class="table table-success">
            <thead>
              <tr>
                <th scope="col">ลำดับ</th>
                <th scope="col">ชื่อร้าน</th>
                <th scope="col">การดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in bookingList" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item }}</td>
                <td>
                  <button class="btn btn-danger" @click="cancelBooking(index)">ยกเลิก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <div class="container">
            <form>
              <div class="mb-3">
                <label for="fullName" class="form-label fw-bold">ชื่อ-นามสกุล</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder=""
                  aria-label="Username"
                  pattern="[ก-๙a-zA-Zะ-์]*\s[ก-๙a-zA-Zะ-์]*(\s[ก-๙a-zA-Zะ-์]*)?"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="table" class="form-label">จำนวนโต๊ะ</label>
                <input type="number" class="form-control" min="0" required>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">โทรศัพท์มือถือ</label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  pattern="[0-9]{10}"
                  title="กรุณาใส่ให้ครบ 10 ตัว"
                  maxlength="10"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">วันที่</label>
                <input type="date" class="form-control" max="2023-12-31" required>
              </div>
              <div class="mb-3">
                <label for="time" class="form-label">เวลา</label>
                <input type="time" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-success">ยืนยัน</button>
              <button type="button" class="btn btn-secondary ms-4" data-bs-dismiss="modal">ปิด</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div><br>
  <footer class="text-center">
    @COFFEESHOP
  </footer>
</div>   
</template>
