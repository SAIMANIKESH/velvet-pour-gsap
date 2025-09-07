import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

import { openingHours, socials } from '../../constants';

export default function Contact () {
  useGSAP(() => {
    const split = SplitText.create('#contact h2', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut',
    })

    timeline
      .from(split.words, {
        opacity: 0, yPercent: 100, stagger: 0.02
      })
      .from('#contact h3, #contact p', {
        opacity: 0, yPercent: 100, stagger: 0.02
      })
      .to('#f-right-leaf', {
        y: '-50', duration: 1, ease: 'power1.inOut'
      })
      .to('#f-left-leaf', {
        y: '50', duration: 1, ease: 'power1.inOut'
      }, '<')
  })

  return (
    <footer id='contact'>
      <img src='/images/footer-right-leaf.png' alt='leaf-right' id='f-right-leaf' />
      <img src='/images/footer-left-leaf.png' alt='leaf-left' id='f-left-leaf' />
      <img src='/images/footer-drinks.png' alt='footer-drinks' className='drink-img' />

      <h2>Where to Find Us</h2>

      <div className='content'>
        <h3>Visit Our Store :</h3>
        <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
      </div>

      <div className='content'>
        <h3>Contact Us :</h3>
        <p>(555)-987-6543</p>
        <p>velvetpour@cocktail.com</p>
      </div>

      <div className='content'>
        <h3>Open Every Day :</h3>
        {openingHours.map((time) => (
          <p key={time.day}> {time.day} : {time.time}</p>
        ))}
      </div>

      <div className='content'>
        <h3>Connect With Us :</h3>

        <div className='flex-center gap-5'>
          {socials.map((social) => (
            <a key={social.name}
              href={social.url}
              target='_blank'
              rel='noreferrer noopener'
              aria-label={social.name}
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>

        <p className='pt-3.5'>&#169;{new Date().getFullYear()} Velvet Pour. All rights reserved.</p>
      </div>
    </footer>
  )
}
