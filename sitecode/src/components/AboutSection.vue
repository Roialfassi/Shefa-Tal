<template>
  <section id="about" class="text-center">
    <div id ="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">קצת עלינו</h1>
              <h1 class="font-weight-light display-1 mb-3">
                קייטרינג אוכל ביתי כשר וטעים 
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-right">
                    אנו דואגים לשמור על מחיר הגון ועל רמת שירות גבוהה ושקיפות מלאה כדי שהחוויה תהיה שווה את המחיר
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-right">
                  תקשורת ושקיפות עם הלקוחות נמצא בעדיפות עליונה
                  זמינות גבוהה לשאלות כולל הודעות ועדכון על הכל כולל הפרטים הקטנים
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/FoodFresh.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-right">
                  אנחנו מקפידים להכין אוכל טרי ביתי שמוכן ממוצרים איכותיים הנבחרים בקפידה כדי שהאיכות תהיה הגבוהה ביותר
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/food3.jpeg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </section>

</template>

<style scoped>
#about {
  background-color: #f4f7f5;
  border-radius: 10%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
.text-right{
  text-align: right;
  direction: rtl !important;
}
</style>
