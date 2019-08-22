import { sum, sub, mult, div } from '../../src/components/calc';

describe('calc', () => {
  describe('Smoke tests', () => {
    test('Should exist the method `sum`', () => {
      expect(sum).toBeDefined()
      expect(sum).toBeInstanceOf(Function)
    })
    
    test('Should exist the method `sub`', () => {
      expect(sub).toBeDefined()
      expect(sub).toBeInstanceOf(Function)
    })
    
    test('Should exist the method `mult`', () => {
      expect(mult).toBeDefined()
      expect(mult).toBeInstanceOf(Function)
    })
    
    test('Should exist the method `div`', () => {
      expect(div).toBeDefined()
      expect(div).toBeInstanceOf(Function)
    })
  })
  
  describe('Sum', () => {
    test('Should return 4 when `sum(2,2)`', () => 
    expect( sum(2,2) ).toEqual(4)
    )
  })
  
  describe('Sub', () => {
    test('Should return 4 when `sub(6,2)`', () =>
      expect( sub(6,2) ).toEqual(4)
    )
    
    test('Should return -4 when `sub(6,10)`', () =>
      expect( sub(6,10) ).toEqual(-4)
    )
  })

  describe('Mult', () => {
    test('Should return 4 when `mult(2,2)`', () =>
      expect( mult(2,2)).toEqual(4)
    )
  })

  describe('Div', () => {
    test('Should return 2 when `div(4,2)`', () =>
      expect( div(4, 2)).toEqual(2)
    )

    test('Should return `Não é possível divisão por zero!` when divide by 0', () =>
      expect( div(4, 0) ).toEqual('Não é possível divisão por zero!')
    )
  })
})