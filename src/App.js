// file: src/App.js
import React, { Component } from 'react';
import Parking from './myComponents/Parking';
import './App.css';
import ReactSwipe from 'react-swipe';

window.onclick = e => {
  //외부를 클릭하면 tooltip을 사라지게 하는 스크립트
  //console.log('click');
  const tooltip = document.getElementById('tooltip');
  if (tooltip.style.display === 'inline-block' || e.target.dataset.value === '')
    tooltip.style.display = 'none';
};

class App extends Component {
  state = {
    swipeOptions: {
      startSlide: 0,
      auto: 0,
      speed: 500,
      disableScroll: false,
      continuous: true,
      swiping() {
        // 터치
        const tooltip = document.getElementById('tooltip');
        const bad1 = document.getElementById('bad1');
        tooltip.style.display = 'none';
        bad1.style.display = 'none';

        //CCTV닫기
        const player = document.getElementsByClassName('player');
        const iframe = document.getElementsByClassName('iframe');
        //iframe 멈추기
        for (let item of iframe) {
          item.contentWindow.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              '*'
          );
        }
        for (let item of player) {
          item.style.display = 'none';
        }
      },
      callback() {
        //스와이프 시작
        //console.log('slide changed');
        const tooltip = document.getElementById('tooltip');
        const bad1 = document.getElementById('bad1');
        tooltip.style.display = 'none';
        bad1.style.display = 'none';

        //CCTV닫기
        const player = document.getElementsByClassName('player');
        const iframe = document.getElementsByClassName('iframe');
        //iframe 멈추기
        for (let item of iframe) {
          item.contentWindow.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              '*'
          );
        }
        for (let item of player) {
          item.style.display = 'none';
        }
      },
      transitionEnd() {
        //스와이프 종료
        //console.log('ended transition');
      }
    },
    data1: [
      {
        place: 'A주차장',
        row: 1,
        rotation: 0 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 30,
        url:
            'https://www.youtube.com/embed/NW-rXqCl7us?start=60&enablejsapi=1;',
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' },
          { col: 14, value: 'empty', time: '' },
          { col: 15, value: 'full', time: '2019-10-17 10:02' },
          { col: 16, value: 'full', time: '2019-10-17 10:02' },
          { col: 17, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'A주차장',
        row: 2,
        rotation: 45,
        margin: 0,
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'full', time: '2019-10-17 10:02' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'full', time: '2019-10-17 10:02' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'A주차장',
        row: 3,
        rotation: -45,
        margin: 30,
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'A주차장',
        row: 4,
        rotation: 0,
        margin: 10,
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' },
          { col: 14, value: 'empty', time: '' },
          { col: 15, value: 'full', time: '2019-10-17 10:02' },
          { col: 16, value: 'full', time: '2019-10-17 10:02' },
          { col: 17, value: 'full', time: '2019-10-17 10:02' }
        ]
      }
    ],
    data2: [
      {
        place: 'B주차장',
        row: 1,
        rotation: 0 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 30,
        url:
            'https://www.youtube.com/embed/bPeGC8-PQJg?start=60&enablejsapi=1;',
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'full', time: '2019-10-17 10:02' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'full', time: '2019-10-17 10:02' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' },
          { col: 14, value: 'full', time: '2019-10-17 10:02' },
          { col: 15, value: 'full', time: '2019-10-17 10:02' },
          { col: 16, value: 'full', time: '2019-10-17 10:02' },
          { col: 17, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'B주차장',
        row: 2,
        rotation: 90,
        margin: 30,
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'full', time: '2019-10-17 10:02' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'B주차장',
        row: 3,
        rotation: 0 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 0,
        url:
            'https://www.youtube.com/embed/bPeGC8-PQJg?start=60&enablejsapi=1;',
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'full', time: '2019-10-17 10:02' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'full', time: '2019-10-17 10:02' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' },
          { col: 14, value: 'full', time: '2019-10-17 10:02' },
          { col: 15, value: 'full', time: '2019-10-17 10:02' },
          { col: 16, value: 'full', time: '2019-10-17 10:02' },
          { col: 17, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'B주차장',
        row: 4,
        rotation: 0 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 30,
        url:
            'https://www.youtube.com/embed/bPeGC8-PQJg?start=60&enablejsapi=1;',
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'full', time: '2019-10-17 10:02' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'full', time: '2019-10-17 10:02' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' },
          { col: 14, value: 'full', time: '2019-10-17 10:02' },
          { col: 15, value: 'full', time: '2019-10-17 10:02' },
          { col: 16, value: 'full', time: '2019-10-17 10:02' },
          { col: 17, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'B주차장',
        row: 5,
        rotation: 90,
        margin: 30,
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'full', time: '2019-10-17 10:02' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'B주차장',
        row: 6,
        rotation: 0 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 0,
        url:
            'https://www.youtube.com/embed/bPeGC8-PQJg?start=60&enablejsapi=1;',
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'full', time: '2019-10-17 10:02' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'full', time: '2019-10-17 10:02' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' },
          { col: 14, value: 'full', time: '2019-10-17 10:02' },
          { col: 15, value: 'full', time: '2019-10-17 10:02' },
          { col: 16, value: 'full', time: '2019-10-17 10:02' },
          { col: 17, value: 'full', time: '2019-10-17 10:02' }
        ]
      },
      {
        place: 'B주차장',
        row: 7,
        rotation: 0 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 0,
        url:
            'https://www.youtube.com/embed/bPeGC8-PQJg?start=60&enablejsapi=1;',
        cols: [
          { col: 1, value: 'full', time: '2019-10-17 10:02' },
          { col: 2, value: 'full', time: '2019-10-17 10:02' },
          { col: 3, value: 'full', time: '2019-10-17 10:02' },
          { col: 4, value: 'full', time: '2019-10-17 10:02' },
          { col: 5, value: 'full', time: '2019-10-17 10:02' },
          { col: 6, value: 'full', time: '2019-10-17 10:02' },
          { col: 7, value: 'full', time: '2019-10-17 10:02' },
          { col: 8, value: 'full', time: '2019-10-17 10:02' },
          { col: 9, value: 'full', time: '2019-10-17 10:02' },
          { col: 10, value: 'full', time: '2019-10-17 10:02' },
          { col: 11, value: 'full', time: '2019-10-17 10:02' },
          { col: 12, value: 'full', time: '2019-10-17 10:02' },
          { col: 13, value: 'full', time: '2019-10-17 10:02' },
          { col: 14, value: 'full', time: '2019-10-17 10:02' },
          { col: 15, value: 'full', time: '2019-10-17 10:02' },
          { col: 16, value: 'full', time: '2019-10-17 10:02' },
          { col: 17, value: 'full', time: '2019-10-17 10:02' }
        ]
      }
    ],
    data3: [
      {
        place: 'C주차장',
        row: 1,
        rotation: -45 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: -8,
        url: 'https://www.youtube.com/embed/S4vNtRQAcqE?start=0&enablejsapi=1;',
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'C주차장',
        row: 2,
        rotation: -45,
        margin: 30,
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'C주차장',
        row: 3,
        rotation: -45,
        margin: -8,
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'C주차장',
        row: 4,
        rotation: -45,
        margin: 30,
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'C주차장',
        row: 5,
        rotation: -45,
        margin: -8,
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'C주차장',
        row: 6,
        rotation: -45,
        margin: 0,
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      }
    ],
    data4: [
      {
        place: 'D주차장',
        row: 1,
        rotation: -45 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 30,
        url:
            'https://www.youtube.com/embed/y1M5dNkvCJc?start=200&enablejsapi=1;',
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'D주차장',
        row: 2,
        rotation: 45 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: -8,
        url:
            'https://www.youtube.com/embed/y1M5dNkvCJc?start=200&enablejsapi=1;',
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'D주차장',
        row: 3,
        rotation: 45 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 30,
        url:
            'https://www.youtube.com/embed/y1M5dNkvCJc?start=200&enablejsapi=1;',
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'D주차장',
        row: 4,
        rotation: -45 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: -8,
        url:
            'https://www.youtube.com/embed/y1M5dNkvCJc?start=200&enablejsapi=1;',
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'D주차장',
        row: 5,
        rotation: -45 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 30,
        url:
            'https://www.youtube.com/embed/y1M5dNkvCJc?start=200&enablejsapi=1;',
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'D주차장',
        row: 6,
        rotation: 45 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: -8,
        url:
            'https://www.youtube.com/embed/y1M5dNkvCJc?start=200&enablejsapi=1;',
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      },
      {
        place: 'D주차장',
        row: 7,
        rotation: 45 /* 0은 20개, 45는 15개, 90은 10개 이하 권장 */,
        margin: 0,
        url:
            'https://www.youtube.com/embed/y1M5dNkvCJc?start=200&enablejsapi=1;',
        cols: [
          { col: 1, value: 'empty', time: '' },
          { col: 2, value: 'empty', time: '' },
          { col: 3, value: 'empty', time: '' },
          { col: 4, value: 'empty', time: '' },
          { col: 5, value: 'empty', time: '' },
          { col: 6, value: 'empty', time: '' },
          { col: 7, value: 'empty', time: '' },
          { col: 8, value: 'empty', time: '' },
          { col: 9, value: 'empty', time: '' },
          { col: 10, value: 'empty', time: '' },
          { col: 11, value: 'empty', time: '' },
          { col: 12, value: 'empty', time: '' },
          { col: 13, value: 'empty', time: '' }
        ]
      }
    ]
  };

  componentDidMount() {
    //모바일에서는 prev, next버튼 없애기
    const rootWidth = document.getElementById('root').offsetWidth;
    if (rootWidth < 450) {
      document.getElementById('prev').style.display = 'none';
      document.getElementById('next').style.display = 'none';
    }
  }

  handleButton = e => {
    const wrapper = document.getElementById('wrapper');
    const loading = document.getElementById('loading');
    const title = document.getElementById('title');
    const buttons = document.getElementById('buttons');
    const swipeOptions = this.state.swipeOptions;
    let loadingW = loading.offsetWidth; //로딩의 너비 저장
    let dataNum = e.target.dataset.num;
    title.style.position = 'relative';
    title.style.left = '0px';
    buttons.style.position = 'absolute';
    buttons.style.top = title.offsetHeight + 'px';
    buttons.style.width = loadingW + 'px';

    //console.log(dataNum-1);
    this.setState({
      swipeOptions: { ...swipeOptions, startSlide: dataNum - 1 }
    });
    //console.log('loadingW', loadingW);

    //console.log(moveX, parseInt(loading.style.left,10));
    const animation = setInterval(frame, 10); //10ms마다 frame을 반복
    function frame() {
      if (parseInt(title.style.left, 10) < loadingW) {
        title.style.left = parseInt(title.style.left, 10) + 10 + 'px';
        buttons.style.top = parseInt(buttons.style.top, 10) + 10 + 'px';
      } else {
        //console.log(title.style.left, buttons.style.top);
        loading.className = 'hide';
        setTimeout(() => {
          const swiper = document.getElementById('swiper');
          document.getElementById('header').className = 'visible';
          swiper.style.opacity = 1;
          swiper.style.pointerEvents = 'auto';
          swiper.style.overflow = 'unset';
          swiper.style.height = 'auto';
          let containers = document.getElementsByClassName('carousel');
          for (let item of containers) {
            //console.log(item);
            item.style.width = wrapper.offsetWidth + 'px';
            item.style.overflow = 'none';
            item.style.height = 'auto';
          }
          title.style.left = '0px';
          //buttons.style.top = title.offsetHeight+'px';
        }, 100);
        clearInterval(animation);
      }
    }
  };

  handleHome = e => {
    const loading = document.getElementById('loading');
    const title = document.getElementById('title');
    const buttons = document.getElementById('buttons');
    const swiper = document.getElementById('swiper');
    loading.className = 'visible';
    let loadingW = loading.offsetWidth; //래퍼의 너비 저장
    //console.log('loadingW', loadingW);
    document.getElementById('header').className = 'hide';
    swiper.style.opacity = 0;
    swiper.style.pointerEvents = 'none';
    swiper.style.overflow = 'hidden';
    swiper.style.height = '10px';
    document.getElementById('bad1').style.display = 'none'; //inline-block
    //CCTV닫기
    const player = document.getElementsByClassName('player');
    const iframe = document.getElementsByClassName('iframe');
    //iframe 멈추기
    for (let item of iframe) {
      item.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
      );
    }
    for (let item of player) {
      item.style.display = 'none';
    }

    title.style.left = parseInt(loadingW, 10) * -1 + 'px';
    //console.log(loadingW, title.style.left);

    //console.log(parseInt(loading.style.left,10));
    const animation = setInterval(frame, 10); //10ms마다 frame을 반복
    function frame() {
      if (parseInt(title.style.left, 10) < 0) {
        title.style.left = parseInt(title.style.left, 10) + 10 + 'px';
        buttons.style.top = parseInt(buttons.style.top, 10) - 10 + 'px';
      } else {
        //console.log(title.style.left, buttons.style.top);
        clearInterval(animation);
      }
    }
  };

  handleBad = e => {
    e.stopPropagation();
    const tooltip = document.getElementById('tooltip');

    tooltip.style.display = 'inline-block';
    tooltip.style.left = e.clientX + 'px';
    tooltip.style.top = e.clientY + window.scrollY + 10 + 'px';
    tooltip.innerHTML = '주차시간: ' + e.target.dataset.time;
    if (tooltip.offsetHeight > 30) {
      tooltip.style.left = e.clientX - 190 + 'px';
      tooltip.style.top = e.clientY + window.scrollY + 10 + 'px';
    }
  };

  render() {
    let reactSwipeEl;
    return (
        <div id="wrapper">
        {/* 메인화면 로딩페이지  */}
        <div id="loading">
        {/* 메인화면 로고 및 타이틀 */}
        <div id="title">
        <img src="./images/title.png" alt="title" className="title" />
        </div>
    {/* 메인화면 주차장 버튼들 */}
  <div id="buttons">
        <div
    id="button1"
    data-num="1"
    className="buttons"
    onClick={this.handleButton}
        >
        A주차장
        </div>
        <div
    id="button2"
    data-num="2"
    className="buttons"
    onClick={this.handleButton}
        >
        B주차장
        </div>
        <br />
        <div
    id="button3"
    data-num="3"
    className="buttons"
    onClick={this.handleButton}
        >
        C주차장
        </div>
        <div
    id="button4"
    data-num="4"
    className="buttons"
    onClick={this.handleButton}
        >
        D주차장
        </div>
        <br />
        {/* 메인화면 파란색 배경 */}
        <div className="backBlue">ⓒ Republic of Korea Army</div>
    </div>
    </div>

    {/* 헤더부분 */}
  <div id="header" className="hide">
        <img
    id="back"
    src="./images/back.png"
    alt="back"
    onClick={this.handleHome}
    />
    <img
    id="home"
    src="./images/home.png"
    alt="home"
    onClick={this.handleHome}
    />
    </div>

    {/* 주차장 그리기 */}
  <div id="swiper" style={{ opacity: 0, pointerEvents: 'none' }}>
  <ReactSwipe
    className="carousel"
    swipeOptions={this.state.swipeOptions}
    ref={el => (reactSwipeEl = el)}
  >
  <div>
    <Parking data={this.state.data1} dataNum={1} />
    </div>
    <div>
    <Parking data={this.state.data2} dataNum={2} />
    </div>
    <div>
    <Parking data={this.state.data3} dataNum={3} />
    </div>
    <div>
    <Parking data={this.state.data4} dataNum={4} />
    </div>
    </ReactSwipe>
    <button id="prev" onClick={() => reactSwipeEl.prev()}>
    Prev
    </button>
    &nbsp;
  <button id="next" onClick={() => reactSwipeEl.next()}>
    Next
    </button>
    <div className="footer">ⓒ Republic of Korea Army</div>
    </div>

    {/* 툴팁 */}
  <div id="tooltip" className="tooltip" />

        {/* 배드카 */}
        <img
    id="bad1"
    className="bad"
    onClick={this.handleBad}
    data-time=""
    src="./images/bad.png"
    alt="bad"
        />
        </div> //wrapper
  );
  }
}

export default App;
