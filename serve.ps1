# serve.ps1 — شغّل هذا الملف من PowerShell داخل مجلد المشروع
# سيحاول استخدام python أو py لتشغيل خادم HTTP على المنفذ 8000

if (Get-Command python -ErrorAction SilentlyContinue) {
    python -m http.server 8000
} elseif (Get-Command py -ErrorAction SilentlyContinue) {
    py -m http.server 8000
} else {
    Write-Host "Python غير موجود. ثبت Python أو استخدم 'npx http-server' إذا كان Node.js مثبتاً."
}