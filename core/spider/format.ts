import { Page } from 'puppeteer'
import { Match } from '../types'

function trimContent (el: Element, index?: number | number[]): string {
  const indexes: number[] = index === undefined 
    ? [] 
    : Array.isArray(index) ? index : [index]
  
  const elemment = indexes.reduce((parent, currIndex) => {
    return parent?.children[currIndex]
  }, el)

  return (elemment?.innerHTML || '').trim()
}




// data.qtx.com/
export const formatMatches = async (page: Page, league: string, season: string) => {
  
  const coll = await page.$eval('.first_part', (el: Element) => {
    const matches: Match[] = [] 
    Array.from(el.children).map((roundTableElement, index) => {
      const round = index + 1
      const matchElements = roundTableElement.querySelectorAll('.tc_center_value')
      Array.from(matchElements).map(match => {
        let status = 0
        const date = match.children[1].innerHTML.trim()
        const home = match.children[2].children[0].innerHTML.trim()
        const score = match.children[3].innerHTML.trim()
        const away = match.children[4].children[0].innerHTML.trim()
        if (score !== '-') status = 1
        
        matches.push({
          league: '',
          season: '',
          round,
          date,
          status,
          home,
          away,
          hscore: status === 1 ? Number(score.split('-')[0]) : undefined,
          ascore: status === 1 ? Number(score.split('-')[1]) : undefined
        })
      })
    })

    
    return matches
  })

  coll.forEach(m => {
    m.league = league
    m.season = season
  })

  return coll
}

export const formatScores = async (page: Page) => {
  return await page.$eval('#whole_rank', (el) => {
    return Array.from(el.querySelectorAll('.tc_score_value')).map((row, index) => {
      return {
        rank: index + 1,
        team: row.children[1].querySelector('a')?.innerHTML.trim(),
        round: Number(row.children[2].innerHTML.trim()),
        win: Number(row.children[3].innerHTML.trim()),
        draw: Number(row.children[4].innerHTML.trim()),
        fail: Number(row.children[5].innerHTML.trim()),
        goals: Number(row.children[6].innerHTML.trim()),
        losts: Number(row.children[7].innerHTML.trim()),
        diff: Number(row.children[8].innerHTML.trim()),
        goalAverage: Number(row.children[9].innerHTML.trim()),
        lostAverage: Number(row.children[10].innerHTML.trim()),
        score: Number(row.children[11].innerHTML.trim()),
      }
    })
  })
}

export const formatShooters = async (page: Page) => {
  return await page.$eval('#whole_rank', (el) => {
    return Array.from(el.querySelectorAll('.tc_score_value')).slice(0, 10).map((row, index) => {
      return {
        rank: index + 1,
        shooter: row.children[1].querySelector('a')?.innerHTML.trim(),
        team: row.children[2].querySelector('a')?.innerHTML.trim(),
        goal: Number(row.children[3].innerHTML.trim()),
        penalty: Number(row.children[4].innerHTML.trim()),
      }
    })
  })
}