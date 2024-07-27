function eytDetaylari(eytArray) {
  /* kodlar buraya */
  let employee = new Array();
  let retired = new Array();
  let totalSalary = 0;
  let isRetired = false;

  for (let i = 0; i < eytArray.length; i++) {
    isRetired = false;
    if (eytArray[i][2] < 2000) {
      if (
        (eytArray[i][3] >= 25 && eytArray[i][1] == 'Erkek') ||
        (eytArray[i][3] >= 20 && eytArray[i][1] == 'Kadın')
      ) {
        if (eytArray[i][4] >= 5000) {
          retired.push(eytArray[i][0]);
          isRetired = true;
        }
      }
    }
    if (!isRetired) {
      employee.push(eytArray[i][0]);
      totalSalary += eytArray[i][5];
    }
  }
  const result = [retired, employee, totalSalary];
  return result;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = eytDetaylari;
