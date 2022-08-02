const search = require("./logic")


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
        test('Array will take should return []',() => {
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