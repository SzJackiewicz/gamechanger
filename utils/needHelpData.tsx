import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChild,
  faPeopleLine,
  faChildren,
  faUserGroup,
  faUserDoctor,
  faPhoneVolume,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export const HelpLines = () => {
  const helpLines = [
    {
      title: 'Telefon zaufania dla dzieci i młodzieży',
      number: '116 111',
      url: 'http://www.116111.pl',
      urlText: 'www.116111.pl',
      icon: (
        <FontAwesomeIcon
          icon={faChildren}
          style={{ color: '#31c191' }}
        />
      ),
    },
    {
      title: 'Telefon dla osób dorosłych w kryzysie samobójczym',
      number: '511 200 200',
      url: 'http://www.woik.waw.pl',
      urlText: 'www.woik.waw.pl',
      icon: (
        <FontAwesomeIcon
          icon={faPeopleLine}
          style={{ color: '#31c191' }}
        />
      ),
    },
    {
      title: 'Dziecięcy telefon zaufania Rzecznika Praw Dziecka',
      number: '800 121 212',
      url: 'http://www.800121212.pl',
      urlText: 'www.800121212.pl',
      icon: (
        <FontAwesomeIcon
          icon={faChild}
          style={{ color: '#31c191' }}
        />
      ),
    },
    {
      title: 'Centrum Wsparcia dla Osób Dorosłych w kryzysie psychicznym',
      number: '800 702 222',
      url: 'http://www.centrumwsparcia.pl',
      urlText: 'www.centrumwsparcia.pl',
      icon: (
        <FontAwesomeIcon
          icon={faUserGroup}
          style={{ color: '#31c191' }}
        />
      ),
    },
    {
      title: 'Telefon Wsparcia emocjonalnego dla dorosłych',
      number: '116 123',
      icon: (
        <FontAwesomeIcon
          icon={faUserDoctor}
          style={{ color: '#31c191' }}
        />
      ),
    },
    {
      title: 'Ogólnopolski telefon dla ofiar przemocy w rodzinie „Niebieska Linia”',
      number: '800 120 002',
      url: 'http://www.niebieskalinia.info',
      urlText: 'www.niebieskalinia.info',
      icon: (
        <FontAwesomeIcon
          icon={faPhoneVolume}
          style={{ color: '#31c191' }}
        />
      ),
    },
    {
      title: 'Serwis informacyjny dot. wsparcia w Twojej okolicy',
      url: 'http://www.mapujpomoc.pl',
      urlText: 'www.mapujpomoc.pl',
      icon: (
        <FontAwesomeIcon
          icon={faCircleInfo}
          style={{ color: '#31c191' }}
        />
      ),
    },
  ]

  return (
    <div className='container-help'>
      {helpLines.map((line, index) => (
        <div
          key={index}
          className='helpLine color-gray-100'
        >
          <div className='icon-help'>{line.icon}</div>
          <StyledTextContainer>
            <h2 className='font-md-clamp color-gray-100'>{line.title}</h2>
            {line.number && <p className='number mb-10 color-gray-300'>{line.number}</p>}
            {line.url && (
              <Link
                href={line.url}
                target='_blank'
                rel='noopener noreferrer'
                className='color-gray-300'
              >
                {line.urlText}
              </Link>
            )}
          </StyledTextContainer>
        </div>
      ))}
    </div>
  )
}

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
