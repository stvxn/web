// whatsapp.js
const waBtn = document.createElement('a');
waBtn.href = 'https://wa.me/573101234567?text=Hola%20me%20interesa%20el%20curso%20de%20español';
waBtn.target = '_blank';
waBtn.style.position = 'fixed';
waBtn.style.bottom = '20px';
waBtn.style.right = '20px';
waBtn.style.backgroundColor = '#25D366'; 
waBtn.style.color = 'white';
waBtn.style.padding = '15px 20px';
waBtn.style.borderRadius = '50px';
waBtn.style.fontSize = '1.2rem';
waBtn.style.zIndex = '9999';
waBtn.style.textDecoration = 'none';
waBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
waBtn.innerHTML = '💬 WhatsApp';

document.body.appendChild(waBtn);