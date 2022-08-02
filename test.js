const {search,addToArr,deleteItem} = require("./logic") 


const array = [
    {
        id : 1 , 
        title : 'Saif' , 
    } ,
    {
        id : 2 , 
        title : 'Sami'  ,
    },
    {
        id: 3 , 
        title : 'Ahmad'
    }
]

describe('Make Test for search function',() => {
        test('Array will take should return [{title : "Saif"},{title : "Sami"}]',() => {
            expect(search(array,'sa')).toEqual([
                {
                id : 1 , 
                title : 'Saif' , 
                } ,
                {
                    id : 2 , 
                    title : 'Sami'  ,
                }
            ])
        })
        test('Array will take should return [{title : "Ahmad"}]',() => {
            expect(search(array,'ma')).toEqual([
                {
                id : 3 , 
                title : 'Ahmad' , 
                } 
            ])
        })
        test('Array will take should return [{title : "Ahmad"}]',() => {
            expect(search(array,'ka')).toEqual([])
        })
        test('Array will take should return []',() => {
            expect(search(array,' Ahm    ')).toEqual([{
                id: 3 , 
                title : 'Ahmad'
            }
        ])
        })
        // test('should first', () => { second }) 
})

describe('Make Test for addToArr function',() => {
    test('Array should push {title : {title : "Anass"}}',() => {
        expect(addToArr(array,{title : "Anass" ,  id : 4 })).toEqual([
            {
                id : 1 , 
                title : 'Saif' , 
            } ,
            {
                id : 2 , 
                title : 'Sami'  
            },
            {
                id: 3 , 
                title : 'Ahmad'
            },
            {
                id : 4 ,
                title : "Anass" 
            }
          ])
    })
    test('Array should push in empty array',() => {
        expect(addToArr([],{id: 1 , title : 'Ahmad'})).toEqual([{id: 1 , title : 'Ahmad' }])
    })
})

describe('delete function pure', () => {
  test('Refactor our delete item function so it is pure.', function () {
    expect(deleteItem([{ id: 1 }, { id: 2 }], { id: 1 })).toEqual([{ id: 2 }])
  })
  test('Refactor our delete item function so it is pure.', function () {
    expect(deleteItem([{ id: 1 }, { id: 2 }], { id: 3 })).toEqual([
      { id: 1 },
      { id: 2 },
    ])
  })
})
