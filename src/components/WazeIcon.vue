<template>
    <a :href="wazeLink" class="waze-icon" id ="waze-icon" target="_blank">
      <img src="@/assets/img/icons8-waze.svg" alt="waze" />
    </a>
  </template>
  
  <script>
  export default {
    name: 'wazeIcon',
    data() {
      return {
        wazeLink: 'https://maps.app.goo.gl/RUAtQouqxJdwJb3a7',
      };
    },
  };
  </script>
  
  <style scoped>
.waze-icon {
  position: fixed; /* Keeps the icon fixed in position */
  bottom: 160px; /* Distance from the bottom */
  right: 10px; /* Distance from the left */
  z-index: 10000; /* Ensures it stays above all other content */
}

.waze-icon img {
  height: 60px; /* Adjust the size of the icon as needed */
  width: 60px;
  transition: transform 0.3s ease-in-out;
}

.waze-icon:hover img {
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
