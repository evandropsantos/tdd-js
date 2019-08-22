/*
Desafio FizzBuzz
  Escreva uma lib que receba um número e:
  Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
  Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
  Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - 
  Se não for múltiplo de nada, retorna o número
*/

import FizzBuzz from '../../src/components/FizzBuzz'

describe('FizzBuzz', () => {
  test('Should return `Fizz` when multiple of 3', () => {
    expect( FizzBuzz(3) ).toEqual('Fizz')
    expect( FizzBuzz(6) ).toEqual('Fizz')
  })

  test('Should return `Buzz` when multiple 5', () => {
    expect( FizzBuzz(5) ).toEqual('Buzz')
    expect( FizzBuzz(10) ).toEqual('Buzz')
  })

  test('Should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect( FizzBuzz(15) ).toEqual('FizzBuzz')
  })

  test('should return the number when non-multiple', () => {
    expect( FizzBuzz(7) ).toEqual(7);
    expect( FizzBuzz(0) ).toEqual(0);
  })
})