
function generateq() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var proof = document.getElementById('proof').value;

    console.log('Name: ' + name + " " + email + " " + phone + " " + proof);

    var url = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Name:" +
    name + "%0a Email: " + email + " phone: " + phone + " Proof: " + proof;

    var ifr = `<iframe src="${url}" height="200" width="200"></iframe>`;

    document.getElementById('qrcode').innerHTML = ifr;
}


document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert('Right Click is Disabled');    
    }, false);


