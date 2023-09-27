let sertifikat = prompt(
  "Sizda chet tilini bilish sertifikari bormi?" +
    "\n" +
    "Javob berish HA yoki YO'Q  "
);
let IELTS = 0;
let sertifikat1 = sertifikat.toUpperCase();
if (sertifikat1 == "HA") {
  IELTS = 1.3;
} else {
  IELTS = 1;
}

let test = {
  savollar: [
    {
      savol: "Quyidagilarning qaysi biri  yuqoriroq yuridik kuchga ega?",
      variantlar: [
        "A. Qonun",
        "B. Vazirlar Mahkamsi qarori",
        "C. Konstitsiya",
        "D. Prezident farmoni",
      ],
      togriJavob: "C",
    },
    {
      savol: "Pulning qaysi vazifasi narxning shakllanishi bilan bog’liq?",
      variantlar: [
        "A. Qiymat o'lchoni",
        "B. Jamg'arma vositasi",
        "C. To'lov vositasi",
        "D. Muomala vositasi",
      ],
      togriJavob: "A",
    },
  ],
};
let togriJavoblar = 0;
const startTime = new Date();
for (let i = 0; i < test.savollar.length; ) {
  const FoydalanuvchiJavobi = prompt(
    test.savollar[i].savol + "\n" + test.savollar[i].variantlar.join("\n")
  );
  alert("Javobni tasdiqlaysizmi?");

  if (
    FoydalanuvchiJavobi[0] == "A" ||
    FoydalanuvchiJavobi[0] == "B" ||
    FoydalanuvchiJavobi[0] == "C" ||
    FoydalanuvchiJavobi[0] == "D"
  ) {
    if (FoydalanuvchiJavobi[0] == test.savollar[i].togriJavob) {
      togriJavoblar++;
    }
    i++;

    continue;
  }
  if (
    FoydalanuvchiJavobi[0] == "a" ||
    FoydalanuvchiJavobi[0] == "b" ||
    FoydalanuvchiJavobi[0] == "c" ||
    FoydalanuvchiJavobi[0] == "d"
  ) {
    if (FoydalanuvchiJavobi[0].toUpperCase() == test.savollar[i].togriJavob) {
      togriJavoblar++;
    }
    i++;

    continue;
  }
  if (
    FoydalanuvchiJavobi[0] != "a" ||
    FoydalanuvchiJavobi[0] != "b" ||
    FoydalanuvchiJavobi[0] != "c" ||
    FoydalanuvchiJavobi[0] != "d"
  ) {
    alert("Mavjud bo'lmagan variantni tanladingiz");
  } else {
  }
}

const endTime = new Date();
const sarflanganVaqt = endTime - startTime;
alert(
  "Siz " +
    togriJavoblar +
    " ta savolga to‘g‘ri javob berdingiz." +
    "\n" +
    "Siz testdan to'plagan ball: " +
    togriJavoblar * 5 +
    " BALL" +
    "\n" +
    "IELTS uchun berilgan indeks: " +
    IELTS +
    "\n" +
    " Siz to'plagan umumiy ball: " +
    togriJavoblar * 5 * IELTS +
    " BALL" +
    "\n" +
    "Testga sarflangan vaqtingiz:  " +
    sarflanganVaqt +
    " ms"
);
// alert(
//   "siz testga " +
//     sarflanganVaqt +
//     " sarfladingiz"
// );
