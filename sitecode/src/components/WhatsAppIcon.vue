<template>
    <a :href="whatsAppLink" class="whatsapp-icon" target="_blank">
      <img src="@/assets/img/whatsapp.svg" alt="WhatsApp" />
    </a>
  </template>
  
  <script>
  export default {
    name: 'WhatsAppIcon',
    data() {
      return {
        whatsAppLink: 'https://wa.me/972523304074', // Replace with your WhatsApp number
      };
    },
  };
  </script>
  
  <style scoped>
.whatsapp-icon {
  position: fixed; /* Keeps the icon fixed in position */
  bottom: 75px; /* Distance from the bottom */
  right: 15px; /* Distance from the left */
  z-index: 10000; /* Ensures it stays above all other content */
}

.whatsapp-icon img {
  height: 50px; /* Adjust the size of the icon as needed */
  width: 50px;
  transition: transform 0.3s ease-in-out;
}

.whatsapp-icon:hover img {
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
