
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Page ကို Refresh မဖြစ်အောင် တားတာပါ
        
        // အောင်မြင်ကြောင်း Alert ပြမယ် (ဒါက စမ်းသပ်တာပါ)
        alert('Smart Won htan မှ ကြိုဆိုပါတယ် Boss!');
        
        // Dashboard ဖိုင်ဆီကို လွှတ်လိုက်မယ် (ဖိုင်နာမည် index.html ဖြစ်ရပါမယ်)
        window.location.href = "index.html"; 
    });
