/*
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач". */

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  // const keys = Object.keys(employees);
  // let maxValue = 0;
  // let result = '';

  // for (const key of keys) {
  //     if (employees[key] > maxValue) {
  //         maxValue = employees[key];
  //         result = `${key}: ${employees[key]}`;
  //     };
  // };

  // return result;

  const bestEmployee = { name: "", value: 0 };
  const keys = Object.keys(employees);
  for (const key of keys) {
    if (employees[key] > bestEmployee.value) {
      bestEmployee.name = key;
      bestEmployee.value = employees[key];
    }
  }
  return bestEmployee.name;
}
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  };
  console.log(findBestEmployee(developers));
  // 'lorence'

  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  };
  console.log(findBestEmployee(supports));
  // 'mango'

  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers));
  // 'lux'

  /*
  const entries = Object.entries(employees);
  let result = '';
  let maxValue = 0;
  for (const [name, value] of entries) {
    if (value > maxValue) {
      maxValue = value;
      result = name;
    }
  }
  return result;
   */