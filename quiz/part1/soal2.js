let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  input[1] += " Elsharawy";
  input[2] = "Provinsi " + input[2];
  input.splice("4",1, "Pria", "SMA Internasional Metro")
  console.log(input)

  date = input[3].split("/");
  let reverseDate = [];
  for(let i = date.length - 1; i >= 0; i--){
    reverseDate.push(date[i])
  }
  console.log(reverseDate)

  console.log(date.join("-"))

  console.log(input[1].slice(0,15))
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */