# تشغيل الموقع محلياً

هذا المشروع عبارة عن صفحات HTML/CSS/JS. لتشغيل الموقع محلياً والحصول على رابط (localhost) اتبع أحد الطرق التالية:

## 1) أسهل طريقة — باستخدام Python (مطلوب Python مثبت)
في مجلد المشروع (حيث يوجد `index.html`) افتح PowerShell ثم شغّل:

```powershell
python -m http.server 8000
```
أو إذا كان الأمر `python` غير متاح، جرّب:

```powershell
py -m http.server 8000
```

ثم افتح المتصفح واذهب إلى:

http://localhost:8000/

## 2) إذا تفضّل Node.js
ثبت `http-server` مؤقتاً ثم شغّله:

```powershell
npx http-server -p 8000
```

ثم افتح:

http://localhost:8000/

## 3) لجعل الموقع متاحاً للآخرين (نشر)
- أنسب خيار مجاني وبسيط: رفع المستودع على GitHub ثم تفعيل GitHub Pages من إعدادات المستودع. ستُعطى رابط عام مثل `https://username.github.io/repo-name/`.
- إن أردت أساعدك خطوة بخطوة بنشر المشروع على GitHub Pages.

---

Files added:
- `serve.ps1` — سكربت PowerShell لتشغيل سيرفر محلي تلقائياً.

إذا تريد، أقوم بنشر المشروع على GitHub Pages الآن وأجهز الرابط العام لك.