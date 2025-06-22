<template>
    <main id="AutherSection">
      <div class="author-section py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="card shadow-lg border-3 rounded-4 p-4 border border-warning author-card ">
                <div class="row g-4 align-items-center">
                  <div class="col-md-4 text-center">
                    <img src="../assets/Images_Cover/IssaIcon.png"
                         class="img-fluid rounded-circle author-image shadow mb-3 mb-md-0"
                         alt="Author Image">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h2 class="card-title author-name mb-3 txtt text-dark">✨ الشيخ عيسى مال الله</h2>
                      <p class="author-bio text-dark">
                        الشيخ عيسى مال الله فرج، رئيس الهيئة الإدارية لمركز ابن عباس لتحفيظ القرآن الكريم.
                      </p>
                      <button class="btn btn-warning text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#bioOffcanvas">
                        قراءة السيرة
                      </button>
  
                      <!-- Offcanvas -->
                      <div class="offcanvas offcanvas-end" tabindex="-1" id="bioOffcanvas">
                        <div class="offcanvas-header">
                          <h5 class="offcanvas-title">السيرة الذاتية</h5>
                          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div class="offcanvas-body">
                          <p><strong>الاسم والنسب والمولد:</strong><br>
                            عيسى مال الله خادم فرج، وُلد عام ۱۳۷۴هـ الموافق ۱۹۵۳م في منطقة (شرق) داخل عاصمة دولة الكويت.
                          </p>
                        
                          <p><strong>الدراسية والمؤهلات:</strong><br>
                            بدأ دراسته منذ مرحلة الروضة في (روضة حولي) شارع تونس تحت معارف الكويت، ثم انتقل إلى مدرسة الفارابي الابتدائية في النقرة،
                            ثم مدرسة حولي المتوسطة، فثانوية كيفان، فالكلية العسكرية الدورة السادسة سنة 1973، لكنه لم يُوفَّق، فعمل محلل مختبر في كلية العلوم،
                            ثم معلّمًا في المعهد الديني - قسم الثانوية.
                          </p>
                        
                          <p><strong>شيوخه:</strong><br>
                            تتلمذ الشيخ على أيدي عدد من العلماء والمشايخ، وتأثر بكبار المحققين أمثال شيخ الإسلام ابن تيمية وابن القيم رحمهما الله، ومن سار على نهجهما، 
                            كما أخذ عن مشايخ مثل الشيخ أبو معاوية عبدالله السبت، والشيخ عبد الرحمن عبد الخالق، والشيخ عمر الأشقر، والشيخ عبد الرحمن عبد الصمد رحمهم الله،
                            كما حضر دروس سماحة الشيخ ابن باز، والشيخ ابن عثيمين، وكان يسافر إليهما سنويًا في السعودية، وكذلك الشيخ الألباني.
                          </p>
                        
                          <p><strong>الجهود الدعوية:</strong><br>
                            بدأ الشيخ الدعوة إلى الله منذ شبابه في قطاع المساجد، ثم سافر إلى عدة دول للدعوة مثل إندونيسيا والدنمارك، بالإضافة إلى جهوده داخل الكويت.
                            وتميزت دعوته بالحكمة والموعظة الحسنة ضمن إطار المنهج السلفي وباستخدام مختلف الوسائل.
                          </p>
                        
                          <p><strong>البحوث والمؤلفات:</strong></p>
                          <ul>
                            <li>البراءة والتحذير من خطر التكفير</li>
                            <li>أطايب القول في حسن التعامل مع ولاة الأمر</li>
                            <li>المختصر الحثيث في بيان أصول منهج السلف وأصحاب الحديث</li>
                            <li>كتاب الحلية شرح القضايا الكلية للاعتقاد في الكتاب والسنة</li>
                            <li>علماء ثبتوا عند الابتلاء، ولم يخرجوا على الأمراء</li>
                            <li>الأسواق أحكام وآداب</li>
                            <li>الأسفار أحكام وآداب</li>
                            <li>الدعوة إلى الله أحكام وآداب</li>
                            <li>نساء من ذاكرة التاريخ</li>
                            <li>الأوبئة في ميزان الشريعة الإسلامية</li>
                            <li>الإيضاح بشرح قواعد الإصباح في بيان منهج السلف في التربية والإصلاح (لفضيلة الشيخ عبدالله العبيلان)</li>
                            <li>الزلازل والكوارث حقائق وأحكام</li>
                            <li>الإسلام دين السلام</li>
                            <li>إضاءات في فقه الزكاة</li>
                          </ul>
                        </div>
                        
                      </div>
                      <!-- End Offcanvas -->
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <style scoped>
  /* Background Styling */
  main {
    width: 100%;
    background-size: cover;
  }
  
  /* Card Styling */
  .author-card {
    /* background-image: url('https://png.pngtree.com/png-vector/20220420/ourlarge/pngtree-twibbon-ramadan-kareem-eid-mubarak-white-golden-islamic-frame-with-lentern-png-image_4550082.png'); */
    border: solid orange;
      background-repeat: no-repeat;


      overflow: hidden;
  }
  
  .author-card:hover {
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.4);
  }
  
  /* Author Image */
  .author-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid orange;
    padding: 3px;
  }
  
  /* Author Name */
  .author-name {
    
    font-size: 1.7rem;
    color: rgba(255, 255, 255, 0.83);
  }
  
  /* Author Bio (Offcanvas) */
  .author-bio {
    
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.756);
  }
  
  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .author-name {
      font-size: 1.3rem;
    }
    
    .author-bio {
      font-size: 0.85rem;
    }
    
    .author-image {
      width: 130px;
      height: 130px;
    }
  }
  
  @media (max-width: 576px) {
    .author-name {
      font-size: 2rem;
    }
    
    .author-bio {
      font-size: 1.3rem;
    }
    
    .author-image {
      width: 110px;
      height: 110px;
    }
  }
  @font-face {
    font-family: 'Thuluth2';
    src: url('@/assets/AGA-Islamic-Phrases-2.ttf') format('truetype');
}

.txtr2 {
    font-family: 'Thuluth2';
}
  </style>
  