const eytDetaylari = require('./index.js');
// const eytDetaylari = require('./solution.js');

const calisanListesi1 = [
  ['Hatice', 'Kadın', 1999, 21, 5200, 50000],
  ['Muhammed', 'Erkek', 2001, 22, 5001, 80000],
  ['Halime', 'Kadın', 1995, 17, 5101, 90000],
  ['Fatma', 'Kadın', 2015, 8, 4500, 110000],
  ['Mehmet Ali', 'Erkek', 1999, 26, 4000, 40000],
  ['Ramazan', 'Erkek', 1992, 26, 8200, 75000],
  ['Furkan', 'Erkek', 1999, 24, 3500, 52000],
  ['Sultan', 'Kadın', 2001, 16, 5001, 78000],
  ['Kadir', 'Erkek', 1985, 27, 8000, 150000],
  ['Şükrü', 'Erkek', 2021, 1, 500, 20000],
];

const calisanListesi_1999Oncesi = [
  ['Muhammed', 'Erkek', 2001, 30, 5001, 10000],
  ['Mehmet Ali', 'Erkek', 1999, 30, 5001, 10000],
  ['Ramazan', 'Erkek', 1992, 30, 5001, 10000],
  ['Halime', 'Kadın', 1995, 30, 5101, 10000],
  ['Fatma', 'Kadın', 2015, 30, 5001, 10000],
  ['Sultan', 'Kadın', 2001, 30, 5001, 10000],
];

const calisanListesi_5000prim = [
  ['Muhammed', 'Erkek', 1999, 30, 5001, 10000],
  ['Mehmet Ali', 'Erkek', 1999, 30, 4000, 10000],
  ['Ramazan', 'Erkek', 1999, 30, 5001, 10000],
  ['Halime', 'Kadın', 1999, 30, 4000, 10000],
  ['Fatma', 'Kadın', 1999, 30, 5000, 10000],
  ['Sultan', 'Kadın', 1999, 30, 4999, 10000],
];

const calisanListesi_erkekler = [
  ['Muhammed', 'Erkek', 1992, 25, 5001, 10000],
  ['Mehmet Ali', 'Erkek', 1992, 26, 5001, 10000],
  ['Ramazan', 'Erkek', 1992, 24, 5001, 10000],
  ['Furkan', 'Erkek', 1992, 19, 5001, 10000],
  ['Kadir', 'Erkek', 1992, 21, 5001, 10000],
  ['Şükrü', 'Erkek', 1992, 20, 5001, 10000],
];

const calisanListesi_kadinlar = [
  ['Hatice', 'Kadın', 1999, 20, 5101, 10000],
  ['Halime', 'Kadın', 1999, 21, 5101, 10000],
  ['Fatma', 'Kadın', 1999, 19, 5101, 10000],
  ['Sultan', 'Kadın', 1999, 1, 5001, 10000],
];

const result = eytDetaylari(calisanListesi_kadinlar);

describe('Emeklilikte Yaşa Takılanlar(EYT) Hesabı  Testleri', () => {
  test('Fonksiyonun dönüş değeri array mi?', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  test('Fonksiyonun dönüş değeri 3 elemanlı mı', () => {
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
  });

  test('Fonksiyonun dönüş değerinin ilk elemanı bir array mi?', () => {
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
    expect(Array.isArray(result[0])).toBe(true);
  });

  test('Fonksiyonun dönüş değerinin ikinci elemanı bir array mi?', () => {
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
    expect(Array.isArray(result[1])).toBe(true);
  });

  test('Fonksiyonun dönüş değerinin son elemanı bir number mı?', () => {
    expect(typeof result[2]).toBe('number');
  });

  test('1999 öncesi sigorta kaydını kontrol ediyor mu?', () => {
    expect(eytDetaylari(calisanListesi_1999Oncesi)).toEqual([
      ['Mehmet Ali', 'Ramazan', 'Halime'],
      ['Muhammed', 'Fatma', 'Sultan'],
      30000,
    ]);
  });

  test('5000 prim gününü doğru kontrol ediyor mu?', () => {
    expect(eytDetaylari(calisanListesi_5000prim)).toEqual([
      ['Muhammed', 'Ramazan', 'Fatma'],
      ['Mehmet Ali', 'Halime', 'Sultan'],
      30000,
    ]);
  });

  test('Kadın çalışanlar için 20 yıl kontrolünü yapıyor mu?', () => {
    expect(eytDetaylari(calisanListesi_kadinlar)).toEqual([
      ['Hatice', 'Halime'],
      ['Fatma', 'Sultan'],
      20000,
    ]);
  });

  test('Erkek çalışanlar için 25 yıl kontrolünü yapıyor mu?', () => {
    expect(eytDetaylari(calisanListesi_erkekler)).toEqual([
      ['Muhammed', 'Mehmet Ali'],
      ['Ramazan', 'Furkan', 'Kadir', 'Şükrü'],
      40000,
    ]);
  });

  test('Şirket çalışanları için doğru hesaplama yapıyor mu?', () => {
    expect(eytDetaylari(calisanListesi1)).toEqual([
      ['Hatice', 'Ramazan', 'Kadir'],
      [
        'Muhammed',
        'Halime',
        'Fatma',
        'Mehmet Ali',
        'Furkan',
        'Sultan',
        'Şükrü',
      ],
      470000,
    ]);
  });
});
