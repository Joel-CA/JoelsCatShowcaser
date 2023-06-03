let image = document.getElementsByTagName("img")[0];
let button = document.getElementsByTagName("button")[0];
let imageCount;

let catPics = [
"https://lh3.googleusercontent.com/pw/AJFCJaXxa4ImC9YttU849emaN83Q_qxQpEDRpZPQ0YAZP-TEEUBz-xLkYPSOkbokm74BevX3DR6ZSkkWyhzArwVSsJFrhG43OiAen09p3b6SPOaeKcir7kjjxGRGgJB1mD1ollFGfz46Rl_vaEpCa8Hcp9-Ofg=w720-h720-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaVpfSH2X3htai-elfe1E8vugebQp3Dhs6FUaQzshdcMJEoTWBABzceB7CMTk48KoFkWTtNbM6rFFnf3JXUZEiUB31FN7CC3RNfs7FBxnVUxTj_kkmUiIk_GRxlKqeVJ4EsMytPe_KEIcPRoY0zY-nA-5w=w3240-h1498-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaWcbt3lt9GypDLPN2fB3PfcYz3ohuappZOPRNfZcwlYjLUS1dLXzaZuQjm33V4KNfXIufTO3K0rtlsUG4uEgvNvS3mboo7FCbc0ceGqIyk_LNsnNgi7NtDoiqbdrl4P8TYoc-gknIdunSc3CSiOF2MZcw=w2560-h1184-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaWwq8nGrdK2aIGtk8iOPg6Qq_AZQh6vjE_uQGhvZphbUlzU3l-pjBL3iTGMGlFw9-5F5Onw-0lrf6CfTG5ZMb30RLuAe85BJsUduh2w7FJUrnWNsXc2hw1SgDKxJUAswxo5g7PNNMxVnh9EC0i5nEbRiA=w3240-h1498-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaXx-_sQgjvAUNzdxoquuG80U5w0-MFCJzmQ9rh7tcVUakRMp7lzflTNfZ2g-aJuRgMGFPXrCgq8_Dfkwn46VGmG4xhBxu07iqxzwytYax9wq4vlx8tO8n1ciGEbtlcZzGWtI_z5s_ruvI_H80jU8J_HSQ=w3240-h1498-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaV7268unOWHZUXrc__843oDrFyweKsvl99wrStsGwkouSv8gwbPCquNC8UaloUEkJ3K7ZOu57kmaQwbQwdhQTSvoqKDZuYZ8oVr7ywDiag1sIUr8rl6UA6k-w_qQv8i-98BbKC1zf65RpoCmwtoRlr92A=w2468-h1858-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaUx8WGXPTcOCmKamRLPBpH_2V4XQpJ0BQVhNNF-T6J-VDWrCsaBBYyBhuRTg7aYEHf4Vz4Pa1j-muuwZiB6-Ijc7YnNFPSjh1k6qur6g3NrnNano4MM4S63F4EXnVa2FBKd4KGiqprCYK1Hn2COw3VNsg=w1398-h1858-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaV90eYy4iHZ_gFh1REVLfYYWc_9AmsVKNleKiJfcD3z4-HeyxqT36bLUPXvpUdMk2PsJoRz_6dC_rTeag6PeWo4rz68txGGN4-_TWO41Zs0T0u5ivSAe474KrtLk_rs6QJoHCIzvuEOuIfDix5y3tKA7g=w2468-h1858-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaVsFuw7Zy6IRXhrG3J9hi-Mo9l_uFuCx0WBmnlrsvcJAvfc4d_f9T1eBsh9dA327FBzYo2e_Vtfjm_87vY1b-WBQidDljvt0kBMoMLfsSCbUZtMqPrAPQIIR4wQEdpejzn3N6KavbRpfZLbKXqR4VvrLw=w1398-h1858-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaU3zf9hhIbYjlbEIOSoZjubGBks9jboC359zVzEUyuNdQ9IRA1-g0WSXmAaF6LGMakiHScjNGOGBOunSQ6XbuNBWjO8EafSM9zdCCUwApPkjJfgJlvEMFw2tSNn0JlzBELQ7neFDu-7rpFraiHsa-lY4A=w1394-h1858-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaVemeAhfgi3o1jRPLMPvRsE2P2qlMhw2G_KJzHiA4wpIwRXxMwe5GeXYm5S11HduRrl8krUyAgzChSZeiqBtJ9iowi1B22bEDipbVM-YXsZBYtYpdrUyCN7aRP0HZ7xTJ7Cl2YUTrbTODUR9xti_4Yjjg=w1200-h1600-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaXxXAWBEp6Vsp3nayYboaauJycIoPWU2-K5SW0JB3fqIu6KpMLZQj0EPpOCKVRDHMj1ATO7hWL_wpzILS24BeQL8FGNEpdaHAKY3v4TOoB23CAcGSq_KhEKMiGznGRxUbC2JyF-QHbVlonSqZnW9s-jwQ=w2468-h1858-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaXSRhZToGUXDP6Gj3dw48wj-17Ia8rh2kWig3aNPuc5GB1injl4fklMsLUHD6Z3YRY-mQG95ncgDRVZyxf52pTRbUTumRd2VsTqbyADf6YXyTVdQga0QOAWY-4AAnZSj94xdeIk33BPyMc8mu5bZXDBAw=w2468-h1858-s-no?authuser=0",
"https://lh3.googleusercontent.com/pw/AJFCJaU-vb3ZKnN3a-qTGOj_DYZKV13vDstHHuNY9nbEJFYq5LcVkmOWwRISjHuw8P9O_q_wnXne3pXHTM5sEMGANtW7k-D6vPqFDCf0osXigw1IUP3KbC6zKivE61q3kvOmHCeASDX5gHbSz3bAAtk_Ri8EXw=w1398-h1858-s-no?authuser=0"
];

window.addEventListener("load", function(){
  imageCount = Math.floor(Math.random() * catPics.length);
  setNewImage();
});

button.addEventListener("click", function(){
  imageCount++;
  if(imageCount === catPics.length){
    imageCount = 0;
  }
  setNewImage();
});

function setNewImage() {
  image.src = catPics[imageCount];
}