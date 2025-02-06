document.getElementById('yesButton').addEventListener('click', function() {
    alert("💖 I LOVE YOU! 💖");
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
});

document.getElementById('noButton').addEventListener('click', function() {
    alert("💔 Sending you Love ANYWAY! Happy Valentine's Day! 💕");
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
});

window.onload = function() {
    document.getElementById('bg-music').play();
};
