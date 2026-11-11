# QUick store

متجر ثابت باللغة العربية، جاهز للنشر على GitHub Pages. لا يحتاج إلى تثبيت حزم أو خطوة بناء؛ ملف `index.html` موجود في جذر المشروع ويحمّل `style.css` و`app.js` بمسارات نسبية.

## محتويات المشروع

- `index.html` — الصفحة الرئيسية، في جذر المستودع.
- `app.js` — المنتجات والسلة ونموذج الطلب عبر واتساب.
- `style.css` — تنسيقات المتجر المتجاوبة.
- `images/` — مجلد مخصص للصور المحلية، ويحتوي حالياً على تعليمات فقط. صور المنتجات وصور الواجهة الحالية تُحمّل من روابط خارجية، لذلك يلزم اتصال بالإنترنت لعرضها.

## رفع المشروع إلى مستودع جديد

1. أنشئي مستودعاً جديداً على GitHub. لجعل النشر على Pages مجانياً، اختاري مستودعاً عاماً. اتركي خيار إنشاء README أو ملفات أولية أخرى غير محدد.
2. افتحي PowerShell ونفّذي الأوامر التالية من مجلد المشروع. استبدلي `USERNAME` باسم حسابك و`REPOSITORY` باسم المستودع:

   ```powershell
   Set-Location "C:\Users\HP\Desktop\Quick-Store-Editable"
   git init -b main
   git add index.html app.js style.css images README.md
   git commit -m "Prepare QUick store for GitHub Pages"
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

3. في صفحة المستودع على GitHub، افتحي **Settings → Pages**.
4. ضمن **Build and deployment**، اختاري **Deploy from a branch**، ثم الفرع `main` والمجلد `/(root)`، واضغطي **Save**.
5. بعد اكتمال النشر، سيظهر رابط المتجر في قسم **GitHub Pages** في صفحة الإعدادات. قد يستغرق ظهوره بضع دقائق.

## رفع المشروع إلى مستودع موجود

1. استنسخي المستودع إلى مجلد منفصل باستخدام **Code → HTTPS** في GitHub:

   ```powershell
   git clone https://github.com/USERNAME/REPOSITORY.git "C:\Users\HP\Desktop\QUick-store-pages"
   ```

2. انسخي `index.html` و`app.js` و`style.css` وملف `README.md` ومجلد `images` من مجلد المتجر إلى جذر المجلد المستنسخ. تأكدي أن `index.html` ظاهر مباشرةً في جذر المستودع، وليس داخل مجلد فرعي.
3. من PowerShell، أضيفي التغييرات وارفعيها:

   ```powershell
   Set-Location "C:\Users\HP\Desktop\QUick-store-pages"
   git add index.html app.js style.css images README.md
   git commit -m "Update QUick store for GitHub Pages"
   git push
   ```

4. فعّلي GitHub Pages من **Settings → Pages**، باختيار **Deploy from a branch** ثم `main` و`/(root)`، واضغطي **Save**.

لا يحتوي المشروع على اعتماديات أو ملفات بناء؛ لا تختاري مجلداً فرعياً كمصدر النشر. إذا أضيفت صور محلية لاحقاً، ضعيها داخل `images/` واستخدمي مسارات نسبية مثل `images/product-1.jpg`.
