function goToOTP() {
  let name = document.getElementById('name').value;
  let mobile = document.getElementById('mobile').value;
  let email = document.getElementById('email').value;

  if (name === "" || mobile === "" || email === "") {
    alert("Please fill all fields");
    return;
  }

  document.getElementById('loginCard').style.display = 'none';
  document.getElementById('otpCard').style.display = 'block';
  alert("OTP sent to your mobile/email");
}
function resendOTP() {
  alert("OTP resent to your mobile/email");
} 
let otpInputs = document.querySelectorAll('.otp-input');

otpInputs.forEach(function(input, index) {
  input.addEventListener('input', function() {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });
});

function verifyOTP() {
  let otpInputs = document.querySelectorAll('.otp-input');
  let otp = "";
  if (otpInputs.length === 0) {
    alert("Please enter full OTP");
    return;
  }

  otpInputs.forEach(input => otp += input.value);

  if (otp.length < 4) {
    alert("Please enter full OTP");
    return;
  }  
  alert("OTP Verified: " + otp);

}