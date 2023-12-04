<template>
  <section id="qna" class="text-right">
    <!-- <h1 class="text-center">שאלות ותשובות</h1> -->
    <v-container fluid id="box">
      <div class="text-center">
        <h1 class="font-weight-light display-2">שאלות ותשובות</h1>
      </div>
            <div v-for="(item, index) in qnaItems" :key="index" class="qna-item">
              <button class="qna-question" @click="toggle(index)">
                <span class="toggle-icon">{{ isOpen(index) ? '−' : '+' }}</span>
                {{ item.question }}
              </button>
              <transition name="collapse">
              <div v-if="isOpen(index)" class="qna-answer">
                {{ item.answer }}
              </div>
              </transition>
            </div>
       </v-container>
  </section>
  </template>
  
  <script>
  export default {
    name: 'QnA',
    data() {
      return {
        qnaItems: [
          { question: 'מהם היתרונות של בחירת קייטרינג ביתי', answer: 'אוכל טעים ומגוון עם טעם של בית שירות אישי ומסור עם אפשרות להתאים את התפריט לאירוע ספציפי' },
          { question: 'מהם העלויות של הקייטרינג', answer: 'עלויות הקייטרינג משתנות בהתאם לסוג האירוע, מספר האורחים והתפריט הנבחר. ניתן לקבל הצעת מחיר מדויקת על ידי פנייה לקייטרינג' },
          { question: 'האם הקייטרינג מותאם לאנשים עם אלרגיות או רגישויות תזונתיות', answer: 'כמובן, נתאים את התפריט בהתאם לקהל היעד ונתחשב בכל הדגשים שמתבקשים' },

          // Add more questions and answers
        ],
        openIndex: -1
      };
    },
    methods: {
      toggle(index) {
        this.openIndex = this.openIndex === index ? -1 : index;
      },
      isOpen(index) {
        return this.openIndex === index;
      }
    }
  };
  </script>
  
  
  <style scoped>
  #qna {
    background-color: #ffffff;
  }
  #box{
    background-color: #f6f1f1;
    border-radius: 50px; /* Creates rounded corners */

  }
.qna-image {
  flex: 1;
  /* Adjust styles as needed */
}

.qna-image img {
  width: 100%;
  height: auto;
}
  .qna-container {
    max-width: 600px;
    margin: auto;
    font-family: Arial, sans-serif;
  }
  
  .qna-item {
    border-top: 1px solid #faf7f7;
    padding: 8px 0;
  }
  
  .qna-item:first-child {
    border-top: none;
  }
  
  .qna-question {
    background: none;
    border: none;
    text-align: right;
    width: 100%;
    padding: 8px 16px;
    font-size: 16px;
    color: #202124;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .qna-question:hover {
    background-color: #a6d3d6;
  }
  
  .toggle-icon {
    font-size: 20px;
  }
  
  .qna-answer {
    padding: 0 16px;
    margin-top: 8px;
    color: #5f6368;
    font-size: 14px;
    line-height: 1.6;
  }



  </style>
  