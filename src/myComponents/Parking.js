/* ./myComponents/Parking.js */
import React, { Component } from 'react';

function getTime() { 
  let currentdate = new Date();
  let datetime =
    currentdate.getFullYear() +
    '-' +
    ((currentdate.getMonth() + 1 + '').length === 1
      ? '0' + (currentdate.getMonth() + 1)
      : currentdate.getMonth() + 1) +
    '-' +
    ((currentdate.getDate() + '').length === 1
      ? '0' + currentdate.getDate()
      : currentdate.getDate()) +
    ' ' +
    ((currentdate.getHours() + '').length === 1
      ? '0' + currentdate.getHours()
      : currentdate.getHours()) +
    ':' +
    ((currentdate.getMinutes() + '').length === 1
      ? '0' + currentdate.getMinutes() + ''
      : currentdate.getMinutes()) +
    ':' +
    ((currentdate.getSeconds() + '').length === 1
      ? '0' + currentdate.getSeconds() + ''
      : currentdate.getSeconds());
  return datetime;
}

class Parking extends Component {
  static defaultProps = {
    data: []
  };
  state = {
    data: this.props.data,
    place: this.props.data[0].place,
    countFull: 0,
    countEmpty: 0,
    datetime: ''
    /*data: [
      {
        place:'A주차장',
        row:1,
        rotation:0, // 0은 20개, 45는 15개, 90은 10개 이하 권장 
        margin:30,
        url:'https://www.youtube.com/embed/NW-rXqCl7us?start=60&enablejsapi=1;',
        cols:[ 
          {col:1, value:'full', time:'2019-10-17 10:02:0'}, //열정보
        }
      ]*/
  };
  
  //바뀐게 있을때만 렌더링
  /* shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  } */

  //컴포넌트가 마운트된 후 실행.
  componentDidMount() {
    //console.log('Parking componentDidMount');
    const { data } = this.state;
    //console.log(data)
    let countFull = 0;
    let countEmpty = 0;
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].cols.length; j++) {
        data[i].cols[j].value === 'full' ? countFull++ : countEmpty++;
      }
    }
    this.setState({
      countFull: countFull,
      countEmpty: countEmpty
    });

    //1초마다 시간 출력
    setInterval(() => {
      this.setState({
        datetime: getTime()
      });
    }, 1000);

     setInterval(() => {
      let random = Math.random();
      let random2 = Math.random();
      //console.log(getTime().substring(0,16));
      /* [매우 중요] data 변경하는 setState [매우 중요] */
      this.setState(
        {
          data: this.state.data.map(i => ({
            ...i,
            cols: i.cols.map(j =>
              j.col === Math.floor(random * i.cols.length) + 1 &&
              i.row === Math.floor(random2 * this.state.data.length) + 1 &&
              j.time.substring(0, 16) !== getTime().substring(0, 16)
                ? j.value === 'full'
                  ? { ...j, value: 'empty', time: '' }
                  : { ...j, value: 'full', time: getTime() }
                : j
            )
          }))
        },
        () => {
          let countFull = 0;
          let countEmpty = 0;
          for (let i = 0; i < this.state.data.length; i++) {
            for (let j = 0; j < this.state.data[i].cols.length; j++) {
              this.state.data[i].cols[j].value === 'full'
                ? countFull++
                : countEmpty++;
            }
          }
          this.setState({
            countEmpty: countEmpty,
            countFull: countFull
          });
        }
      );
    }, 1000); 
  }

  dataNum = this.props.dataNum;
  handleTooltip = e => {
    e.stopPropagation();
    if (e.target.dataset.value === 'full') {
      const tooltip = document.getElementById('tooltip');

      tooltip.style.display = 'inline-block';
      tooltip.style.left = e.clientX + 'px';
      tooltip.style.top = e.clientY + window.scrollY + 10 + 'px';
      tooltip.innerHTML = e.target.dataset.time;
      if (tooltip.offsetHeight > 30) {
        tooltip.style.left = e.clientX - 190 + 'px';
        tooltip.style.top = e.clientY + window.scrollY + 10 + 'px';
      }
    }
  };
  handleCCTV = e => {
    //console.log('player' + this.dataNum);
    const player = document.getElementById('player' + this.dataNum);
    const iframe = document.getElementById('iframe' + this.dataNum);
    let h = document.getElementById('root').offsetHeight;
    //console.log(h);
    player.style.display = 'block';
    player.style.position = 'absolute';
    player.style.top = h + 'px';
    player.style.zIndex = 20;
    document.getElementById('bad1').style.display='none';
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}', '*'
    );
    const animation = setInterval(frame, 10); //10ms마다 frame을 반복
    function frame() {
      if (parseInt(player.style.top, 10) > 0) {
        player.style.top = parseInt(player.style.top, 10) - 20 + 'px';
      } else {
        clearInterval(animation);
      }
    }
  };
  handleClose = e => {
    const player = document.getElementById('player' + this.dataNum);
    const iframe = document.getElementById('iframe' + this.dataNum);
    let h = document.getElementById('root').offsetHeight;
    //console.log(h, parseInt(player.style.top, 10));
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*'
    );
    const animation = setInterval(frame2, 10); //10ms마다 frame을 반복
    function frame2() {
      if (parseInt(player.style.top, 10) <= h) {
        player.style.top = parseInt(player.style.top, 10) + 20 + 'px';
      } else {
        player.style.display = 'none';
        clearInterval(animation);
      }
    }
  };

  active; //자동변경 인터벌 변수
  activeOn = 'off';

  handleInit = e => {
    let { data } = this.state;
    this.setState(
      {
        data: data.map(i => ({
          ...i,
          cols: i.cols.map(j =>
            j.value === 'full' ? { ...j, value: 'empty', time: '' } : j
          )
        }))
      },
      () => {
        let countFull = 0;
        let countEmpty = 0;
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].cols.length; j++) {
            this.state.data[i].cols[j].value === 'full'
              ? countFull++
              : countEmpty++;
          }
        }
        this.setState({
          countEmpty: countEmpty,
          countFull: countFull
        });
      }
    );
    clearInterval(this.active);
    this.activeOn = 'off';
    document.getElementById('active' + this.props.dataNum).innerHTML =
      '자동변경';
    document.getElementById('bad1').style.display = 'none';
  };

  handleActive = e => {
    //active
    if (this.activeOn === 'off') {
      this.active = setInterval(() => {
        let random = Math.random();
        let random2 = Math.random();
        //console.log(getTime().substring(0,16));
        /* [매우 중요] data 변경하는 setState [매우 중요] */
        this.setState(
          {
            data: this.state.data.map(i => ({
              ...i,
              cols: i.cols.map(j =>
                j.col === Math.floor(random * i.cols.length) + 1 &&
                i.row === Math.floor(random2 * this.state.data.length) + 1 &&
                j.time.substring(0, 16) !== getTime().substring(0, 16)
                  ? j.value === 'full'
                    ? { ...j, value: 'empty', time: '' }
                    : { ...j, value: 'full', time: getTime() }
                  : j
              )
            }))
          },
          () => {
            let countFull = 0;
            let countEmpty = 0;
            for (let i = 0; i < this.state.data.length; i++) {
              for (let j = 0; j < this.state.data[i].cols.length; j++) {
                this.state.data[i].cols[j].value === 'full'
                  ? countFull++
                  : countEmpty++;
              }
            }
            this.setState({
              countEmpty: countEmpty,
              countFull: countFull
            });
          }
        );
      }, 100);
      this.activeOn = 'on';
      document.getElementById('active' + this.props.dataNum).innerHTML = '정지';
    } else {
      clearInterval(this.active);
      this.activeOn = 'off';
      document.getElementById('active' + this.props.dataNum).innerHTML =
        '자동변경';
    }
  };

  handleIllegal = e => {
    const dataNum = this.props.dataNum;
    let rect = document
      .getElementById('rows' + dataNum)
      .getBoundingClientRect();
    let width = rect.right - rect.left;
    let height = rect.bottom - rect.top;
    const bad1 = document.getElementById('bad1');
    //console.log(rect.top, rect.right, rect.bottom, rect.left);
    let random1 = Math.random();
    let random2 = Math.random() * width;
    let random3 = Math.random() * height;
    bad1.style.display = 'inline-block';

    if (random1 < 0.25) {
      //console.log('top');
      bad1.style.top = rect.top + window.scrollY - 25 + 'px';
      bad1.style.left = rect.left + random2 + 'px';
    } else if (random1 < 0.5) {
      //console.log('bottom');
      bad1.style.top = rect.bottom + window.scrollY + 5 + 'px';
      bad1.style.left = rect.left + random2 + 'px';
    } else if (random1 < 0.75) {
      //console.log('left');
      bad1.style.top = rect.top + window.scrollY + random3 + 'px';
      bad1.style.left = rect.left + 15 + 'px';
    } else {
     //console.log('right');
      bad1.style.top = rect.top + window.scrollY + random3 + 'px';
      bad1.style.left = rect.right - 30 + 'px';
    }

    document.getElementById('bad1').dataset.time = getTime();
  };

  render() {
    const { data } = this.state;

    let rows = data.map(item => (
      <div style={{ fontSize: '0.8rem' }} key={item.row}>
        {item.row}열&nbsp;
        {item.cols.map(i =>
          i.col === item.cols.length /* 배열의 끝에서 space적용 */ ? (
            <span key={i.col}>
              <span
                className={'square ' + i.value + ' rotation' + item.rotation}
                data-value={i.value}
                data-time={'주차시간: ' + i.time}
                onClick={this.handleTooltip}
              >
                {i.col}
              </span>
              <div style={{ marginBottom: item.margin }} />
            </span>
          ) : (
            <span
              key={i.col}
              className={'square ' + i.value + ' rotation' + item.rotation}
              data-value={i.value}
              data-time={'주차시간: ' + i.time}
              onClick={this.handleTooltip}
            >
              {i.col}
            </span>
          )
        )}
      </div>
    ));
    const { dataNum } = this.props;
    return (
      <div>
        {/* 주차장 검색 및 생성하기 */}
        <div>
          <h1>{this.state.place}</h1>
          <div>
            현재시간: {this.state.datetime}
            <br />
            <span style={{ color: 'blue', fontWeight: 'bold' }}>
              주차가능: {this.state.countEmpty}
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>주차중: {this.state.countFull}</span>
          </div>
          <hr />
          <br />
        </div>
        {/* 주차장 현황 그리기 */}
        <div id={'rows' + dataNum}>{rows}</div>

         <div>
          <div id={'CCTV' + dataNum} className="CCTV" onClick={this.handleCCTV}>
            <img src="./images/CCTV.png" alt="CCTV" style={{width:'50px'}}/>
            CCTV
          </div>
          &nbsp;&nbsp;&nbsp;
          <div
            id={'illegal' + dataNum} className="illegal" onClick={this.handleIllegal}
          >
            <img src="./images/bad1.png" alt="illegal" style={{width:'45px'}}/>
            <br/>부정주차
          </div> 
        </div>
        {/* <div id={'init' + dataNum} className="init" onClick={this.handleInit}>
          초기화
        </div>
        &nbsp;&nbsp;&nbsp;
        <div
          id={'active' + dataNum}
          className="active"
          onClick={this.handleActive}
        >
          자동변경
        </div>
        &nbsp;&nbsp;&nbsp; */}
        
        
        
        {/* 동영상 플레이어 및 close 버튼*/}
        <div id={'player' + dataNum} className="player">
          <iframe
            id={'iframe' + dataNum}
            className="iframe"
            title="iframe"
            allowFullScreen
            src={data[0].url}
          />
          <div
            id={'close' + dataNum}
            className="close"
            onClick={this.handleClose}
          >
            <img src="./images/x.png" alt="X" style={{width:'30px'}}/>
            CLOSE
          </div>
        </div>
      </div>
    );
  }
}
export default Parking;
