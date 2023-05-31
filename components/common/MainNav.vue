<template>
  <div
    class="flex justify-between items-center xl:px-[147px] h-[98px] font-poppins"
  >
    <div>
      <NuxtLink to="/">
        <nuxt-img src="/header/Logo.png" />
      </NuxtLink>
    </div>

    <nav class="lg:w-3/4 xl:w-2/3">
      <ul
        class="flex items-center justify-around w-full h-[42px] text-base font-semibold"
      >
        <li>
          <NuxtLink
            class="py-[20px] hover:text-[#ec9944] hover:border-b-2 hover:border-[#ec9944] transition-all duration-300"
            to="/"
            >Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="py-[20px] hover:text-[#ec9944] hover:border-b-2 hover:border-[#ec9944] transition-all duration-300"
            to="/menu"
            >Menu
          </NuxtLink>
        </li>
        <li
          class="flex items-center relative drop-shadow-[0px_0px_30px_rgba(118,136,29,0.42)]"
        >
          <input
            class="w-[264px] h-[42px] rounded-[36px] placeholder:text-[#76881D99] pl-4"
            placeholder="i'm searching for..."
            type="text"
          />
          <span
            class="rounded-full bg-[#76881D] h-[38px] w-[38px] absolute right-1 flex items-center justify-center"
            ><NuxtImg src="/header/search1.svg"
          /></span>
        </li>
        <li
          :data-items="cartItems"
          class="relative cursor-pointer w-[64px] h-[42px] bg-white drop-shadow-[0px_0px_30px_rgba(118,136,29,0.42)] rounded-[36px] flex items-center after:content-[attr(data-items)] pl-3 after:text-[#FFFFFF] after:w-[18px] after:h-[19px] after:bg-[#EC9944] after:rounded-[22px] after:flex after:items-center after:justify-center after:text-center after:absolute after:right-[6px] after:top-[6px] after:align-middle after:animate-bounce align-middle hover:scale-110 ease-in-out duration-300 transition-all"
        >
          <nuxt-img class=" " src="/header/shopping-basket1.svg" />
        </li>
        <li
          v-show="!isLoggedIn"
          class="relative cursor-pointer w-[98px] h-[42px] rounded-[36px] flex items-center justify-center bg-gradient-to-r from-[#ADD100] to-[#7B920A] hover:scale-110 ease-in-out duration-300 transition-all"
        >
          <span
            class="w-[92px] h-[38px] rounded-[36px] flex items-center justify-center bg-[#FFFFFF] text-[#76881D]"
          >
            Register
          </span>
        </li>
        <li
          v-show="!isLoggedIn"
          class="cursor-pointer w-[98px] h-[42px] rounded-[36px] bg-gradient-to-r from-[#ADD100] to-[#7B920A] flex items-center justify-center text-white hover:scale-110 ease-in-out duration-300 transition-all"
          @click="login"
        >
          Login
        </li>
        <li
          v-show="isLoggedIn"
          class="relative flex items-center pl-1 gap-[6px] cursor-pointer w-[72px] h-[42px] bg-gradient-to-r from-[#ADD100] to-[#7B920A] rounded-[36px]"
          @click="userMenuOpen"
        >
          <nuxt-img class="w-[36px] h-[36px]" src="/header/user1.svg" />
          <nuxt-img class="hover:animate-bounce" src="/header/arrow.svg" />
          <Transition name="slideDown">
            <div
              v-show="dropDownShow"
              class="w-[162px] h-[158px] text-[#3A3A3AE6] bg-[#FBFDF88F] rounded-md pl-2 py-[18px] absolute drop-shadow-[11px_16px_83px_rgba(64,75,5,0.64)] backdrop-blur-[11px] top-[50px] right-1 z-[1001]"
            >
              <NuxtLink>
                <div
                  class="flex gap-[9px] my-[8px] cursor-pointer hover:underline drop-shadow-md"
                >
                  <span><nuxt-img src="/header/profile-icon.svg" /></span>
                  My profile
                </div>
              </NuxtLink>
              <NuxtLink>
                <div
                  class="flex gap-[9px] my-[8px] cursor-pointer hover:underline drop-shadow-md"
                >
                  <span><nuxt-img src="/header/orders-icon.svg" /></span>
                  My orders
                </div>
              </NuxtLink>
              <div
                class="flex gap-[9px] mt-[31px] cursor-pointer hover:underline drop-shadow-md"
                @click="logout"
              >
                <span><nuxt-img src="/header/logout-icon.svg" /></span>
                Logout
              </div>
            </div>
          </Transition>
        </li>
      </ul>
    </nav>
  </div>
  <Transition name="fade">
    <div
      v-show="dropDownShow"
      class="absolute top-0 bottom-0 right-0 left-0 bg-[#5C6A1538] backdrop-blur-[2px] z-[1000]"
      @click="userMenuClose"
    ></div>
  </Transition>
</template>

<script setup>
const cartItems = ref(2);
const isLoggedIn = ref(false);
const dropDownShow = ref(false);
const addToCard = () => {
  cartItems.value = cartItems.value + 1;
};
const login = () => {
  isLoggedIn.value = true;
};
const logout = () => {
  isLoggedIn.value = false;
  dropDownShow.value = false;
};
const userMenuOpen = () => {
  dropDownShow.value = true;
};
const userMenuClose = () => {
  dropDownShow.value = false;
};
</script>

<style>
.router-link-active {
  border-bottom: 2px solid #ec9944;
  color: #ec9944;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-leave-active {
  opacity: 0;
}

.slideDown-enter-from,
.slideDown-leave-to {
  transform: translate(100px, -100px) scale(0);
}

.slideDown-enter-active,
.slideDown-leave-from {
  transition: all 0.3s linear;
}
</style>
