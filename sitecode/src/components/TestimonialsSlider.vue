<template>
  <section id = "testimonials-slider">
    <div class="text-center">
  </div>
  <div class="testimonials-slider">
    <h1 class="font-weight-light display-2">לקוחות ממליצים </h1>
    <slick-carousel v-bind="settings" >
      <div v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="testimonial-card">
          <div class="testimonial-image">
            <img :src="require(`@/assets/img/${testimonial.imageUrl}`)" alt="Customer Photo" />
            </div>
          <div class="testimonial-details">
            <div class="testimonial-date">{{ testimonial.date }}</div>
            <div class="testimonial-description">{{ testimonial.description }}</div>
          </div>
        </div>
      </div>
    </slick-carousel>
  </div>
</section>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import SlickCarousel from 'vue-slick-carousel';

export default {
  components: {
    SlickCarousel,
  },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          date: "מרכז 'הינם', הקריה האקדמיה אונו",
          description: 'רצינו להודות על ארוחה חלבית שהכנת לנו, על המנות המגוונות ועל הסלטים הנהדרים והכל בטוב טעם, תוך יחס אישי, מהיר ונעים. הוספת לנו טעם טוב לביקור בירושלים',
          imageUrl: 'food1.jpg', // Replace with actual image file name
        },
        {
          id: 2,
          date: 'תמר צייטלין, ציירת ומאיירת',
          description: "הייתה בר מצווה מושלמת ! אורחינו נהנינו מאוד מהאוכל הטעים והטרי היה שפע והרגישו שאתם שולטים כל הזמן במצב תודה רבה וניפגש בשמחות",
          imageUrl: 'food2.jpg', // Replace with actual image file name
        },
        {
          id: 3,
          date: 'דניאל וליאת הרשנסון, מבוא חורון',
          description: "רצינו להודות לכם על האוכל הטעים ועל האווירה הנינוחה שלכם. הבאתם אוכל מכל הלב, עבדתם ביעילות, במקצועיות ובשקט - בקושי הרגשנו אתכם. ובסוף ארזתם לנו את כל מה שנשאר בצורה מסודרת והשארתם הכל מסודר ונקי",
          imageUrl: 'food3.jpg', // Replace with actual image file name
        },
        {
          id: 4,
          date: 'מיכל מילר, ירושלים',
          description: 'טלי יקרה! האוכל היה כ"כ טעים! אין מילים בפי! פשוט מעדנים! ביתי וטרי בלי טעמים מלאכותיים. כולם היו ממש מרוצים ואמרו שזה משהו מיוחד! ישר כח גדול ותודה על הסבלנות וההיענות בדקה ה90',
          imageUrl: 'food4.jpg', // Replace with actual image file name
        },
        {
          id: 5,
          date: 'עמיחי ומיכל אורזל, נוף ציון',
          description: 'טלי יקרה, המשכנו לקבל אחרי הברית עוד הרבה מחמאות על האוכל! גם מאלו שיש להם סטייל גבוה! בשמחות אצלכם',
          imageUrl: 'food5.jpg', // Replace with actual image file name
        },
        {
          id: 6,
          date: 'נחמה ונחמיה פריאל, אילת',
          description: 'חגגנו היום בת מצווה בירושלים עם הקייטרינג המעולה של טלי. טעים מאוד, יחס מעולה, מסודר מקסים  בקיצור ממליצים בכל פה תרתי משמע',
          imageUrl: 'food60.jpg', // Replace with actual image file name
        },
        {
          id: 7,
          date: 'עמיאל וחנה דיק, קרית יובל',
          description: 'טלי, תודה רבה על הרמה הגבוהה באירוע של בננו.  האוכל הגיע בצורה מסודרת נקיה ובשפע! האורחים שלנו נהנו מאד ואנחנו נהנו שהיה אירוח מכובד כזה. ממליצה בחום!! :) שיהיה בשמחות',
          imageUrl: 'food6.jpg', // Replace with actual image file name
        },
        {
          id: 8,
          date: 'משה לוי, הצלה ללא גבולות',
          description: 'תודה רבה לכם על פינוק ואוכל מושלם!!  תצליחו בדרככם, אנחנו נהנינו',
          imageUrl: 'food7.jpg', // Replace with actual image file name
        },
        {
          id: 9,
          date: 'אילה כהן, העיר העתיקה',
          description: 'בשבוע החולף הזמנו את הקייטרינג של טלי לאזכרה שהייתה לנו. כרגיל הכל היה מעולה. האורחים שלנו היו מרוצים ואנחנו עוד יותר. אנחנו מזמינים את הקייטריג של טלי לכל הארועים שהיו לנו: אזכרות, אירוסין, שבת חתן ותמיד יוצאים בהרגשה שגם בפעם הבאה נרצה רק אותם. הכל טעים , בשפע ומוגש בטוב טעם. ממליצים בחום',
          imageUrl: 'food8.jpg', // Replace with actual image file name
        },
        {
          id: 10,
          date: 'ציון ואפרת גיאת, עמק התימנים',
          description: 'טלי יקרה! תודה על השפע והמגוון האיכות והטעם שזכינו לקבל ממך בארוחת בת המצווה של בתנו שילת. היה מעולה וללא ספק מוצלח תודה רבה! נמליץ בחום רב',
          imageUrl: 'food9.jpg', // Replace with actual image file name
        },
        {
          id: 11,
          date: 'רחל שירה, בית החושן',
          description: 'קייטרינג מעולה! אוכל טעים, בשפע, טלי מקסימה.. ממש מומלץ מכל הלב! ',
          imageUrl: 'food10.jpg', // Replace with actual image file name
        },
        {
          id: 12,
          date: 'קרן אשחר, ירושלים',
          description: 'הזמנו את טלי לערוך את סעודת זבד הבת שלנו שנערכה בחנוכה. מבחינת המחיר היא הייתה המשתלמת ביותר, מבחינת האוכל - בחרנו בקייטרינג החלבי והיה טעים מאוד (לדעת האורחים, אנחנו מרוב התרגשות טעמנו רק מעט :) . מבחינת ההגשה - במהלך הערב כמעט ולא הרגשנו את טלי, היא נעה בעדינות בין האנשים, הוסיפה כל פעם את מה שצריך, חייכה לכולם, ובעיקר תפקדה בלי שנצטרך לחשוב או להתעסק עם שולחן האוכל בכלל, מהבחינה הזו אנחנו התרכזנו בלהנות מהאירוע עצמו',
          imageUrl: 'food11.jpg', // Replace with actual image file name
        },
        {
          id: 13,
          date: 'תהל זעפרני, ירושלים',
          description: 'קייטרינג ממש מומלץ! ערכנו ארוע בת מצווה לכ- 100 איש וחיפשנו קטרינג עם אוכל ברמה ואסטטי. טלי לא איכזבה והאוכל היה מדהים! האורחים שיבחו את הבחירה והכל הוגש בשפע והיה ערוך בצורה מרשימה ונעימה מאד! וכל זה במחיר מפתיע לעומת כל המתחרים. בקיצור, לא תמצאו איכות כזו במחיר כזה',
          imageUrl: 'food12.jpg', // Replace with actual image file name
        },
        // Add more testimonials here
      ],
      settings: {
        "rtl": true,
        // "dots": true,
        "arrows": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 2,
        "autoplay": true,
        "pauseOnFocus": true,
        "pauseOnHover": true,
        responsive: [
          {
            breakpoint: 768, // Adjust breakpoints as needed
            settings: {
              slidesToShow: 1, // Display 1 slide on smaller screens
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
#testimonials-slider{
  background-color: rgb(255, 255, 255)
}
/* Image container styles */
.testimonial-image {
  width: 200px; /* Set the desired width */
  height: 200px; /* Set the desired height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.testimonial-image img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; Ensure the image maintains its aspect ratio and covers the container */
}

/* Corporate styles for the entire slider container */
.testimonials-slider {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: auto; /* Make the container height adjust to content */
}

/* Corporate styles for testimonial cards */
.testimonial-card {
  background-color: #f8d19e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.testimonial-image {
  width: 250px; /* Set the desired width for the image container */
  height: 250px; /* Set the desired height for the image container */
  max-width: 100%; /* Ensure the image container doesn't exceed the specified width */
  max-height: 100%; /* Ensure the image container doesn't exceed the specified height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.testimonial-card .testimonial-date {
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.testimonial-card .testimonial-description {
  font-style: italic;
  color: #555;
  margin: 0 20px;
   padding: 0 10px
}/* Add more styles as needed */
</style>
