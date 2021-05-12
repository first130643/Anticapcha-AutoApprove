# Anticapcha-AutoApprove
AutoApprove on usecase in https://alienworlds.io/

โดยตัวนี้จะทำการกดปุ่ม Approve ให้ หลังจากแก้ Captcha แล้ว โดยมีเงื่อนไขคือ กด Approve แล้วพักไป 2 วินาที หากต่างยังไม่ปิด จะทำการกดไปเรื่อยๆจนกว่าจะครบ 10 ครั้ง แล้วกด Deny ให้อัตโนมัติ (น่าจะเกิดจากปัญหา Server ของ WAX ไม่ยอมรับ Transection จึงต้องกด Dnay) ปัญหานี้พบทั้งกดมือและรันบอท หากปล่อยไว้ไม่กด Approve หรือ Deny ตัวเกมส์จะหยุดค้างไม่ขุดต่อ

1.ดาวน์โหลด Extenstion AntiCaptcha plugin for installation for Google Chrome จาก <a href="https://antcpt.com/eng/download/google-chrome-options/manual-zip.html">Official Website</a><br>
2.โหลดไฟล์ content_scripts2.js ไปวางทับในโฟลเดอร์ \js<br>
3.ติดตั้งใช้งานได้ตามปกติ<br>
** อย่่าลืมติ๊กถูก Auto submit FORM after solving นะครับ
