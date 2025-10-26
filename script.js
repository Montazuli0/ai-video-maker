function convertToVideo() {
    const fileInput = document.getElementById('imageUpload');
    const resultDiv = document.getElementById('result');
    const convertBtn = document.getElementById('convertBtn');
    
    if (!fileInput.files[0]) {
        alert('দয়া করে একটি ইমেজ সিলেক্ট করুন!');
        return;
    }

    // Show loading
    convertBtn.disabled = true;
    convertBtn.textContent = 'ভিডিও তৈরি হচ্ছে...';
    resultDiv.innerHTML = '<p>ভিডিও তৈরি হচ্ছে, অপেক্ষা করুন...</p>';

    // Simulate AI processing (in real app, this would call Hugging Face API)
    setTimeout(() => {
        const fileName = fileInput.files[0].name;
        const videoName = fileName.replace(/\.[^/.]+$/, "") + '.mp4';
        
        resultDiv.innerHTML = `
            <div style="text-align: center;">
                <p>✅ ভিডিও তৈরি সম্পূর্ণ!</p>
                <button onclick="downloadVideo()" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    ভিডিও ডাউনলোড করুন
                </button>
                <p style="margin-top: 10px; font-size: 14px; color: #666;">ফাইল: ${videoName}</p>
            </div>
        `;
        
        convertBtn.disabled = false;
        convertBtn.textContent = 'ভিডিও বানান';
    }, 3000);
}

function downloadVideo() {
    alert('ভিডিও ডাউনলোড শুরু হচ্ছে...\n\n(এটি একটি ডেমো। Real app-এ Hugging Face API ব্যবহার করতে হবে)');
    
    // In real implementation, this would download the actual video file
    // For demo, we'll create a dummy download
    const dummyVideo = new Blob(['Demo video content'], {type: 'video/mp4'});
    const url = URL.createObjectURL(dummyVideo);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted-video.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// File upload preview
document.getElementById('imageUpload').addEventListener('change', function(e) {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
        document.querySelector('.upload-btn').textContent = `সিলেক্টেড: ${fileName}`;
    }
});
