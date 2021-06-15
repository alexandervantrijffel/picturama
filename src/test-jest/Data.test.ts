import { getSectionNeighbours } from 'app/state/reducers/data'

describe('getSectionNeighbours', () => {
    test('happy flow first section', () => {
        const ids = ['15-06-2021', '14-06-2021']
        const neighbours = getSectionNeighbours(ids)('15-06-2021')
        expect(neighbours.nextSection).toBeNull()
        expect(neighbours.prevSection).toBe('14-06-2021')
    })
    test('happy flow last section', () => {
        const ids = ['15-06-2021', '14-06-2021']
        const neighbours = getSectionNeighbours(ids)('14-06-2021')
        expect(neighbours.nextSection).toBe('15-06-2021')
        expect(neighbours.prevSection).toBeNull()
    })
    test('no results for invalid section id', () => {
        const ids = ['15-06-2021', '14-06-2021']
        const neighbours = getSectionNeighbours(ids)('18-06-2021')
        expect(neighbours.nextSection).toBeNull()
        expect(neighbours.prevSection).toBeNull()
    })
})
