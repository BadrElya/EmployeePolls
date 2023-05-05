import {_saveQuestion} from './utils/_DATA'

describe('Test on _saveQuestion', () => {
    it('will return the saved question with all expected fields when correctly formatted data is passed', async () => {
      const q = {
        optionOneText: 'opt1',
        optionTwoText: 'opt2',
        author: 'tylermcginnis'
      }
      const result = await _saveQuestion(q)
      expect(result).toHaveProperty('author', 'tylermcginnis')
      expect(result).toHaveProperty('optionOne', {text: 'opt1', votes: []})
      expect(result).toHaveProperty('optionTwo', {text: 'opt2', votes: []})
    })
  
    it('will throw an error if author is missing', async () => {
      const q = {
        optionOneText: 'opt1',
        optionTwoText: 'opt2',
      }
      await expect(_saveQuestion(q)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')
    })
  
    it('will throw an error if optionOneText is missing', async () => {
      const q = {
        optionTwoText: 'opt2',
        author: 'tylermcginnis'
      }
      await expect(_saveQuestion(q)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')
    })
  
    it('will throw an error if optionTwoText is missing', async () => {
      const q = {
        optionOneText: 'opt1',
        author: 'tylermcginnis'
      }
      await expect(_saveQuestion(q)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')
    })
  })
  