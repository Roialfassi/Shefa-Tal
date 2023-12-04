<template>
    <a :href="facebookLink" class="facebook-icon" id ="facebook-icon" target="_blank">
      <img src="@/assets/img/facebookicon.svg" alt="Facebook" />
    </a>
  </template>
  
  <script>
  export default {
    name: 'facebookIcon',
    data() {
      return {
        facebookLink: 'https://www.facebook.com/tali.shefatal/',
      };
    },
  };
  </script>
  
  <style scoped>
.facebook-icon {
  position: fixed; /* Keeps the icon fixed in position */
  bottom: 122px; /* Distance from the bottom */
  right: 15px; /* Distance from the left */
  z-index: 10000; /* Ensures it stays above all other content */
}

.facebook-icon img {
  height: 50px; /* Adjust the size of the icon as needed */
  width: 50px;
  transition: transform 0.3s ease-in-out;
}

.facebook-icon:hover img {
  transform: scale(1.1); /* Slight scale-up effect on hover */
}

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:80px;
	right:15px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.my-float{
	margin-top:16px;
}
</style>
